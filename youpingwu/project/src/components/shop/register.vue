<template>
    <div>
        <!-- 头部 -->
        <commentBox></commentBox>

        <!-- banner -->
        <div class="reg-bg">
          <div class="container">
            <div class="row reg-row-bg">
                <div class="login-banner-bg"><span></span><img src="../../images/ls/big.jpg" /></div>
                
                <div class="reg-box">
                  <h3 class="title">注册账号</h3>
                  <div class="clear"></div>
                  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm demo-position" label-position="left">
                    <el-form-item label="用户名" prop="name">
                      <el-input id="res-name" v-model="ruleForm.name" placeholder="请输入3到5个字符"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass" :required="true">
                      <el-input id="res-pass1" type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass" :required="true">
                      <el-input id="res-pass2" type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
                    </el-form-item>
                    <!-- 手机验证码 -->
                    <el-form-item label="手机号码" width="100px" prop="phone" status-icon show-message class="reg-form">
                        <el-input id="res-phone" v-model="ruleForm.phone" placeholder="请输入手机号" class="reg-phone"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" label-width="100px" class="code" status-icon>
                        <el-input v-model="ruleForm.sendcode" placeholder="请输入验证码"></el-input>
                        <el-button type="button" @click="sendcode" :disabled="disabled" v-if="disabled==false">发送验证码
                        </el-button>
                        <el-button type="button" @click="sendcode" :disabled="disabled" v-if="disabled==true">{{btntxt}}
                        </el-button>
                    </el-form-item>

              <div class="login-links">
										<label for="reader-me">
											<input id="reader-me" type="checkbox"> 点击表示您同意商城
                      <a href="#">《服务协议》</a>
										</label>
							  	</div>

                    <el-form-item class="am-reg">
                      <el-button type="primary" @click="submitForm('ruleForm')" class="zhuce">立即注册</el-button>
                      <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                  </el-form>
                  
                  <div class="reg-word">
                                <p class="am-fr reg-am-word">
                                    已有账户？
                                    <router-link to="/index/login">立即登录</router-link>
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

                </div>
            </div>
        </div>
        </div>
        
        
        
        <!-- 底部 -->
        <commentfooter></commentfooter>
    </div>
</template>

<style lang="css" scoped>
.zhuce >>> span{
  color: white;
}
    .reg-bg {
        background-color: rgb(253,122,114);
        height: 743px;
    }
    .reg-row-bg {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .reg-box {
      position: relative;
      width: 31%;
      height: 674px;
      margin-top: 3%;
      background-color: rgb(248,248,248);
      padding: 0 1.5% 0 1%;
      border-radius: 10px;
    }
    h3.title {
        text-align: center;
        padding: 8px;
        font-weight: 600;
    }
    .demo-position {
      position: relative;
    }
    .demo-position label {
      background: none;
      position: static;
    }
    .el-form-item__error {
      margin-top: 0px;
    }
    .el-input {
      height: 45px;
    }
    .el-form-item >>> .el-form-item__label {
      padding-left: 10px;
    }
    .code .el-input {
      width: 55%;
      border-radius: 0px;
      display: inline-block;
    }
    .code .el-button {
       width: 55%;
       display: inline-block;
    }
    .el-button--primary {
      width: 45%;
      border: none;
      color: #000;
    }
    .reg-form >>> label {
      width: 100px;
    }
    .am-fr {
      float: right;
    }
    a {
        color: #000;
        text-decoration: none;
    }
    .reg-am-word > a:hover {
        text-decoration: none;
        color: red;
    }
    .am-cf,.partner {
    width: 100%;
    max-width: 640px;
    margin: 20px auto;
}
.partner .par-hz {
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
.login-svg li a span img {
  width: 20px;
  height: 20px;
}
.login-links {
  font-size: 14px;
  margin-left: 20px;
  color: gray;
}
.login-links label a {
  color: gray;
  text-decoration: underline;
}
.login-links label a:hover {
  color: red;
}
.am-reg {
  margin-top: 20px;
}
</style>

<script>
import comment from "../components/top.vue"
import commentfooter from "../components/footer.vue"
import { Message } from 'element-ui';
export default {
    components:{
        commentBox:comment,
        commentfooter:commentfooter,
    },

    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        users:'',
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          pass: '',
          checkPass: '',
          phone: '',
          sendcode: '123456',

        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
              { required: true, message: '请输入手机号码', trigger: 'blur' },
          ],  
          code: [
              { required: true, message: '验证码不能为空', trigger: 'blur' },
          ],  
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
         
        },
        disabled: false,
        time: 0,
        btntxt: "重新发送",
      };
    },
    created() {
      this.getUser();
    },
    methods: {
      submitForm(formName) {
         // 添加商品时间
          var date = new Date();
          var seperator1 = "-";
          var seperator2 = ":";
          //以下代码依次是获取当前时间的年月日时分秒
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var strDate = date.getDate();
          var minute = date.getMinutes();
          var hour = date.getHours();
          var second = date.getSeconds();
          //固定时间格式
          if (month >= 1 && month <= 9) {
            month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
          }
          if (hour >= 0 && hour <= 9) {
              hour = "0" + hour;
          }
          if (minute >= 0 && minute <= 9) {
              minute = "0" + minute;
          }
          if (second >= 0 && second <= 9) {
              second = "0" + second;
          }
          var currentdate =  year + seperator1 + month + seperator1 + strDate 
                    + " " + hour + seperator2 + minute + seperator2 + second;
                    console.log(currentdate);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('login/user_login',{
              user_name:this.ruleForm.name,
              user_password:this.ruleForm.pass,
              user_phone:this.ruleForm.phone,
              user_time:currentdate
            }).then(function(data){
              if(data.body.flag ==1){
                Message.success('注册成功,正在跳到登陆页面');
                setTimeout(function(){
                   window.location.href='http://localhost:3000/#/index/login';
                   }, 1000);
                return false;
              }
            })  
          }else {
            Message.success('注册失败,请填写正确的信息');
            return false;
          }
        });
        
      },
      getUser(){
            this.$http.get("users")
            .then(result=>{
                this.users = result.body
            })
        },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      sendcode() {
                const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
                if (this.ruleForm.phone == '') {
                    this.$message({
                        message:'手机号不能为空',
                        center: true
                    })
                    return
                }
                if (!reg.test(this.ruleForm.phone)) {
                    this.$message({
                        message:'请输入正确的手机号',
                        center:true
                    })
                    return
                } else {
                    // console.log(this.ruleForm.phone);
                    this.$message({
                        message: '发送成功',
                        type: 'success',
                        center:true
                    });
                    this.time = 60;
                    this.disabled = true;
                    this.timer();
                }
            },
            //60S倒计时
            timer() {
                if (this.time > 0) {
                    this.time--;
                    this.btntxt = this.time + "s后重新获取";
                    setTimeout(this.timer, 1000);
                } else {
                    this.time = 0;
                    this.btntxt = "获取验证码";
                    this.disabled = false;
                }
            },
            // submitForm(){

            // }
    }
  }

</script>