<template>
  <div @mouseenter="mouseenter" @mouseleave="mouseleave" class="w-96 h-96">
    <video
      ref="videoRef"
      src="https://tecdn.b-cdn.net/img/video/forest.mp4"
      muted
      loop
      width="384"
      height="384"
      poster="http://www.galaculture.com/static/modules/cms/images/i-img09.jpg"
    ></video>
    <img ref="imgRef" src="http://www.galaculture.com/static/modules/cms/images/i-img09.jpg" class="w-full h-full" />
  </div>
</template>

<script setup lang="ts">
import videoImg from "@/assets/test.mp4?url";

import { ref } from "vue";

const videoRef = ref(null) as HTMLElement | unknown;
const imgRef = ref(null) as HTMLElement | unknown;

const mouseenter = () => {
  imgRef.value.style.display = "none";
  videoRef.value.style.display = "block";
  videoRef.value.currentTime = 0;
  videoRef.value.play();
};

const mouseleave = () => {
  imgRef.value.style.display = "block";
  videoRef.value.style.display = "none";
  videoRef.value.pause();
};
</script>
<style scoped lang="scss"></style>
