<template>
    <div class="tem-login">
        <!-- 头部 -->
        <commentBox></commentBox>
        <!-- 中间部分 -->
        <div class="login-banner">
            <div class="container login">
                <div class="row login-row">
                    <div class="login-banner-bg"><span></span><img src="../../images/ls/big.jpg" /></div>
                    <div class="login-box">
                        <h3 class="title">登录商城</h3>
                        <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
                            <el-form-item prop="username">
                                 <i class="el-icon-s-custom icon-tb"></i>
                            <el-input id="login-name" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名" class="login-input">
                            </el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                 <i class="el-icon-lock icon-tb"></i>
                            <el-input id="login-pass1" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码" class="login-input">
                                <i class="el-icon-view el-input__icon" :style="fontstyle" slot="suffix" @click="showPassword"></i>
                            </el-input>
                            </el-form-item>
                            <el-form-item prop="verifycode">
                                <i class="el-icon-lock icon-tb"></i>
                            <!-- 注意：prop与input绑定的值一定要一致，否则验证规则中的value会报undefined，因为value即为绑定的input输入值 -->
                            <el-input v-model="loginForm.verifycode" placeholder="请输入验证码" class="identifyinput login-input"></el-input>
                            </el-form-item>
                            <el-form-item>
                            <div class="identifybox">
                                <div @click="refreshCode">
                                <s-identify :identifyCode="identifyCode"></s-identify>
                                </div>
                                <el-button @click="refreshCode" type='text' class="textbtn">看不清，换一张</el-button>
                            </div>
                            </el-form-item>
                            <el-checkbox v-model="checked">记住账号</el-checkbox>
                            
                            <el-form-item>
                            <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
                            </el-form-item>

                            <div class="reg-word">
                                <p class="am-fr reg-am-word">
                                    还没有账户？
                                    <router-link to="/index/register">立即注册</router-link>
                                </p>
                            </div>
                            <div class="partner">		
                            <el-divider content-position="center" class="par-hz">合作账号</el-divider>
                                <div class="am-btn-group login-svg">
                                    <li><a href="#"><span><img src="../../images/icon-svg/QQ.png" alt="">QQ登录</span></a></li>
                                    <li><a href="#"><span><img src="../../images/icon-svg/微博.png" alt="">微博登录</span> </a></li>
                                    <li><a href="#"><span><img src="../../images/icon-svg/微信.png" alt="">微信登录</span> </a></li>
                                </div>
                                
                        </div>
                        </el-form>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <commentfooter></commentfooter>
        <!-- <div class="login-footer">

        </div> -->
    </div>
</template>

<style lang="css" scoped>
/* scoped的穿透性 >>>或者/deep/ */
.login-input >>> .el-input__inner{
    padding: 10px 25px;
}
.login-input >>> .el-input__suffix {
    height: 76%;
    /* color: green; */
}
.login-banner {
    background-color: rgb(253,122,114);
    height: 600px;
}
.login-row {
    display: flex;
    align-items: center;
    justify-content: center;
}
.login-box {
    width: 100%;
    max-width: 360px;
    height: 550px;
    margin-top: 30px;
    margin-left: 0px;
    background: #f8f8f8;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 10px;
}
h3.title {
    text-align: center;
    padding: 8px;
    font-weight: 600;
}
form label {
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #fff;
    text-align: center;
    top: 1px;
    left: 1px;
}
.am-fr {
    float: right;
}
a {
    color: #000;
    text-decoration: none;
}
.am-cf,.partner {
    width: 100%;
    max-width: 640px;
    margin: 20px auto;
}
.am-btn-primary {
    width: 100%;
    color: #fff;
}
.am-btn {
    display: inline-block;
    margin-bottom: 0;
    padding: 0.5em 1em;
    font-weight: normal;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 0;
    outline: none;
    user-select: none;
}

.partner .par-hz {
    /* text-align: left; */
    font-size: 14px;
    margin-top: 25%;
}
.partner {
    font-size: 14px;
}
.am-btn-group li {
    width: 33.333%;
    display: block;
    float: left;
    margin-top: 4%;
    text-align: center;
}
.am-btn-group li a:hover,
.login-links .am-fr:hover,
.reg-am-word > a:hover {
    text-decoration: none;
    color: red;
}
.iconfont {
    font-size: 150%;
}
.login-banner-bg {
    display: block;
    float: left;
}
.login-footer {
    background-color: white;
    height: 124px;
}

