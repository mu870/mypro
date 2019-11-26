<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
        <p>查看和管理商品库存</p>
    </div>
    <div>
    <el-tabs type="border-card" >
  <el-tab-pane label="商品管理">
      <!-- 请选择 框-->

<el-select v-model="select">
    <el-option
      v-for="item in list"
      :key="item.value"
      :label="item.name"
      :value="item.index">
    </el-option>
  </el-select>
      
       <span class="text">关键字：</span>
        <el-input
  v-model="input"
  clearable class="names">
</el-input>
  <el-button type="success" class="btn" @click="check">查询</el-button>
<el-table
      :data="tableData"
      style="width: 100%"
      >

      <el-table-column
        prop="barCode"
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
        prop="category"
        label="所属分类"
        align="center">
      </el-table-column>

       <el-table-column
        prop="salePrice"
        label="售价（元）"
        align="center">
      </el-table-column>

       <el-table-column
        prop="promotion"
        label="促销价（元）"
        align="center">
      </el-table-column>

        <el-table-column
        prop="marketPrice"
        label="市场价（元）"
        align="center">
      </el-table-column>

        <el-table-column
        prop="vipDiscount"
        label="优惠"
         min-width="50px"
         align="center">
      </el-table-column>

        <el-table-column
        prop="promotion"
        label="是否促销"
        align="center">
      </el-table-column>
      
 <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>

    </el-table>
       <el-pagination class="page"
  background
  layout="prev, pager, next"
  :total="total" :page-size="pagecell"  @current-change="handleCurrentChange">
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
import { gotoartlist } from "../../../../api/api.js";
import cator from "../../../json/cator.json";
export default {
  data() {
    return {
      pagecell: 2,
      total: 0,
      select: 2,
      input: "",
      list: [], //分类列表数据
      tableData: [],
      val:1
    };
  },
  created() {
    var arr;
    this.list = cator;
   this.render(1,this.input,this.select)
  },
  methods: {
    
    handleCurrentChange(val) {
      this.val=val
      this.render(this.val,this.input,this.select)
    },
    check(){
      this.render(this.val,this.input,this.select)
    },
     render(val, input = "", value = "") {
        gotoartlist(this.pagecell,this.val,input,value
        ).then(res => {
          let arr = res.data.data;
          this.total = res.data.total;
          for (let item of arr) {
            item.vipDiscount = item.vipDiscount == "1" ? "开启" : "关闭";
            item.promotion = item.promotion == "2" ? "促销中" : "无促销";
          }
          this.tableData = arr;
        });
      }
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
</style>