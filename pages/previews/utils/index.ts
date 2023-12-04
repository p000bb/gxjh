/**
 * 默认上传函数
 */
export const defaultUpload = () => {
  return new Promise(() => {});
};

export const setPreview = (preview: any) => {
  return import.meta.env.VITE_PREVIEW_URL + preview;
};
