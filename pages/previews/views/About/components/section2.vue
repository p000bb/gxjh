<template>
  <section class="section bg-white" ref="sectionRef">
    <img v-lazy-img="demo1Img" class="w-full h-full object-fill aspect-auto object-center" data-aos="zoom-in" />
    <div class="pl-8 pr-8">
      <p
        class="text-lg text-[#696969] mt-10 font-gxjh-demlight leading-[2rem]"
        data-aos="fade-down"
        data-aos-anchor-placement="center-bottom"
      >
        照片表述照片表述照片表述照片表述照片表述照片表述照片表述照片表述照片表述
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import demo1Img from "@/assets/img/demo1.jpg";

const sectionRef = ref<HTMLElement | null>(null);
</script>
<style scoped lang="scss">
.section {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>
