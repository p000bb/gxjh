

- gsap

``` js
GSAP可以改变全局的默认设置，使用gsap.default()进行设置
// 使用线性缓动曲线 和 1秒的动画时长
gsap.defaults({ ease: "none", duration: 1 });

// 需要用formTo 不然重新加载时会出问题 或许能用懒加载解决
gasp.fromTo
```

- animate.css

``` js
animation: bounce; // 动画名称
animate-duration:1s; // 动画时长
animate-delay:1s; // 动画延迟
animate-repeat:infinite // 动画重复次数
```

- image-hover


