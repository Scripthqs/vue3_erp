<template>
  <div class="main">
    <h2>main</h2>
    <h2>{{ counterStore.counter }}-{{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter">点击</button>

    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from "@/store/counter";
import { ElMessage } from "element-plus";
const counterStore = useCounterStore();
const changeCounter = () => {
  counterStore.changeCounter(123);
  ElMessage("this is a message.");
  ElMessage({
    message: "Congrats, this is a success message.",
    type: "success"
  });
};
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
