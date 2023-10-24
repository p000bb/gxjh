<template>
  <div class="text-center">
    <div>
      <ul class="menu menu-horizontal bg-base-200 rounded-box">
        <li>
          <a class="home">{{ $t("menuList.home") }}</a>
        </li>
        <li>
          <a class="about">{{ $t("menuList.about") }}</a>
        </li>
        <li>
          <a class="dynamic">{{ $t("menuList.dynamic") }}</a>
        </li>
        <li>
          <a class="contact">{{ $t("menuList.contact") }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.menu {
  @apply w-fit #{!important};
}
</style>
