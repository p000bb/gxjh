import { request } from "@admin/utils/service";

const url = "/node";

/** 查单条 */
export function getNode(id: string) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

/** 查列表 */
export function getNodeList(data: any) {
  return request({
    url: `${url}/page`,
    method: "post",
    data
  });
}

/** 新增 */
export function addNode(data: any) {
  return request({
    url: url,
    method: "post",
    data
  });
}

/** 修改 */
export function updateNode(data: any) {
  return request({
    url: url,
    method: "put",
    data
  });
}

/** 删除 */
export function deleteNode(id: string) {
  return request({
    url: url,
    method: "delete",
    params: { id }
  });
}
