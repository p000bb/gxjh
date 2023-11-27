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
        path: "dept",
        component: () => import("@admin/views/dept/index.vue"),
        name: "Dept",
        meta: {
          title: "部门管理",
          keepAlive: true,
          elIcon: "Menu"
        }
      },
      {
        path: "user",
        component: () => import("@admin/views/user/index.vue"),
        name: "User",
        meta: {
          title: "用户管理",
          keepAlive: true,
          elIcon: "User"
        }
      },
      {
        path: "role",
        component: () => import("@admin/views/role/index.vue"),
        name: "Role",
        meta: {
          title: "角色管理",
          keepAlive: true,
          elIcon: "UserFilled"
        }
      },
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
        path: "permission",
        component: () => import("@admin/views/permission/index.vue"),
        name: "Permission",
        meta: {
          title: "接口管理",
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
