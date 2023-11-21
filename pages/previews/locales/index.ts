import { createI18n } from "vue-i18n";
import { useLanguageStore } from "@/store/modules/language";
import { set } from "lodash-es";

import enLocale from "./lang/en/index";
import zhCNLocale from "./lang/zh-CN/index";

/* 
 使用函数式返回，避免出现以下错误：
 https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html#single-page-applications
*/

export function genMessage(langs: Record<string, Record<string, any>>, prefix = "lang") {
  const obj: any = {};

  Object.keys(langs).forEach((key) => {
    const langFileModule = langs[key].default;
    let fileName = key.replace(`./${prefix}/`, "").replace(/^\.\//, "");
    const lastIndex = fileName.lastIndexOf(".");
    fileName = fileName.substring(0, lastIndex);
    const keyList = fileName.split("/");
    const moduleName = keyList.shift();
    const objKey = keyList.join(".");

    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {});
        set(obj[moduleName], objKey, langFileModule);
      } else {
        set(obj, moduleName, langFileModule || {});
      }
    }
  });
  return obj;
}

const languageStore = useLanguageStore();

const messages: any = {
  en: { ...enLocale },
  "zh-CN": { ...zhCNLocale }
};

const i18n = createI18n({
  // 默认语言
  locale: languageStore.language,
  legacy: false,
  // 设置语言环境
  messages: messages,
  // 注册全局$t
  globalInjection: true
});

export default i18n;
