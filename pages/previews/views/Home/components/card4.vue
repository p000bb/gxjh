<template>
  <section class="section4 bg-white">
    <div class="carousel carousel-center rounded-box">
      <div class="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          alt="Pizza"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          alt="Pizza"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
          alt="Pizza"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
          alt="Pizza"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
          alt="Pizza"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
          alt="Pizza"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          alt="Pizza"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          alt="Pizza"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          alt="Pizza"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          alt="Pizza"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          alt="Pizza"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, getCurrentInstance } from "vue";
import { gsap } from "gsap";

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
    ease: "none",
  }).set(carouselItem, { x: "+=carouselWidth" });
};
onMounted(() => {
  setGsap();
});
</script>
<style scoped lang="scss"></style>
