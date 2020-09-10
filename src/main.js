import Vue from 'vue'
import App from './App.vue'
//引入
import router from './router/index.js'
import store from '@/store'
import "@/mock/mockServer"//运行mockServer文件，让mock可以注册上接口

Vue.config.productionTip = false
//全局注册的各种组件
import TypeNav from '@/components/TypeNav'//引入
import SliderLoop from '@/components/SliderLoop'//引入
Vue.component('TypeNav',TypeNav)//注册组件 本质给构造函数和一个名字进行关联
Vue.component('SliderLoop',SliderLoop)//注册
new Vue({
  el:'#app',
  render: h => h(App), //1、定义带注册  2、使用组件  3、渲染（依赖vue的一个loader去解析的vue-template-compiler）
  router, //让所有的组件当中都可以多两个对象 $router路由器对象 和 $route路由对象 
  store,

  //1、注册App组件进行使用 不过缺少解析器没法渲染。想用必须导入带解析器的版本js
  // components:{
  //   App:App   //定义带注册  上面导入的App是定义组件所需的配置对象
  // },
  // template:'<App />' 
})
