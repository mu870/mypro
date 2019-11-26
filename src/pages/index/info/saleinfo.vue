<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
        <p>数据统计。本统计使用的插件：jqPlot</p>
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

    <!-- 选择器 -->

     &nbsp; <el-select v-model="value" clearable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

      <el-button type="success mini" class="btn">查询</el-button>
      </el-tab-pane> 
      <div id="chart1"></div>
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
        }],
        value:'',
        value1:'',
      }
    },
     mounted() {
    this.$chart.line1('chart1');
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
 #chart1 {
    width: 1000px;
    height: 400px;
    margin-top: 20px;
  }
</style>