<!--
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-11-10 12:10:07
 * @LastEditors: niezihao
 * @LastEditTime: 2023-11-14 16:02:00
-->
<template>
  <div>
    <h1>File Upload</h1>
    <input
      type="file"
      name="file"
      required
      :multiple="true"
      ref="file"
      id="file"
      style="display: none"
      @change="onChange"
    />
    <button @click="submit">Upload</button>
    <div v-for="item of fileList">{{ item.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import axios from "axios";

type FileList = {
  name: string;
};

let fileList: FileList[] = reactive([]);

function submit() {
  file.value.click();
}

function onChange(e: any) {

  const formData = new FormData();

  formData.append("file", file.value.files[0]);

  axios({
    url: "/api/upload",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });

  fileList.push(file.value.files[0]);
}
const file = ref();


function handleClick(){
  axios.get('/api/static/1f43b629e41667325d54ac2da8c4c3e4', { responseType: 'blob' })
  .then(response => {
    const imageUrl = URL.createObjectURL(response.data);
    console.log(imageUrl);
    
    // 使用 imageUrl 进行展示或其他操作
  })
  .catch(error => {
    console.error(error);
    // 处理错误
  });
}

</script>
