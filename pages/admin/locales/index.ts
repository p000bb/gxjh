import { createI18n } from 'vue-i18n';
import en from './en'
import zhCN from './zh-CN'

type MessageSchema = typeof zhCN

const messages: any = {
  'en': en,
  'zh-CN': zhCN
}

const i18n = createI18n<[MessageSchema], 'en' | 'zh-CN'>({

  // 默认语言
  locale: 'zh-CN',

  legacy: false,

  // 设置语言环境
  messages: messages,
  // 注册全局$t
  globalInjection: true,

});

export default i18n;
