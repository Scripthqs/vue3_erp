<template>
  <div class="login">
    <div class="loginBgd">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <div class="loginForm">
      <h1>登录</h1>
      <div class="controls">
        <el-checkbox v-model="isSave" label="记住密码" size="large" />
        <el-link type="primary">忘记密码</el-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import apiRequest from "@/service";
import { API } from "@/service/api";
let url = API.countByPager;
console.log(url, "url------");
apiRequest.get({ url }).then((res) => {
  console.log(res);
});
const isSave = ref(false);
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #080710;

  .loginBgd {
    width: 500px;
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    .shape {
      height: 200px;
      width: 200px;
      position: absolute;
      border-radius: 50%;
    }
    .shape:first-child {
      background: linear-gradient(#1845ad, #23a2f6);
      left: -80px;
      top: -80px;
    }
    .shape:last-child {
      background: linear-gradient(to right, #ff512f, #f09819);
      right: -80px;
      bottom: -80px;
    }
  }
  .loginForm {
    width: 400px;
    height: 520px;
    background-color: rgba(255, 255, 255, 0.13);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  }
  .controls {
    display: flex;
    justify-content: space-between;
  }
}
</style>
