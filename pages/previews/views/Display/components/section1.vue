<template>
  <section class="section bg-white pt-24 pb-24" ref="sectionRef">
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
          class="text-8xl max-lg:text-6xl max-md:text-4xl text-black font-black text-center tracking-[1.5rem] relative max-md:tracking-[0.5rem]"
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
          v-for="(item, index) in ImgArray"
          @click="looData(item)"
        >
          <div :key="index">
            <image-hover
              data-hover="imghvr-shutter-in-out-vert"
              data-aos="zoom-in"
              :img1="item.img"
              type="video"
              v-if="item.type === 'video'"
            ></image-hover>
            <img v-lazy-img="item.img" data-aos="zoom-in" :data-aos-delay="100 * index" v-else />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
import demo1Img from "@/assets/display/demo1.jpeg";
import demo2Img from "@/assets/display/demo2.jpeg";
import demo3Img from "@/assets/display/demo3.jpeg";
import demo4Img from "@/assets/display/demo4.jpeg";
import demo5Img from "@/assets/display/demo5.jpeg";
import demo6Img from "@/assets/display/demo6.jpeg";

const ImgArray = [
  { img: demo1Img, type: "img" },
  { img: demo2Img, type: "video" },
  { img: demo3Img, type: "img" },
  { img: demo4Img, type: "img" },
  { img: demo5Img, type: "video" },
  { img: demo6Img, type: "img" },
  { img: "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg", type: "img" },
  { img: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg", type: "img" },
  { img: "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg", type: "img" }
];

const looData = (data: any) => {
  router.push({
    path: "/display-detail",
    query: {
      id: 1,
      type: data.type
    }
  });
};
</script>
<style scoped lang="scss"></style>
