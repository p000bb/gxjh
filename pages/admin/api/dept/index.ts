import { request } from "@admin/utils/service";

const url = "/dept";

/** 查单条 */
export function getDept(id: string) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

/** 查列表 */
export function getDeptList(data: any) {
  return request({
    url: `${url}/page`,
    method: "post",
    data
  });
}

/** 查列表树 */
export function getDeptTree(data: any) {
  return request({
    url: `${url}/tree`,
    method: "post",
    data
  });
}

/** 新增 */
export function addDept(data: any) {
  return request({
    url: url,
    method: "post",
    data
  });
}

/** 修改 */
export function updateDept(data: any) {
  return request({
    url: url,
    method: "put",
    data
  });
}

/** 删除 */
export function deleteDept(id: string) {
  return request({
    url: url,
    method: "delete",
    params: { id }
  });
}
