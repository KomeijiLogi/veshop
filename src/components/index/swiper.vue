<template lang="html">
   <mt-swipe :auto="4000" v-if="swiperData">

   </mt-swipe>
</template>

<script>
    import MtSwipe from "mint-ui/packages/swipe/src/swipe";

    export default {
      components: {MtSwipe},
      name: "swiper",
        props:['swiperData']
    }
</script>

<style lang="less" scoped>
  .mint-swipe {
    width: 100%;
    height:50vw;
    a,img {
      display: block;
      width: 100%;
      height:100%;
    }
  }
</style>
