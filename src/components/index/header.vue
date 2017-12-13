<template lang="html">
  <mt-header title="e商城">
     <router-link :to="{name:''}" slot="right">
       <mt-button icon="search"></mt-button>
     </router-link>
  </mt-header>
</template>

<script>
    import MtHeader from "mint-ui/packages/header/src/header";
    import MtButton from "mint-ui/packages/button/src/button";

    export default {
      components: {
        MtButton,
        MtHeader},
      name: "header"
    }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
  .mint-header {
    padding: 6.8vw 4.8vw;
    background-color: #fff;
    color: #333!important;
    .fz(font-size, 40)!important;
  }
</style>
