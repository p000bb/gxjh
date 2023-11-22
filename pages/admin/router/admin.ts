import { type RouteRecordRaw } from "vue-router";

const Layouts = () => import("@admin/layouts/index.vue");

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/system",
    component: Layouts,
    name: "Menu",
    meta: {
      title: "系统管理",
      elIcon: "Tools",
      alwaysShow: true
    },
    children: [
      {
        path: "menus",
        component: () => import("@admin/views/menus/index.vue"),
        name: "Menus",
        meta: {
          title: "菜单管理",
          keepAlive: true,
          elIcon: "Menu"
        }
      },
      {
        path: "log",
        component: () => import("@admin/views/log/index.vue"),
        name: "Log",
        meta: {
          title: "操作日志",
          keepAlive: true,
          elIcon: "MessageBox"
        }
      }
    ]
  }
];

export default constantRoutes;
