<template>
  <main>
    <router-view v-slot="{ Component, route }">
      <transition name="el-fade-in" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="route.path" class="app-container-grow" />
        </keep-alive>
      </transition>
    </router-view>
    <back-top />
  </main>
</template>

<script setup lang="ts">
import BackTop from "@/components/backTop/index.vue"
const cachedViews = ["Home", "About", "Contact", "Dynamic"]
</script>
<style scoped lang="scss"></style>
