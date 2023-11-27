import { request } from "@admin/utils/service copy";

const url = "/permission";

/** 查单条 */
export function getPermission(id: string) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

/** 查列表 */
export function getPermissionList(data: any) {
  return request({
    url: `${url}/page`,
    method: "post",
    data
  });
}

/** 查列表树 */
export function getPermissionTree(data: any) {
  return request({
    url: `${url}/tree`,
    method: "post",
    data
  });
}

/** 新增 */
export function addPermission(data: any) {
  return request({
    url: url,
    method: "post",
    data
  });
}

/** 修改 */
export function updatePermission(data: any) {
  return request({
    url: url,
    method: "put",
    data
  });
}

/** 删除 */
export function deletePermission(id: string) {
  return request({
    url: url,
    method: "delete",
    params: { id }
  });
}

/** 赋予角色菜单权限  */
export function bindPermission(data: any) {
  return request({
    url: `${url}/bind`,
    method: "post",
    data
  });
}

/** 剥夺角色菜单权限 */
export function unbindPermission(data: any) {
  return request({
    url: `${url}/unbind`,
    method: "post",
    data
  });
}

/** 全量设置角色菜单权限 */
export function fullBindPermission(data: any) {
  return request({
    url: `${url}/fullbind`,
    method: "post",
    data
  });
}
