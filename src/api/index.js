import Ajax from '@/ajax/Ajax'
//用来书写所有的接口请求函数
//15个接口函数
//请求三级分类列表数据
///api/product/getBaseCategoryList 请求地址
//GET：请求方式
//参数：无
export const reqCategoryList =()=>{
  return Ajax({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}