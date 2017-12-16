const STORAGE_USER_KEY='STORAGE_USER_KEY';

export default {
    //获取
    getLocal(key=STORAGE_USER_KEY){
        //给key附初始值STORAGE_USER_KEY
        //根据key来从localstorage中取值
         return JSON.parse(window.localStorage.getItem(key));
    },
    //设置用
    setLocal(res,key=STORAGE_USER_KEY,isSaveOldData=false){
        //isSaveOldData为true时，会新增数据而不是重新设置，res必须为数组
        if(isSaveOldData){
           if(this.getLocal(key)){
               let oldData=this.getLocal(key);
               //将根据key获取的oldData拼接res数组作为新的value，存储到localstorage中
               return window.localStorage.setItem(key,JSON.stringify(oldData.concat(res)));
           }
        }
        return window.localStorage.setItem(key,JSON.stringify(res));
    }

}


