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
                            <span>绑定邮箱 / Email</span>
                        </div>
                        <div class="text item">
                            <div class="step center">
                                <el-steps :active="active" finish-status="success" class="step-aa">
                                    <el-step title="重置密码"></el-step>
                                    <el-step title="完成"></el-step>
                                </el-steps>
                            </div>
                            <div class="step-bb center">
                                <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
                                  <el-form-item prop="email" label="邮箱" required>
                                    <el-input v-model="dynamicValidateForm.email" placeholder="请输入正确的邮箱地址"></el-input>
                                  </el-form-item>
                                  <el-form-item>
                                    <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                                    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
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
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        },
        rules: {
         email:
            [{required: true, message: '请输入邮箱号', trigger: 'blur'},
             {validator:function(rule,value,callback){
                if (value === '') {
                  callback(new Error('请正确填写邮箱'));
                } else {
                      if (value !== '') { 
                        var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                          if(!reg.test(value)){
                              callback(new Error('请输入有效的邮箱'));
                         }
              }else{
	                callback();
              }
                }
	            },trigger: 'blur'}],

        }
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
     
    }
}
</script>