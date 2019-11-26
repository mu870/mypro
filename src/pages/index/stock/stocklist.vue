<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
        <p>查看和管理所有已有商品</p>
    </div>
    <div>
    <el-tabs type="border-card" >
  <el-tab-pane label="商品管理">
      <!-- 请选择 框-->


        <el-select v-model="value" placeholder="选择分类">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
       <span class="text">关键字：</span>
        <el-input
  v-model="input"
  clearable class="names">
</el-input>
  <el-button type="success" class="btn">查询</el-button>
<el-table
      :data="tableData"
      style="width: 100%"
      >

      <el-table-column
        prop="code"
        label="商品条形码"
        min-width="85px"
        align="center">
      </el-table-column>

      <el-table-column
        prop="name"
        label="商品名称"
        align="center">
      </el-table-column>

      <el-table-column
        prop="purchasing"
        label="进价（元）"
        align="center">
      </el-table-column>

       <el-table-column
        prop="add"
        label="入库"
        align="center">
      </el-table-column>

       <el-table-column
        prop="repertory"
        label="库存"
        align="center">
      </el-table-column>

        <el-table-column
        prop="sold"
        label="已售"
        align="center">
      </el-table-column>

        <el-table-column
        prop="manage"
        label="管理"
         min-width="50px"
         align="center">
      </el-table-column>
    </el-table>
          <el-pagination class="page"
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
      </el-tab-pane>
</el-tabs>

<div class="footer">
    <p >
        &copy;Copyright 2018 华联超市管理系统
    </p>
</div>

    </div>

    </div>
</template>

<script>
    export default {
          data() {
      return {
    //  请选择     
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        },
        ],
        value: '',
           input: '',
        // 列表
 tableData: [{ 
            code: '6911989262549',
            name: '我的优乐美',
            purchasing: '7.00',
            add: '10',
            repertory: '5',
            sold: '2',
            manage: '0（缺）',

          },
         ]
      }
    }
  }
</script>

<style scoped>
.names{
    width: 215px;
}


.footer{
    color: rgb(199, 196, 196);
    padding: 10px 0px;
    margin-top: 20px;
    border-top: 1px solid rgb(199, 196, 196);
}

.btn{
    margin-left: 5px;
    background-color: #409EFF;
    border: #409EFF;
}
.page{
    margin-top: 20px;
}
</style>