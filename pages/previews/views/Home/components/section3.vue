<template>
  <section class="section" ref="sectionRef" v-lazy-data="getData">
    <h1 class="text-center text-white font-bold text-8xl" data-aos="fade-down">看见美好，从记录影像开始</h1>
    <div class="text-center pt-10" data-aos="fade-up">
      <el-button type="primary" round size="large" @click="open">发现</el-button>
    </div>
    <!-- <Transition
      name="custom-classes"
      mode="out-in"
      enter-active-class="animate__animated animate__slideInRight animate__slow"
      leave-active-class="animate__animated animate__slideOutLeft animate__faster"
    >
      <div class="grid gap-10 pt-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1" v-show="show">
        <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
        <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
        <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
        <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
        <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
        <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
        <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
      </div>
    </Transition> -->

    <div>
      <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
      <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
      <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
      <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
      <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
      <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
      <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
      <image-hover data-hover="imghvr-shutter-in-out-vert" data-aos="zoom-in"></image-hover>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const sectionRef = ref<HTMLElement | null>(null);

const show = ref<boolean>(true);
const getData = () => {};

const open = () => {
  show.value = false;
  setTimeout(() => {
    show.value = true;
    console.log(show.value);
  }, 500);
};
</script>
<style scoped lang="scss"></style>
