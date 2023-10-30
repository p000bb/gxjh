``` js
GSAP可以改变全局的默认设置，使用gsap.default()进行设置
// 使用线性缓动曲线 和 1秒的动画时长
gsap.defaults({ ease: "none", duration: 1 });

// 需要用formTo 不然重新加载时会出问题 或许能用懒加载解决
gasp.fromTo
```