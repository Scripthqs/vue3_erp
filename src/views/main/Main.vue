<template>
  <div class="main">
    <h2>main</h2>
    <h2>{{ counterStore.counter }}-{{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter"></button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from "@/store/counter";
const counterStore = useCounterStore();
const changeCounter = () => {
  counterStore.changeCounter(123);
};
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
