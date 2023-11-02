import { type Directive } from "vue";

export const lazyImg: Directive = {
  mounted(el, binding) {
    const { value: src } = binding;
    if (src) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = src;
            console.log(img);
            img.onerror = function () {
              img.src = "http://www.baidu.com/img/bd_logo1.png";
            };
            observer.unobserve(el);
          }
        });
      });
      observer.observe(el);
    }
  }
};