.identifybox{
  display: flex;
  justify-content: space-between;
  /* margin-top:7px; */
}
.el-checkbox {
    background: none;
    margin-top: -10px;
}
.el-input__inner {
    height: 40px;
    
}
.icon-tb {
    position: absolute;
    top: 13px;
    left: 7px;
    z-index: 20;
    /* font-size: 16px; */
}
.el-checkbox {
    top: -25px;
}
.login-word {
    top: -10px;
}
.el-form .el-form-item--feedback:nth-child(6){
    margin-top: -23px;
}
.el-button--primary {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    width: 100%;
}
.login-svg li a span img {
    width: 20px;
    height: 20px;
  }
</style>

<script>
import { Message } from 'element-ui'
import comment from "../components/top.vue"
import commentfooter from "../components/footer.vue"
// import commentlogin from "../components/phonecode.vue"
import SIdentify from '../components/code.vue'
export default {
    name: 'userlogin',
    components:{
        commentBox:comment,
        commentfooter:commentfooter,
        // commentlogin:commentlogin,
        SIdentify
    },
    data() {
    // 用户名自定义验证规则
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    // 验证码自定义验证规则
    const validateVerifycode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else if (value !== this.identifyCode) {
        // console.log('validateVerifycode:', value)
        callback(new Error('验证码不正确!'))
      } else {
        callback()
      }
    }
    return {
      users:'',
      fontstyle: {
      },
      loginForm: {
        username: '',
        password: '',
        verifycode: ''
      },
      checked: false,
      identifyCodes: '1234567890',
      identifyCode: '',
      loginRules: { // 绑定在form表单中的验证规则
        username: [
          { required: true, trigger: 'blur', validator: validateUsername  }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, message: '密码长度最少为4位', trigger: 'blur' }
        ],
        verifycode: [
          { required: true, trigger: 'blur', validator: validateVerifycode }
        ]
      },
      passwordType: 'password'
    }
  },
  created() {
    this.getUser();
  },
  mounted() {
    // 验证码初始化
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  computed: {
  },
  props: [],
  methods: {
    run(data){
      alert("data");
    },
    // 通过改变input的type使密码可见
    showPassword() {
      this.fontstyle === '' ? (this.fontstyle = 'color: red') : (this.fontstyle = '') // 改变密码可见按钮颜色
      this.passwordType === ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    },
    // 点击登入按钮
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
              var users_t = this.users
              // console.log(users_t);
              var length = users_t.length
              console.log(users_t)
              nameAll=[];
              passAll=[];
            for(var i=0; i<length; i++){
              nameAll.push(users_t[i].user_name);
              passAll.push(users_t[i].user_password);
            }
            if(nameAll.indexOf(this.loginForm.username) === -1){
              Message.error("账号不存在，请再次填写或者前往注册");
            }else{
            var index = nameAll.indexOf(this.loginForm.username);
                if(passAll[index] === this.loginForm.password){
                  window.sessionStorage.setItem('user_name',this.loginForm.username)
                  window.sessionStorage.setItem('user_id',users_t[index].user_id)
                  var lastname = sessionStorage.getItem("user_name");
                  console.log(lastname);
                  if(lastname == 'admin'){
                    Message.success("正在登陆管理页面....");
                      setTimeout(function(){
                          window.location.href='http://localhost:3000/#/index/node';
                      }, 1500); 
                  }else{
                    Message.success("登陆成功，页面正在跳转...");
                      setTimeout(function(){
                          window.location.href='http://localhost:3000/#/index';
                      }, 1500); 
                  }
                  
                }else{
                  Message.error("密码错误，请再次输入密码");
                }
            }
          }else {  
            return false
          }
      })
    },
    getUser(){
            this.$http.get("login")
            .then(result=>{
                this.users = result.body;
                console.log(users);
            })
        },
    // 生成随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 切换验证码
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    // 生成四位随机验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
      // console.log(this.identifyCode)
    }
  }
}
</script>