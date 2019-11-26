<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
        <p>商品销售。带<span  class="star">*</span>为必填项目。先把商品加入订单后点<span  class="star">确认提交</span>完成</p>
    </div>
    <div>
    <el-tabs type="border-card" >
  <el-tab-pane label="商品出户">
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
<span class="text">记重商品单位为千克</span>



 <div>
      <el-button type="success mini" class="btn" size='mini'>加入订单</el-button>
      <a class="start">&emsp;重新出库</a>
 </div>


<el-table
      :data="tableData"
      style="width: 100%"
      >



      <el-table-column
        prop="name"
        label="名称"
        align="center">
      </el-table-column>

      <el-table-column
        prop="num"
        label="数量"
        align="center">
      </el-table-column>

       <el-table-column
        prop="price"
        label="单价（元）"
        align="center">
      </el-table-column>

       <el-table-column
        prop="totle"
        label="总价"
        align="center">
      </el-table-column>

        <el-table-column
        prop="discountstotle"
        label="优惠总价"     
        align="center">
      </el-table-column>
    </el-table>
      <div class="totle">
          总价：<span>0</span>元，
          优惠：<span>0</span>元，
          小计：<span>0</span>元，
      </div>
<!-- 会员卡号： -->
 <p>会员卡号：</p>
<el-input
  v-model="input1"
  clearable class="names">
</el-input>
<p class="text">填写会员卡卡号</p>



 <div>
      <el-button type="success mini" class="btn" size='mini'>确认提交</el-button>
 </div>


      </el-tab-pane>
      
          <el-tab-pane label="销售明细">
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
      // 列表
      input:'',
      input1:'',
      tableData: [
        {
          name: "我的优乐美",
          num: "优乐美",
          price: "2.00",               
          totle: "未促销",
          discountstotle: "2.40",
        },
      ]
    };
  }
};
</script>

<style scoped>
.names {
  width: 215px;
}

.footer {
  color: rgb(199, 196, 196);
  padding: 10px 0px;
  margin-top: 20px;
  border-top: 1px solid rgb(199, 196, 196);
}

.btn {
  margin-top: 10px;
  background-color: #409eff;
  border: #409eff;
}
.page {
  margin-top: 20px;
}

.star{
    color:red;
}
.text{
    color: gray;
    margin: 5px 0px;
}
.start{
    color: #409eff;
}
.totle{
    border-top:1px solid #DCDFE6; 
    border-bottom:1px solid #DCDFE6; 
    line-height: 40px;
}
</style>