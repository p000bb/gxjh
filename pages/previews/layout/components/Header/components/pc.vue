<template>
  <header
    :class="[
      'h-[theme(custom.header-height)]',
      'w-full',
      'px-[--body-x-padding]',
      'sticky',
      'flex',
      'flex-row',
      'justify-between',
      'items-center',
      'duration-300',
      'ease-[ease]'
    ]"
  >
    <!-- logo -->
    <a href="/" class="text-[2rem] leading-[1em]">高兴就好</a>
    <!-- tab 选项栏 -->
    <ul class="w-[40%] min-w-[300px] justify-between gap-[10%] text-[0.9rem] max-lg:hidden lg:flex">
      <li v-for="(item, index) in menuList" :key="index">
        <a
          href="javaScript:;"
          :class="[
            'relative',
            'before:block',
            'before:content-[\'\']',
            'before:absolute ',
            'before:w-0',
            'before:h-[3px]',
            'before:left-[50%]',
            'before:bottom-[-5px]',
            'before:bg-[color:var(--text-color)]',
            'before:hover:w-full',
            'before:hover:left-0',
            'before:duration-300',
            'before:ease-[ease]'
          ]"
          @click="() => router.push(item.path)"
          >{{ $t(item.name) }}</a
        >
      </li>
    </ul>
    <LanguageSelect />
    <!-- menu -->
    <i
      :class="[
        'iconfont',
        'icon-apps',
        '!text-[1.4rem]',
        'cursor-pointer',
        'text-[color:var(--text-color)]',
        'hover:text-[color:var(--second-color)]',
        'max-lg:flex',
        'lg:hidden'
      ]"
    ></i>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import LanguageSelect from "@/components/LanguageSelect/index.vue"

const router = useRouter()

const menuList = [
  {
    name: "menuList.home",
    path: "/home"
  },
  {
    name: "menuList.about",
    path: "/about"
  },
  {
    name: "menuList.dynamic",
    path: "/dynamic"
  },
  {
    name: "menuList.contact",
    path: "/contact"
  }
]
</script>
<style scoped lang="scss"></style>
