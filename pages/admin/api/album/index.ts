import { request } from "@admin/utils/service";

const url = "/album";

/** 查单条 */
export function getAlbum(id: string) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

/** 查列表 */
export function getAlbumList(data: any) {
  return request({
    url: `${url}/page`,
    method: "post",
    data
  });
}

/** 查列树 */
export function getAlbumTree(data: any) {
  return request({
    url: `${url}/tree`,
    method: "post",
    data
  });
}

/** 新增 */
export function addAlbum(data: any) {
  return request({
    url: url,
    method: "post",
    data
  });
}

/** 修改 */
export function updateAlbum(data: any) {
  return request({
    url: url,
    method: "put",
    data
  });
}

/** 删除 */
export function deleteAlbum(id: string) {
  return request({
    url: url,
    method: "delete",
    params: { id }
  });
}

/** 图册添加文件 */
export function addAlbumFile(albumId: string, fileId: string, fileType: number) {
  return request({
    url: `${url}/addFile`,
    method: "post",
    params: {
      albumId,
      fileId,
      fileType
    }
  });
}

/** 图册删除文件 */
export function deleteAlbumFile(albumId: string, fileId: string, fileType: number) {
  return request({
    url: `${url}/removeFile`,
    method: "post",
    params: {
      albumId,
      fileId,
      fileType
    }
  });
}

/** 分页查询图册内文件  */
export function getAlbumFilePage(data: any) {
  return request({
    url: `${url}/getFilePage`,
    method: "post",
    data
  });
}
