<template>
  <section class="section" ref="sectionRef" v-lazy-data="getData">
    <div class="grid gap-10 pt-10 md:grid-cols-10 sm:grid-cols-2">
      <div class="col-span-4 text-black flex justify-between flex-col">
        <h1 class="text-5xl font-bold -translate-y-10" data-aos="fade-right">用影像， <br />见证岁月</h1>
        <p class="" data-aos="fade-right" data-aos-delay="1000">
          高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好
        </p>
      </div>
      <div data-aos="fade-left" data-aos-duration="2000" class="col-span-6">
        <img :src="exampleImg" class="w-full h-full object-fill aspect-auto object-center" />
      </div>
    </div>

    <div class="grid gap-10 pt-10 md:grid-cols-10 sm:grid-cols-2">
      <div data-aos="fade-right" data-aos-duration="2000" class="col-span-6">
        <img :src="exampleImg" class="w-full h-full object-fill aspect-auto object-center" />
      </div>
      <div class="col-span-4 text-black">
        <p class="" data-aos="fade-left" data-aos-delay="1000">
          高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import exampleImg from "@/assets/hover/example-image.jpg";

const sectionRef = ref<HTMLElement | null>(null);

const getData = () => {};
</script>
<style scoped lang="scss"></style>
