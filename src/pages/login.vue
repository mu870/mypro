<template>
  <div class="maxbox">
    <div class="login">
      <h1>登&emsp;录</h1>
      <p>用户名：
        <el-input placeholder="请输入内容" v-model="input" clearable class="username">
        </el-input>
      </p>
      <p>密&emsp;码：
        <el-input placeholder="请输入密码" v-model="input1" clearable show-password class="password">
        </el-input>
      </p>
      <p v-show="password">密码或账户名错误</p>
      <el-button type="primary" @click="gotoindex">登&emsp;录</el-button>
    </div>
  </div>
</template>

<script>
import { gotologin } from "../../api/api.js";
export default {
  data() {
    return {
      input: "",
      input1: "",
      password: false,
      flag: true
    };
  },
  methods: {
    gotoindex() {
      console.log(this.input, this.input1);
      if (this.flag) {
        //发送登录接口
        gotologin(this.input, this.input1).then(res => {
          console.log(res.data);
          localStorage.token = res.data.token;
          if (res.data !== "fail") {
            localStorage.name = res.data.data[0].account;
            localStorage.userGroup = res.data.data[0].userGroup;
            this.$router.history.push("/index/artadd");
            sessionStorage.setItem("id", res.data.data[0].id);
          } else {
            this.password = true;
          }
        });
        this.flag = false;
        setTimeout(() => {
          this.flag = true; //3秒钟以后才可以发送下一次请求
        }, 3000);
      }
    }
  }
};
</script>

<style  scoped>
.maxbox {
  background: url("https://hbimg.huabanimg.com/7c2ab8559b673dd9685dbfb1edb170d4ac8dbd5a2e293-0j2yLK_fw658")
    no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
}
.login {
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: flex-end;
  margin-right: 50px;
  align-items: center;
  line-height: 40px;
}
.username,
.password {
  width: 300px;
}
</style>