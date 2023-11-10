<template>
  <div ref="canvasRef" v-lazy-data="drawCanvas"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import hoverEffect from "@/utils/hoverEffect";
import exampleImg from "@/assets/hover/example-image.jpg";
import dissImg from "@/assets/diss/diss.png";

interface Options {
  img1?: string; // 第一张图片
  img2?: string; // 第二张图片
  dissImg?: string; // 转场图片
  speedIn?: number; // 进入速度
  speedOut?: number; // 出来的速度
}

//
const props = withDefaults(defineProps<Options>(), {
  img1: exampleImg,
  img2: exampleImg,
  dissImg: dissImg
});

const canvasRef = ref<HTMLElement>();

const drawCanvas = () => {
  new hoverEffect({
    parent: canvasRef.value,
    ...props
  });
};
</script>
<style scoped lang="scss"></style>
