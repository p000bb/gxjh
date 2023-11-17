<template>
  <section class="section" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto">
      <h1 class="text-center text-white font-bold text-8xl" data-aos="fade-down">看见美好，从记录影像开始</h1>
      <div class="text-center pt-10" data-aos="fade-up">
        <el-button type="primary" round size="large" @click="open" class="text-2xl">发现</el-button>
      </div>
      <div class="overflow-hidden" data-aos="zoom-in">
        <el-carousel
          direction="horizontal"
          :autoplay="false"
          arrow="never"
          indicator-position="none"
          ref="carouselRef"
          height="500px"
        >
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="grid gap-10 pt-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 h-full">
              <image-hover
                data-hover="imghvr-shutter-in-out-vert"
                data-aos="zoom-in"
                img1="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              ></image-hover>
              <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in" type="video"></image-hover>
              <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
              <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ElCarousel } from "element-plus";
import { ref } from "vue";
const carouselRef = ref<InstanceType<typeof ElCarousel>>();

const sectionRef = ref<HTMLElement>();

const show = ref<boolean>(true);
const getData = () => {};

const open = () => {
  // show.value = false;
  // setTimeout(() => {
  //   show.value = true;
  //   console.log(show.value);
  // }, 500);
  carouselRef.value?.next();
};
</script>
<style scoped lang="scss"></style>
