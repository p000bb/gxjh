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
        path: "category",
        component: () => import("@admin/views/data/category/index.vue"),
        name: "Category",
        meta: {
          title: "文件类别",
          elIcon: "Folder"
        }
      },
      {
        path: "album",
        component: () => import("@admin/views/data/album/index.vue"),
        name: "Album",
        meta: {
          title: "图册管理",
          elIcon: "Film"
        }
      }
    ]
  }
];

export default constantRoutes;
