import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

// setup
export const useLanguageStore = defineStore("language", () => {
  // 设置语言
  const language = useStorage("language", "zh-CN");
  /**
   * 切换语言
   *
   * @param val
   */
  function changeLanguage(val: string) {
    language.value = val;
  }

  return {
    language,
    changeLanguage
  };
});
