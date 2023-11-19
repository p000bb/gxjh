<template>
  <footer class="p-10 bg-[#231F20]">
    <footer class="footer text-neutral-content grid-cols-4 mt-28 max-sm:grid-cols-1">
      <nav>
        <a class="link link-hover text-3xl text-white mb-5">{{ $t("menuList.home") }}</a>
        <a class="link link-hover text-3xl text-white mb-5">{{ $t("menuList.display") }}</a>
        <a class="link link-hover text-3xl text-white mb-5">{{ $t("menuList.about") }}</a>
        <a class="link link-hover text-3xl text-white mb-5">{{ $t("menuList.contact") }}</a>
      </nav>
      <nav class="col-span-2">
        <nav>
          <header class="footer-title text-base mb-5">作品</header>
          <a class="link link-hover text-3xl text-white block">永久收藏</a>
        </nav>
        <nav class="mt-20">
          <header class="footer-title text-base mb-5">COLLECTION</header>
          <a class="link link-hover text-5xl text-white block mb-5">展览1</a>
          <a class="link link-hover text-5xl text-white block mb-5">展览2</a>
        </nav>
      </nav>
      <nav>
        <div class="w-full flex justify-between">
          <nav>
            <header class="footer-title text-base mb-5">追踪我们</header>
            <a class="link link-hover text-xl text-white block mb-5">微信·公众号</a>
            <a class="link link-hover text-xl text-white block mb-5">小红书</a>
          </nav>
          <nav>
            <header class="footer-title text-base mb-5">信息</header>
            <a class="link link-hover text-xl text-white block mb-5">隐私</a>
          </nav>
        </div>
        <svg-icon name="footer-button" class="footer-logo text-transparent mt-16 max-sm:mt-0" />
      </nav>
    </footer>
    <footer class="mt-72 max-sm:mt-10">
      <div class="w-full h-[130px] mb-56 max-sm:mb-10">
        <svg-icon name="footer-logo" class="footer-logo" />
      </div>
      <aside class="flex justify-between text-[#F2F2F2] text-lg w-full max-sm:flex-col">
        <span class="text-base p-2">
          <LanguageSelect />
        </span>
        <span class="text-base p-2">COPYRIGHT (©) 2023 浙江高兴就好传媒科技有限公司</span>
        <span class="text-base p-2"> 浙ICP备19042944号-1　</span>
      </aside>
    </footer>
  </footer>
</template>

<script setup lang="ts">
import LanguageSelect from "@/components/LanguageSelect/index.vue";
</script>
<style scoped lang="scss">
.footer-logo {
  width: 100%;
  height: 100%;
}
</style>
