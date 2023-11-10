<template>
  <figure class="hover:cursor-pointer" :class="dataHover" ref="figureRef">
    <img v-lazy-img="img1" alt="example-image" class="w-full h-full object-fill square" />
    <figcaption>
      <template v-if="!isSlot">
        <img v-lazy-img="img2" alt="example-image" v-if="type === 'image'" class="w-full h-full object-fill square" />
        <video
          ref="videoRef"
          muted
          v-lazy-img="exampleVideo"
          class="w-full h-full object-fill square"
          v-if="type === 'video'"
        ></video>
      </template>
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { ref, onMounted, useSlots, computed } from "vue";
import exampleImg from "@/assets/hover/example-image.jpg";
import exampleVideo from "@/assets/video/video.mp4";

interface OptionsProps {
  dataHover?: string; // 悬浮动画样式 http://imagehover.io/
  img1?: string; // 第一张图片
  img2?: string; // 第二张图片
  type?: "image" | "video"; //第二张是否是视频
}

const props = withDefaults(defineProps<OptionsProps>(), {
  img1: exampleImg,
  img2: exampleImg,
  type: "image",
  dataHover: "imghvr-blur"
});

// 判断是否传入了插槽
const isSlot = computed(() => {
  return !!useSlots().default;
});

const figureRef = ref<HTMLElement>();

const videoRef = ref<HTMLVideoElement>();

// 移入事件
const transitionIn = () => {
  if (!videoRef.value) return;
  videoRef.value.currentTime = 0;
  videoRef.value.play();
};

// 移出事件
const transitionOut = () => {
  if (!videoRef.value) return;
  videoRef.value.pause();
};

onMounted(() => {
  if (props.type === "video") {
    if (!figureRef.value) return;
    figureRef.value.addEventListener("mouseenter", transitionIn);
    figureRef.value.addEventListener("touchstart", transitionIn);
    figureRef.value.addEventListener("mouseleave", transitionOut);
    figureRef.value.addEventListener("touchend", transitionOut);
  }
});
</script>
<style scoped lang="scss"></style>
