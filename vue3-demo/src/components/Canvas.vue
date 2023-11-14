<!--
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-09-20 10:28:54
 * @LastEditors: niezihao
 * @LastEditTime: 2023-11-10 11:05:02
-->

<template>
  <main>
    <canvas ref="canvas" id="canvas" width="150" height="150"></canvas>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeMount } from "vue";

// const canvas: any = ref();
function getCanvas() {
  const canvas: any = document.getElementById("canvas"); // 得到DOM对象
  console.log("dom", canvas.getContext("2d"));
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d"); // 得到渲染上下文
    // 设边框
    // ctx.strokeStyle='rgb(50,50,50)'
    // ctx.strokeRect(0, 0, canvas.width, canvas.height);
    // 设背景
    // ctx.fillStyle='rgb(50,50,50)'
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // 绘制第一个长方形
    // ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 55, 50);

    // 绘制第二个长方形
    // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50);
    //清除
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 填充三角形
    // 描边三角形
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(125, 25);
    ctx.lineTo(25, 125);
    ctx.closePath(); // 手动闭合路径
    ctx.stroke();
  }
}

onMounted(() => {
  getCanvas();
  // console.log(canvas.value.getContext("2d"));
});
</script>
