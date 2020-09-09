<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <LikeList></LikeList>
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :floor="floor"></Floor>
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
import { mapState } from 'vuex'
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
  },
  mounted() {
    this.getFloorList()
  },
  methods: {
    getFloorList(){
      this.$store.dispatch('getFloorList')
    }
  },
  computed: {
    ...mapState({
      floorList:state =>state.home.floorList
    })
  },
}
</script>

<style lang="less" scoped>

</style>
