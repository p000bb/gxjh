import { request } from "@admin/utils/service";
import type * as Login from "./types/login";

/** 获取登录验证码 */
export function getLoginCodeApi() {
  return request<Login.LoginCodeResponseData>({
    url: "login/code",
    method: "get"
  });
}

/** 登录并返回 Token */
export function loginApi(data: Login.LoginRequestData) {
  return request<Login.LoginResponseData>({
    url: "/login",
    method: "get",
    params: data
  });
}

/** 获取用户详情 */
export function getUserInfoApi() {
  return request<Login.UserInfoResponseData>({
    url: "users/info",
    method: "get"
  });
}

/** 退出登录  */
export function loginOutApi() {
  return request({
    url: "/logout",
    method: "post"
  });
}
