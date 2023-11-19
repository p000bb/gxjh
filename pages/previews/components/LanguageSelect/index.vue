<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLanguageStore } from "@/store/modules/language";
import { computed } from "vue";
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

const showText = computed(() => {
  return languageStore.language === "zh-cn" ? "中文 - En" : "En - 中文";
});
</script>

<template>
  <el-dropdown trigger="click" @command="handleLanguageChange">
    <div class="text-white">
      <span>{{ showText }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="languageStore.language === 'zh-cn'" command="zh-cn"> 中文 </el-dropdown-item>
        <el-dropdown-item :disabled="languageStore.language === 'en'" command="en"> English </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss"></style>
