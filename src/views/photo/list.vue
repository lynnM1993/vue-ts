<template>
    <div>
        <img class="image" :src="'http://localhost:7001' + item" v-for="(item) of list">
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        data() {
           return {
                list: []
           }
        },
        created() {
            axios.get('/api/photo/list').then(res => {
                if(res.data.code === 200 ){
                    this.list = res.data.data
                }
            })
        },
    }
</script>
<style scoped>
.image{
    width: 100%;
}
</style>
