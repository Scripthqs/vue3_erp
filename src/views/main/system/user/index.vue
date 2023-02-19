<template>
  <!-- <Transition>
    <div v-if="show">屠龙宝刀，点击就送</div>
  </Transition> -->
  <div class="fadeBox">
    <button @click="() => (show = !show)">点击</button>
    <Transition name="fade" mode="out-in">
      <div v-if="show">屠龙宝刀，点击就送</div>
      <div v-else>一刀999</div>
    </Transition>
  </div>

  <div>
    <button @click="switchCom">点击切换组件</button>
    <Transition mode="out-in" appear>
      <component :is="comName ? home : about"></component>
    </Transition>
  </div>

  <div>
    <button @click="addItem">添加</button>
    <button @click="removeItem">删除</button>
  </div>
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import home from "./components/home.vue";
import about from "./components/about.vue";

const show = ref(false);
const comName = ref(false);
const switchCom = () => {
  comName.value = !comName.value;
};

const items = reactive([1, 2, 3, 4, 5, 6]);
const addItem = () => {
  items.push(items.length + 1);
};
const removeItem = () => {
  items.pop();
};
</script>

<style lang="less" scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.fadeBox {
  width: 500px;
  height: 100px;
}
@keyframes fadeFrom {
  from {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
    color: red;
    font-size: 30px;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active {
  animation: fadeFrom 2s ease;
}
.fade-leave-active {
  animation: fadeFrom 2s reverse;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
