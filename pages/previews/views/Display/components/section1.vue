<template>
  <section class="section bg-white pt-24 pb-24" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto">
      <!-- <h1
        class="text-8xl max-lg:text-6xl max-md:text-4xl text-black font-black text-center tracking-[1.5rem] mb-20 relative"
      >
        {{ $t("menu.display") }}
        <select class="select select-bordered select-lg absolute right-0 top-4">
          <option disabled selected class="text-xl">案例分类</option>
          <option class="text-xl">案例1</option>
          <option class="text-xl">案例2</option>
        </select>
      </h1> -->

      <div class="flex justify-between mb-20 items-center">
        <p class="w-[20vw] max-sm:hidden"></p>
        <h1
          class="font-gxjh-bold text-8xl max-lg:text-6xl max-md:text-4xl text-black text-center tracking-[1.5rem] relative max-md:tracking-[0.5rem]"
        >
          {{ $t("menu.display") }}
        </h1>

        <div class="w-[20vw] max-sm:w-[30vw]">
          <select class="select select-bordered select-lg max-sm:select-md text-black w-full max-w-[200px] float-right">
            <option disabled selected class="text-xl bg-[rgb(200,200,200)] text-white">案例分类</option>
            <option class="text-xl">案例1</option>
            <option class="text-xl">案例2</option>
            <option class="text-xl">案例3</option>
          </select>
        </div>
      </div>
      <div class="grid gap-28 grid-cols-3 place-items-center max-xl:grid-cols-2 max-sm:grid-cols-1">
        <div
          class="hover:scale-110 hover:cursor-pointer transform transition-all duration-500 ease-in-out"
          v-for="(item, index) in arrayImg"
          @click="looData(item)"
        >
          <div :key="index" data-aos="zoom-in" :data-aos-delay="300 * index">
            <image-hover
              :img1="setPreview(item?.file?.cover)"
              :img2="setPreview(item?.file?.path)"
              type="video"
              v-if="item.fileType === 1"
            ></image-hover>
            <img v-lazy-img="setPreview(item?.file?.path)" data-aos="zoom-in" v-else />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { setPreview } from "@/utils";

const router = useRouter();
import { getAlbumFilePage } from "@admin/api/album";

const looData = (data: any) => {
  router.push({
    path: "/display-detail",
    query: {
      id: 1,
      type: data.type
    }
  });
};

const arrayImg = ref<any[]>([]);
const getData = () => {
  getAlbumFilePage({ pageNum: 1, pageSize: 1000, albumId: "254728824384651264" }).then((res: any) => {
    arrayImg.value = res.data.list || [];
  });
};
</script>
<style scoped lang="scss"></style>
