<template>
  <header class="w-full to-transparent right-10 absolute max-sm:right-2" v-click-outside="hiddenNavWrap">
    <nav :class="navClass" class="text-right p-10">
      <button class="hamburger w-6 h-6 link relative z-50" @click="setmenuVisible(!menuVisible)">
        <div class="relative flex-none w-full bg-white flex items-center justify-center"></div>
      </button>
    </nav>
    <div :class="navWrap" class="w-screen left-[-100vw] flex">
      <div class="menus w-[435px] max-w-full p-9">
        <svg-icon name="logo" class="text-white text-3xl" />
        <nav class="grid gap-2 place-items-start pt-32">
          <a
            :class="{ 'text-sky-500': item.path === route.path }"
            class="link link-hover text-3xl mb-5"
            v-for="(item, index) in menuList"
            :key="index"
            @click="goRoute(item)"
            >{{ $t(item.name) }}</a
          >
        </nav>
        <nav class="m-4 text-left absolute bottom-3">
          <LanguageSelect />
        </nav>
      </div>
      <div class="flex-auto flex items-center">111</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ClickOutside as vClickOutside } from "element-plus";
import LanguageSelect from "@/components/LanguageSelect/index.vue";
import { useNavStore } from "@/store/modules/nav";

const navStore = useNavStore();
const router = useRouter();
const route = useRoute();
const menuVisible = ref<boolean>(false);

const setmenuVisible = (value: boolean) => {
  navStore.setmenuVisible(value);
  menuVisible.value = value;
};

const navClass = computed(() => {
  return `outer-menu ${menuVisible.value ? "menu-visible" : ""}`;
});

const navWrap = computed(() => {
  return `page_nav_wrap ${menuVisible.value ? "sidebar-nav-open" : ""}`;
});

const menuList = [
  {
    name: "menuList.home",
    path: "/home"
  },
  {
    name: "menuList.display",
    path: "/display"
  },
  {
    name: "menuList.about",
    path: "/about"
  },
  {
    name: "menuList.contact",
    path: "/contact"
  }
];

const goRoute = (data: any) => {
  setmenuVisible(false);
  router.push(data.path);
};

// 点击外部隐藏菜单
const hiddenNavWrap = () => {
  setmenuVisible(false);
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
  transition: all 1s ease-in-out;
  box-shadow: 0px 0px 3px 2px rgb(0 0 0 / 5%);
}
</style>
