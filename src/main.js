import Vue from 'vue'
import App from './App.vue'
//引入路由器组件
import router from './router/index.js'
//引入vuex对象组件
import store from '@/store'
import "@/mock/mockServer"//运行mockServer文件，让mock可以注册上接口

Vue.config.productionTip = false

//全局注册的各种组件
import TypeNav from '@/components/TypeNav'//引入
import SliderLoop from '@/components/SliderLoop'//引入
Vue.component('TypeNav',TypeNav)//注册组件 本质给构造函数和一个名字进行关联
Vue.component('SliderLoop',SliderLoop)//注册

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this//vm
    //在Vue的原型上添加了一个属性  $bus   $bus指向了一个对象 这个对象就是我们vm对象
    //1、为什么要在Vue原型上添加   
    //（让所有的组件对象都能看到它，找到它）
    // 组件对象原型的原型就是vm的原型
    //2、事件总线对象必须能够使用$on和$emit，$on和$emit 两个是在Vue的原型当中
  },
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
