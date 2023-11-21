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
const setTitle = (route: RouteLocationNormalizedLoaded) => {
  const title = useTitle();
  title.value = useI18n().t(route.meta.title);
};
//#endregion

//#region 3. ts中使用i18n
const useI18n = () => {
  const normalFn = {
    t: (key: string) => {
      return key;
    }
  };
  try {
    if (!i18n()) {
      return normalFn;
    }
  } catch {
    return normalFn;
  }

  const { t, ...methods } = i18n().global;

  const tFn = (key: string) => {
    if (!key) return "";
    if (!key.includes(".")) return key;
    return t(key);
  };

  return {
    ...methods,
    t: tFn
  };
};
//

export { translateData, setTitle, useI18n };
