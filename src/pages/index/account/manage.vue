<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
        <p>查看所有管理员账号</p>
    </div>
    <div>
    <el-tabs type="border-card" >
  <el-tab-pane label="账号管理">
<el-table
      :data="tableData"
      style="width: 100%"
      >

      <el-table-column
        prop="account"
        label="用户名称"
        min-width="85px"
        align="center">
      </el-table-column>

      <el-table-column
        prop="userGroup"
        label="用户组"
        align="center">
      </el-table-column>


     

       <el-table-column
        prop="id"
        label="管理"
        align="center">
      </el-table-column>

      
    </el-table>
      </el-tab-pane>
       <el-tab-pane label="添加账号">
        </el-tab-pane>
         <el-tab-pane label="密码修改">
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
import {gotoupmanage} from '../../../../api/api.js'
export default {
  data() {
    return {
      //  请选择

      value: "",
      input: "",
      // 列表
      tableData: [],
    }
  },
  created(){
      gotoupmanage().then(res=>{
        let {data} =res
         this.tableData=data
      })
  }
};
</script>

<style scoped>
.footer {
  color: rgb(199, 196, 196);
  padding: 10px 0px;
  margin-top: 20px;
  border-top: 1px solid rgb(199, 196, 196);
}
</style>