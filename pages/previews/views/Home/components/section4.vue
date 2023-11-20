<template>
  <section class="section" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-10">
        <div class="grid gap-0 grid-cols-10 max-lg:grid-cols-1">
          <div class="col-span-3 text-black flex justify-between flex-col max-lg:col-span-1">
            <div data-aos="fade-right">
              <h1 class="text-6xl font-black -translate-y-10 leading-[70px] tracking-widest mb-8 max-lg:text-4xl">
                用影像， <br />见证岁月
              </h1>
              <el-button type="danger" round size="large" class="button">发现</el-button>
            </div>
            <p class="text-xl text-[#696969] leading-[40px] pt-10 pb-10" data-aos="fade-right" data-aos-delay="500">
              高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
              Joy”为宗旨，始终专注高校影像赛道。
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            class="col-span-6 col-start-5 max-lg:col-span-1 max-lg:col-start-1"
          >
            <img :src="demo2Img" class="w-full h-full object-fill aspect-auto object-center" />
          </div>
        </div>
        <div class="grid gap-0 grid-cols-10 max-lg:grid-cols-1 max-lg:pt-0">
          <div data-aos="fade-right" data-aos-duration="1000" class="col-span-6 max-lg:col-span-11">
            <img :src="demo1Img" class="w-full h-full object-fill aspect-auto object-center" />
          </div>
          <div class="col-span-3 text-black col-start-8 max-lg:col-span-1 max-lg:col-start-1">
            <p class="text-xl text-[#696969] leading-[40px] pt-10 pb-10" data-aos="fade-left" data-aos-delay="1000">
              高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
              Joy”为宗旨，始终专注高校影像赛道。
            </p>
          </div>
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
