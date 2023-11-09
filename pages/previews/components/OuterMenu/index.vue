<template>
  <header class="w-fullpy-8 select-none z-50 bg-gradient-to-b from-gray-900 to-transparent">
    <nav :class="navClass" class="text-right p-10">
      <button class="hamburger w-6 h-6 link relative z-50" @click="setmenuVisible(!menuVisible)">
        <div class="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
      </button>
    </nav>
    <div :class="navWrap" v-click-outside="hiddenNavWrap">
      <div class="menus">
        <ul class="text-black">
          <li
            v-for="(item, index) in menuList"
            :key="index"
            class="m-4 text-center hover:bg-slate-400 h-10 leading-10"
            @click="goRoute(item)"
            :class="{ 'text-sky-500': item.path === route.path }"
          >
            {{ $t(item.name) }}
          </li>
          <li class="m-4 text-center h-10 leading-10">
            <LanguageSelect />
          </li>
        </ul>
      </div>
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
];

const goRoute = (data: any) => {
  console.log(route);
  setmenuVisible(false);
  router.push(data.path);
};

// 点击外部隐藏菜单
const hiddenNavWrap = () => {
  // menuVisible.value = false;
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
  width: 260px;
  height: 100%;
  position: fixed;
  top: 0;
  left: -260px;
  background-color: #fff;
  z-index: 9;
  box-sizing: border-box;
  padding-top: 100px;
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 3px 2px rgb(0 0 0 / 5%);
}
</style>
