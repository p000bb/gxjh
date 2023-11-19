import { createWebHashHistory, createRouter } from "vue-router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

/* Layout */
export const Layout = () => import("@/layout/index.vue");

// 公共路由
export const constantRoutes = [
  {
    path: "",
    component: Layout,
    redirect: "/home",
    hidden: true,
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home/index.vue"),
        name: "Home",
        meta: {
          title: "首页",
          logo: false,
          logoColor: "#FFFFFF",
          menuColor: "#FFFFFF"
        }
      },
      {
        path: "/about",
        component: () => import("@/views/About/index.vue"),
        name: "About",
        meta: {
          title: "关于",
          logo: true,
          logoColor: "#231F20",
          menuColor: "#191919"
        }
      },
      {
        path: "/display",
        component: () => import("@/views/Display/index.vue"),
        name: "Display",
        meta: {
          title: "关于",
          logo: true,
          logoColor: "#231F20",
          menuColor: "#191919"
        }
      },
      {
        path: "/contact",
        component: () => import("@/views/Contact/index.vue"),
        name: "Contact",
        meta: {
          title: "关于",
          logo: true,
          logoColor: "#231F20",
          menuColor: "#191919"
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
