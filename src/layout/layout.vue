<template>
  <div class="main">
    <el-container class="common-layout">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from "@/global/constants";
import router from "@/router";
import { localCache } from "@/utils/cache";
import { ElMessage } from "element-plus";

const logout = () => {
  // 1.删除token
  localCache.removeCache(LOGIN_TOKEN);
  // 2.跳到登录页面
  router.push("/login");
  ElMessage({ message: "退出登录！", type: "success" });
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
.common-layout {
  height: 100%;
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #304156;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-header {
    background-color: #ffffff;
  }
  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
