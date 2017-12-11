import Util from '../../util/common'
import  * as types from '../types'
import Vue from 'vue'

//vuex state容器

const state={
   productDatas:'',    //detail父组件请求当前页面的商品数据
   colSelected:0,      //0为index ，第一个
   sizeSelected:0,     //0为index , 第一个
   count:0,             //购物车中商品数量
   carList:'',          //购物车的商品列表
   fetchLoading:false,    //全局加载状态的loading
   selectedList:'',         //已选择的购物车商品列表
   unSelectedList:''        //未选择的购物车商品列表,提交后订单里用它替换cardList
}

//根据vuex，要想改变store中储存的状态，必须通过store.commit('对应mutations名') ，即提交mutations

/*
*
*
*    购物车逻辑：
*    unSelectedList：未打钩的购物车商品列表
*    SelectedList：已勾选的购物车商品列表
*    carList:购物车商品列表
*    当支付成功之后,购物车列表需要减掉SelectedList，留下unSelectedList
*    直接用unSelectedList替换当前carList即可
*
*
* */


const mutations={
    //[],es6中计算属性命名功能来使用一个常量作为函数名


    //异步请求的数据
    [types.SET_DATAS](state,res){
       state.productDatas=res;
    },

    //商品详情页中颜色的选择
    [types.CHANGE_COL_SELECTED](state,res){
       state.colSelected=res;
    },

    //商品详情页中尺寸的选择
    [types.CHANGE_SIZE_SELECTED](state,res){
      state.sizeSelected=res;
    },


    //向购物车列表里添加商品
    [types.ADD_PRODUCT](state,res){
       state.carList=Util.getLocal('carList');
    },

    //获取当前购物车商品的数量
    [types.CHANGE_COUNT](state,res){
       state.count=Util.getLocal('count');
    },

    //重置购物车
    [types.RESET_CARLIST](state,res){
       state.carList=Util.getLocal('carList');
    },

    //重置购物车数量
    [types.RESET_COUNT](state,res){
       state.count=Util.getLocal('carList').length;
    },

    //loading开关
    [types.SET_LOADING](state,res){
       state.fetchLoading=res;
    },

    //购物车里打钩的商品
     ['SET_SELECTEDLIST'](state,res){
        state.selectedList=Util.getLocal('selectedList');
     },


     //购物车里未打钩的商品
      ['SET_UNSELECTEDLIST'](state){
         state.unSelectedList=Util.getLocal('unSelectedList');
      }


}

let vm=new Vue({});

//actions 提交mutations,不直接更改状态(通过store.dispatch触发)

const  actions={
   //从父组件发送异步请求
   setDatas({commit}){

   }

}


