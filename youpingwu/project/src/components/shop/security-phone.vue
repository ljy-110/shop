<template>
    <div>
        <commentBox></commentBox>
        <div class="container">
            <div class="row">
                <div class="top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/index/user' }">个人中心</el-breadcrumb-item>
                        <el-breadcrumb-item>安全设置</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="main">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>绑定手机 / Bind Phone</span>
                        </div>
                        <div class="text item">
                            <div class="step center">
                                <el-steps :active="active" finish-status="success" class="step-aa">
                                    <el-step title="重置密码"></el-step>
                                    <el-step title="完成"></el-step>
                                </el-steps>
                            </div>
                            <div class="step-bb center">
                                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm step-bb-pp">
                                        <el-form-item label="原手机号码" width="100px" prop="phone" status-icon show-message class="reg-form">
                                            <el-input v-model="ruleForm.phone" placeholder="请输入手机号" class="reg-phone"></el-input>
                                        </el-form-item>
                                        <el-form-item label="验证码" label-width="100px" prop="sendcode" class="code" status-icon>
                                          <el-input v-model="ruleForm.sendcode" placeholder="请输入验证码"></el-input>
                                          <el-button type="button" @click="sendcode" :disabled="disabled" v-if="disabled==false">发送验证码
                                          </el-button>
                                          <el-button type="button" @click="sendcode" :disabled="disabled" v-if="disabled==true">{{btntxt}}
                                          </el-button>
                                        </el-form-item>
                                        <el-form-item label="新手机号码" width="100px" prop="newphone" status-icon show-message class="reg-form">
                                            <el-input v-model="ruleForm.newphone" placeholder="请输入手机号" class="reg-phone"></el-input>
                                        </el-form-item>
                                        <el-form-item label="验证码" label-width="100px" prop="newsendcode" class="code" status-icon>
                                          <el-input v-model="ruleForm.newsendcode" placeholder="请输入验证码"></el-input>
                                          <el-button type="button" @click="sendcode" :disabled="disabled" v-if="disabled==false">发送验证码
                                          </el-button>
                                          <el-button type="button" @click="sendcode" :disabled="disabled" v-if="disabled==true">{{btntxt}}
                                          </el-button>
                                        </el-form-item>
                                        
                                        <el-form-item>
                                            <el-button type="primary" @click="submitForm('ruleForm')">保存修改</el-button>
                                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                                        </el-form-item>
                                    </el-form>
                            </div>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>
        <commentfooter></commentfooter>
    </div>
</template>

<style src="../../assets/css/user.css"></style>
<style lang="css" scoped>
.box-card{
    width: 100%;
}
.text {
    font-size: 14px;
}
.item {
    margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
.step .step-aa,
.step-bb .step-bb-pp{
    width: 50%;
}
.step-bb{
    margin-top: 3%;
}
</style>

<script>
import comment from "../components/top.vue"
import commentfooter from "../components/footer.vue"
export default {
    components:{
        commentBox:comment,
        commentfooter:commentfooter,
    },
    data() {
      return {
        active: 1,
        ruleForm: {
          phone:'',
          sendcode:'',
          newphone:'',
          newsendcode:'',
        },
        rules: {
          phone: [{ required: true,message: '请输入手机号码',trigger: 'blur'},
	    	{validator:function(rule,value,callback){
	            if(/^1[34578]\d{9}$/.test(value) == false){
	                callback(new Error("请输入正确的手机号"));
	            }else{
	                callback();
	            }
	        }, trigger: 'blur'}],
          sendcode: [
              { required: true, message: '验证码不能为空', trigger: 'blur' },
          ], 
          newphone:[{ required: true,message: '请输入手机号码',trigger: 'blur'},
	    	{validator:function(rule,value,callback){
	            if(/^1[34578]\d{9}$/.test(value) == false){
	                callback(new Error("请输入正确的手机号"));
	            }else{
	                callback();
	            }
	        }, trigger: 'blur'}],
          newsendcode: [
              { required: true, message: '验证码不能为空', trigger: 'blur' },
          ], 
        },
        disabled: false,
        time: 0,
        btntxt: "重新发送",
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        if (this.active++ > 2) this.active = 0;
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
            submitForm2(){

            }
    }
}
</script>