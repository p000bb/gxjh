<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" width="800px" :close-on-click-modal="false" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="角色名称：" prop="name">
            <el-input v-model="form.name" placeholder="请输入角色名称" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="菜单权限：">
            <el-checkbox v-model="menuExpand" @change="handleCheckedTreeExpand($event)">展开/折叠</el-checkbox>
            <el-checkbox v-model="menuNodeAll" @change="handleCheckedTreeNodeAll($event)">全选/全不选</el-checkbox>
            <el-checkbox v-model="menuCheckStrictly" @change="handleCheckedTreeConnect($event)">父子联动</el-checkbox>
            <el-tree
              class="tree-border"
              :data="menuTree"
              show-checkbox
              ref="menuRef"
              node-key="id"
              :check-strictly="!menuCheckStrictly"
              empty-text="加载中，请稍后"
              :props="{ label: 'name', children: 'children' }"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注：" prop="remark">
            <el-input type="textarea" v-model="form.remark" placeholder="请输入备注" />
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
import { ref, onMounted, getCurrentInstance } from "vue";
import { getRole, addRole, updateRole } from "@admin/api/role";
import { getMenuList } from "@admin/api/menu";
import { ElMessage, ElTree } from "element-plus";
import { arrayToTree } from "@admin/utils";

const { proxy } = getCurrentInstance() as any;
const emits = defineEmits(["getPageList"]);
const dialogTitle = ref<string>();
const dialogOpen = ref<boolean>(false);
const formRef = ref<any>();
const form = ref<any>({});
const rules = ref<any>({
  name: [
    {
      required: true,
      message: "请输入角色名称",
      trigger: "change"
    }
  ]
});

const cancel = () => {
  dialogOpen.value = false;
};

const submit = () => {
  formRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      form.value.menuIds = getMenuAllCheckedKeys();
      if (form.value.id) {
        await updateRole(form.value);
      } else {
        await addRole(form.value);
      }
      dialogOpen.value = false;
      ElMessage.success("操作成功");
      emits("getPageList");
    }
  });
};

const openDialog = async (data?: any) => {
  if (data?.id) {
    const reslut = await getRole(data.id);
    form.value = {
      ...reslut.data
    };
    dialogTitle.value = "修改角色";
    dialogOpen.value = true;
  } else {
    form.value = {
      state: 0
    };
    dialogTitle.value = "新增角色";
    dialogOpen.value = true;
  }
};

//#region 获取菜单
const menuTree = ref<any>([]);
const getMenuData = async () => {
  const reslut = (await getMenuList({ pageNum: 1, pageSize: 1000 })) as any;
  menuTree.value = arrayToTree(reslut.data.list) || [];
};

const menuExpand = ref<any>();
const menuNodeAll = ref<any>(false);
const menuCheckStrictly = ref<any>(true);

const menuRef = ref<InstanceType<typeof ElTree>>();
// 树权限（展开/折叠）
const handleCheckedTreeExpand = (value: any) => {
  let treeList = menuTree.value;
  for (let i = 0; i < treeList.length; i++) {
    proxy.$refs.menuRef.store.nodesMap[treeList[i].id].expanded = value;
  }
};

// 树权限（全选/全不选）
const handleCheckedTreeNodeAll = (value: any) => {
  menuRef.value?.setCheckedNodes(value ? menuTree.value : []);
};

// 树权限（父子联动）
const handleCheckedTreeConnect = (value: any) => {
  form.value.menuCheckStrictly = value ? true : false;
};

// 所有菜单节点数据
const getMenuAllCheckedKeys = () => {
  // 目前被选中的菜单节点
  let checkedKeys = menuRef.value?.getCheckedKeys() as any;
  // 半选中的菜单节点
  let halfCheckedKeys = menuRef.value?.getHalfCheckedKeys();
  checkedKeys.unshift.apply(checkedKeys, halfCheckedKeys);
  return checkedKeys;
};

//#endregion

onMounted(() => {
  getMenuData();
});

defineExpose({
  openDialog
});
</script>
<style scoped lang="scss">
.tree-border {
  margin-top: 5px;
  border: 1px solid #e5e6e7;
  background: #ffffff none;
  border-radius: 4px;
  width: 100%;
}
</style>
