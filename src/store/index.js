//引入声明并使用
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './home'
import user from './user'
import search from './search'
import detail from './detail'
import shopcart from './shopcart.js'


//存数据的地方 多个属性的对象
const state = {}
//直接修改数据的地方 不能出现if for 异步操作
const mutations = {}
//和用户对接的地方 也是多个方法的一个对象 方法中可以出现if for 异步操作
const actions = {}
//通过state计算出来的属性数据（只有读没有写，只能使用state数据，不能修改）
const getters = {}

//向外暴露一个Store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  //把每个小模块的小store合并到大的store
  modules:{
    home,
    user,
    search,
    detail,
    shopcart
  },
})