<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
        <p><span>1.你可以在这里添加新的商品或编辑已有的商品</span><span>2.新添加商品的时候可以同时进行入库（入库必须有数量和进阶）</span> 3.带<span class="star">*</span>的项目必填</p>
    </div>
    <div>
    <el-tabs type="border-card" >
  <el-tab-pane label="商品管理">
      <p><span class="star">*</span>所有分类：</p>
      <!-- 请选择 框-->
      <template>
  <el-select v-model="formData.category" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
<!-- 商品名称 -->
 <p><span class="star">*</span>商品名称：</p>
<el-input
  v-model="formData.name"
  clearable class="names">
</el-input>

 <p><span class="star">*</span>商品条形码：</p>
<el-input
  v-model="formData.barCode"
  clearable class="names">
</el-input>
  <el-button type="primary" @click='gotocode'>获取条形码</el-button>

<!-- 商品售价 -->
 <p><span class="star">*</span>商品售价：</p>
<el-input
  v-model="formData.salePrice"
  clearable class="names">
</el-input>元

<!-- 市场价： -->
 <p>市场价：</p>
<el-input
  v-model="formData.marketPrice"
  clearable class="names">
</el-input>元
<p class="text">默认市场价为售价的1.2倍</p>

<!-- 商品进价 -->
 <p>商品进价：</p>
<el-input
  v-model="formData.stockPrice"
  clearable class="names">
</el-input>元

<!-- 入库数量： -->
 <p>入库数量：</p>
<el-input
  v-model="formData.stockCount"
  clearable class="names">
</el-input>
<p class="text">记重单位为千克</p>

<!-- 商品重量 -->
 <p>商品重量：</p>
<el-input
  v-model="formData.commodityWeight"
  clearable class="names">
</el-input>

<!-- 商品重量 -->
 <p>商品单位：</p>
<el-input
  v-model="formData.commodityUnit"
  clearable class="names">
</el-input>

<!-- 会员优惠 -->
 <p>会员优惠：</p>
 <template>
  <el-radio v-model="formData.vipDiscount" label="1">享受</el-radio>
  <el-radio v-model="formData.vipDiscount" label="0">不享受</el-radio>
</template>

<!-- 会员优惠 -->
 <p>是否促销：</p>
 <template>
  <el-radio v-model="formData.promotion" label="2">启用</el-radio>
  <el-radio v-model="formData.promotion" label="3">禁用</el-radio>
</template>
<!-- 商品简介 -->
<p>商品简介:</p>
<el-input
  type="textarea"
  autosize
  v-model="formData.goodsDesc">
</el-input>
<div style="margin: 20px 0;"></div>
<p class="text">不能超过200个汉字</p>
<el-row>
  <el-button type="success" class='btn' @click='gotoadd'>添加</el-button>
</el-row>
      </el-tab-pane>
  <el-tab-pane label="添加商品">添加商品</el-tab-pane>
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
import { gotoartadd } from "../../../../api/api.js";
export default {
  data() {
    return {
      //  请选择
      options: [
        {
          value: "0",
          label: "衣服"
        },
        {
          value: "1",
          label: "生活用品"
        },
        {
          value: "2",
          label: "食品"
        }
      ],
      formData: {
        category: "2",
        name: "", //商品名
        barCode: "", //条形码
        salePrice: 0, //商品售价
        marketPrice: 0, //市场价
        stockPrice: 0, //进价
        stockCount: 0, //入库数量
        commodityWeight: 0, //商品重量
        commodityUnit: "", //商品单位
        vipDiscount: 0, //是否优惠
        promotion: 0, //是否促销
        goodsDesc: "" //产品介绍
      }
    };
  },
  methods: {
    gotoadd() {
      console.log(this.formData);
      gotoartadd(this.formData).then(res => {
        console.log(res);
        if (res.data == "ok") {
          alert("添加成功");
        }
      });
    },
    gotocode(){
      let str='';
      for(let i=0;i<18;i++){
       str+=Math.floor(Math.random()*10)
      }
      console.log(str)
            this.formData.barCode=str
    }

  }
};
</script>

<style scoped>
.names {
  width: 215px;
}
.text {
  margin: 5px;
  color: gray;
}
.star {
  color: red;
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
</style>