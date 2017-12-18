<template>
   <div>
     <v-header>
       <h1 slot="title">搜索页</h1>
     </v-header>
     <div>
       这里是搜索页面，施工中...
     </div>
   </div>
</template>

<script>
    import  Header from  '@/common/header.vue'
    export default {
        name: "search",
        components:{
           'v-header':Header
        }
    }
</script>

<style scoped>

</style>
