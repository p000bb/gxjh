import { request } from "@admin/utils/service copy";

const url = "/video";

/** 查单条 */
export function getVideo(id: string) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

/** 查列表 */
export function getVideoList(data: any) {
  return request({
    url: `${url}/page`,
    method: "post",
    data
  });
}

/** 新增 */
export function addVideo(data: any) {
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
export function updateVideo(data: any) {
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
export function deleteVideo(id: string) {
  return request({
    url: url,
    method: "delete",
    params: { id }
  });
}
