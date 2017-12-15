//vuex store.js
import Vue from 'vue';
import Vuex from 'vuex';


//引入modules
import  login from './modules/login'
import  detail from  './modules/detail'
import  category from './modules/category'

Vue.use(Vuex);

const store=new Vuex.Store({
  modules:{
    login,
    detail,
    category
  }

});

//es6中将对象暴露出去,然后在main.js中全局调用
export  default  store;
