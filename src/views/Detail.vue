<template lang="html">
   <div class="detail">
      <v-swiper></v-swiper>
      <v-chose></v-chose>
      <v-content></v-content>
      <v-baseline></v-baseline>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Swiper from '@/components/detail/swiper.vue'
    import Chose from '@/components/detail/chose.vue'
    import Content from '@/components/detail/content.vue'
    import Footer from '@/components/detail/footer.vue'
    import Baseline from '@/common/baseline.vue'
    import detail from '@/http/mock.js'
    export default {
        name: "detail",
        components:{
          'v-swiper':Swiper,
          'v-chose':Chose,
          'v-content':Content,
          'v-baseline':Baseline,
          'v-footer':Footer
        },
        beforeCreate(){
           this.$store.dispatch('setDatas');
        }
    }
</script>

<style lang="less" scoped>
  .detail {
    width: 100%;
    padding-bottom: 14vw;
  }
</style>
