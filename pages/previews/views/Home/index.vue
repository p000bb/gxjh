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
import Section5 from "./components/section4.vue";
import Section6 from "./components/section4.vue";

onMounted(() => {});
</script>
<style lang="scss" scoped>
.home {
  section {
    min-height: 100vh;
    padding: 50px;
    overflow: hidden;
    &:nth-child(odd) {
      background-color: #000;
    }
    &:nth-child(even) {
      background-color: #fff;
    }
  }
}
</style>
