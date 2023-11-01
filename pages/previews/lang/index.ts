import { createI18n } from "vue-i18n"
import { useLanguageStore } from "@/store/modules/language"

import enLocale from "./package/en"
import zhCNLocale from "./package/zh-cn"

/* 
 使用函数式返回，避免出现以下错误：
 https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html#single-page-applications
*/
export default () => {
  const languageStore = useLanguageStore()

  const messages: any = {
    en: { ...enLocale },
    "zh-cn": { ...zhCNLocale }
  }

  const i18n = createI18n({
    // 默认语言
    locale: languageStore.language,
    legacy: false,
    // 设置语言环境
    messages: messages,
    // 注册全局$t
    globalInjection: true
  })

  return i18n
}
