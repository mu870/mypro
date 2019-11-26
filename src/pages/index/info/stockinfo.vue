<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
        <p>进货统计。本统计使用的插件：jqPlot</p>
    </div>
    <div>
    <el-tabs type="border-card" >
        <el-tab-pane label="销售数据统计">
            <!-- 时间选择框 -->
            <span>时间：</span>
 <el-date-picker
      v-model="value1"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>

      <el-button type="success mini" class="btn">查询</el-button>
      </el-tab-pane> 
      <div id="chart2"></div>
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
        value1:'',
      }
    },
     mounted() {
    this.$charts.line2('chart2');
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
 #chart2 {
    width: 1000px;
    height: 400px;
    margin-top: 20px;
  }
</style>