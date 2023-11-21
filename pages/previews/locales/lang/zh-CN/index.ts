import { genMessage } from "@/locales";

const modules = import.meta.glob("./**/*.json", { eager: true });

export default {
  ...genMessage(modules, "zh-CN")
};
