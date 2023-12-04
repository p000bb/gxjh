<template>
  <section class="section pt-36 max-md:pt-20 pb-20 max-md:pb-20" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto">
      <h1
        class="text-center text-white text-8xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl font-gxjh-bold max-md:leading-normal"
        data-aos="fade-down"
        v-html="translateData(titleStr)"
      ></h1>
      <div class="text-center pt-10 pb-10 font-gxjh-demlight" data-aos="fade-up">
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
            <div class="grid gap-10 h-full grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
              <div v-for="(_item1, index1) in arrayImg.slice(index * length, (index + 1) * length)">
                <div class="h-[400px] mb-10">
                  <image-hover
                    data-aos="zoom-in"
                    :key="index1"
                    :img1="setPreview(_item1?.file?.path)"
                    :img2="demo2ImgHover"
                    :type="index1 % 2 === 0 ? 'image' : 'video'"
                  ></image-hover>
                </div>
                <p class="text-2xl text-white font-gxjh-medium truncate">{{ _item1.name }}</p>
                <p class="text-base text-white font-gxjh-medium truncate" v-html="translateData(_item1)"></p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="flex justify-end mt-10 h-16 items-center">
        <!-- 上一页 -->
        <div>
          <svg-icon name="gxjh-prev" class="svg" :class="prevColor" @click="prev" />
        </div>
        <div class="w-16"></div>
        <!-- 下一页 -->
        <div>
          <svg-icon name="gxjh-next" class="svg" :class="nextColor" @click="next" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ElCarousel } from "element-plus";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { setPreview } from "@/utils";
import { translateData } from "@/hooks/useI18n";

import demo2ImgHover from "@/assets/img/demo2.jpg";
import { getNodeList } from "@admin/api/node";

const carouselRef = ref<InstanceType<typeof ElCarousel>>();

const sectionRef = ref<HTMLElement>();

const length = ref<number>(1);
const activeIndex = ref<number>(0);

const pageNum = computed(() => {
  return Math.ceil(arrayImg.value.length / length.value);
});

const titleStr = ref<any>("");
const arrayImg = ref<any[]>([]);
const getData = async () => {
  getNodeList({ parentId: "254714934519136256" }).then((res: any) => {
    titleStr.value = res.data.list.length ? res.data.list[0] : "";
  });

  getNodeList({ parentId: "254724563609321472" }).then((res: any) => {
    arrayImg.value = res.data.list;
  });
};

const open = () => {
  document.querySelectorAll(".home section")[3].scrollIntoView({
    behavior: "smooth"
  });
};

const next = () => {
  if (activeIndex.value === pageNum.value - 1) return;
  activeIndex.value++;
  carouselRef.value?.next();
};

const nextColor = computed(() => {
  return activeIndex.value === pageNum.value - 1
    ? "text-[#656363]"
    : "text-white hover:text-blue-500 hover:cursor-pointer";
});

const prev = () => {
  if (activeIndex.value === 0) return;
  activeIndex.value--;
  carouselRef.value?.prev();
};

const prevColor = computed(() => {
  return activeIndex.value === 0 ? "text-[#656363]" : "text-white hover:text-blue-500 hover:cursor-pointer";
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
  if (width >= 1024) {
    length.value = 4;
  } else if (width > 768) {
    length.value = 3;
  } else if (width > 640) {
    length.value = 2;
  } else {
    length.value = 1;
  }
};
</script>
<style scoped lang="scss">
.button {
  width: 100px;
  height: 45px;
  border-radius: 999999px;
  font-size: 1.25rem;
}

p {
  margin-top: 0.5rem;
}

.svg {
  @apply text-6xl max-md:text-5xl;
}
</style>
