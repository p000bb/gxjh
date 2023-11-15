<template>
  <div class="home">
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
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
  // 从第二开始
  &:nth-child(n + 2) {
    padding: 50px;
  }
  &:nth-child(odd) {
    background-color: #000;
  }
  &:nth-child(even) {
    background-color: #fff;
  }
}
</style>
