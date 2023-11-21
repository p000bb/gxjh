import { createWebHashHistory, createRouter } from "vue-router";
import { type RouteRecordRaw } from "vue-router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useI18n } from "@/hooks/useI18n";

const { t } = useI18n();
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
          title: t("menu.home"),
          logo: false,
          theme: "light"
        }
      },
      {
        path: "/about",
        component: () => import("@/views/About/index.vue"),
        name: "About",
        meta: {
          title: t("menu.about"),
          logo: true,
          theme: "dark"
        }
      },
      {
        path: "/display",
        component: () => import("@/views/Display/index.vue"),
        name: "Display",
        meta: {
          title: t("menu.display"),
          logo: true,
          theme: "dark"
        }
      },
      {
        path: "/contact",
        component: () => import("@/views/Contact/index.vue"),
        name: "Contact",
        meta: {
          title: t("menu.contact"),
          logo: true,
          theme: "dark"
        }
      },

      {
        path: "/display-detail",
        component: () => import("@/views/DisplayDetail/index.vue"),
        name: "DisplayDetail",
        meta: {
          title: t("menu.display"),
          logo: true,
          theme: "light"
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
