import { request } from "@admin/utils/service";

const url = "/menu";

/** 查单条 */
export function getMenu(id: string) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

/** 查列表 */
export function getMenuList(data: any) {
  return request({
    url: `${url}/page`,
    method: "post",
    data
  });
}

/** 查列表树 */
export function getMenuTree(data: any) {
  return request({
    url: `${url}/tree`,
    method: "post",
    data
  });
}

/** 新增 */
export function addMenu(data: any) {
  return request({
    url: url,
    method: "post",
    data
  });
}

/** 修改 */
export function updateMenu(data: any) {
  return request({
    url: url,
    method: "put",
    data
  });
}

/** 删除 */
export function deleteMenu(id: string) {
  return request({
    url: url,
    method: "delete",
    params: { id }
  });
}

/** 赋予角色菜单权限  */
export function bindMenu(data: any) {
  return request({
    url: `${url}/bind`,
    method: "post",
    data
  });
}

/** 剥夺角色菜单权限 */
export function unbindMenu(data: any) {
  return request({
    url: `${url}/unbind`,
    method: "post",
    data
  });
}

/** 全量设置角色菜单权限 */
export function fullBindMenu(data: any) {
  return request({
    url: `${url}/fullbind`,
    method: "post",
    data
  });
}
