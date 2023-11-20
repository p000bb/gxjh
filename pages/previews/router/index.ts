import { createWebHashHistory, createRouter } from "vue-router";
import { type RouteRecordRaw } from "vue-router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

/* Layout */
export const Layout = () => import("@/layout/index.vue");

// 公共路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home/index.vue"),
        name: "Home",
        meta: {
          title: "首页",
          enTitle: "Home",
          logo: false,
          theme: "light"
        }
      },
      {
        path: "/about",
        component: () => import("@/views/About/index.vue"),
        name: "About",
        meta: {
          title: "关于",
          enTitle: "About",
          logo: true,
          theme: "drak"
        }
      },
      {
        path: "/display",
        component: () => import("@/views/Display/index.vue"),
        name: "Display",
        meta: {
          title: "作品展示",
          enTitle: "Display",
          logo: true,
          theme: "drak"
        }
      },
      {
        path: "/contact",
        component: () => import("@/views/Contact/index.vue"),
        name: "Contact",
        meta: {
          title: "联系我们",
          enTitle: "Contact",
          logo: true,
          theme: "drak"
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory("/"),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach((_to: any, _from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
