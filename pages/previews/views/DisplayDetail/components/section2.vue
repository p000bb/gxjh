<template>
  <section class="section bg-white p-20" ref="sectionRef">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 gap-10 max-lg:grid-cols-1" v-if="pageType === 'video'">
        <img :src="demo6Img" class="col-span-2 mb-20 max-lg:col-span-1" />
        <div v-for="(item, index) in 6" :key="index">
          <img :src="demo6Img" />
          <p class="text-[#696969] text-3xl mt-8 font-bold" v-for="(item1, index1) in index + 1">
            作为中国成立最早、最具先锋的高
          </p>
        </div>
      </div>
      <div
        class="grid gap-28 place-items-center grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1"
        v-else
      >
        <div
          class="hover:scale-110 hover:cursor-pointer transform transition-all duration-500 ease-in-out"
          v-for="(item, index) in ImgArray"
          :key="index"
        >
          <img v-lazy-img="item" data-aos="zoom-in" :data-aos-delay="100 * index" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import demo6Img from "@/assets/display/demo6.jpeg";

const route = useRoute();

const pageType = computed(() => route.query.type);

const ImgArray = [
  "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
];
const sectionRef = ref<HTMLElement | null>(null);
</script>
<style scoped lang="scss"></style>
