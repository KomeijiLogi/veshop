import axios from 'axios'
import store from  '@/vuex/store.js'
import router from '../router'


const api=axios.create({
  baseURL:'http://api.com',
  timeout:5000,
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With':'XMLHttpRequest'
  }
});
// api.defaults.baseURL='http://api.com';
// api.defaults.timeout=5000;
// api.defaults.headers.post['Content-type']='application/x-www-form-urlencoded';
// api.defaults.headers.post['X-Requested-With']='XMLHttpRequest'


//请求拦截
api.interceptors.request.use(function (config) {
     //在发送请求之前所做操作
     store.commit('SET_LOADING',true);     //向vuex提交mutations,打开loading开关
     //如果有token,添加到请求报文，后台会根据该报文返回state
     if(store.state.login.token){
        config.headers.Authorization=`token ${store.state.login.token}`
     }
     return config;

},function (error) {
    //对请求错误所做操作
    alert('网络错误，请稍后再试');
    store.commit('SET_LOADING',false);    //关闭loading

    return Promise.reject(error);
});

//添加响应拦截器
api.interceptors.response.use(function (response) {
    //对响应数据做操作
    // 加到计时器主要是为了 展示Loading效果 项目中应去除

      setTimeout(()=>{
        store.commit('SET_LOADING',false);
      },300)

     return response;


},function (error) {
    //对响应错误所做操作
     store.commit('SET_LOADING',false);

     if(error.response){
        //根据返回的状态码进行判断处理
         if(error.response.status==401){
            // 401 unauthorized
            //如果返回401，表示没有权限，跳到登录页重新登录
            store.commit('CHANGE_TOKEN',0);

            alert('请重新登录');

            router.replace({
              path:'/login',
              query:{redirect :router.currentRoute.fullPath}
            })
         }
     }
  return Promise.reject(error);
});
export  default  api
