<template>
  <div class="clue-wra">
    <h2>Essential Links  demo  shuai</h2>
    <h1>{{userIdxushuai}}</h1>
    <router-link to="HelloWorld">首页 hello world</router-link>
    <!-- <div class="hello22">
        <table  border="1"  align="center" cellspacing="1" cellpadding="10">
          <tr>
              <th>rand</th>
              <th>name</th>
              <th>math</th>
              <th>chinese</th>
              <th>english</th>
              <th>total</th>
          </tr>
          <tr v-for="(score,i) in scores">
              <td align="center">{{ i }}</td>
              <td v-for="v in score" align="center">{{ v }}</td>
          </tr>
        </table>
        
    </div> -->
    
<div class="table-wrap" slot="content">

    <el-table  
      :data="tableData"
      stripe
      style="width: 90%">
      <el-table-column
        prop="date"
        label="日期"
        min-width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="80">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

</div>
    

    折线图显示在这个div中，
    <div id="main" style="height: 300px;"></div>
    <van-button type="default" v-on:click="add">环形进度条add</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <h1>Vant Circle 环形进度条</h1>
    <van-circle
      v-model="currentRate"
      v-if="isshow"
      :rate="30"
      :speed="100"
      :text="text"
    />


    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>

    <van-cell-group>
      <van-cell center  icon="shop-o"  title="单元格" value="内容" />
      <van-cell center  title="单元格" value="内容" label="描述信息" />
    </van-cell-group>

    <van-icon name="chat-o" dot />
    <van-icon name="chat-o" info="9" />
    <van-icon name="chat-o" info="99+" />


      <van-image
        width="50"
        height="100"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />

      <van-image
      width="5rem"
      height="10rem"
      fit="contain"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />


    <van-image
      round
      width="5rem"
      height="10rem"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />

     <p> Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比此外，</p>
     <p> 添加offset属性可以设置列的偏移宽度，计算方式与 span 相同</p>

      <van-row>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>

      <van-row>
        <van-col span="4">span: 4</van-col>
        <van-col span="10" offset="4">offset: 4, span: 10</van-col>
      </van-row>

      <van-row>
        <van-col offset="12" span="12">offset: 12, span: 12</van-col>
      </van-row>


      <h1>Flex 布局</h1>
      <!-- 居中 -->
      <van-row type="flex" justify="center">
        <van-col span="6">居中span: 6</van-col>
        <van-col span="6">居中span: 6</van-col>
        <van-col span="6">居中span: 6</van-col>
      </van-row>

      <!-- 右对齐 -->
      <van-row type="flex" justify="end">
        <van-col span="6">右对齐 span: 6</van-col>
        <van-col span="6">右对齐 span: 6</van-col>
        <van-col span="6">右对齐 span: 6</van-col>
      </van-row>

      <h1>Vant Card 卡片</h1>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </div>
      </van-card>
  </div>

</template>

<script>

import echarts from 'echarts'

export default {
  data () {
    return {
      list:[],

      loading: false, // 加载更多中

      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],


      isshow:true,
      currentRate: 0,
      scores: [],
      userIdxushuai:'',
      charts: '',
      value1: 0,
      value2: 'a',
      /*  opinion: ["1", "3", "3", "4", "5"],*/
      opinionData: ["3", "2", "4", "4", "5"],
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ]
    } 
  }
  ,
  created () {
    
    let score ;
    let scoresDD = [
        { name: 'Bob', math: 97, chinese: 89, english: 67 },
        { name: 'Tom', math: 67, chinese: 52, english: 98 },
        { name: 'Jerry', math: 72, chinese: 87, english: 89 },
        { name: 'Ben', math: 92, chinese: 87, english: 59 },
        { name: 'Chan', math: 47, chinese: 85, english: 92 },
    ];
    for(score of scoresDD){
        score.total = score.math + score.chinese + score.english
    }
    console.log(scoresDD);
    for (let i=0; i<scoresDD.length-1; i++){
        for (let j=0; j<scoresDD.length-1-i; j++){
            if (scoresDD[j].total < scoresDD[j+1].total){
                let temp = scoresDD[j];
                scoresDD[j] = scoresDD[j+1];
                scoresDD[j+1] = temp;
            }
        }
    }
    
    console.log(scoresDD);
    this.scores = scoresDD;
  },mounted () {
    
    //alert(this.$route.params.userId);
    this.userIdxushuai = this.$route.params.userId;
    this.drawLine('main');
    this.$notify({ type: 'success', message: '提示文案xs' });
  },
  methods: {
    drawLine(id) {
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['近七日收益']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },

            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
            data: ["1","2","3","4","5"]
            
            },
            yAxis: {
                type: 'value'
            },

            series: [{
                name: '近七日收益',
                type: 'line',
                stack: '总量',
                data: this.opinionData
            }]
        })
    },
    add(){
      if(this.currentRate==100){
        this.isshow = false;
      }else{
        this.currentRate = this.currentRate+10;
      }
    }
  },computed:{
    text() {
      return this.currentRate.toFixed(0) + '%'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clue-wrap {
  width: 100%;
  .table-wrap {
    width: 90%;
    height: 100%;
  }


  @primary: #ff2d5d;
  @borderColor: #e5e5e5;
  .el-table__empty-text {
    width: 100%;
    position: absolute;
    top: 2%;
    line-height: 2rem;
  }
  .van-skeleton__row,
  .van-skeleton__title {
    height: 0.7rem;
  }
  .van-skeleton__row {
    width: 100% !important;
  }
  .el-table .caret-wrapper {
    width: auto;
  }
  .el-table th {
    padding: 4px 0;
    background-color: #fafafa;
  }
  .el-table .cell {
    padding: 0;
    text-align: center;
  }
  .el-table td:nth-child(1) .cell {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .el-table th:nth-child(1) {
    border-right: 1px solid @borderColor;
  }
  .el-table--enable-row-transition .el-table__body td {
    padding: 9px 0;
  }
  .el-table--enable-row-transition .el-table__body td:nth-child(1) {
    border-right: 1px solid @borderColor;
  }
  .el-table .ascending .sort-caret.ascending {
    border-bottom-color: @primary;
  }
  .el-table .descending .sort-caret.descending {
    border-top-color: @primary;
  }
  .el-table__empty-block {
    width: 100% !important;
  }
  .icon-play .van-icon .van-icon-play {
    color: #ccc;
    position: relative;
    top: 2px;
    left: -1px;
  }
}
</style>
