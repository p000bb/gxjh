<template>
  <footer class="p-10 bg-[#231F20]">
    <footer
      class="footer text-neutral-content grid-cols-4 mt-28 max-md:grid-cols-2 max-md:mt-0 max-[500px]:grid-cols-1"
    >
      <nav>
        <a
          :class="{ 'text-sky-500': item.path === route.path }"
          class="link link-hover text-3xl mb-5 font-gxjh-light text-white"
          v-for="(item, index) in menusDict"
          :key="index"
          @click="goRoute(item)"
          >{{ $t(item.name) }}</a
        >
      </nav>
      <nav class="col-span-2 max-md:col-span-1">
        <nav>
          <header class="footer-title text-base mb-5 font-gxjh-black text-white">{{ $t("footer.works") }}</header>
          <a class="link link-hover text-3xl text-white block font-gxjh-light">{{ $t("footer.collection") }}</a>
        </nav>
        <nav class="mt-20">
          <header class="footer-title text-base mb-5 font-gxjh-light text-white">COLLECTION</header>
          <a class="link link-hover text-5xl text-white block mb-5 font-gxjh-light">{{ $t("footer.exhibition") }}1</a>
          <a class="link link-hover text-5xl text-white block mb-5 font-gxjh-light">{{ $t("footer.exhibition") }}2</a>
        </nav>
      </nav>
      <nav>
        <div class="w-full flex justify-between">
          <nav>
            <header class="footer-title text-base mb-5 font-gxjh-black text-white">{{ $t("footer.track") }}</header>
            <a class="link link-hover text-xl text-white block mb-5 font-gxjh-light">{{ $t("footer.weixin") }}</a>
            <a class="link link-hover text-xl text-white block mb-5 font-gxjh-light">{{ $t("footer.red") }}</a>
          </nav>
          <nav>
            <header class="footer-title text-base mb-5 font-gxjh-black text-white">{{ $t("footer.info") }}</header>
            <a class="link link-hover text-xl text-white block mb-5 font-gxjh-light">{{ $t("footer.privacy") }}</a>
          </nav>
        </div>
        <svg-icon name="gxjh-footer-button" class="footer-logo text-transparent mt-16 max-md:mt-0" />
      </nav>
    </footer>
    <footer class="mt-72 max-md:mt-10">
      <div class="w-full h-[8rem] mb-56 max-md:mb-10">
        <svg-icon name="gxjh-footer-logo" class="footer-logo" />
      </div>
      <aside class="flex justify-between text-[#F2F2F2] text-lg w-full max-md:flex-col">
        <span class="text-base p-2 flex items-center flex-1">
          <LanguageSelect />
        </span>
        <span class="text-base p-2 grow text-center max-md:text-left font-gxjh-light"
          >COPYRIGHT (©) 2023 浙江高兴就好传媒科技有限公司</span
        >
        <span class="text-base p-2 font-gxjh-light flex-1 text-right max-md:text-left"> 浙ICP备19042944号-1　</span>
      </aside>
    </footer>
  </footer>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import LanguageSelect from "@/components/LanguageSelect/index.vue";
import { menusDict } from "@/utils/dict";

const router = useRouter();
const route = useRoute();

const goRoute = (data: any) => {
  router.push(data.path);
};
</script>
<style scoped lang="scss">
.footer-logo {
  width: 100%;
  height: 100%;
}
</style>
