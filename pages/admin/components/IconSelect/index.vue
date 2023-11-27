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
      <div v-for="(item, index) in iconList" :key="index" @click="selectedIcon(item)">
        <svg-icon :name="item" style="height: 50px; width: 50px; margin-right: 20px; font-size: 2rem" />
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import icons from "./requireIcons";
export default defineComponent({
  name: "IconSelect",
  data() {
    return {
      name: "",
      iconList: icons
    };
  },
  methods: {
    filterIcons() {
      this.iconList = icons;
      if (this.name) {
        this.iconList = this.iconList.filter((item) => item.includes(this.name));
      }
    },
    selectedIcon(name) {
      this.$emit("selected", name);
      document.body.click();
    },
    reset() {
      this.name = "";
      this.iconList = icons;
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
      height: 80px;
      line-height: 80px;
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
