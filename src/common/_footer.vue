<template lang="html">
  <!-- gotoRouter:点击后路由跳转到与id名相同的route.name所对应的路径 -->

  <footer class="footer" @click.stop="gotoRouter">
     <!--fixed固定到底部-->
     <mt-tabbar v-model="selected" fixed>
       <mt-tab-item id="首页">
          <i slot="icon" class="icon-index"></i>
          首页
       </mt-tab-item>
       <mt-tab-item id="分类页">
          <i slot="icon" class="icon-category"></i>
          分类
       </mt-tab-item>
       <mt-tab-item id="购物车">
          <i slot="icon" class="icon-car"></i>
          购物车
       </mt-tab-item>
       <mt-tab-item id="用户页">
           <i slot="icon" class="icon-user"></i>
           我的
       </mt-tab-item>
     </mt-tabbar>
  </footer>
</template>

<script>
    import MtTabbar from "mint-ui/packages/tabbar/src/tabbar";
    import MtTabItem from "mint-ui/packages/tab-item/src/tab-item";

    export default {
      components: {
        MtTabItem,
        MtTabbar},
      name: "_footer",
      methods:{
         gotoRouter() {

         }
      },
      data(){

      },
      mounted(){

      }
    }
</script>

<style lang="less" scoped>

</style>
