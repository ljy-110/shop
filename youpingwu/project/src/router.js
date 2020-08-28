//引入路由文件
import VueRouter from "vue-router"
//导入对应的路由组件
import index from './components/shop/index.vue'
import login from './components/shop/login.vue'
import register from './components/shop/register.vue'
import shopdetails from './components/shop/shopdetails.vue'
import user from './components/shop/user.vue'
import shopclass from './components/shop/shopclass.vue'
import shopcar from './components/shop/shopcar.vue'
import search from './components/shop/search.vue'
import settlement from './components/shop/settlement.vue'
import banner from './components/shop/banner.vue'
import password from './components/shop/security-password.vue'
import zhifu from './components/shop/security-zhifu.vue'
import phone from './components/shop/security-phone.vue'
import name from './components/shop/security-name.vue'
import email from './components/shop/security-email.vue'
import problem from './components/shop/security-problem.vue'
import comments from './components/shop/user-comments.vue'
import success from './components/shop/success.vue'
import contact from './components/shop/contact.vue'
import hezuo from './components/shop/hezuo.vue'
import privacy from './components/shop/privacy.vue'
import map from './components/components/map.vue'
import activity from './components/shop/activity.vue'
import logistics from './components/shop/logistics.vue'
import newword from './components/shop/new.vue'
import shoplist from './components/node/shoplist.vue'
import userlist from './components/node/userlist.vue'
import lunbolist from './components/node/lunbolist.vue'
import node from './components/node/node.vue'
import city from './components/components/city.vue'
import ces from './components/ces.vue'



var router = new VueRouter({
    routes:[//路由的规则
       {path:"/",redirect:"/index"},
       {path:"/index", component:index},
       {path:"/index/login", component:login},
       {path:"/index/register", component:register},
       {path:"/index/shopdetails/:id", component:shopdetails,name:"goodsInfo"},
       {path:"/index/user", component:user},
       {path:"/index/shopclass", component:shopclass},
       {path:"/index/shopcar", component:shopcar},
       {path:"/index/search", component:search},
       {path:"/index/settlement/:id", component:settlement},
       {path:"/index/banner", component:banner},
       {path:"/index/user/password", component:password},
       {path:"/index/user/zhifu", component:zhifu},
       {path:"/index/user/phone", component:phone},
       {path:"/index/user/name", component:name},
       {path:"/index/user/email", component:email},
       {path:"/index/user/problem", component:problem},
       {path:"/index/comments", component:comments},
       {path:"/index/success", component:success},
       {path:"/index/contact", component:contact},
       {path:"/index/hezuo", component:hezuo},
       {path:"/index/privacy", component:privacy},
       {path:"/index/map", component:map},
       {path:"/index/activity", component:activity},
       {path:"/index/logistics", component:logistics},
       {path:"/index/user/newword", component:newword},
       {path:"/index/shoplist", component:shoplist},
       {path:"/index/userlist", component:userlist},
       {path:"/index/lunbolist", component:lunbolist},
       {path:"/index/node", component:node},
       {path:"/index/city", component:city},
       {path:"/ces", component:city},
    ],
    linkActiveClass:"mui-active"
})



export default router