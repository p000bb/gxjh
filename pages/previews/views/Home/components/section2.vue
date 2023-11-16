<template>
  <section class="section" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto ">
      <div class="grid gap-10 pt-10 md:grid-cols-2 sm:grid-cols-1">
        <div data-aos="fade-right" data-aos-duration="2000">
          <svg-icon name="gxjh" class="icon -translate-y-10" />
        </div>
        <div>
          <p class="text-xl text-black font-sans leading-8 font-light" data-aos="fade-left" data-aos-duration="2000">
            高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好
          </p>
          <p class="text-xl text-black font-sans leading-8 font-light mt-10" data-aos="fade-left" data-aos-duration="2000"
            data-aos-delay="1000">
            高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好高兴就好
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import exampleImg from "@/assets/hover/example-image.jpg";

const sectionRef = ref<HTMLElement | null>(null);

const getData = () => { };
</script>
<style scoped lang="scss">
.icon {
  width: 20em;
  height: 10em;
  color: #000000;
}
</style>
