<template>
    <div class="maxbox">

        <!-- 左侧导航 -->
         <div>

   <el-row class="tac">
  <el-col :span="7" class="max">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo max"
      background-color="#545c64"
      text-color="#fff"
      router
      unique-opened
      >
       <div class="my">
             <h2 class="titles">超市管理系统</h2>
             <p><img src="https://c-ssl.duitang.com/uploads/item/201707/19/20170719211350_4PnBt.thumb.700_0.jpeg" alt="" class="img" @click="head"><span @click="gotologin">{{name}}</span></p>
             <div>
                 <a class="index">管理首页</a>
                 <a>退出系统</a>
             </div>
       </div>
      <el-submenu :index='item.index' v-for="(item,index) in menu" :key="index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="min.url" v-for="(min,index) in item.min" :key="index">{{min.word}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
         </div>
         <div class="right">
             <router-view></router-view>
         </div>
    </div>

</template>

<script>
import {gotocheckUser} from '../../api/api.js'
export default {
  data(){
   return{
       name:'请登录',
        menu:[
          //  商品管理
          {index:'1',icon:'el-icon-s-goods',userGroup:['0','1','2'],title:'商品管理',min:[{url:'/index/artadd',word:'添加商品'},{url:'/index/artlist',word:'商品列表'}]},
          // 进货管理
             {index:'2',icon:'el-icon-s-goods',userGroup:['0','1','2'],title:'进货管理',min:[{url:'/index/stockadd',word:'添加库存'},{url:'/index/stocklist',word:'库存列表'}]},
            //出货管理
              {index:'3',icon:'el-icon-s-goods',userGroup:['0','1','2'],title:'出货管理',min:[{url:'/index/sales',word:'销售列表'},{url:'/index/clears',word:'商品出库'},{url:'/index/returns',word:'商品退货'}]},
            //统计管理  
              {index:'4',icon:'el-icon-s-goods',userGroup:['0','1'],title:'统计管理',min:[{url:'/index/saleinfo',word:'销售统计'},{url:'/index/stockinfo',word:'进货统计'}]},
             //账号管理  
              {index:'5',icon:'el-icon-s-goods',userGroup:['0'],title:'账号管理',min:[{url:'/index/manage',word:'账号管理'},{url:'/index/add',word:'添加账号'},{url:'/index/updete',word:'密码修改'}]},  
            //会员管理
             {index:'6',icon:'el-icon-s-goods',userGroup:['0','1'],title:'会员管理',min:[{url:'/index/addaccount',word:'账号添加'},{url:'/index/masgevio',word:'账号管理'}]},

        ]
   }
  },
  methods: {
     gotologin(){
         if(this.name=='请登录'){
             this.$router.history.push('/')
         }
     },
     head(){
          this.$router.history.push('/index/userhead')
     }
  },
  created(){
      console.log(this.menu)
      let token=localStorage.token
      console.log(token)
        gotocheckUser(token).then(res=>{
            console.log(res.data)
           if(res.data=='fail'){
               this.name='请登录'
           }else{
               
               this.name=localStorage.name
              this.menu=this.menu.filter((res)=>{
                   return res.userGroup.includes(localStorage.userGroup)
               })
           }
      })
  }
};
</script>
<style  >
   .select{
      color: "#ffd04b";
      background-color: crimson;
   }
    .titles{
        color: rgb(231, 228, 228);
        font-size: 30px;
        font-weight: normal;  
        margin: 50px 0px  
    }
    .max{
        text-align: right;
        width: 240px;
        height: 100%;
    }
   .my{
  padding-right: 20px;
    color: white;
 }
 .my div a:first-of-type{
     padding-right:5px;
 }
  .my div a:last-of-type{
     padding-left:5px;
 }
 .my .index{
     border-right: 1px solid rgb(204, 203, 201);
 }
.my p span:first-of-type{
    color: rgb(255, 208, 75);
}
.maxbox{
    display: flex;
}
.right{
   flex: 1;
   padding-left: 10px;
}
.tac{
    height: 100%;
}
.img{
    height: 40px;
    width: 40px;
}
</style>