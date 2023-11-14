<!--
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-09-20 10:28:54
 * @LastEditors: niezihao
 * @LastEditTime: 2023-11-10 10:38:44
-->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import WatchChild from "./WatchChild.vue";

const WChild =ref()


onMounted(() => {
console.log('WChild',WChild.value.newObj);
console.log('WChild',WChild.value.aa);
  
})
let obj = ref({
  name: "nzh",
  age: 18,
});
const num = ref(0);
function demo() {
  const value = {
    name: "nzh",
    value() {
      console.log("基于根组件创建 vnode");
    },
  };
  return value
}
function changeAge() {
  console.log('demo1',demo().name);
  console.log('demo2',demo().value);
  
  //   obj.value = { name: "nzh", age: 18 };
  obj.value.age++;
  //   console.log(obj);
}
</script>

<template>
  <main>
    <button @click="changeAge">减一岁</button><br />
    姓名：{{ obj.name }}<br />
    年龄：{{ obj.age }}
    <WatchChild ref="WChild" :obj="obj" :num="num"></WatchChild>
  </main>
</template>
