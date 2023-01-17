<template>
  <div class="main-header">
    <div class="header-icon" @click="handleFold">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="header-content">
      <headerCrumb></headerCrumb>
      <headerInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useLayoutStore from "@/layout/store/layout_store";

import headerCrumb from "./headerCrumb.vue";

import headerInfo from "./headerInfo.vue";

const layoutStore = useLayoutStore();

const isFold = ref(false);

const handleFold = () => {
  isFold.value = !isFold.value;
  layoutStore.foldAction(isFold.value);
};
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  .header-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
