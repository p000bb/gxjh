import { request } from "@admin/utils/service copy";

const url = "/operate-log";

/** 查单条 */
export function getLog(id: string) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

/** 查列表 */
export function getLogList(data: any) {
  return request({
    url: `${url}/page`,
    method: "post",
    data
  });
}
