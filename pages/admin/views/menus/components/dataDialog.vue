<template>
  <el-dialog
    :title="dialogTitle"
    v-model="dialogOpen"
    width="40%"
    :close-on-click-modal="false"
    destroy-on-close
  >
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
      <el-form-item label="名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入名称" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">保 存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const emits = defineEmits(['getData'])
const dialogTitle = ref<string>()
const dialogOpen = ref<boolean>(false)
const formRef = ref<any>()
const form = ref<any>({})
const rules = ref<any>({
  code: [
    {
      required: true,
      message: '请输入代码',
      trigger: 'change',
    },
  ],
  name: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'change',
    },
  ],
  classify: [
    {
      required: true,
      message: '请选择类型',
      trigger: 'change',
    },
  ],
})

const cancel = () => {
  dialogOpen.value = false
}

const submit = () => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      if (form.value.id) {
      } else {
      }
    }
  })
}
const openDialog = async (data?: any) => {
    dialogTitle.value = "新增菜单"
    dialogOpen.value = true
}


defineExpose({
  openDialog,
})
</script>
<style scoped lang="scss"></style>
