<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <LikeList></LikeList>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
//引入组件
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import LikeList from './LikeList'
import Floor from './Floor'
import Brand from './Brand'
export default {
  name: 'Home',
  //注册组件
  components:{
    ListContainer,
    Recommend,
    Rank,
    LikeList,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped>

</style>
