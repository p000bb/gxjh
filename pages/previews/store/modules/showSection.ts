import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

// setup
export const useShowStore = defineStore("show", () => {
  const showNext = useStorage("showNext", false);
  function changeShow(val: boolean) {
    showNext.value = val;
  }

  return {
    showNext,
    changeShow
  };
});
