import { request } from "@admin/utils/service copy";

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

/** 图册添加图片 */
export function addAlbumPicture(albumId: string, pictureId: string) {
  return request({
    url: `${url}/addPicture`,
    method: "post",
    params: {
      albumId,
      pictureId
    }
  });
}

/** 图册删除图片 */
export function deleteAlbumPicture(albumId: string, pictureId: string) {
  return request({
    url: `${url}/removePicture`,
    method: "post",
    params: {
      albumId,
      pictureId
    }
  });
}

/** 图册添加视频 */
export function addAlbumVideo(albumId: string, videoId: string) {
  return request({
    url: `${url}/addVideo`,
    method: "post",
    params: {
      albumId,
      videoId
    }
  });
}

/** 图册删除视频 */
export function deleteAlbumVideo(albumId: string, videoId: string) {
  return request({
    url: `${url}/removeVideo`,
    method: "post",
    params: {
      albumId,
      videoId
    }
  });
}
