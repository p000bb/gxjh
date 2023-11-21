<template>
  <router-view />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { setTitle } from "./hooks/useI18n";
import { useI18n } from "vue-i18n";
import { watch } from "vue";

const route = useRoute();
const { locale } = useI18n();

// 监听路由变化或者locale的变化，设置页面标题
watch(
  [() => route.path, () => locale.value],
  () => {
    setTitle(route);
  },
  { immediate: true }
);
</script>
