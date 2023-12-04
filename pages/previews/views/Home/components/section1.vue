<template>
  <section class="section h-screen" v-lazy-data="getData" ref="sectionRef">
    <div>
      <!-- 蓝块 -->
      <div class="logo-blue absolute translate-x-[-25%] translate-y-[-25%] blue logo-cirle a-1">
        <svg-icon name="gxjh-blue" class="logo-animation" />
      </div>

      <!-- 红块 -->
      <div class="logo-red absolute right-0 translate-x-[30%] translate-y-[-25%] logo-cirle a-2">
        <svg-icon name="gxjh-red" class="logo-animation" />
      </div>

      <!-- 黄块 -->
      <div class="logo-yellow absolute bottom-0 left-[20%] translate-y-[35%] logo-cirle a-3">
        <svg-icon name="gxjh-yellow" class="logo-animation" />
      </div>

      <!-- h -->
      <div class="absolute bottom-[15%] -translate-x-[25%] logo-icon a-4">
        <svg-icon name="gxjh-h" class="logo-animation" />
      </div>

      <!-- a -->
      <div class="absolute left-[25%] logo-icon-a a-5">
        <svg-icon name="gxjh-a" class="logo-animation" />
      </div>

      <!-- p -->
      <div class="absolute bottom-0 right-[30%] translate-y-[20%] rotate-[30deg] logo-icon a-6">
        <svg-icon name="gxjh-p" class="logo-animation" />
      </div>

      <!-- p -->
      <div class="absolute top-[10%] right-[5%] -translate-y-[10%] logo-icon a-7">
        <svg-icon name="gxjh-p" class="logo-animation" />
      </div>

      <!-- y -->
      <div class="absolute right-0 bottom-[5%] translate-x-[15%] translate-y-[5%] logo-icon a-8">
        <svg-icon name="gxjh-y" class="logo-animation" />
      </div>

      <!-- 高兴就好logo -->
      <div class="logo">
        <svg-icon
          name="gxjh"
          class="logo-animation text-[30rem] max-sm:text-[18rem] a-9"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-delay="1500"
          data-aos-anchor-placement="top-bottom"
        />
      </div>

      <div class="absolute left-0 bottom-10 w-full flex justify-center">
        <svg-icon
          name="gxjh-down"
          class="text-5xl logo-animation hover:cursor-pointer a-10"
          @click="next"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="2000"
          data-aos-anchor-placement="top-bottom"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement>();
const show = ref<boolean>(false);

// 初始化动画
const startGsap = () => {
  var tl = gsap.timeline();
  gsap.from(".a-1", { duration: 3, x: -500, y: -500, rotate: 90, opacity: 0 });
  gsap.from(".a-2", { duration: 3, x: -500, y: -500, rotate: 90, opacity: 0 });
  gsap.from(".a-3", { duration: 3, x: -500, y: 500, rotate: 90, opacity: 0 });
  gsap.from(".a-4", { duration: 3, x: -500, y: 100, rotate: 90, opacity: 0 });
  gsap.from(".a-5", { duration: 3, x: -100, y: -500, rotate: 90, opacity: 0 });
  gsap.from(".a-6", { duration: 3, x: 100, y: 500, rotate: 90, opacity: 0 });
  gsap.from(".a-7", { duration: 3, x: 100, y: -500, rotate: 90, opacity: 0 });
  gsap.from(".a-8", { duration: 3, x: 100, y: 500, rotate: 90, opacity: 0 });
};

const getData = () => {};

const next = () => {
  show.value = true;
  // 浏览器滚动到指定区域
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
};

onMounted(() => {
  startGsap();
});
</script>
<style scoped lang="scss">
.section {
  height: 100vh;

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.logo-animation {
  animation: pulse 3s infinite;
}

.logo-cirle {
  @apply text-[25rem] absolute max-xl:text-[22rem] max-lg:text-[20rem] max-md:text-[18rem] max-sm:text-[15rem];
}

.logo-icon {
  @apply text-[18rem] absolute max-xl:text-[14rem] max-lg:text-[12rem] max-md:text-[10rem] max-sm:text-[8rem];
}

.logo-icon-a {
  @apply text-[15rem] absolute max-xl:text-[12rem] max-lg:text-[10rem] max-md:text-[8rem] max-sm:text-[6rem];
}
</style>
