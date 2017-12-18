<template>
   <div>
     <v-header>
       <h1 slot="title">搜索页</h1>
     </v-header>
     <div>
       <mt-search v-model="search"  cancel-text="取消" placeholder="请输入要搜索的内容">

       </mt-search>
     </div>
   </div>
</template>

<script>
    import  Header from  '@/common/header.vue'
    import MtSearch from "mint-ui/packages/search/src/search";
    import MtCell from "mint-ui/packages/cell/src/cell";
    export default {
        name: "search",
        components:{
          MtCell,
          MtSearch,
          'v-header':Header
        },
        data(){
           return {
              search:''
           }
        },
        computed:{

        }



    }
</script>

<style scoped>

</style>
