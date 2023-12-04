import { type RouteRecordRaw, createRouter } from "vue-router";
import { history, flatMultiLevelRoutes } from "./helper";
import routeSettings from "@admin/config/route";

import systemRoute from "./admin";
import fileRoute from "./file";
import dataRoute from "./data";

const Layouts = () => import("@admin/layouts/index.vue");

/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面，其他页面建议设置 Name 属性
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layouts,
    meta: {
      title: "",
      hidden: true
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@admin/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/403",
    component: () => import("@admin/views/error-page/403.vue"),
    meta: {
      title: "403",
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@admin/views/error-page/404.vue"),
    meta: {
      title: "404",
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/login",
    component: () => import("@admin/views/login/index.vue"),
    meta: {
      title: "登录",
      hidden: true
    }
  },
  {
    path: "/",
    component: Layouts,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@admin/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "首页",
          svgIcon: "dashboard",
          affix: true
        }
      }
    ]
  },
  ...fileRoute,
  ...dataRoute,
  ...systemRoute
];

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
    redirect: "/404",
    name: "ErrorPage",
    meta: {
      title: "404",
      hidden: true
    }
  }
];

const router = createRouter({
  history,
  routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
});

/** 重置路由 */
export function resetRouter() {
  console.log(123);
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route;
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name);
      }
    });
  } catch {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload();
  }
}

export default router;
