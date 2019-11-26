<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
    </div>
    <div>
    <el-tabs type="border-card" >
  <el-tab-pane label="账号管理">


     <div class="key">
           <span class="text">搜索：</span>
        <el-input
  v-model="input"
  clearable class="names">
</el-input>
<span>&emsp;会员卡，会员名，电话，手机</span>
  <el-button type="success" class="btn">查询</el-button>
     </div>

<el-table
      :data="tableData"
      style="width: 100%"
      >

      <el-table-column
        prop="cardnum"
        label="会员卡卡号"
        min-width="85px"
        align="center">
      </el-table-column>

      <el-table-column
        prop="name"
        label="会员姓名"
        align="center">
      </el-table-column>

      <el-table-column 
        prop="membership"
        label="会员等级"
        align="center">
      </el-table-column>

       <el-table-column
        prop="integral"
        label="会员积分"
        align="center">
      </el-table-column>

       <el-table-column
        prop="discount"
        label="折扣"
        align="center">
      </el-table-column>

        <el-table-column
        prop="phone"
        label="手机号"     
        align="center">
      </el-table-column>

        <el-table-column
        prop="plane"
        label="座机号"
         min-width="50px"
         align="center">
      </el-table-column>

 <el-table-column
        prop="mesg"
        label="管理"
         min-width="50px"
         align="center">
      </el-table-column>
    </el-table>
<!-- 分页 -->
       <el-pagination class="page"
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
      </el-tab-pane>
      
          <el-tab-pane label="添加账号">
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
     input:'',
      // 列表
      tableData: [
        {
          cardnum: "6911989262549",
          name: "我的优乐美",
          membership: "优乐美",
          integral: "2.00",               
          discounts: "未促销",
          discount: "2.40",
          phone: "0（缺）",    
          plane: "0（缺）",      
          mesg: "0（缺）",    
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
  margin-left: 5px;
  background-color: #409eff;
  border: #409eff;
}
.page {
  margin-top: 20px;
}
.key{
    margin-top: 10px;
}
</style>