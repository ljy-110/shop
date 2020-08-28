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
                            <span>实名认证 / Real authentication</span>
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
                                        <el-form-item label="姓名" prop="name" required>
                                            <el-input v-model.number="ruleForm.name" placeholder="请输入正确的名字"></el-input>
                                        </el-form-item>
                                        <el-form-item label="身份证号码" prop="cardid" required>
                                            <el-input v-model="ruleForm.cardid" autocomplete="off" placeholder="请输入身份证号码"></el-input>
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
          name:'',
          cardid:'',
        },
        rules: {
           name:
	    	  [{required: true,message: '请输入用户名',trigger: 'blur'},
	        {min: 2,max: 7,message: '长度在 2 到 7 个字符'},
	        {pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文'}
	        ],
          cardid:
          [{required: true,message: '请输入身份证ID',trigger: 'blur'},
          {pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '你的身份证格式不正确' }],
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