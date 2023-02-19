<template>
  <test></test>
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
const text = ref("hello world");
const btnClick = () => {
  text.value = "屠龙宝刀，点击就送";
};
const test = () =>
  h("div", { className: "hello" }, [
    h("button", { onClick: btnClick }, "点击"),
    h("div", null, text.value)
  ]);
</script>

<style lang="less" scoped>
.hello {
  font-size: 20px;
  color: red;
}
</style>
