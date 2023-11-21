import { genMessage } from "@/locales";

const modules = import.meta.glob("./**/*.json");

export default {
  ...genMessage(modules, "zh-CN")
};
