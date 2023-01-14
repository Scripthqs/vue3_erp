<template>
  <div class="main">
    <el-container class="layout">
      <el-aside :width="isFold ? '60px' : '200px'">
        <MainMenu :isFold="isFold"></MainMenu>
      </el-aside>
      <el-container>
        <el-header>
          <MainHeader @foldChange="handleFoldChange"></MainHeader>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import MainMenu from "./mainMenu/mainMenu.vue";
import MainHeader from "./mainHeader/mainHeader.vue";

const isFold = ref(false);
const handleFoldChange = (isChange: boolean) => {
  isFold.value = isChange;
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
.layout {
  height: 100%;
  .el-aside {
    background-color: #304156;
  }
  .el-header {
    background-color: #ffffff;
  }
  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
