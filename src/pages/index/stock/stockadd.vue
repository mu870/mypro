<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
        <p>商品入库。带<span class="star">*</span>为必填</p>
    </div>
    <div>
    <el-tabs type="border-card" >
  <el-tab-pane label="商品入库">
<!-- 商品条形码： -->
 <p><span class="star">*</span>商品条形码：</p>
<el-input
  v-model="input"
  clearable class="names">
</el-input>
<!-- 商品数量： -->
 <p><span class="star">*</span>数量：</p>
<el-input
  v-model="input1"
  clearable class="names">
</el-input>
<p class="text">记重单位为千克</p>

<!-- 进价： -->
 <p><span class="star">*</span>进价：</p>
<el-input
  v-model="input2"
  clearable class="names">
</el-input>元
<el-row>

  <el-button type="success" size="mini" class="btn">入库</el-button>
</el-row>
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
    
// 商品名称
        input: '',
        input1: '',
        input2: '',

      }
    }
  }
</script>

<style scoped>
.names{
    width: 215px;
}
.text{
    margin: 5px;
    color: gray;
}
.star{
    color:red;
}

.footer{
    color: rgb(199, 196, 196);
    padding: 10px 0px;
    margin-top: 20px;
    border-top: 1px solid rgb(199, 196, 196);
}
.btn{
    margin-top: 10px;
     background-color: #409EFF;
    border: #409EFF;
}
</style>