<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="moveOutDiv" @mouseenter="moveInDiv">
        <h2 class="all">全部商品分类</h2>
        <transition name="show">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="toSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{item_on:currentIndex === index}"
                @mouseenter="moveIn(index)"
              >
                <!-- 移入哪一个一级分类 就把哪一个下标赋值给 currentIndex  那么移入的这个下标一定和currentIndex相等，其余不等-->
                <h3>
                  <!-- 字符串拼接 及 模板字符串 写法，路由跳转传query参数 -->
                  <!-- <router-link :to="'/search/?categoryName='+c1.categoryName + '&category1Id=' +c1.categoryId">{{c1.categoryName}}</router-link> -->
                  <!-- <router-link :to="`/search/?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}`"></router-link> -->
                  <!-- 使用声明式导航 牵扯到使用组件标签 组件标签多了 组件对象会非常多，就会造成效率低下（内存占用厉害） 会卡顿 -->
                  <!-- 因此我们不能使用声明式导航，采用编程式导航 -->
                  <!-- 对象写法 路由跳转传query参数 -->
                  <!-- <router-link
                  :to="{name:'search',query:{categoryName:c1.categoryName,category1Id:c1.categoryId}}"
                  >{{c1.categoryName}}</router-link>-->
                  <!-- 采用编程式导航每个a标签都要使用点击事件 又会导致事件回调函数太多 -->
                  <!-- <a
                  href="javascript:;"
                  @click="$router.push({name:'search',query:{categoryName:c1.categoryName,category1Id:c1.categoryId}})"
                  >{{c1.categoryName}}</a>-->
                  <!-- 每个a标签都添加事件效率仍然低下，采用事件委派处理更妥当 -->
                  <a
                    href="javascript:;"
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                  >{{c1.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                      <dt>
                        <!-- <router-link
                        :to="{name:'search',query:{categoryName:c2.categoryName,category2Id:c2.categoryId}}"
                        >{{c2.categoryName}}</router-link>-->
                        <!-- <a href>{{c2.categoryName}}</a> -->
                        <!-- <a
                        href="javascript:;"
                        @click="$router.push({name:'search',query:{categoryName:c2.categoryName,category2Id:c2.categoryId}})"
                        >{{c2.categoryName}}</a>-->
                        <a
                          href="javascript:;"
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                        >{{c2.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                          <!-- <router-link
                          :to="{name:'search',query:{categoryName:c3.categoryName,category3Id:c3.categoryId}}"
                          >{{c3.categoryName}}</router-link>-->
                          <!-- <a href>{{c3.categoryName}}</a> -->
                          <!-- <a
                          href="javascript:;"
                          @click="$router.push({name:'search',query:{categoryName:c3.categoryName,category3Id:c3.categoryId}})"
                          >{{c3.categoryName}}</a>-->
                          <a
                            href="javascript:;"
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                          >{{c3.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
// import _ from "lodash"; //体积过大
import throttle from "lodash/throttle";//节流
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1, //定义一个变量保存鼠标移入时元素的index 默认是-1 默认哪个也没进入
      isShow: true
    };
  },
  //挂载完成后
  mounted() {
    //这里可以获取vuex当mutations当中的数据
    // 判断路由路径 在home还是阿search
    if (this.$route.path !== "/home") {
      this.isShow = false;
    }

    //放在这里会发多次请求而请求的数据是一样的，挪到App当中发请求存数据（home/search都会发）
    // this.getCategoryList();
  },
  methods: {
    // getCategoryList() {
    //   //用户在触发响应的actions去发请求拿数据
    //   this.$store.dispatch("getCategoryList");
    // },
    //需要节流的函数
    // moveIn(index) {
    //   console.log(index)
    //   this.currentIndex = index;
    // }
    // moveIn: function(index){
    //   this.currentIndex = index
    // },
    //节流
    moveIn: throttle(
      function(index) {
        //console.log(index);
        this.currentIndex = index;
      },
      50,//触发时间间隔
      { trailing: false } //拖延 默认是true 50毫秒后执行 有可能有bug移出后效果也一直在  false是不拖延 立即执行
    ),
    //{ trailing: false }不让函数在拖延之后执行 也就是在时间间隔内执行完这个函数 不写有可能
    //移入到全部商品分类外部的div，显示三级分类列表
    moveInDiv() {
      this.isShow = true;
    },
    //移出全部商品分类外部的div，隐藏search的三级分类列表，home当中隐藏23级分类
    moveOutDiv() {
      this.currentIndex = -1;
      if (this.$route.path !== "/home") this.isShow = false;
    },

    toSearch(event) {
      let target = event.target; // 定义一个变量获取目标元素 代表目标元素 有可能是a 也可能不是a
      let data = target.dataset; //dataset 拿的是元素身上以data-开头的所有属性和值组成的一个对象 只是里面的属性都改成小写了
      // console.log(data);
      //解构data 拿出需要的属性
      let { categoryname, category1id, category2id, category3id } = data;
      if (categoryname) {
        //如果categoryname是存在的代表点的一定是a
        //既然点的是a 那么一定会跳转，所以我们创建跳转的对象
        //定义一个对象 （用来赋值跳转）
        let location = {
          name: "search" //要跳转到的路由组件
        };
        //创建query参数的对象，来收集整理query参数
        let query = {
          categoryName: categoryname
        };
        //判断 并携带query参数
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        //把query参数放到location当中
        location.query = query;
        //判断当前路由当中是不是有params参数 有就带上
        let { params } = this.$route; //从当前路由中解构出params
        if (params) {
          //如果有params参数 就带上
          location.params = params;
        }
        this.$router.push(location);
      }
    }
  },
  computed: {
    //可以去拿vuex当中state及getters当中的数据
    //1 最原始的写法
    //假设我们目前没有使用vuex的模块化开发，categoryList存在总的store的state当中
    // categoryList(){
    //   return this.$store.state.categoryList   //直接从store当中的state中获取这个数据就可以简写为数组
    // },

    // count(){
    //   return this.$store.state.count
    // }

    //... 扩展运算符  拆包和打包

    // 2、...mapState只是对原始写法的一个简写
    //mapState(['categoryList','count'])返回的对象就是上面的本质写法
    // {
    //   categoryList(){
    //     return this.$store.state.categoryList   //直接从store当中的state中获取这个数据就可以简写为数组
    //   },

    //   count(){
    //     return this.$store.state.count
    //   }
    // }

    // 3、mapState如果用到数组要求，名称必须和state当中名称一致才能正确映射，否则不行
    // 如果想要用自己随意起的名称，那么就要用对象写法
    // ...mapState({
    //   // category(){
    //   //   return this.$store.state.categoryList   //直接从store当中的state中获取这个数据就可以简写为数组
    //   // },
    //   category: state => state.categoryList
    // })

    // 4、如果vuex使用了模块化开发，就没办法获取state数据使用数组了，必须使用对象
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      &.show-enter {
        opacity: 0;
        height: 0;
      }
      &.show-enter-active {
        transition: all 0.5s;
      }
      &.show-enter-to {
        opacity: 1;
        height: 461px;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 615px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: orange;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
