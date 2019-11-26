<template>
    <div>
       <div>
            <p><span class="star">*</span>原密码：</p> 
            <el-input class="users" v-model="input" show-password></el-input>
       </div>
        <div>
            <p><span class="star">*</span>新密码：</p> 
            <el-input class="users" v-model="input1" show-password></el-input>
       </div>
        <div>
            <p><span class="star">*</span>新密码：</p> 
            <el-input class="users" v-model="input2" show-password></el-input>
       </div>
        <el-button type="primary" class="add" size='mini' @click="gotoupdate">修改</el-button>
    </div>
</template>

<script>
import { gotoupdate } from "../../../../api/api.js";
export default {
  data() {
    return {
      input: "",
      input1: "",
      input2: ""
    };
  },
  methods: {
    gotoupdate() {
      if (!(this.input == "" || this.input1 == "" || this.input2 == "")) {
        let id = sessionStorage.getItem("id");
        console.log(id, this.input1);
        gotoupdate(id, this.input1).then(res => {
          console.log(res.data);
          if (res.data == "ok") {
            alert("修改成功");
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.star {
  color: red;
}
.add {
  display: block;
  margin-top: 10px;
}
.users {
  width: 400px;
}
</style>