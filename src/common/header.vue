<template>
   <header>
     <router-link class="icon-go" :to="{name:'首页'}"
      v-if="$route.matched[0].path=='/category'"
     >
     </router-link>
     <span class="icon-go" @click="$router.go(-1)" v-else></span>
     <slot name="title"></slot>
   </header>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style lang="less" scoped>
  @import '../assets/fz.less';
  @import '../assets/index/style.less';
  header {

    background-color: #F8FCFF;
    text-align: center;
    position: relative;
    height: 12vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4vw;
    h1 {
      .fz(font-size, 34);
      letter-spacing: .2vw;
      font-weight: 600;
      margin-right: 36vw;
    }
    span, a {
      display: inline-block;
      .fz(font-size, 46);
      transform: rotate(-180deg);
      &::before {
        color: #333;
      }
    }
  }
</style>
