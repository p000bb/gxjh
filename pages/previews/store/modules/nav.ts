import { defineStore } from "pinia";
import { computed, ref } from "vue";

// setup
export const useNavStore = defineStore("nav", () => {
  // 设置是否显示
  const menuVisible = ref<boolean>(false);

  // 背景模糊
  const blurClass = computed(() => {
    return menuVisible.value ? "blur-sm" : "";
  });
  /**
   * 切换显示
   *
   * @param val
   */
  function setmenuVisible(val: boolean) {
    menuVisible.value = val;
  }

  return {
    menuVisible,
    setmenuVisible,
    blurClass
  };
});
