<template>
  <section class="section pt-36 max-md:pt-24 pb-36 max-md:pb-24" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto" v-if="showSection">
      <div class="grid grid-cols-1 gap-10">
        <div class="grid gap-0 grid-cols-10 max-lg:grid-cols-1">
          <div class="col-span-3 text-black flex justify-between flex-col max-lg:col-span-1">
            <div data-aos="fade-right" data-aos-duration="1500">
              <h1
                class="text-8xl max-2xl:text-6xl max-lg:text-5xl max-md:text-4xl font-gxjh-bold -translate-y-10 tracking-widest mb-8"
                v-html="translateData(titleStr)"
              ></h1>
              <el-button type="danger" round size="large" class="button font-gxjh-demlight" @click="open">{{
                $t("home.find")
              }}</el-button>
            </div>
            <p
              class="text-2xl text-[#696969] leading-[3rem] pt-10 pb-10 max-md:text-xl max-md:leading-[3rem]"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <Transition
                name="custom-classes"
                mode="out-in"
                enter-active-class="animate__animated animate__fadeInLeft"
                leave-active-class="animate__animated animate__fadeOutLeft"
              >
                <p v-if="show" v-html="translateData(arrayImg[2 * activeIndex])"></p>
              </Transition>
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            class="col-span-6 col-start-5 max-lg:col-span-1 max-lg:col-start-1 flex"
          >
            <Transition
              name="custom-classes"
              mode="out-in"
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
            >
              <img
                v-if="show"
                :src="setPreview(arrayImg[2 * activeIndex]?.file?.path)"
                class="w-full object-fill m-auto"
              />
            </Transition>
          </div>
        </div>
        <div class="grid gap-0 grid-cols-10 max-lg:grid-cols-1 max-lg:pt-0">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="500"
            class="col-span-6 max-lg:col-span-11 flex"
          >
            <Transition
              name="custom-classes"
              mode="out-in"
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
            >
              <img
                v-if="show"
                :src="setPreview(arrayImg[2 * activeIndex + 1]?.file?.path)"
                class="w-full object-fill m-auto"
              />
            </Transition>
          </div>
          <div
            class="col-span-3 text-black col-start-8 max-lg:col-span-1 max-lg:col-start-1 flex justify-between flex-col"
          >
            <p
              class="text-2xl text-[#696969] leading-[3rem] pt-10 pb-10 max-md:text-xl max-md:leading-[3rem]"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <Transition
                name="custom-classes"
                mode="out-in"
                enter-active-class="animate__animated animate__fadeInRight"
                leave-active-class="animate__animated animate__fadeOutRight"
              >
                <p v-if="show" v-html="translateData(arrayImg[2 * activeIndex + 1])"></p>
              </Transition>
            </p>
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { getNodeList } from "@admin/api/node";
import { setPreview } from "@/utils";
import { translateData } from "@/hooks/useI18n";

const router = useRouter();

const sectionRef = ref<HTMLElement | null>(null);

const activeIndex = ref<number>(0);

const titleStr = ref<any>("");
const arrayImg = ref<any[]>([]);
const showSection = ref<boolean>(false);
const show = ref<boolean>(true);
const getData = async () => {
  await getNodeList({ parentId: "254715987989889024" }).then((res: any) => {
    titleStr.value = res.data.list.length ? res.data.list[0] : {};
  });

  await getNodeList({ parentId: "254716671338479616" }).then((res: any) => {
    arrayImg.value = res.data.list || [];
  });

  showSection.value = true;
};

const next = () => {
  if (activeIndex.value === arrayImg.value.length - 1) return;
  activeIndex.value++;
  show.value = false;
  setTimeout(() => {
    show.value = true;
  }, 1000);
};

const nextColor = computed(() => {
  return activeIndex.value === arrayImg.value.length - 1
    ? "text-[#939393]"
    : "text-black hover:text-blue-500 hover:cursor-pointer";
});

const prev = () => {
  if (activeIndex.value === 0) return;
  activeIndex.value--;
  show.value = false;
  setTimeout(() => {
    show.value = true;
  }, 1000);
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

h1 {
  line-height: 1.5 !important;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
</style>
