import { request } from "@admin/utils/service copy";

const url = "/pic";

/** 查单条 */
export function getPic(id: string) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

/** 查列表 */
export function getPicList(data: any) {
  return request({
    url: `${url}/page`,
    method: "post",
    data
  });
}

/** 新增 */
export function addPic(data: any) {
  return request({
    url: url,
    method: "post",
    data,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}

/** 修改 */
export function updatePic(data: any) {
  return request({
    url: url,
    method: "put",
    data,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}

/** 删除 */
export function deletePic(id: string) {
  return request({
    url: url,
    method: "delete",
    params: { id }
  });
}
