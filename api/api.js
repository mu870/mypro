import axios from 'axios'
export const IP='http://localhost:3000'

//登录接口
export function gotologin(account,password){
    return axios.post(IP+'/login',{account,password})
}

//检查是否超时
export function gotocheckUser(token){
    return axios.post(IP+'/checkUser',{token})
}


//添加账户
export function gotoadd(account,password,userGroup){
    return axios.post(IP+'/add',{account,password,userGroup})
}
//修改信息
export function gotoupdate(id,newpassword){
    return axios.post(IP+'/update',{id,newpassword})
}

//账号管理
export function gotoupmanage(){
    return axios.post(IP+'/manage')
}

//添加商品

export function gotoartadd(formData){
    return axios.get(IP+'/artadd',{params:formData})
}

// 商品列表
export function gotoartlist(pagecell,page,searchName,searchCategory){
    return axios.get(IP+'/itemsearch',{params:{pagecell,page,searchName,searchCategory}})
}
