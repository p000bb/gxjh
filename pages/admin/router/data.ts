import { type RouteRecordRaw } from "vue-router";

const Layouts = () => import("@admin/layouts/index.vue");

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/data",
    component: Layouts,
    redirect: "/data/category",
    name: "Data",
    meta: {
      title: "数据维护",
      elIcon: "MessageBox",
      alwaysShow: true
    },
    children: [
      {
        path: "album",
        component: () => import("@admin/views/data/album/index.vue"),
        name: "Album",
        meta: {
          title: "图册管理",
          elIcon: "Film"
        }
      },
      {
        path: "node",
        component: () => import("@admin/views/data/node/index.vue"),
        name: "Node",
        meta: {
          title: "布局管理",
          elIcon: "Film"
        }
      }
    ]
  }
];

export default constantRoutes;
