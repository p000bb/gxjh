import { request } from "@admin/utils/service copy";

const url = "/user";

/** 查单条 */
export function getUser(id: string) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

/** 查列表 */
export function getUserList(data: any) {
  return request({
    url: `${url}/page`,
    method: "post",
    data
  });
}

/** 新增 */
export function addUser(data: any) {
  return request({
    url: url,
    method: "post",
    data
  });
}

/** 修改 */
export function updateUser(data: any) {
  return request({
    url: url,
    method: "put",
    data
  });
}

/** 删除 */
export function deleteUser(id: string) {
  return request({
    url: url,
    method: "delete",
    params: { id }
  });
}

/** 获取用户及其权限 */
export function getUserRole(account: string) {
  return request({
    url: `${url}/getAuthority`,
    method: "post",
    params: { account }
  });
}

/** 根据账号查单条记录 */
export function getUserByAccount(account: string) {
  return request({
    url: `${url}/getByAccount`,
    method: "get",
    params: { account }
  });
}
