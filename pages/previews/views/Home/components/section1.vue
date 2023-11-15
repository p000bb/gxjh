<template>
  <section class="section" v-lazy-data="getData">
    <div class="text-[25rem] logo-blue absolute translate-x-[-25%] translate-y-[-25%]">
      <svg-icon name="blue" class="logo-animation" />
    </div>
    <div class="text-[25rem] logo-red absolute right-0 translate-x-[30%] translate-y-[-25%]">
      <svg-icon name="red" class="logo-animation" />
    </div>
    <div class="text-[25rem] logo-yellow absolute bottom-0 left-[20%] translate-y-[35%]">
      <svg-icon name="yellow" class="logo-animation" />
    </div>
    <div class="logo">
      <svg-icon name="gxjh" class="text-[30rem] logo-animation" data-aos="zoom-in" />
    </div>
    <div class="absolute bottom-10 w-full flex justify-center">
      <svg-icon
        name="down"
        class="text-5xl logo-animation hover:cursor-pointer"
        @click="next"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="1500"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

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

// 禁止浏览器滚动 如果show为true则可以滚动
const stopScroll = (e: Event) => {};

onMounted(() => {
  // document.body.addEventListener("wheel", stopScroll);
});

// onBeforeUnmount(() => {
//   window.removeEventListener("wheel", stopScroll);
// });
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
