<template>
  <section class="section" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto">
      <h1 class="text-center text-white font-bold text-4xl" data-aos="fade-down">合作伙伴</h1>

      <div class="grid gap-10 pt-10 md:grid-cols-10 sm:grid-cols-2">
        <div class="col-span-4 text-white" data-aos="zoom-in">
          <p>高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好</p>
        </div>
        <div class="col-span-6 text-white" data-aos="zoom-in" data-aos-offset="300">
          <div class="grid grid-cols-3 gap-0 place-items-center">
            <div v-for="(_item, index) in 9" :key="index" class="w-full h-[150px]">
              <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in" :data-aos-delay="200 * index">
                <div class="bg-red-500 text-white w-full h-full">高兴就好</div>
              </image-hover>
            </div>
          </div>
        </div>
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
