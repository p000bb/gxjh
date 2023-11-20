import { useI18n } from "vue-i18n";
import { useTitle } from "@vueuse/core";
import { type RouteRecordRaw } from "vue-router";

const { locale } = useI18n();

//#region 1. 语言切换翻译
interface Data {
  en: string; //英文
  zh: string; //中文
}

/* 转义中英文 */
const translateData = (data: Data) => {
  if (locale.value === "en") {
    return data.en;
  } else {
    return data.zh;
  }
};
//#endregion

//#region 2. 语言切换-标题变化
const setTitle = (route: RouteRecordRaw) => {
  const title = useTitle();
  if (locale.value === "en") {
    title.value = route.meta?.enTitle;
  } else {
    title.value = route.meta?.title;
  }
};
//#endregion

export { translateData, setTitle };
