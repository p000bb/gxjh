<template>
  <footer class="p-10 bg-[#231F20]">
    <div class="w-full h-[130px] mb-[200px]">
      <svg-icon name="footer-logo" class="footer-logo" />
    </div>
    <aside class="flex justify-between items-end text-[#F2F2F2] text-lg w-full h-[50px]">
      <span>
        <LanguageSelect />
      </span>
      <span>COPYRIGHT (©) 2023 浙江高兴就好传媒科技有限公司</span>
      <span> 浙ICP备19042944号-1　</span>
    </aside>
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
