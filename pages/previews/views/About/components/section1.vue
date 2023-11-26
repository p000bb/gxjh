<template>
  <section class="section bg-white pt-28 pb-28 pl-10 pr-10" ref="sectionRef">
    <div class="container mx-auto">
      <h1
        class="text-black text-[6.75rem] mt-16 mb-40 font-gxjh-bold max-lg:text-6xl max-md:text-4xl max-lg:mb-16"
        data-aos="fade-right"
      >
        / 关于
      </h1>
      <div class="grid grid-cols-6 gap-5 max-lg:grid-cols-1">
        <div class="" data-aos="fade-right" data-aos-delay="500">
          <img v-lazy-img="demo1Img" class="w-full h-96 object-fill aspect-auto object-center" />
        </div>
        <div class="col-span-4 col-start-3 max-lg:col-span-1 max-lg:col-start-1">
          <p
            class="text-black text-[4.25rem] leading-[7rem] mb-20 font-gxjh-demlight max-lg:text-3xl max-lg:leading-[3.5rem]"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好以“Shine Your Joy”为宗旨.
          </p>
          <div class="flex">
            <div class="w-[440px] m-auto">
              <p class="text-[#696969] text-2xl leading-[3rem]" data-aos="fade-left">
                高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好以“Shine Your
                Joy”为宗旨，始终专注高校影像赛道。
              </p>
              <div class="text-black" data-aos="fade-left">
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
import demo1Img from "@/assets/display/demo1.jpeg";

const sectionRef = ref<HTMLElement | null>(null);
</script>
<style scoped lang="scss">
.about-button {
  width: 100%;
  height: 100%;
}
</style>
