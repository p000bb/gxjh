<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script setup lang="ts" name="About">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { onBeforeUnmount, shallowRef, computed } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

const props = withDefaults(defineProps<any>(), {
  modelValue: "",
  editorConfig: () => ({}),
  toolbarConfig: () => ({}),
  mode: "default"
});

const emits = defineEmits(["update:modelValue"]);

const editorRef = shallowRef();

const valueHtml = computed({
  get() {
    return props.modelValue ?? "";
  },
  set(val) {
    emits("update:modelValue", val);
  }
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

//     // 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

defineExpose({
  editorRef
});
</script>
<style scoped lang="scss"></style>
