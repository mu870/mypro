<template>
  <div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名:" prop="age" style="">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item label="密码:" prop="pass" class="pwd">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码:" prop="checkPass" class="repwd">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
   <el-select v-model="value" placeholder="请选择" class="selects">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-form-item>
     <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import { gotoadd } from "../../../../api/api.js";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else {
              callback();
            }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
        options: [{
          value: '0',
          label: '超级管理员'
        }, {
          value: '1',
          label: '普通管理员'
        }, {
          value: '2',
          label: '店员'
        }],
        value: '1',
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          gotoadd(
            this.ruleForm.age,
            this.ruleForm.checkPass,
            this.value
          ).then(res => {
            if (res.data == "ok") {
              alert("账号添加成功");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
.el-form-item__label{
  text-align: right;
  width: 60px;
}
.el-input__inner{
  margin-left: 0px;
}
.selects{
  margin-left: 100px;
  margin-bottom: 10px;
} 
</style>


     