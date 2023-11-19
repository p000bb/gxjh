<template>
  <section class="section pl-16 pr-16" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto">
      <div class="grid gap-0 pt-10 md:grid-cols-10 sm:grid-cols-2">
        <div class="col-span-3 text-black flex justify-between flex-col">
          <div data-aos="fade-right">
            <h1 class="text-6xl font-black -translate-y-10 leading-[70px] tracking-widest mb-8">
              用影像， <br />见证岁月
            </h1>
            <el-button type="danger" round size="large" class="button">发现</el-button>
          </div>
          <p class="text-xl text-[#696969] leading-[40px]" data-aos="fade-right" data-aos-delay="1000">
            高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" class="col-span-6 col-start-5">
          <img :src="demo2Img" class="w-full h-full object-fill aspect-auto object-center" />
        </div>
      </div>

      <div class="grid gap-0 pt-24 md:grid-cols-10 sm:grid-cols-2">
        <div data-aos="fade-right" data-aos-duration="2000" class="col-span-6">
          <img :src="demo1Img" class="w-full h-full object-fill aspect-auto object-center" />
        </div>
        <div class="col-span-3 text-black col-start-8">
          <p class="text-xl text-[#696969] leading-[40px]" data-aos="fade-left" data-aos-delay="1000">
            高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import demo1Img from "@/assets/img/demo1.jpg";
import demo2Img from "@/assets/img/demo2.jpg";

const sectionRef = ref<HTMLElement | null>(null);

const getData = () => {};
</script>
<style scoped lang="scss">
.button {
  width: 100px;
  height: 45px;
  border-radius: 999999px;
  font-size: 20px;
}
</style>
