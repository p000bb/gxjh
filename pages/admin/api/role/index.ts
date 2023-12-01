import { request } from "@admin/utils/service";

const url = "/role";

/** 查单条 */
export function getRole(id: string) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

/** 查列表 */
export function getRoleList(data: any) {
  return request({
    url: `${url}/page`,
    method: "post",
    data
  });
}

/** 新增 */
export function addRole(data: any) {
  return request({
    url: url,
    method: "post",
    data
  });
}

/** 修改 */
export function updateRole(data: any) {
  return request({
    url: url,
    method: "put",
    data
  });
}

/** 删除 */
export function deleteRole(id: string) {
  return request({
    url: url,
    method: "delete",
    params: { id }
  });
}

/** 全量设置用户角色 */
export function setUserRole(data: any) {
  return request({
    url: `${url}/user`,
    method: "post",
    data
  });
}
