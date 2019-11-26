<template>
    <div>
     <div>   
        <h1><span>欢迎您</span>&nbsp;<span>admin</span></h1>
        <p>添加和编辑会员账号。带<span class="star">*</span>的项目必填</p>
    </div>
    <div>
    <el-tabs type="border-card" >
  <el-tab-pane label="商品管理">
<!-- 真实名字： -->
 <p><span class="star">*</span>真实名字：</p>
<el-input
  v-model="input"
  clearable class="names">
</el-input>
<!-- 商品售价 -->
 <p><span class="star">*</span>会员卡卡号：</p>
<el-input
  v-model="input1"
  clearable class="names">
</el-input>

<!-- 用户组 -->
<div class="distance">
    <span><span class="star">*</span>用户组:&nbsp;</span>
<el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

</div>

<!-- 商品售价 -->
<div  class="distance">
 <span>身份证号：</span>
<el-input
  v-model="input2"
  clearable class="names">
</el-input>
</div>

<!-- 用户状态： -->
<div class="distance">
     <span>用户状态：</span>
 <template>
  <el-radio v-model="radio" label="3">启用</el-radio>
  <el-radio v-model="radio" label="4">禁用</el-radio>
</template>
</div>

<!-- 手机号码： -->
<div  class="distance">
 <span>手机号码：</span>
<el-input
  v-model="input3"
  clearable class="names">
</el-input>
</div>
<!-- 座机号码： -->
<div  class="distance">
 <span>座机号码：</span>
<el-input
  v-model="input4"
  clearable class="names">
</el-input>
</div>

<!-- 邮箱地址 -->
<div  class="distance">
 <span>邮箱地址：</span>
<el-input
  v-model="input5"
  clearable class="names">
</el-input>
</div>

<!-- 详细地址： -->
<div  class="distance">
 <span>详细地址：</span>
<el-input
  v-model="input6"
  clearable class="names">
</el-input>
</div>

<!-- 邮政编码： -->
<div  class="distance">
 <span>邮政编码：</span>
<el-input
  v-model="input7"
  clearable class="names">
</el-input>
</div>



<el-row>
  <el-button type="success" class='btn'>添加</el-button>
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
        value: '',
// 商品名称
        input: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
// 会员优惠
         radio: '1',
      }
    }
  }
</script>

<style scoped>
.distance{
    margin-top: 15px;
}
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
    margin-left: 5px;
     background-color: #409EFF;
    border: #409EFF;
}
</style>