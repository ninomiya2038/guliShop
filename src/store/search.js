import { reqGoodsListInfo } from "@/api"

//存数据的地方，多个属性的对象
const state = {
  goodsListInfo:{},

}
//直接修改数据的地，是多个方法的一个对象  方法当中不能出现if  for   异步操作
const mutations = {
  RESEIVEGOODSLISTINFO(state,goodsListInfo){
    state.goodsListInfo = goodsListInfo
  }
}


//和用户对接的地方  也是多个方法的一个对象 方法当中可以出现if  for  异步操作
const actions = {
  async getGoodsListInfo({commit},searchParams){
    const result = await reqGoodsListInfo(searchParams)
    if(result.code===200){
      commit('RESEIVEGOODSLISTINFO',result.data)
    }
  }
}

//通过state计算出来的属性数据（只有读没有写，只能使用state数据不能修改state数据）
const getters = {
  attrsList(state){
    //  ||[] 只是为了防止异步请求数据没回来时候 获取到的是undefined undefined在后期取数据会报错
    return state.goodsListInfo.attrsList || []
  },
  goodsList(state){
    return state.goodsListInfo.goodsList || []
  },
  trademarkList(state){
    return state.goodsListInfo.trademarkList || []
  },

}

export default {
  state,
  mutations,
  actions,
  getters
}