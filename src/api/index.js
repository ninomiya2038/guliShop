import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'
//用来书写所有的接口请求函数
//15个接口函数
//请求三级分类列表数据
///api/product/getBaseCategoryList 请求地址
//GET：请求方式
//参数：无
export const reqCategoryList = () => {
  return Ajax({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}
//请求获取mock的banner和floor的数据
export const reqBannerList = () => {
  return mockAjax({
    url: '/banner',
    method: 'get'
  })
}
export const reqFloorList = () => {
  return mockAjax({
    url: '/floor',
    method: 'get'
  })
}
//请求获取search页商品列表数据 /api/list
//请求方式post
//data 请求体参数
export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url: '/list',
    method: 'post',
    data: searchParams //必须是对象 代表的是搜索参数 如果里面什么都没有 只是一个{}也没问题
    //返回的是所有的商品信息
    //如果搜索参数中有东西 那返回的就是按照这些参数搜索到的商品信息
    //但是不能不传参数
  })
}
// 请求获取商品详情数据
///api/item/{ skuId }    get
export const reqGoodsDetailInfo = (skuId) => {
  return Ajax({
    url: `/item/${skuId}`,
    method: 'get',
  })
}
//请求添加购物车（修改购物车数量） /api/cart/addToCart/{ skuId }/{ skuNum }
//post
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>{
  return Ajax({
    url: `/cart/addToCart/${ skuId }/${ skuNum }`,
    method: 'post'
  })
}
//请求获取购物车列表数据  /api/cart/cartList  get
export const reqShopCartList = ()=>{
  return Ajax({
    url:'/cart/cartList',
    method:'get'
  })
}
//请求修改购物车的选中状态  /api/cart/checkCart/{skuId}/{isChecked}   GET

export const reqUpdateCartIsChecked = (skuId,isChecked) => {
  return Ajax({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
  })
}

//请求删除购物车  /api/cart/deleteCart/{skuId}  delete
export const reqDeleteCart = (skuId) => {
  return Ajax({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
  })
}

//请求注册用户  /api/user/passport/register  post  

export const reqUserRegister = (userInfo) => {
  return Ajax({
    url:'/user/passport/register',
    method:'post',
    data:userInfo
  })
}

//请求登录用户  /api/user/passport/login  post 

export const reqUserLogin = (userInfo) => {
  return Ajax({
    url:'/user/passport/login',
    method:'post',
    data:userInfo
  })
}

//请求退出登录 /api/user/passport/logout get

export const reqUserLogout = () => {
  return Ajax({
    url:'/user/passport/logout',
    method:'get',
  })
}

//请求获取订单交易信息 /api/order/auth/trade  get

export const reqTradeInfo = () => {
  return Ajax({
    url:'/order/auth/trade',
    method:'get'
  })
}


//请求提交订单（创建订单）  /api/order/auth/submitOrder?tradeNo={tradeNo}    post


export const reqSubmitOrder = (tradeNo,tradeInfo) => {
  return Ajax({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method:'post',
    data:tradeInfo
  })
}


//请求获取支付信息 /api/payment/weixin/createNative/{orderId}  get
export const reqPayInfo = (orderId) => {
  return Ajax({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
  })
}