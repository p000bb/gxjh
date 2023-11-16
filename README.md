

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

``` css
.animated {
    /* 动画名称 动画时长 动画重复次数 */
  animation: pulse 3s infinite; 
}
```

- image-hover
``` js
data-aos="fade-up" // 动画名称
data-aos-duration="1000" // 动画时长
data-aos-delay="1000" // 动画延迟
data-aos-once="true" // 动画只执行一次
```


