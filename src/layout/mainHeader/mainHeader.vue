<template>
  <div class="main-header">
    <div class="header-icon" @click="handleFold">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="header-content">
      <div class="breadcrumb">面包屑</div>
      <!-- <header-info /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["foldChange"]);
const isFold = ref(false);
const handleFold = () => {
  isFold.value = !isFold.value;
  emit("foldChange", isFold.value);
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
