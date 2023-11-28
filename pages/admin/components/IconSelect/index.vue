<template>
  <div class="icon-body">
    <el-input
      v-model="name"
      style="position: relative"
      clearable
      placeholder="请输入图标名称"
      @clear="filterIcons"
      @input.native="filterIcons"
    >
      <i slot="suffix" class="search el-input__icon" />
    </el-input>
    <div class="icon-list">
      <!-- <div v-for="(item, index) in iconList" :key="index" @click="selectedIcon(item)">
        <svg-icon :name="item" style="height: 30px; width: 30px; margin-right: 20px; font-size: 1rem" />
        <span>{{ item }}</span>
      </div> -->
      <div v-for="(item, index) in elIconList" :key="index" @click="selectedIcon(item)">
        <component :is="item" style="height: 30px; width: 30px; margin-right: 20px; font-size: 1rem"></component>
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import icons from "./requireIcons";
import elementIcons from "./requireElementIcons";

export default defineComponent({
  name: "IconSelect",
  data() {
    return {
      name: "",
      iconList: icons,
      elIconList: elementIcons
    };
  },
  methods: {
    filterIcons() {
      // this.iconList = icons;
      if (this.name) {
        console;
        this.elIconList = elementIcons.filter((item) => item.includes(this.name));
      }
    },
    selectedIcon(name) {
      this.$emit("selected", name);
      document.body.click();
    },
    reset() {
      this.name = "";
      this.elIconList = elementIcons;
    }
  }
});
</script>

<style lang="scss" scoped>
.icon-body {
  width: 100%;
  padding: 10px;
  .icon-list {
    height: 200px;
    overflow-y: scroll;
    div {
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      cursor: pointer;
      width: 30%;
      float: left;
      display: flex;
      align-items: center;
    }
    span {
      display: inline-block;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
}
</style>
