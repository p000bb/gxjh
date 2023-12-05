<template>
  <section class="section pt-36 max-md:pt-24 pb-36 max-md:pb-24" ref="sectionRef" v-lazy-data="getData">
    <div class="container mx-auto" v-if="show">
      <div class="grid gap-10 grid-cols-2 max-lg:grid-cols-1 max-lg:gap-0">
        <div data-aos="fade-right" data-aos-duration="2000" class="max-lg:flex">
          <svg-icon name="gxjh" class="icon -translate-y-10 max-lg:m-auto" />
        </div>
        <div class="max-lg:mt-[-2rem]">
          <p v-html="translateData(dataStr)" data-aos="fade-left" data-aos-duration="2000"></p>
          <!-- <p class="" data-aos="fade-left" data-aos-duration="2000">
            高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会，为全国高校师生提供了数万次高品质、全面专业的影像咨询服务，通过年轻力影像实践建立一个开放的平台，吸引热衷传播的创意人不断聚集，共同引领影像数字化、群像年轻力前行。
          </p>
          <p class="" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500">
            当下，我们用科技、创意赋能年轻力群像的想象力，通过数字化中台，建立国内首家高校视觉资产管理系统，提供给更好的视觉内容传播服务。期待创意团队和高校、企业之间，建立更好的沟通与协作，赋予人、企业、科技品牌最大化。
          </p> -->
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

const dataStr = ref<any>("");
const show = ref<boolean>(false);
const getData = async () => {
  getNodeList({ parentId: "254710150521159680" }).then((res: any) => {
    dataStr.value = res.data.list.length ? res.data.list[0] : "";
    show.value = true;
  });
};
</script>
<style scoped lang="scss">
.icon {
  width: 20rem;
  height: 10rem;
  color: #373b3d;
}

p {
  line-height: 1.625 !important;
  @apply text-2xl text-[#696969] max-md:text-xl;
  &:nth-child(n + 2) {
    @apply mt-10;
  }
}
</style>
