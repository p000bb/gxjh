<template>
  <div class="home">
    <!-- <Logo />
    <Carousel />
    <Card1 />
    <Card2 />
    <Card3 />
    <Card4 /> -->
    <Card5 />
  </div>
</template>

<script setup lang="ts" name="Home">
import Logo from "./components/logo.vue";
import Carousel from "./components/carousel.vue";
import Card1 from "./components/card1.vue";
import Card2 from "./components/card2.vue";
import Card3 from "./components/card3.vue";
import Card4 from "./components/card4.vue";
import Card5 from "./components/card5.vue";
import { onMounted } from "vue";

onMounted(() => {
  console.log(111);
});
</script>
<style></style>
