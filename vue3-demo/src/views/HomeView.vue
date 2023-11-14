<!--
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-09-05 15:19:57
 * @LastEditors: niezihao
 * @LastEditTime: 2023-11-10 12:18:14
-->
<script setup lang="ts">
import { ref } from "vue";

const linkList = ref([
  {
    name: "canvas",
    path: "/canvas",
  },
  {
    name: "watch",
    path: "/watch",
  },
  {
    name: "demo",
    path: "/demo",
  },
  {
    name: "upload",
    path: "/upload",
  },
]);
</script>

<template>
  <main>
    <div class="content">
      <ul class="router_ul">
        <router-link
          style="margin: 0 20px"
          v-for="link in linkList"
          :key="link.path"
          tag="li"
          active-class="activeClass"
          :to="link.path"
          >{{ link.name }}</router-link
        >
      </ul>
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped>
button {
  margin-right: 10px;
}
.router_ul {
  display: flex;
  justify-content: center;
  margin: 0;
  list-style: none;
  padding: 10px 0;
}
.router_ul li {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: all 0.3s;
}
.router_ul li.activeClass {
  background: #4d90fe;
  color: #fff;
  border: none;
}
</style>
