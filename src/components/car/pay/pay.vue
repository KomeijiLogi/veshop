<template lang="html">
   <div class="pay">
      <v-header>
         <h1 slot="title">支付订单</h1>
      </v-header>
      <div class="pay-address">
          <div>
            <p class="main-address-per">收货人:<span>X先生</span></p>
            <p class="main-address-tel">123456</p>
          </div>
          <p>收货地址:<span>XX省XX市XX区XX大街XX路XX号</span></p>
      </div>
      <div class="pay-product">
         <ul v-if="!confirm">
            <li v-for="k in carList">
              <a>
                <img :src="k.imgPath" alt=""/>
                <div>
                   <h2><span style="color:#ee7150;">{{k.size}}-{{k.col}}</span>-{{k.title}}-</h2>
                   <p>{{k.price}}</p>
                </div>
              </a>
            </li>
         </ul>
         <!--支付成功后的提示-->
        <div class="pay-confirm" v-else> 
           支付成功!
          <!--当页面数据清空<br/>-->
          <!--购物车列表重新设置-->
        </div>
      </div>

   </div>
</template>

<script>
    import Header from "../../index/header";

    export default {
      components: {'v-header': Header},
      name: "pay",
        data(){
          return{
             confirm:''
          }
        }
    }
</script>

<style scoped>

</style>
