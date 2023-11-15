<template>
  <section class="section h-screen" v-lazy-data="getData" ref="sectionRef">
    <div>
      <div class="text-[25rem] logo-blue absolute translate-x-[-25%] translate-y-[-25%] blue">
        <svg-icon name="blue" class="logo-animation" data-aos="zoom-in" data-aos-duration="3000" />
      </div>
      <div class="text-[25rem] logo-red absolute right-0 translate-x-[30%] translate-y-[-25%]">
        <svg-icon name="red" class="logo-animation" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500" />
      </div>
      <div class="text-[25rem] logo-yellow absolute bottom-0 left-[20%] translate-y-[35%]">
        <svg-icon
          name="yellow"
          class="logo-animation"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-delay="1000"
        />
      </div>
      <div class="logo">
        <svg-icon
          name="gxjh"
          class="text-[30rem] logo-animation"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-delay="1500"
        />
      </div>
      <div class="absolute bottom-10 w-full flex justify-center">
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
import { onMounted, ref, onBeforeUnmount } from "vue";
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

const setGsap = () => {
  return;
  ScrollTrigger.create({
    trigger: sectionRef.value,
    start: "top top",
    end: "1000",
    scrub: true,
    onUpdate: (self) => {
      gsap.to(".blue", {
        x: self.progress * 1000,
        y: self.progress * 1000,
        rotation: self.progress * 90,
        ease: "power1"
      });
    }
  });
};

onMounted(() => {
  setGsap();
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
</style>
