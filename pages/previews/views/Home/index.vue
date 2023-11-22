<template>
  <div class="home">
    <Section1 />
    <Section2 />
    <Section3 v-viewer />
    <Section4 v-viewer />
    <Section5 v-viewer />
    <Section6 v-viewer />
  </div>
</template>

<script setup lang="ts" name="Home">
import { onMounted } from "vue";
import Section1 from "./components/section1.vue";
import Section2 from "./components/section2.vue";
import Section3 from "./components/section3.vue";
import Section4 from "./components/section4.vue";
import Section5 from "./components/section5.vue";
import Section6 from "./components/section6.vue";

onMounted(() => {});
</script>
<style lang="scss" scoped>
section {
  height: fit-content;
  overflow: hidden;
  box-sizing: content-box;
  @apply odd:bg-[#231F20] even:bg-white;

  &:nth-child(n + 2) {
    @apply pt-36 max-lg:pt-16;
    @apply pb-36 max-lg:pb-16;
    @apply pl-16 max-lg:pl-8;
    @apply pr-16 max-lg:pr-8;
  }
}
</style>
