<template>
  <div>
    <div class="div-video demo"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, getCurrentInstance } from "vue";
import hoverEffect from "@/utils/hoverEffect.js";
const { proxy } = getCurrentInstance() as any;

const img_1 = new URL("@/assets/ny.jpg", import.meta.url) as any;
const img_2 = new URL("@/assets/video.mp4", import.meta.url) as any;
const diss = new URL("@/assets/fluid.jpg", import.meta.url) as any;

onMounted(() => {
  new hoverEffect({
    parent: document.querySelector(".div-video"),
    // image1: img_1.href,
    image1: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    image2: img_2.href,
    displacementImage: diss.href,
    video: true,
    speedIn: 0.5,
    speedOut: 0.5
  });
});
</script>
<style scoped lang="scss">
.demo {
  width: 40vw;
  height: 40vh;
  margin: 10px auto;
  position: relative;
}
</style>
