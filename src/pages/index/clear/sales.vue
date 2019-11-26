<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
        <p>查看和管理所有已有商品</p>
    </div>
    <div>
    <el-tabs type="border-card" >
  <el-tab-pane label="商品明细">
      <!-- 开始时间-->
<span>开始时间：</span>

    <el-date-picker
      v-model="value1"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions">
    </el-date-picker>
     <!-- 结束时间-->
<span>&emsp;结束时间：</span>

    <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions">
    </el-date-picker>

     <div class="key">
           <span class="text">关键字：</span>
        <el-input
  v-model="input"
  clearable class="names">
</el-input>
<span>&emsp;商品名称，订单号，客户名字，会员卡号</span>
  <el-button type="success" class="btn">查询</el-button>
     </div>

<el-table
      :data="tableData"
      style="width: 100%"
      >

      <el-table-column
        prop="order"
        label="订单号"
        min-width="85px"
        align="center">
      </el-table-column>

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
        label="实际售价"
        align="center">
      </el-table-column>

       <el-table-column
        prop="discounts"
        label="优惠（促销/会员）"
        align="center">
      </el-table-column>

        <el-table-column
        prop="return"
        label="退款"     
        align="center">
      </el-table-column>

        <el-table-column
        prop="date"
        label="销售时间"
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
      
          <el-tab-pane label="商品出库">
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
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      input: "",
    //   开始和结束
       pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      // 列表
      tableData: [
        {
          order: "6911989262549",
          name: "我的优乐美",
          num: "优乐美",
          price: "2.00",               
          discounts: "未促销",
          return: "2.40",
          date: "0（缺）",
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