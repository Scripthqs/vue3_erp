<template>
  <div class="App">
    <h2>App</h2>
  </div>
</template>

<script setup lang="ts">
import apiRequest from "@/service";
import { API } from "@/service/api";
let url = API.countByPager;
console.log(url, "url------");

apiRequest.get({ url }).then((res) => {
  console.log(res);
});
</script>

<style lang="less" scoped>
.App {
  color: red;
}
</style>
