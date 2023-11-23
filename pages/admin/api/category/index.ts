import { request } from "@admin/utils/service copy";

const url = "/category";

/** 查单条 */
export function getCategory(id: string) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

/** 查列表 */
export function getCategoryList(data: any) {
  return request({
    url: `${url}/page`,
    method: "post",
    data
  });
}

/** 新增 */
export function addCategory(data: any) {
  return request({
    url: url,
    method: "post",
    data
  });
}

/** 修改 */
export function updateCategory(data: any) {
  return request({
    url: url,
    method: "put",
    data
  });
}

/** 删除 */
export function deleteCategory(id: string) {
  return request({
    url: url,
    method: "delete",
    params: { id }
  });
}
