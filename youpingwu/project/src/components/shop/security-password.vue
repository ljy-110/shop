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
                            <span>修改密码 / Password</span>
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
                                        <el-form-item label="旧密码" prop="age" required>
                                            <el-input v-model.number="ruleForm.age" placeholder="请输入旧密码"></el-input>
                                        </el-form-item>
                                        <el-form-item label="新密码" prop="pass" required>
                                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入新密码"></el-input>
                                        </el-form-item>
                                        <el-form-item label="确认密码" prop="checkPass" required>
                                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入新密码"></el-input>
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
        var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        }
      };
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
        active: 1,
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
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
      }
    }
}
</script>