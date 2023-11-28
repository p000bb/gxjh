import {
  type Router,
  type RouteRecordNormalized,
  type RouteRecordRaw,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router";
import { cloneDeep, omit } from "lodash-es";

/** 路由模式 */
export const history =
  import.meta.env.VITE_ROUTER_HISTORY === "hash"
    ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
    : createWebHistory(import.meta.env.VITE_PUBLIC_PATH);

/** 路由降级（把三级及其以上的路由转化为二级路由） */
export const flatMultiLevelRoutes = (routes: RouteRecordRaw[]) => {
  const routesMirror = cloneDeep(routes);
  routesMirror.forEach((route) => {
    // 如果路由是三级及其以上路由，对其进行降级处理
    isMultipleRoute(route) && promoteRouteLevel(route);
  });
  return routesMirror;
};

// 讲字符串进行转换例如 如果第一个字符是/则去除并且将后续第一个字母大写
const capitalize = (str: string) => {
  if (str.charAt(0) === "/") {
    str = str.slice(1);
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/** 解析后端穿过来的菜单转换成路由  */
export const transformMenuToRoute = (menus: any[]) => {
  const routes: RouteRecordRaw[] = [];
  menus.forEach((menu) => {
    const route: RouteRecordRaw = {
      name: capitalize(menu.path),
      path: menu.path,
      component: menu.component,
      meta: {
        title: menu.name,
        elIcon: menu.iconPath,
        hidden: Boolean(menu.hidden) || false,
        cache: Boolean(menu.cache) || false
      }
    };
    // 如果有子菜单，则递归调用此函数
    if (menu.children && menu.children.length) {
      /* @ts-ignore*/
      route.children = transformMenuToRoute(menu.children);
    }
    routes.push(route);
  });
  return routes;
};

/** 判断路由层级是否大于 2 */
const isMultipleRoute = (route: RouteRecordRaw) => {
  const children = route.children;
  if (children?.length) {
    // 只要有一个子路由的 children 长度大于 0，就说明是三级及其以上路由
    return children.some((child) => child.children?.length);
  }
  return false;
};

/** 生成二级路由 */
const promoteRouteLevel = (route: RouteRecordRaw) => {
  // 创建 router 实例是为了获取到当前传入的 route 的所有路由信息
  let router: Router | null = createRouter({
    history,
    routes: [route]
  });
  const routes = router.getRoutes();
  // 在 addToChildren 函数中使用上面获取到的路由信息来更新 route 的 children
  addToChildren(routes, route.children || [], route);
  router = null;
  // 转为二级路由后，去除所有子路由中的 children
  route.children = route.children?.map((item) => omit(item, "children") as RouteRecordRaw);
};

/** 将给定的子路由添加到指定的路由模块中 */
const addToChildren = (routes: RouteRecordNormalized[], children: RouteRecordRaw[], routeModule: RouteRecordRaw) => {
  children.forEach((child) => {
    const route = routes.find((item) => item.name === child.name);
    if (route) {
      // 初始化 routeModule 的 children
      routeModule.children = routeModule.children || [];
      // 如果 routeModule 的 children 属性中不包含该路由，则将其添加进去
      if (!routeModule.children.includes(route)) {
        routeModule.children.push(route);
      }
      // 如果该子路由还有自己的子路由，则递归调用此函数将它们也添加进去
      if (child.children?.length) {
        addToChildren(routes, child.children, routeModule);
      }
    }
  });
};
