<template>
   <!--在首页发送http请求后，将数据通过props传递子组件,可减少请求次数,减少服务器压力-->
   <div class="index">
      <v-header></v-header>
      <v-swiper :swiperData="datas.swiper"></v-swiper>
      <v-service></v-service>
      <v-section1 :section1="datas.section1"></v-section1>
      <v-section2 :section2="datas.section2"></v-section2>
      <v-section3></v-section3>
      <v-section4 :section4="datas.section4"></v-section4>
      <v-baseline></v-baseline>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Header from  '@/components/index/header.vue'
    import Swiper from '@/components/index/swiper.vue'
    import Service from '@/components/index/service.vue'
    import Section1 from '@/components/index/section1.vue'
    import Section2 from '@/components/index/section2.vue'
    import Section3 from '@/components/index/section3.vue'
    import Section4 from '@/components/index/section4.vue'
    import Baseline from '@/common/baseline.vue'
    import Footer from '@/common/footer.vue'
    import Index from '@/http/mock.js'
    export default {
        name: "index",
        components:{
          'v-header':Header,
          'v-swiper':Swiper,
          'v-service':Service,
          'v-section1':Section1,
          'v-section2':Section2,
          'v-section3':Section3,
          'v-section4':Section4,
          'v-baseline':Baseline,
          'v-footer':Footer

        },
        data(){
            return{
              datas:'',
              loading:true
            }

        },
        beforeCreate(){
           this.$api({
             url:'/index',
             method:'post'
           }).then((response)=>{
             this.datas=response.data;
           })
             .catch((error)=>{
               console.log(error);
             })
        }


    }
</script>

<style lang="less" scoped>
  .index {
    width: 100%;
    padding-bottom: 14vw;
    background-color: #F8FCFF;
  }
</style>
