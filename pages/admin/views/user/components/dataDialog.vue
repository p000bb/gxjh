<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" width="800px" :close-on-click-modal="false" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
      <el-row :gutter="40">
        <el-col :span="24">
          <el-form-item label="所属部门：" prop="deptId">
            <el-tree-select
              v-model="form.deptId"
              :data="deptTree"
              :props="{ value: 'id', label: 'name', children: 'children' }"
              value-key="id"
              placeholder="选择所属部门"
              check-strictly
              filterable
              :render-after-expand="false"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户昵称：" prop="nickname">
            <el-input v-model="form.nickname" placeholder="请输入用户昵称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户状态" prop="state">
            <el-radio-group v-model="form.state">
              <el-radio :label="0">正常</el-radio>
              <el-radio :label="1">禁用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户账号：" prop="account">
            <el-input v-model="form.account" placeholder="请输入用户账号" />
          </el-form-item>
        </el-col>
        <el-col :span="12" v-if="!form.id">
          <el-form-item label="用户密码：" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入用户密码" show-password />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电话号码：" prop="phone">
            <el-input v-model="form.phone" placeholder="请输入名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱" />
          </el-form-item>
        </el-col>
        <!-- <el-col :span="24">
          <el-form-item label="所属角色：" prop="role">
            <el-select v-model="form.role" placeholder="请选择所属角色" multiple clearable style="width: 100%">
              <el-option v-for="(item, index) in roleList" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col> -->
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
import { ref, onMounted } from "vue";
import { getUser, addUser, updateUser } from "@admin/api/user";
import { getRoleList } from "@admin/api/role";
import { getDeptList } from "@admin/api/dept";
import { ElMessage } from "element-plus";
import { arrayToTree } from "@admin/utils";

const emits = defineEmits(["getPageList"]);
const dialogTitle = ref<string>();
const dialogOpen = ref<boolean>(false);
const formRef = ref<any>();
const form = ref<any>({});
const rules = ref<any>({
  name: [
    {
      required: true,
      message: "请输入名称",
      trigger: "change"
    }
  ],
  sort: [
    {
      required: true,
      message: "请输入排序",
      trigger: "change"
    }
  ],
  phone: [
    {
      pattern: /^1[3456789]\d{9}$/,
      message: "请输入正确的手机号",
      trigger: "blur"
    }
  ],
  email: [
    {
      pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/,
      message: "请输入正确的邮箱",
      trigger: "blur"
    }
  ],
  account: [
    {
      required: true,
      message: "请输入用户账号",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入用户密码",
      trigger: "blur"
    }
  ],
  deptId: [
    {
      required: true,
      message: "请选择所属部门",
      trigger: "change"
    }
  ],
  nickname: [
    {
      required: true,
      message: "请输入用户昵称",
      trigger: "blur"
    }
  ]
});

const cancel = () => {
  dialogOpen.value = false;
};

const submit = () => {
  formRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      if (form.value.id) {
        await updateUser(form.value);
      } else {
        await addUser(form.value);
      }
      dialogOpen.value = false;
      ElMessage.success("操作成功");
      emits("getPageList");
    }
  });
};

const openDialog = async (data?: any) => {
  if (data?.id) {
    const reslut = await getUser(data.id);
    form.value = {
      ...reslut.data
    };
    dialogTitle.value = "修改用户";
    dialogOpen.value = true;
  } else {
    form.value = {
      state: 0
    };
    dialogTitle.value = "新增用户";
    dialogOpen.value = true;
  }
};

//#region 获取部门树
const deptTree = ref<any[]>([]);
const getTreeData = async () => {
  const reslut = await getDeptList({ pageSize: 1000 });
  deptTree.value = arrayToTree(reslut.data.list) || [];
  deptArray.value = reslut.data.list || [];
};
//#endregion

//#region 获取角色
const roleList = ref<any[]>([]);
const getRoleArray = async () => {
  const reslut = await getRoleList();
  roleList.value = reslut.data.list || [];
};
//#endregion
onMounted(() => {
  getTreeData();
  getRoleArray();
});

defineExpose({
  openDialog
});
</script>
<style scoped lang="scss"></style>
