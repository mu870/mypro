<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
        <p>商品退货！</p>
    </div>
    <div>
    <el-tabs type="border-card" >
  <el-tab-pane label="销售明细">
      </el-tab-pane>
     <el-tab-pane label="商品出库">
      </el-tab-pane> 
        <el-tab-pane label="商品退货">
              <span>会员卡号：</span>
<el-input
  v-model="input1"
  clearable class="names">
</el-input>
      <el-button type="success mini" class="btn">查询</el-button>
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
     input1:''

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
</style>