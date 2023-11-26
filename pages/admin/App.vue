<script lang="ts" setup>
import { useTheme } from "@admin/hooks/useTheme";
// 将 Element Plus 的语言设置为中文
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const { initTheme } = useTheme();

/** 初始化主题 */
initTheme();
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
