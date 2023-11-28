import { ref } from "vue";
import store from "@admin/store";
import { defineStore } from "pinia";
import { type RouteRecordRaw } from "vue-router";
import { constantRoutes, asyncRoutes } from "@admin/router";
import { flatMultiLevelRoutes } from "@admin/router/helper";
import routeSettings from "@admin/config/route";

const Layouts = () => import("@admin/layouts/index.vue");

const ParentView = () => import("@admin/components/ParentView/index.vue");

/** 加载view路径下的所有vue文件  */
const modules = import.meta.glob("../../views/**/*.vue");

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  const routeRoles = route.meta?.roles;
  return routeRoles ? roles.some((role) => routeRoles.includes(role)) : true;
};

const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    const tempRoute = { ...route };
    if (hasPermission(roles, tempRoute)) {
      if (tempRoute.children) {
        tempRoute.children = filterAsyncRoutes(tempRoute.children, roles);
      }
      res.push(tempRoute);
    }
  });
  return res;
};

const loadView = (view: string) => {
  let res;
  for (const path in modules) {
    const dir = path.split("views/")[1].split(".vue")[0];
    if (dir === view) {
      res = () => modules[path]();
      break;
    }
  }
  return res;
};

export const usePermissionStore = defineStore("permission", () => {
  const routes = ref<RouteRecordRaw[]>([]);
  const dynamicRoutes = ref<RouteRecordRaw[]>([]);

  const setRoutes = (roles: string[], menus: any[] = []) => {
    const accessedRoutes = routeSettings.async ? filterAsyncRoutes(asyncRoutes, roles) : asyncRoutes;
    const httpRoutes = setAsyncRoutes(menus);
    routes.value = constantRoutes.concat(httpRoutes).concat(accessedRoutes);
    dynamicRoutes.value = routeSettings.thirdLevelRouteCache
      ? flatMultiLevelRoutes([...httpRoutes, ...accessedRoutes])
      : [...httpRoutes, ...accessedRoutes];
  };

  const setAsyncRoutes = (route: any[]) => {
    let routeArray = route.filter((item) => {
      if (item.component) {
        if (item.component === "Layouts") {
          item.component = Layouts;
        } else if (item.component === "ParentView") {
          item.component = ParentView;
        } else {
          item.component = loadView(item.component);
        }
      }
      if (item.children && item.children.length > 0) {
        item.children = setAsyncRoutes(item.children);
      }
      return true;
    });
    return routeArray;
  };

  return { routes, dynamicRoutes, setRoutes, setAsyncRoutes };
});

/** 在 setup 外使用 */
export function usePermissionStoreHook() {
  return usePermissionStore(store);
}
