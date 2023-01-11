<template>
  <div class="main">
    <h2>main</h2>
    <el-button @click="logout">退出登录</el-button>
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
  color: red;
}
</style>
