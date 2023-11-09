<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLanguageStore } from "@/store/modules/language";
// import { ElMessage } from "element-plus";

const languageStore = useLanguageStore();
const { locale } = useI18n();

function handleLanguageChange(lang: string) {
  locale.value = lang;
  languageStore.changeLanguage(lang);
  if (lang === "en") {
    // ElMessage("Switch Language Successful!");
  } else {
    // ElMessage.success("切换语言成功！");
  }
}
</script>

<template>
  <el-dropdown trigger="click" @command="handleLanguageChange">
    <div>
      <el-icon class="icon">
        <svg-icon name="language" />
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="languageStore.language === 'zh-cn'" command="zh-cn"> 中文 </el-dropdown-item>
        <el-dropdown-item :disabled="languageStore.language === 'en'" command="en"> English </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss">
.icon {
  @apply text-xl;
  @apply text-black;
}
</style>
