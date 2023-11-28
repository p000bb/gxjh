import { type RouteRecordRaw } from "vue-router";

const Layouts = () => import("@admin/layouts/index.vue");

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/file",
    component: Layouts,
    redirect: "/file/pic",
    name: "File",
    meta: {
      title: "文件维护",
      elIcon: "Menu",
      alwaysShow: true
    },
    children: [
      {
        path: "pic",
        component: () => import("@admin/views/file/pic/index.vue"),
        name: "Pic",
        meta: {
          title: "图片管理",
          elIcon: "PictureFilled"
        }
      },
      {
        path: "video",
        component: () => import("@admin/views/file/video/index.vue"),
        name: "Video",
        meta: {
          title: "视频管理",
          elIcon: "VideoPlay"
        }
      },
      {
        path: "video/manage",
        component: () => import("@admin/views/file/videoManage/index.vue"),
        name: "VideoManage",
        meta: {
          title: "视频维护",
          elIcon: "VideoPlay",
          hidden: true,
          activeMenu: "/file/video"
        }
      }
    ]
  }
];

export default constantRoutes;
