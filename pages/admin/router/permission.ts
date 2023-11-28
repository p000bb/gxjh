import router from "@admin/router";
import { useUserStoreHook } from "@admin/store/modules/user";
import { usePermissionStoreHook } from "@admin/store/modules/permission";
import { ElMessage } from "element-plus";
import { setRouteChange } from "@admin/hooks/useRouteListener";
import { useTitle } from "@admin/hooks/useTitle";
import { getToken } from "@admin/utils/cache/cookies";
import { fixBlankPage } from "@admin/utils/fix-blank-page";
import routeSettings from "@admin/config/route";
import isWhiteList from "@admin/config/white-list";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { transformMenuToRoute } from "./helper";

const menu = [
  // {
  //   path: "/file1",
  //   component: "Layouts",
  //   name: "文件维护",
  //   iconPath: "MessageBox",
  //   children: [
  //     {
  //       path: "pic1",
  //       name: "图片管理",
  //       iconPath: "PictureFilled",
  //       component: "ParentView",
  //       children: [
  //         { path: "apic1", component: "file/pic/index", name: "图片管理1", iconPath: "PictureFilled" },
  //         { path: "aapic1", component: "file/pic/index", name: "图片管理2", iconPath: "PictureFilled" }
  //       ]
  //     }
  //   ]
  // }
];

const { setTitle } = useTitle();
NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, _from, next) => {
  fixBlankPage();
  NProgress.start();
  const userStore = useUserStoreHook();
  const permissionStore = usePermissionStoreHook();
  const token = getToken();

  // 判断该用户是否已经登录
  if (!token) {
    // 如果在免登录的白名单中，则直接进入
    if (isWhiteList(to)) {
      next();
    } else {
      // 其他没有访问权限的页面将被重定向到登录页面
      NProgress.done();
      next("/login");
    }
    return;
  }

  // 如果已经登录，并准备进入 Login 页面，则重定向到主页
  if (to.path === "/login") {
    NProgress.done();
    return next({ path: "/" });
  }

  // 如果用户已经获得其权限角色
  if (userStore.roles.length !== 0) return next();

  // 否则要重新获取权限角色
  try {
    if (routeSettings.async) {
      // 注意：角色必须是一个数组！ 例如: ['admin'] 或 ['developer', 'editor']
      await userStore.getInfo();
      const roles = userStore.roles;
      // 根据角色生成可访问的 Routes（可访问路由 = 常驻路由 + 有访问权限的动态路由）
      permissionStore.setRoutes(roles, transformMenuToRoute(menu));
    } else {
      // 没有开启动态路由功能，则启用默认角色
      userStore.setRoles(routeSettings.defaultRoles);
      permissionStore.setRoutes(routeSettings.defaultRoles);
    }
    // 将'有访问权限的动态路由' 添加到 Router 中
    permissionStore.dynamicRoutes.forEach((route) => router.addRoute(route));
    // 确保添加路由已完成
    // 设置 replace: true, 因此导航将不会留下历史记录
    next({ ...to, replace: true });
  } catch (err: any) {
    // 过程中发生任何错误，都直接重置 Token，并重定向到登录页面
    userStore.resetToken();
    ElMessage.error(err.message || "路由守卫过程发生错误");
    NProgress.done();
    next("/login");
  }
});

router.afterEach((to) => {
  setRouteChange(to);
  setTitle(to.meta.title);
  NProgress.done();
});
