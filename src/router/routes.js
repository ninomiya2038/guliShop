import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'

export default[
  {
    path:'/trade',
    component:Trade
  },
  {
    path:'/pay',
    component:Pay
  },
  {
    path:'/paysuccess',
    component:PaySuccess
  },
  {
    path:"/shopcart",
    component:ShopCart
  },
  {
    path:"/addcartsuccess",
    component:AddCartSuccess
  },
  {
    path:"/detail/:skuId",
    component:Detail
  },
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
]