<template>
  <section class="section4 bg-white" ref="scetionRef">
    <!-- <section > -->
    <div class="carousel carousel-center rounded-box">
      <div class="carousel-item">
        <img v-lazy-img="'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78111.jpg'" alt="Pizza" />
      </div>
      <div class="carousel-item">
        <img v-lazy-img="'https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg'" alt="Pizza" />
      </div>
      <div class="carousel-item">
        <img v-lazy-img="'https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg'" alt="Pizza" />
      </div>
      <div class="carousel-item">
        <img v-lazy-img="'https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg'" alt="Pizza" />
      </div>
    </div>
    <!-- </section> -->
  </section>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from "vue";
import { gsap } from "gsap";

const { proxy } = getCurrentInstance() as any;
const setGsap = () => {
  // 使用gsap实现无线横向平移
  const carousel = document.querySelector(".carousel") as HTMLElement;
  const carouselItem = document.querySelectorAll(".carousel-item");
  const tl = gsap.timeline({ repeat: -1 });
  const duration = 2;
  const itemLength = carouselItem.length;
  const itemWidth = carouselItem[0].clientWidth;
  const carouselWidth = itemLength * itemWidth;
  tl.to(carouselItem, {
    duration: duration,
    x: -carouselWidth + carousel.clientWidth,
    ease: "none"
  }).set(carouselItem, { x: "+=carouselWidth" });
};

const scetionRef = ref<HTMLElement | null>(null);

onMounted(() => {});
</script>
<style scoped lang="scss"></style>
