<template>
  <jsx></jsx>
</template>

<script lang="jsx" setup>
import { ref } from "vue";
const text = ref("hello world");
const btnClick = () => {
  text.value = "屠龙宝刀，点击就送";
};

const jsx = () => (
  <div class="app">
    <h2>{text.value}</h2>
    <button onClick={btnClick}>点击</button>
  </div>
);
</script>

<style lang="less" scoped>
.hello {
  font-size: 20px;
  color: red;
}
</style>
