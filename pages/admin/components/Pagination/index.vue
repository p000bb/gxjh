<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      :background="background"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { scrollTo } from "@admin/utils/scroll-to";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Pagination",
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 50, 100];
      }
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const currentPage = computed({
      get() {
        return props.page;
      },
      set(val) {
        context.emit("update:page", val);
      }
    });
    const pageSize = computed({
      get() {
        return props.limit;
      },
      set(val) {
        context.emit("update:limit", val);
      }
    });
    const handleSizeChange = (val) => {
      if (currentPage.value * val > props.total) {
        currentPage.value = 1;
      }
      context.emit("pagination", { page: currentPage.value, limit: val });
      if (props.autoScroll) {
        scrollTo(0, 800);
      }
    };
    const handleCurrentChange = (val) => {
      context.emit("pagination", { page: val, limit: pageSize.value });
      if (props.autoScroll) {
        scrollTo(0, 800);
      }
    };

    return {
      currentPage,
      pageSize,
      handleSizeChange,
      handleCurrentChange
    };
  }
});
</script>

<style scoped>
.pagination-container {
  background: #fff;
  margin-bottom: 10px;
  margin-top: 28px;
  display: flex;
  justify-content: flex-end;
}
.pagination-container.hidden {
  display: none;
}
</style>
