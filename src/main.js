// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import 'vant/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css'

import {InfiniteScroll  } from 'mint-ui'
// 需要注意的是，样式文件需要单独引入
import 'mint-ui/lib/style.css'
Vue.use(InfiniteScroll )

import {
  Button,
  NavBar,
  Skeleton,
  Field,
  Cell,
  CellGroup,
  Toast,
  Tab,
  Tabs,
  Card,
  Tag,
  Col, 
  Row,
  DropdownMenu,
  DropdownItem,
  Icon,
  RadioGroup,
  Radio,
  Pagination,
  PullRefresh,
  List,
  Image,
  Notify,
  Circle,
  Popup
} from "vant";


import { Table, TableColumn,Backtop } from "element-ui";

Vue.use(Table).use(TableColumn).use(Backtop);

Vue.use(Button)
  .use(Circle)
  .use(NavBar)
  .use(Skeleton)
  .use(Field)
  .use(Cell)
  .use(CellGroup)
  .use(Toast)
  .use(Tab)
  .use(Tabs)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Icon)
  .use(RadioGroup)
  .use(Radio)
  .use(Pagination)
  .use(PullRefresh)
  .use(List)
  .use(Image) 
  .use(Col)
  .use(Row)
  .use(Card)
  .use(Tag)
  .use(Notify)
  .use(Popup);
Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

