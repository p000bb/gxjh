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
        <div
          class="hover:scale-110 hover:cursor-pointer transform transition-all duration-500 ease-in-out"
          v-for="(item, index) in ImgArray"
          @click="looData(item)"
        >
          <img v-lazy-img="item" :key="index" data-aos="zoom-in" :data-aos-delay="200 * index" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
import demo1Img from "@/assets/display/demo1.jpeg";
import demo2Img from "@/assets/display/demo2.jpeg";
import demo3Img from "@/assets/display/demo3.jpeg";
import demo4Img from "@/assets/display/demo4.jpeg";
import demo5Img from "@/assets/display/demo5.jpeg";
import demo6Img from "@/assets/display/demo6.jpeg";

const ImgArray = [
  demo1Img,
  demo2Img,
  demo3Img,
  demo4Img,
  demo5Img,
  demo6Img,
  "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
];

const looData = (_data: string) => {
  router.push({
    path: "/display-detail",
    query: {
      id: 1
    }
  });
};
</script>
<style scoped lang="scss"></style>
