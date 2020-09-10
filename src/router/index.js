//1引入并声明使用
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)//声明使用

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
//2必须往外暴露一个路由器对象
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    //代表没有传递处理的回调无论是成功还是失败
    return originPush.call(this,location).catch(() => {})
  }else{
    return originPush.call(this,location,onResolved,onRejected)
  }
}
VueRouter.prototype.replace = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
    //代表没有传递处理的回调无论是成功还是失败
    return originReplace.call(this,location).catch(() => {})
  }else{
    return originReplace.call(this,location,onResolved,onRejected)
  }
}

export default new VueRouter({
  routes:[
    {
      path:"/home",
      component:Home
    },
    {
      path:"/search/:keyword?",//?代表这个params参数可传可不传
      component:Search,
      name:"search",
      // props(route){
      //   //把路由对象接收到的参数，无论是什么参数，自己手动映射为路由组件的属性
      //   return {keyword:route.params.keyword,keyword2:route.query.keyword2}
      // }
    },
    {
      path:"/login",
      component:Login,
      meta:{
        isHide:true
      }
    },
    {
      path:"/register",
      component:Register,
      meta:{
        isHide:true
      }
    },
    {
      path:"/",
      redirect:"/home"
    }
  ],
})
//3、必须在vue当中去注入（使用）路由器对象 main.js当中去注入