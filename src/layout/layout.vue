<template>
  <div class="main">
    <el-container class="layout">
      <el-aside :width="isFold ? '60px' : '200px'">
        <MainMenu :isFold="isFold"></MainMenu>
      </el-aside>
      <el-container>
        <el-header>
          <MainHeader></MainHeader>
        </el-header>
        <el-main>
          <Router-view></Router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import MainMenu from "./mainMenu/mainMenu.vue";
import MainHeader from "./mainHeader/mainHeader.vue";

import useLayoutStore from "@/layout/store/layout_store";
const layoutStore = useLayoutStore();

const isFold = computed(() => layoutStore.isFold);
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
.layout {
  height: 100%;
  .el-aside {
    background-color: #304156;
    transition: width 0.3s ease;
  }
  .el-header {
    background-color: #ffffff;
  }
  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
