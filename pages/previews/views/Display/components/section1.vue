<template>
  <section class="section bg-white p-20" ref="sectionRef">
    <div class="container mx-auto">
      <h1 class="text-8xl text-black font-black text-center tracking-[1.5rem] mb-20 relative">
        {{ $t("menu.display") }}
        <select class="select select-bordered w-full max-w-xs select-lg absolute right-0 top-4">
          <option disabled selected class="text-xl">案例分类</option>
          <option class="text-xl">案例1</option>
          <option class="text-xl">案例2</option>
        </select>
      </h1>
      <div class="grid gap-28 grid-cols-3 place-items-center max-xl:grid-cols-2 max-sm:grid-cols-1">
        <img
          v-lazy-img="item"
          v-for="(item, index) in ImgArray"
          :key="index"
          data-aos="zoom-in"
          :data-aos-delay="200 * index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const ImgArray = [
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
];
</script>
<style scoped lang="scss"></style>
