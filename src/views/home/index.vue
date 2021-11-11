<template>
  <div><van-uploader v-model="fileList" :after-read="afterRead" /></div>
  <div>
    <van-button @click="$router.push('/photo/list')" type="primary">相册</van-button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    afterRead(file) {
      const formData = new FormData();
      formData.append("image", file.file);
      axios.post("/api/upload/image", formData).then((res) => {
        if (res?.data.code === 200) {
        }
      });
    },
  },
};
</script>
