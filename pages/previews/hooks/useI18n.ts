import { useTitle } from "@vueuse/core";
import { type RouteLocationNormalizedLoaded } from "vue-router";
import i18n from "@/locales/index";

//#region 1. 语言切换翻译
interface Data {
  en: string; //英文
  zh: string; //中文
}

/* 转义中英文 */
const translateData = (data: Data, locale: string) => {
  if (locale === "en") {
    return data.en;
  } else {
    return data.zh;
  }
};
//#endregion

//#region 2. 语言切换-标题变化
const setTitle = (route: RouteLocationNormalizedLoaded, locale: string) => {
  const title = useTitle();
  if (locale === "en") {
    title.value = route.meta?.enTitle;
  } else {
    title.value = route.meta?.title;
  }
  console.log(route.meta);
};
//#endregion

//#region 3. 在ts中使用i18n
const t = (key: string) => {
  const { t } = i18n.global;
  if (!key) return "";
  return t(key);
};
//#endregion

export { translateData, setTitle, t };
