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
       state.count=Util.getLocal('carList').length
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
      vm.$api({
         method:'post',
         url:'/detail'
      }).then((response)=>{
         commit('SET_DATAS',response.data)
      });
   },
   //购物车数量增减,true是加，false是减
   setLocalCount({commit},bool=true){
      let count=Util.getLocal('count')||0;
      if(bool){
        Util.setLocal(++count,'count');
      }else {
        Util.setLocal(--count,'count');
      }
      commit(types.CHANGE_COUNT);
   },

   //往购物车列表里添加数据
   addCarList({commit},res){
      Util.setLocal(res,'carList',true);
      commit(types.ADD_PRODUCT);
   },

   //重新设置购物车商品列表，把打勾并提交的商品去掉，保留unSelectedList
   resetCarList({commit,getters}){
      const unSelectedList=Util.getLocal('unSelectedList');
      Util.setLocal(unSelectedList,'carList');
      commit(types.RESET_CARLIST);
   },

   //删除购物车的某一项，实际上是用新数组代替原数组
   cutCarList({commit},res){
      Util.setLocal(res,'carList');
      commit(types.RESET_CARLIST);
   },

   //重置购物车商品数量，即没打勾的商品数量
   resetCount({commit,getters}){
      const count=Util.getLocal('unSelectedList').length;
      Util.setLocal(count,'count');
      commit(types.RESET_COUNT);
   },

   //分别保存打勾和未打钩的商品
   setSelectedList({commit,getters}){
      Util.setLocal(getters.selectedList,'selectedList');
      //commit(types.SET_SELECTEDLIST);
      commit('SET_SELECTEDLIST');
      Util.setLocal(getters.unSelectedList,'unSelectedList');
      //commit(types.SET_UNSELECTEDLIST);
      commit('SET_UNSELECTEDLIST');
   }


}

//如同计算属性，处理state的某几个状态
const getters={
   selectedList(state){
      //choseBool为真的商品，即购物车里打钩的商品
     if(state.carList!==''){
        let arr=state.carList.filter((ele)=>{
           return ele.choseBool == true  ;
        });
        return arr;
     }
   },
   unSelectedList(state){
     if(state.carList!==''){
        let arr=state.carList.filter((ele)=>{
           return ele.choseBool==false;
        });
        return arr;
     }
   }

}

export default {
  state,
  mutations,
  actions,
  getters
}
