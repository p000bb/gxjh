import { useIntersectionObserver } from "@vueuse/core";

// 定义Prmoise函数类型
type PromiseFn = () => Promise<any>;

/* 接收Promise函数用于懒加载业务数据 */
const useLazyData = (target: HTMLElement, apiFn: PromiseFn | Function, callback?: Function) => {
  const { stop } = useIntersectionObserver(target, async ([{ isIntersecting }]) => {
    if (isIntersecting) {
      if (apiFn) {
        try {
          const data = await apiFn();
          callback && callback(data);
        } catch {
          throw new Error("接口请求失败");
        }
      }
      stop();
    }
  });
};

export default useLazyData;
