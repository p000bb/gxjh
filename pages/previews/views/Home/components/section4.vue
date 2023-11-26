<template>
  <section class="section pt-36 max-md:pt-24 pb-36 max-md:pb-24" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-10">
        <div class="grid gap-0 grid-cols-10 max-lg:grid-cols-1">
          <div class="col-span-3 text-black flex justify-between flex-col max-lg:col-span-1">
            <div data-aos="fade-right">
              <h1
                class="text-8xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-gxjh-bold -translate-y-10 tracking-widest mb-8 leading-normal"
              >
                用影像，见证岁月
              </h1>
              <el-button type="danger" round size="large" class="button font-gxjh-demlight" @click="open">{{
                $t("home.find")
              }}</el-button>
            </div>
            <p
              class="text-2xl text-[#696969] leading-[3rem] pt-10 pb-10 max-md:text-xl max-md:leading-[3rem]"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              {{ array[activeIndex].text1 }}
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            class="col-span-6 col-start-5 max-lg:col-span-1 max-lg:col-start-1 flex"
          >
            <img :src="array[activeIndex].img" class="w-full object-fill m-auto" />
          </div>
        </div>
        <div class="grid gap-0 grid-cols-10 max-lg:grid-cols-1 max-lg:pt-0">
          <div data-aos="fade-right" data-aos-duration="1000" class="col-span-6 max-lg:col-span-11 flex">
            <img :src="array[activeIndex].img2" class="w-full object-fill m-auto" />
          </div>
          <div
            class="col-span-3 text-black col-start-8 max-lg:col-span-1 max-lg:col-start-1 flex justify-between flex-col"
          >
            <p
              class="text-2xl text-[#696969] leading-[3rem] pt-10 pb-10 max-md:text-xl max-md:leading-[3rem]"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              {{ array[activeIndex].text1 }}
            </p>
            <div class="flex justify-end mt-10 h-16 items-center">
              <!-- 上一页 -->
              <div>
                <svg-icon name="prev" class="svg" :class="prevColor" @click="prev" />
              </div>
              <div class="w-16"></div>
              <!-- 下一页 -->
              <div>
                <svg-icon name="next" class="svg" :class="nextColor" @click="next" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import demo1Img from "@/assets/img/demo1.jpg";
import demo2Img from "@/assets/img/demo2.jpg";
import { useRouter } from "vue-router";

const router = useRouter();

const sectionRef = ref<HTMLElement | null>(null);

const activeIndex = ref<number>(0);

const show = ref<boolean>(true);
const array = [
  {
    img: demo2Img,
    img2: demo1Img,
    text: "高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine YourJoy”为宗旨，始终专注高校影像赛道。",
    text1:
      "高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine YourJoy”为宗旨，始终专注高校影像赛道。"
  },
  { img: demo1Img, img2: demo2Img, text: "Shop In Store", text1: "We have three locations arou" }
];
const getData = () => {};

const next = () => {
  if (activeIndex.value === array.length - 1) return;
  activeIndex.value++;
};

const nextColor = computed(() => {
  return activeIndex.value === array.length - 1
    ? "text-[#939393]"
    : "text-black hover:text-blue-500 hover:cursor-pointer";
});

const prev = () => {
  if (activeIndex.value === 0) return;
  activeIndex.value--;
};

const prevColor = computed(() => {
  return activeIndex.value === 0 ? "text-[#939393]" : "text-black hover:text-blue-500 hover:cursor-pointer";
});

const open = () => {
  router.push("about");
};
</script>
<style scoped lang="scss">
.button {
  width: 100px;
  height: 45px;
  border-radius: 999999px;
  font-size: 1.25rem;
}

.svg {
  @apply text-6xl max-md:text-5xl;
}
</style>
