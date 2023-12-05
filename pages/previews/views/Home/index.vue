<template>
  <div class="home">
    <Section1 @next="next" />
    <Section2 v-show="show" />
    <Section3 v-viewer v-show="show" />
    <Section4 v-viewer v-show="show" />
    <Section5 v-viewer v-show="show" />
    <Section6 v-viewer v-show="show" />
  </div>
</template>

<script setup lang="ts" name="Home">
import { onMounted, ref } from "vue";
import Section1 from "./components/section1.vue";
import Section2 from "./components/section2.vue";
import Section3 from "./components/section3.vue";
import Section4 from "./components/section4.vue";
import Section5 from "./components/section5.vue";
import Section6 from "./components/section6.vue";
import { useShowStore } from "@/store/modules/showSection";

const show = ref<boolean>(false);

const next = () => {
  show.value = true;
  useShowStore().changeShow(true);
  setTimeout(() => {
    // 浏览器滚动到指定区域
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  }, 300);
};
onMounted(() => {
  useShowStore().changeShow(false);
});
</script>
<style lang="scss" scoped>
section {
  height: fit-content;
  overflow: hidden;
  box-sizing: content-box;
  @apply odd:bg-black even:bg-white;

  &:nth-child(n + 2) {
    // @apply pt-36 max-lg:pt-16;
    // @apply pb-36 max-lg:pb-16;
    @apply pl-16 max-lg:pl-8;
    @apply pr-16 max-lg:pr-8;
  }
}
</style>
