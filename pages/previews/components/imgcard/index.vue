<template>
  <div class="image-container overflow-hidden">
    <img
      :src="props.img"
      alt="Your Image"
      class="w-full h-full hover:cursor-pointer hover:scale-110"
    />
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const props = defineProps({
  img: {
    type: String,
    default: "",
  },
});

const imageContainer = document.querySelector(
  ".image-container"
) as HTMLElement;
const tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.addLabel("scaleStart", 0)
  .to(
    imageContainer,
    { duration: 0.3, scale: 1.1, transformOrigin: "50% 0%" },
    "scaleStart"
  )
  .addLabel("scaleEnd", 0.3)
  .to(imageContainer, {
    duration: 0.3,
    scale: 1,
    transformOrigin: "50% 0%",
    onComplete: function () {
      // 重置图片位置，以使其在鼠标离开时恢复原始大小
      imageContainer.style.transform = "scale(1)";
    },
  });
</script>
<style scoped lang="scss">
.image-container {
  img {
    transition: transform 0.3s ease;
  }
}
</style>
