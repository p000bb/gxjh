<template>
  <section class="section bg-white" ref="sectionRef">
    <img v-lazy-img="demo1Img" class="w-full h-full object-fill aspect-auto object-center" />
    <div class="container mx-auto">
      <p class="text-lg text-[#696969] mt-10">
        照片表述照片表述照片表述照片表述照片表述照片表述照片表述照片表述照片表述
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import demo1Img from "@/assets/img/demo1.jpg";

const sectionRef = ref<HTMLElement | null>(null);
</script>
<style scoped lang="scss"></style>
