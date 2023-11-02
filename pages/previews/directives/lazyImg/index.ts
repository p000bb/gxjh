import { useIntersectionObserver } from "@vueuse/core";
import { type Directive } from "vue";

export const lazyImg: Directive = {
  mounted(el, binding) {
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // 当图片url无效加载失败的时候使用默认图片替代
        el.onerror = function () {
          el.src = "http://www.baidu.com/img/bd_logo1.png";
        };
        el.src = binding.value;
        stop();
      }
    });
  }
};
