<template>
  <section class="section bg-white pt-28 pb-28 pl-10 pr-10" ref="sectionRef">
    <div class="container mx-auto">
      <h1 class="text-black font-black text-8xl mt-16 mb-40">/ 关于</h1>
      <div class="grid grid-cols-5 gap-5">
        <div class="">
          <img v-lazy-img="demo1Img" class="w-full h-96 object-fill aspect-auto object-center" />
        </div>
        <div class="col-span-3 col-start-3">
          <p class="text-black font-bold text-7xl leading-tight mb-20">
            高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your Joy”为宗旨.
          </p>
          <div class="flex">
            <div class="w-[440px] m-auto">
              <p class="text-[#696969] text-2xl leading-[3rem]">
                高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
                Joy”为宗旨，始终专注高校影像赛道。
              </p>
              <div class="text-black">
                <svg-icon name="about-button" class="about-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import demo1Img from "@/assets/img/demo1.jpg";

const sectionRef = ref<HTMLElement | null>(null);
</script>
<style scoped lang="scss">
.about-button {
  width: 100%;
  height: 100%;
}
</style>
