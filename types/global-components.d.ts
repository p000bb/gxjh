import SvgIcon from "@admin/components/SvgIcon/index.vue";
import Table from "@admin/components/Table/index.vue";
import ImageHover from "@/components/ImageHover/index.vue";

/** 由 app.component 全局注册的组件需要在这里声明 TS 类型才能获得 Volar 插件提供的类型提示） */
declare module "vue" {
  export interface GlobalComponents {
    SvgIcon: typeof SvgIcon;
    Table: typeof Table;
    ImageHover: typeof ImageHover;
  }
}

export {};
