<template>
  <section class="section" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto">
      <h1 class="text-center text-white font-bold text-5xl" data-aos="fade-down">合作伙伴</h1>

      <div class="grid gap-10 pt-20 grid-cols-10 max-xl:grid-cols-1 max-xl:pt-10">
        <div class="col-span-3 max-xl:col-span-1" data-aos="zoom-in">
          <p class="text-2xl text-white leading-[3rem]">
            高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会，为全国高校师生提供了数万次高品质、全面专业的影像咨询服务，通过年轻力影像实践建立一个开放的平台，
          </p>
        </div>
        <div
          class="col-span-6 col-start-5 text-white max-xl:col-span-1 max-xl:col-start-1"
          data-aos="zoom-in"
          data-aos-offset="100"
        >
          <div class="grid grid-cols-3 gap-0 place-items-center max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div
              v-for="(_item, index) in 9"
              :key="index"
              class="w-full h-[150px]"
              data-aos="zoom-in"
              :data-aos-delay="200 * index"
            >
              <figure class="w-full h-full hover:cursor-pointer imghvr-fade figure">
                <div class="flex w-full h-full">
                  <svg-icon :name="`partner${index + 1}`" class="logo-partner" />
                </div>
                <figcaption>
                  <div
                    class="bg-[#DB3800] text-3xl text-white h-full flex items-center justify-center border border-white border-solid"
                  >
                    {{ partnerArray[index] }}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const sectionRef = ref<HTMLElement | null>(null);

const partnerArray = [
  "#高校 #文化",
  "#互联网 #金融",
  "#智造 #汽车",
  "#互联网 #人工智能",
  "#智能物联 #大数据",
  "#商业 #地产",
  "#商业 #时尚",
  "#文化创新平台",
  "#户外 #运动"
];
const getData = () => {};
</script>
<style scoped lang="scss">
.logo-partner {
  @apply w-[210px] h-[74px] m-auto;
}

.figure {
  &:before {
    background: #db3800 !important;
  }
}
</style>
