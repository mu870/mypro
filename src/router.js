import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/login'
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {path:'/',component:Login},
        {path:'/index',component:()=>import('./pages/index.vue'),
        children:[
            {path:'/index/add',component:()=>import('./pages/index/account/add.vue')},
            {path:'/index/manage',component:()=>import('./pages/index/account/manage.vue')},
            {path:'/index/updete',component:()=>import('./pages/index/account/updete.vue')},
            {path:'/index/artadd',component:()=>import('./pages/index/article/artadd.vue')},
            {path:'/index/artlist',component:()=>import('./pages/index/article/artlist.vue')},
            {path:'/index/clears',component:()=>import('./pages/index/clear/clears.vue')},
            {path:'/index/returns',component:()=>import('./pages/index/clear/returns.vue')},
            {path:'/index/sales',component:()=>import('./pages/index/clear/sales.vue')},
            {path:'/index/saleinfo',component:()=>import('./pages/index/info/saleinfo.vue')},
            {path:'/index/stockinfo',component:()=>import('./pages/index/info/stockinfo.vue')},
            {path:'/index/stockadd',component:()=>import('./pages/index/stock/stockadd.vue')},
            {path:'/index/stocklist',component:()=>import('./pages/index/stock/stocklist.vue')},
            {path:'/index/addaccount',component:()=>import('./pages/index/vip/addaccount.vue')},
            {path:'/index/masgevio',component:()=>import('./pages/index/vip/masgevio.vue')},
            {path:'/index/userhead',component:()=>import('./pages/index/userhead')},
        ]
    },
    
    ]
})