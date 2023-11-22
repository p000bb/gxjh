<template>
  <section class="section h-screen" v-lazy-data="getData" ref="sectionRef">
    <div>
      <div class="logo-blue absolute translate-x-[-25%] translate-y-[-25%] blue logo-cirle">
        <svg-icon name="blue" class="logo-animation" data-aos="zoom-in" data-aos-duration="3000" />
      </div>
      <div class="logo-red absolute right-0 translate-x-[30%] translate-y-[-25%] logo-cirle">
        <svg-icon name="red" class="logo-animation" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500" />
      </div>
      <div class="logo-yellow absolute bottom-0 left-[20%] translate-y-[35%] logo-cirle">
        <svg-icon
          name="yellow"
          class="logo-animation"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-delay="1000"
        />
      </div>

      <div class="absolute bottom-[15%] -translate-x-[25%] logo-icon">
        <svg-icon name="h" class="logo-animation" data-aos="zoom-in" data-aos-duration="4000" data-aos-delay="1500" />
      </div>

      <div class="absolute left-[25%] logo-icon-a">
        <svg-icon name="a" class="logo-animation" data-aos="zoom-in" data-aos-duration="4000" data-aos-delay="2000" />
      </div>

      <div class="absolute bottom-0 right-[30%] translate-y-[20%] rotate-[30deg] logo-icon">
        <svg-icon name="p" class="logo-animation" data-aos="zoom-in" data-aos-duration="4000" data-aos-delay="2500" />
      </div>

      <div class="absolute top-[10%] right-[5%] -translate-y-[10%] logo-icon">
        <svg-icon name="p" class="logo-animation" data-aos="zoom-in" data-aos-duration="4000" data-aos-delay="3000" />
      </div>

      <div class="absolute right-0 bottom-[5%] translate-x-[15%] translate-y-[5%] logo-icon">
        <svg-icon name="y" class="logo-animation" data-aos="zoom-in" data-aos-duration="4000" data-aos-delay="3500" />
      </div>

      <div class="logo">
        <svg-icon
          name="gxjh"
          class="logo-animation text-[30rem] max-sm:text-[18rem]"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-delay="1500"
        />
      </div>
      <div class="absolute left-0 bottom-10 w-full flex justify-center">
        <svg-icon
          name="down"
          class="text-5xl logo-animation hover:cursor-pointer"
          @click="next"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="2000"
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

const getData = () => {};

const next = () => {
  show.value = true;
  // 浏览器滚动到指定区域
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
};
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
