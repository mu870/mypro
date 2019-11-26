import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import myCharts from './components/myCharts'
import stockinfocharts from './components/stockinfocharts'
import Style from './assets/styles/main.css'
Vue.use(myCharts)
Vue.use(stockinfocharts)
Vue.use(Style)
import ElementUI from 'element-ui';
import router from './router'
import {gotocheckUser} from '../api/api'
Vue.config.productionTip = false
Vue.use(ElementUI);

// 导航守卫
router.beforeEach((to, from, next) => {
// 如果不是登陆页面，就进行拦截
  if(to.path!='/'){
    // 发送ajax获取返回值
    gotocheckUser(localStorage.token).then(res=>{
      // 如果超时就返回登录页面
      if(res.data=='fail'){
        // 返回登录页面
        next('/')
      }else{
        // 否则就跳转
        next()
      }
    })
  }else{
    next()
  }
  
 
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
