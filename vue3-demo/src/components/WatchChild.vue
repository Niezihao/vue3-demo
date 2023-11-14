<!--
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-09-20 10:28:54
 * @LastEditors: niezihao
 * @LastEditTime: 2023-11-14 15:24:11
-->
<script setup lang="ts">
import { watch, ref, reactive } from "vue";

const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
  num: {
    type: Number,
    required: true,
  },
});
let newObj = reactive({
  name: "11",
  age: 11,
});
defineExpose({ newObj });

watch(
  () => props.obj,
  (newValue, oldValue) => {
    console.log("newValue", newValue);
    newObj = JSON.parse(JSON.stringify(newValue as any));
    newObj.age++;
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <main>
    姓名：{{ newObj.name }}<br />
    年龄：{{ newObj.age }}<br />
  </main>
</template>
