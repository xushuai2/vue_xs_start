<template>

  <div class="hello">

    <mt-header fixed title="固定在顶部"></mt-header>

    <mt-header title="标题过长">
		  <router-link to="/" slot="left">
		    <mt-button icon="back" @click="handleClose">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right" @click="more"></mt-button>
		</mt-header>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 3"   :key="n" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4"   :key="n" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 3"   :key="n" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>

    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>
    </div>

    <div class="page-tab-container" >
      <mt-tab-container v-model="active"  class="page-tabbar-tab-container" swipeable>
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="n in 6" :key="n"  title="tab-container 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 7"  :key="n" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 4" :key="n"  title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    

    <mt-cell title="总量">
      <span style="color: green">{{num}}</span>
    </mt-cell>

    <mt-popup
      v-model="allLoaded"
      position="bottom">
      
        <mt-cell title="加载完毕"></mt-cell>
    </mt-popup>
    <!--  infinite-scroll-distance触发加载方法的滚动距离阈值（像素 -->
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      
      infinite-scroll-distance="5">
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>加载中...
    </p>
    <div  v-show="empty">
        <p>暂无客户信息</p>
    </div>
    <div  v-show="allLoaded">
        <p>加载完毕</p>
    </div>
  </div>

</template>

<script>
import Vue from "vue";
import { Cell ,Spinner,Popup,Indicator  } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Button } from 'mint-ui';
import { MessageBox } from 'mint-ui';

import { Navbar, TabItem } from 'mint-ui';
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

Vue.component(Button.name, Button);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.component(Cell.name, Cell);
Vue.component(Spinner.name, Spinner);
Vue.component(Popup.name, Popup);
export default {
  data () {
    return {
      list:[],
      empty: false,
      active:'tab-container1',
      allLoaded: false,
      num:100,
      selected:'1',
      loading: false// 加载更多中
    } 
  }
  ,
  created () {
      
      // 开始的时候加载前五条数据
      for (let i = 1; i <= 5; i++) {
        this.list.push(i);
      }
      
      MessageBox.confirm('确定执行此操作?').then(action => {
        this.num = 80;
      });
  },mounted () {
    
  },
  methods: {
    loadMore() {
      
      if(this.allLoaded){
          console.log('结束 ')
          Indicator.close();
          return;
      }
      
      console.log('load more ');
      this.loading = true;
      let last = this.list[this.list.length - 1];
      for (let i = 1; i <= 5; i++) {
        this.list.push(last + i);
      }
      if(this.list.length>=this.num){
        this.allLoaded = true;
      }
      //	如果该属性的值为true，则将禁用无限滚动
      this.loading = false;
      
    },
    handleClose: function(){
      console.log("返回")
    },
    more: function(){
      console.log("更多")
    }
  },computed:{
    
  }

}
</script>
<style scoped>
.hello {
   /* overflow: auto; */
    
}
</style>
