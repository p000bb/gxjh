<template>
  <section class="section" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto">
      <h1
        class="text-center text-white font-bold text-8xl max-lg:text-6xl max-md:text-4xl max-sm:text-2xl"
        data-aos="fade-down"
      >
        看见美好，从记录影像开始
      </h1>
      <div class="text-center pt-10" data-aos="fade-up">
        <el-button type="primary" round size="large" class="button" @click="open">{{ $t("home.find") }}</el-button>
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
          <el-carousel-item v-for="(_item, index) in pageNum" :key="index">
            <div class="grid gap-10 pt-10 h-full xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              <image-hover
                data-hover="imghvr-shutter-in-out-vert"
                data-aos="zoom-in"
                v-for="(_item1, index1) in array.slice(index * length, (index + 1) * length)"
                :key="index1"
              ></image-hover>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div>
        <!-- 上一页 -->
        <svg-icon name="prev" class="text-3xl" :class="prevColor" @click="prev" />
        <!-- 下一页 -->
        <svg-icon name="next" class="text-3xl" :class="nextColor" @click="next" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ElCarousel } from "element-plus";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
const carouselRef = ref<InstanceType<typeof ElCarousel>>();

const sectionRef = ref<HTMLElement>();

const array = [1, 2, 3, 4, 5, 6, 7];
const length = ref<number>(1);

const pageNum = computed(() => {
  return Math.ceil(array.length / length.value);
});

const getData = () => {};

const open = () => {
  carouselRef.value?.next();
};

const next = () => {
  carouselRef.value?.next();
};

const nextColor = computed(() => {
  return carouselRef.value?.activeIndex === pageNum.value - 1 ? "" : "";
});

const prev = () => {
  carouselRef.value?.prev();
};

const prevColor = computed(() => {
  return carouselRef.value?.activeIndex === 0 ? "" : "";
});

onMounted(() => {
  resizeEvent();
  window.addEventListener("resize", resizeEvent);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeEvent);
});

// 监听浏览器窗口大小变化
const resizeEvent = () => {
  const width = window.innerWidth;
  if (width >= 1280) {
    length.value = 4;
  } else if (width > 1024) {
    length.value = 3;
  } else if (width > 768) {
    length.value = 2;
  } else {
    length.value = 1;
  }
  console.log(length.value, width);
};
</script>
<style scoped lang="scss">
.button {
  width: 100px;
  height: 45px;
  border-radius: 999999px;
  font-size: 20px;
}
</style>
