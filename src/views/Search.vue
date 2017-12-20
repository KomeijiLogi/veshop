<template>
   <div>
     <v-header>
       <h1 slot="title">搜索页</h1>
     </v-header>
     <div>
       <mt-search v-model="search"  cancel-text="取消" placeholder="请输入要搜索的内容"
       >
          <mt-cell v-for="k in result" :title="k.title">
             <router-link :to="{name:'详情页'}">
                <span>{{k.title}}</span>
             </router-link>
          </mt-cell>

       </mt-search>
     </div>
   </div>
</template>

<script>
    import  Header from  '@/common/header.vue'
    import MtSearch from "mint-ui/packages/search/src/search";
    import MtCell from "mint-ui/packages/cell/src/cell";
    import category from '@/http/mock.js'
    import { Search } from 'mint-ui';

    export default {
        name: "search",
        components:{
          MtCell,
          MtSearch,
          'v-header':Header
        },
        data(){
           return {
              search:'',
              result:''
           }
        },
        computed:{

        },
        created(){
          this.$api({
            url:'/category',
            method:'post'
          }).then((res)=>{
            this.result=res.data;
          }).catch((error)=>{
            console.log(error);
          });
        }



    }
</script>

<style scoped>

</style>
