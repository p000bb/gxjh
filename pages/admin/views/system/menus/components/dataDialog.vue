<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" width="800px" :close-on-click-modal="false" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" style="margin: 0 20px">
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="上级菜单：" prop="parentId">
            <el-tree-select
              v-model="form.parentId"
              :data="treeData"
              :props="{ value: 'id', label: 'name', children: 'children' }"
              value-key="id"
              placeholder="选择上级菜单"
              check-strictly
              filterable
              :render-after-expand="false"
              class="w-full"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="菜单类型" prop="type">
            <el-radio-group v-model="form.type">
              <el-radio :label="0">目录</el-radio>
              <el-radio :label="1">菜单</el-radio>
              <el-radio :label="2">按钮</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24" v-if="form.type !== 2">
          <el-form-item label="菜单图标" prop="iconPath">
            <el-popover placement="bottom-start" :width="800" :visible="showChooseIcon" trigger="click">
              <template #reference>
                <el-input v-model="form.iconPath" placeholder="点击选择图标" @click="showSelectIcon" readonly>
                  <template #prefix>
                    <!-- <svg-icon v-if="form.iconPath" :name="form.iconPath" style="height: 32px; width: 16px" /> -->
                    <component v-if="form.iconPath" :is="form.iconPath" style="height: 32px; width: 16px"></component>
                    <el-icon v-else style="height: 32px; width: 16px"><search /></el-icon>
                  </template>
                </el-input>
              </template>
              <icon-select
                ref="iconSelectRef"
                @visible="showSelectIcon"
                @selected="selected"
                v-click-outside="hideSelectIcon"
              />
            </el-popover>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="菜单名称：" prop="name">
            <el-input v-model="form.name" placeholder="请输入菜单名称" /> </el-form-item
        ></el-col>
        <el-col :span="12">
          <el-form-item label="排序：" prop="sort">
            <el-input-number v-model="form.sort" :min="0" controls-position="right" class="w-full" />
          </el-form-item>
        </el-col>
        <el-col :span="12" v-if="form.type !== 2">
          <el-form-item prop="link">
            <template #label>
              <span>
                <el-tooltip content="选择是外链则路由地址需要以`http(s)://`开头" placement="top">
                  <el-icon><question-filled /></el-icon>
                </el-tooltip>
                是否外链
              </span>
            </template>
            <el-radio-group v-model="form.link">
              <el-radio :label="true">是</el-radio>
              <el-radio :label="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12" v-if="form.type !== 2">
          <el-form-item prop="path">
            <template #label>
              <span>
                <el-tooltip
                  content="访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头"
                  placement="top"
                >
                  <el-icon><question-filled /></el-icon>
                </el-tooltip>
                路由地址
              </span>
            </template>
            <el-input v-model="form.path" placeholder="请输入路由地址" />
          </el-form-item>
        </el-col>
        <el-col :span="12" v-if="form.type === 1">
          <el-form-item prop="component">
            <template #label>
              <span>
                <el-tooltip content="访问的组件路径，如：`system/user/index`，默认在`views`目录下" placement="top">
                  <el-icon><question-filled /></el-icon>
                </el-tooltip>
                组件路径
              </span>
            </template>
            <el-input v-model="form.component" placeholder="请输入组件路径" />
          </el-form-item>
        </el-col>
        <el-col :span="12" v-if="form.type == '1'">
          <el-form-item>
            <template #label>
              <span>
                <el-tooltip content="选择是则会被`keep-alive`缓存，需要匹配组件的`name`和地址保持一致" placement="top">
                  <el-icon><question-filled /></el-icon>
                </el-tooltip>
                是否缓存
              </span>
            </template>
            <el-radio-group v-model="form.keepAlive">
              <el-radio :label="true">缓存</el-radio>
              <el-radio :label="false">不缓存</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12" v-if="form.type != '2'">
          <el-form-item prop="hidden">
            <template #label>
              <span>
                <el-tooltip content="选择隐藏则路由将不会出现在侧边栏，但仍然可以访问" placement="top">
                  <el-icon><question-filled /></el-icon>
                </el-tooltip>
                显示状态
              </span>
            </template>
            <el-radio-group v-model="form.hidden">
              <el-radio :label="false">显示</el-radio>
              <el-radio :label="true">隐藏</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
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
import { ref } from "vue";
import { getMenu, addMenu, updateMenu, getMenuList } from "@admin/api/menu";
import { ElMessage } from "element-plus";
import { arrayToTree } from "@admin/utils";
import IconSelect from "@admin/components/IconSelect/index.vue";
import { ClickOutside as vClickOutside } from "element-plus";

const emits = defineEmits(["getPageList"]);
const dialogTitle = ref<string>();
const dialogOpen = ref<boolean>(false);
const formRef = ref<any>();
const form = ref<any>({});
const treeData = ref<any>([]);
const rules = ref<any>({
  name: [
    {
      required: true,
      message: "请输入名称",
      trigger: "blur"
    }
  ],
  sort: [
    {
      required: true,
      message: "请输入排序",
      trigger: "change"
    }
  ],
  path: [
    {
      required: true,
      message: "请输入路由地址",
      trigger: "blur"
    }
  ],
  component: [
    {
      required: true,
      message: "请输入组件路径",
      trigger: "blur"
    }
  ],
  link: [
    {
      required: true,
      message: "请选择是否外链",
      trigger: "change"
    }
  ],
  hidden: [
    {
      required: true,
      message: "请选择显示状态",
      trigger: "change"
    }
  ]
});

const showChooseIcon = ref<boolean>(false);
const iconSelectRef = ref<any>();
/** 展示下拉图标 */
const showSelectIcon = () => {
  iconSelectRef.value?.reset();
  showChooseIcon.value = true;
};
/** 选择图标 */
const selected = (name: string) => {
  form.value.iconPath = name;
  showChooseIcon.value = false;
};
/** 图标外层点击隐藏下拉列表 */
const hideSelectIcon = () => {
  showChooseIcon.value = false;
};

const cancel = () => {
  dialogOpen.value = false;
};

const setComponents = (data: any) => {
  if (data.component) {
    return data.component;
  } else {
    return form.value.parentId === "0" ? "Layouts" : "ParentView";
  }
};

const submit = () => {
  formRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      if (form.value.id) {
        await updateMenu(form.value);
      } else {
        await addMenu({ ...form.value, component: setComponents(form.value) });
      }
      dialogOpen.value = false;
      ElMessage.success("操作成功");
      emits("getPageList");
    }
  });
};

const openDialog = async (data?: any) => {
  getTreeData();

  if (data?.id) {
    const reslut = await getMenu(data.id);
    form.value = {
      ...reslut.data
    };
    dialogTitle.value = "修改菜单";
    dialogOpen.value = true;
  } else {
    form.value = {
      parentId: data?.parentId,
      type: 0,
      link: false,
      hidden: false
    };
    dialogTitle.value = "新增菜单";
    dialogOpen.value = true;
  }
};

const getTreeData = async () => {
  const reslut = await getMenuList({ pageNum: 1, pageSize: 1000 });
  treeData.value = arrayToTree([...reslut.data.list, { id: "0", name: "根" }]) || [];
};

defineExpose({
  openDialog
});
</script>
<style scoped lang="scss"></style>
