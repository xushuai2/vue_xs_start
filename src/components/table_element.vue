<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    stripe
    border
    @row-click="handle"
    @selection-change="handleSelectionChange">

    <el-table-column
      type="selection"
      width="auto"
      >
    </el-table-column>


    <el-table-column
      label="日期"
      width="auto">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>

    <el-table-column
      prop="name"
      label="姓名"
      width="auto">
    </el-table-column>


    <el-table-column
      prop="address"
      label="地址"
      width="auto"
      show-overflow-tooltip>
    </el-table-column>


    <div style="margin-top: 20px">
    <van-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</van-button>
    <van-button @click="toggleSelection()">取消选择</van-button>
    </div>


  </el-table>
  
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎5',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎6',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎7',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(JSON.stringify(val));
      },
      handle(row, event, column) {
        console.log(row.name)
      }
    }
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>