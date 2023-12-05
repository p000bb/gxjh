<template>
  <header class="w-full to-transparent absolute overscroll-none max-sm:right-2" v-lazy-data="getData">
    <nav :class="navClass" class="p-10 flex justify-between flex-row-reverse">
      <svg-icon
        name="gxjh-logo"
        class="text-3xl z-50 order-2 transition1s hover:cursor-pointer"
        :class="logoColor"
        v-if="showLogo"
        @click="goHome"
      />
      <button class="hamburger w-16 h-10 link relative z-50 order-1" @click="setmenuVisible(!menuVisible)">
        <div class="relative flex-none w-ful flex items-center justify-center" :class="hamburgerColor"></div>
      </button>
    </nav>
    <div :class="navWrap" class="w-screen top-[-100vh] max-md:left-[-100vw] max-md:top-0 flex">
      <div class="menus w-[435px] max-w-full p-9">
        <nav class="grid gap-2 place-items-start pt-32">
          <a
            :class="{ 'text-sky-500': item.path === route.path || item.path === route.meta.activeMenu }"
            class="link link-hover text-3xl mb-5 font-gxjh-light"
            v-for="(item, index) in menusDict"
            :key="index"
            @click="goRoute(item)"
            >{{ $t(item.name) }}</a
          >
        </nav>
        <nav class="m-4 text-left absolute bottom-3 font-gxjh-light">
          <LanguageSelect />
        </nav>
      </div>
      <div
        class="w-full grid pl-10 pr-10 grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 max-[500px]:hidden font-gxjh-light"
      >
        <div
          class="h-full flex justify-center flex-col border-img p-10"
          v-for="(item, index) in arrayImg"
          :key="index"
          :class="setImgClass(index)"
        >
          <div class="h-fit">
            <preview-media :data="item" class="mb-10 hover:cursor-zoom-in" @click="open(item)" />
            <p class="text-xl">{{ item?.name || "高兴就好" }}</p>
            <p class="text-5xl" v-html="translateData(item)"></p>
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
import { getNodeList } from "@admin/api/node";
import { translateData } from "@/hooks/useI18n";

const navStore = useNavStore();
const router = useRouter();
const route = useRoute();
const menuVisible = ref<boolean>(false);

const arrayImg = ref<any[]>([]);
const getData = async () => {
  getNodeList({ parentId: "254708653490176000" }).then((res: any) => {
    arrayImg.value = res.data.list || [];
  });
};

const setImgClass = (index: number) => {
  if (index === 1) {
    return "max-md:hidden";
  } else if (index === 2) {
    return "max-xl:hidden";
  }
};
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

const open = (data: any) => {
  setmenuVisible(false);
  router.push({
    path: "/display-detail",
    query: {
      id: 1,
      type: "img"
    }
  });
};

// 返回首页
const goHome = () => {
  router.push({ name: "Home" });
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
      transition: all 1.5s ease;
      -webkit-box-pack: center;

      &:before,
      &:after {
        content: "";
        z-index: 1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        top: -0.5rem;
        height: 0.125rem;
        background: inherit;
        transition: all 1.5s ease;
      }

      &:after {
        top: 0.5rem;
      }
    }
  }
}

.page_nav_wrap.sidebar-nav-open {
  left: 0;
  top: 0;
}

.page_nav_wrap {
  height: 100vh;
  position: fixed;
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
  margin-top: 30px;
}
</style>
