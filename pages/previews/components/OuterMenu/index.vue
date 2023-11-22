<template>
  <header class="w-full to-transparent absolute overscroll-none max-sm:right-2">
    <nav :class="navClass" class="p-10 flex justify-between flex-row-reverse">
      <svg-icon name="logo" class="text-3xl z-50 order-2 transition1s" :class="logoColor" v-if="showLogo" />
      <button class="hamburger w-6 h-6 link relative z-50 order-1" @click="setmenuVisible(!menuVisible)">
        <div class="relative flex-none w-ful flex items-center justify-center" :class="hamburgerColor"></div>
      </button>
    </nav>
    <div :class="navWrap" class="w-screen left-[-100vw] flex" v-viewer>
      <div class="menus w-[435px] max-w-full p-9">
        <nav class="grid gap-2 place-items-start pt-32">
          <a
            :class="{ 'text-sky-500': item.path === route.path }"
            class="link link-hover text-3xl mb-5"
            v-for="(item, index) in menusDict"
            :key="index"
            @click="goRoute(item)"
            >{{ $t(item.name) }}</a
          >
        </nav>
        <nav class="m-4 text-left absolute bottom-3">
          <LanguageSelect />
        </nav>
      </div>
      <div class="w-full grid pl-10 pr-10 grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 max-[500px]:hidden">
        <div class="h-full flex justify-center flex-col border-img p-10">
          <div class="h-fit">
            <img v-lazy-img="demo1Img" class="mb-10 hover:cursor-zoom-in" />
            <p class="text-xl">高兴就好</p>
            <p class="text-5xl font-black">WORKS</p>
          </div>
        </div>
        <div class="h-full flex justify-center flex-col max-md:hidden border-img p-10">
          <div class="h-fit">
            <img v-lazy-img="demo2Img" class="mb-10 hover:cursor-zoom-in" />
            <p class="text-xl">高兴就好</p>
            <p class="text-5xl font-black">WORKS</p>
          </div>
        </div>
        <div class="h-full flex justify-center flex-col max-xl:hidden border-img p-10">
          <div class="h-fit">
            <img v-lazy-img="demo3Img" class="mb-10 hover:cursor-zoom-in" />
            <p class="text-xl">高兴就好</p>
            <p class="text-5xl font-black">WORKS</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import LanguageSelect from "@/components/LanguageSelect/index.vue";
import { useNavStore } from "@/store/modules/nav";
import { menusDict } from "@/utils/dict";

import demo1Img from "@/assets/carousel/demo1.jpeg";
import demo2Img from "@/assets/carousel/demo2.png";
import demo3Img from "@/assets/carousel/demo3.jpeg";

const navStore = useNavStore();
const router = useRouter();
const route = useRoute();
const menuVisible = ref<boolean>(false);

/* 菜单主题 */
const hamburgerColor = computed(() => {
  if (menuVisible.value) {
    return "hamburger-light";
  } else {
    return route.meta?.theme === "dark" ? "hamburger-dark" : "hamburger-light";
  }
});

/* logo主题 */
const logoColor = computed(() => {
  if (menuVisible.value) {
    return "logo-light";
  } else {
    return route.meta?.theme === "dark" ? "logo-dark" : "logo-light";
  }
});

/* 是否显示logo */
const showLogo = computed(() => {
  return route.meta?.logo;
});

const setmenuVisible = (value: boolean) => {
  navStore.setmenuVisible(value);
  menuVisible.value = value;
};

const navClass = computed(() => {
  return `outer-menu ${menuVisible.value ? "menu-visible" : ""}`;
});

const navWrap = computed(() => {
  return `page_nav_wrap transition1s ${menuVisible.value ? "sidebar-nav-open" : ""}`;
});

const goRoute = (data: any) => {
  setmenuVisible(false);
  router.push(data.path);
};
</script>
<style scoped lang="scss">
.outer-menu {
  &.menu-visible {
    .hamburger {
      > div {
        transform: rotate(135deg);

        &:before {
          top: 0;
          transform: rotate(90deg);
        }

        &:after {
          top: 0;
          transform: rotate(90deg);
          opacity: 0;
        }
      }
    }

    &:hover {
      .hamburger {
        > div {
          transform: rotate(225deg);
        }
      }
    }
  }

  .hamburger {
    backface-visibility: hidden;

    > div {
      height: 0.125rem;
      transition: all 0.4s ease;
      -webkit-box-pack: center;

      &:before,
      &:after {
        content: "";
        z-index: 1;
        position: absolute;
        left: 0;
        width: 100%;
        top: -0.5rem;
        height: 0.125rem;
        background: inherit;
        transition: all 0.4s ease;
      }

      &:after {
        top: 0.5rem;
      }
    }
  }
}

.page_nav_wrap.sidebar-nav-open {
  left: 0;
}

.page_nav_wrap {
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(36, 32, 33);
  z-index: 9;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px 2px rgb(0 0 0 / 5%);
}

.transition1s {
  transition: all 1.5s ease-in-out;
}

.border-img {
  border-left: 1px solid #ffffff;
}

p + p {
  margin-top: 10px;
}
</style>
