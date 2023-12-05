<template>
  <section class="section pt-32 max-md:pt-20 pb-32 max-md:pb-20" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto" v-if="show">
      <h1
        class="text-center text-4xl text-black font-gxjh-medium"
        data-aos="fade-down"
        v-html="translateData(titleStr)"
      ></h1>
      <div
        class="grid gap-10 pt-20 grid-cols-10 max-lg:grid-cols-1 max-lg:pt-10"
        v-for="(item, index) in content"
        :key="index"
      >
        <template v-if="index % 2 === 0">
          <div
            class="col-span-3 text-2xl text-[#696969] leading-[3rem] max-lg:col-span-1 max-md:text-xl max-md:leading-[3rem]"
          >
            <p class="" data-aos="fade-right" v-html="translateData(item)"></p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1000"
            class="col-span-6 col-start-5 max-lg:col-span-1 max-lg:col-start-1"
          >
            <img :src="setPreview(item?.file?.path)" class="w-full h-full object-fill aspect-auto object-center" />
          </div>
        </template>
        <template v-if="index % 2 === 1">
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1000"
            class="col-span-6 max-lg:col-span-1 max-lg:col-start-1"
          >
            <img :src="setPreview(item?.file?.path)" class="w-full h-full object-fill aspect-auto object-center" />
          </div>
          <div
            class="col-span-3 col-start-8 text-2xl text-[#696969] leading-[3rem] max-lg:col-span-1 max-md:text-xl max-md:leading-[3rem]"
          >
            <p class="" data-aos="fade-right" v-html="translateData(item)"></p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getNodeList } from "@admin/api/node";
import { setPreview } from "@/utils";
import { translateData } from "@/hooks/useI18n";

const sectionRef = ref<HTMLElement | null>(null);

const titleStr = ref<string>("");
const content = ref<any[]>();
const show = ref<boolean>(false);
const getData = async () => {
  await getNodeList({ parentId: "254720470119612416" }).then((res: any) => {
    titleStr.value = res.data.list.length ? res.data.list[0] : {};
  });

  await getNodeList({ parentId: "254720668799598592" }).then((res: any) => {
    content.value = res.data.list;
  });

  show.value = true;
};
</script>
<style scoped lang="scss"></style>
