<template>
  <section class="section pt-16 pb-16" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto" v-if="show">
      <h1
        class="text-center text-white font-bold text-5xl font-gxjh-medium max-sm:text-4xl"
        data-aos="zoom-in"
        v-html="translateData(titleStr)"
      ></h1>

      <div class="grid gap-10 pt-20 grid-cols-10 max-md:grid-cols-1 max-md:pt-10">
        <div class="col-span-3 max-md:col-span-1" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1800">
          <p
            class="text-2xl text-white leading-[3rem] max-md:text-xl max-md:leading-[3rem]"
            v-html="translateData(contentStr)"
          ></p>
        </div>
        <div
          class="col-span-6 col-start-5 text-white max-md:col-span-1 max-md:col-start-1"
          data-aos="zoom-in"
          data-aos-offset="100"
        >
          <div class="grid grid-cols-3 gap-0 place-items-center max-2xl:grid-cols-2 max-sm:grid-cols-1">
            <div
              v-for="(_item, index) in 9"
              :key="index"
              class="w-full h-[150px]"
              data-aos="zoom-in"
              :data-aos-delay="1000 + 100 * index"
            >
              <figure class="w-full h-full hover:cursor-pointer imghvr-fade figure">
                <div class="flex w-full h-full">
                  <svg-icon :name="`gxjh-partner${index + 1}`" class="logo-partner" />
                </div>
                <figcaption>
                  <div class="bg-black text-3xl text-white h-full flex items-center justify-center line-clamp-1">
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
import { translateData } from "@/hooks/useI18n";
import { getNodeList } from "@admin/api/node";
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

const titleStr = ref<any>("");
const contentStr = ref<any>("");
const show = ref<boolean>(false);
const getData = async () => {
  getNodeList({ parentId: "254719531379851264" }).then((res: any) => {
    titleStr.value = res.data.list.length ? res.data.list[0] : {};
    contentStr.value = res.data.list.length > 1 ? res.data.list[1] : {};
    show.value = true;
  });
};
</script>
<style scoped lang="scss">
.logo-partner {
  @apply w-[210px] h-[74px] m-auto;
}

.figure {
  &:before {
    background: rgba(0, 0, 0, 0) !important;
  }
}
</style>
