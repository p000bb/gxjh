import gsap from "gsap";

export default function gsapDefault() {
  // 设置gsap默认参数
  gsap.defaults({
    // 开发模式开启调试
    markers: process.env.NODE_ENV === "development",

    // 默认动画持续时间1秒
    duration: 1
  });
}
