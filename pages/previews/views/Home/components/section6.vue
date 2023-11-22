<template>
  <section class="section relative" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto">
      <h1 class="text-center text-4xl font-bold text-black" data-aos="fade-down">Studio</h1>
      <div class="pt-20 max-lg:pt-8">
        <div data-aos="fade-left" data-aos-duration="2000" class="float-right">
          <img v-lazy-img="demoImg3" class="max-w-3xl w-full object-fill aspect-auto object-center p-10" />
        </div>
        <div class="text-2xl text-[#696969] leading-[3rem]">
          <p class="" data-aos="fade-right" data-aos-delay="1000">
            高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会，为全国高校师生提供了数万次高品质、全面专业的影像咨询服务，通过年轻力影像实践建立一个开放的平台，群像年轻力前行。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import demoImg3 from "@/assets/img/demo3.jpg";

const sectionRef = ref<HTMLElement | null>(null);

const getData = () => {};
</script>
<style scoped lang="scss"></style>
