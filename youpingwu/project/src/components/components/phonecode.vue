
    <template>
    <div class="root">
        <el-form :model="ruleForm" ref="ruleForm" :rules="rules" class="RegisterForm" label-position="left">
            <el-form-item label="手机号码" width="100px" prop="phone" status-icon show-message class="reg-form">
                <el-input v-model="ruleForm.phone" placeholder="请输入手机号" class="reg-phone"></el-input>
            </el-form-item>
            <el-form-item label="验证码" label-width="100px" prop="验证码" class="code" :required="true" status-icon>
                <el-input v-model="ruleForm.sendcode" placeholder="请输入验证码"></el-input>
                <el-button type="button" @click="sendcode" :disabled="disabled" v-if="disabled==false">发送验证码
                </el-button>
                <el-button type="button" @click="sendcode" :disabled="disabled" v-if="disabled==true">{{btntxt}}
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "ruleForm",
        data() {
            return {
                ruleForm: {
                    phone: '',
                    sendcode: '',
                },
                rules: {
                    phone: [
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                        // {validator: checkPhone, trigger: 'blur'}
                    ],  
                },
                disabled: false,
                time: 0,
                btntxt: "重新发送",
            }
        },
        methods: {
            //手机验证发送验证码
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
                    console.log(this.ruleForm.phone);
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
            submitForm(){

            }
        }
    }
</script>

<style scoped lang="css">
    /* .root {
        background: url("http://img.hena360.cn/login_bj.jpg") no-repeat center;
        background-size: 100% 100%;
        height: 100vh;
        width: 100vw;
        display: table-cell;
        vertical-align: middle;
    } */
        /* form {
            width: 80%;
            margin: auto;
            margin-top: 90%;
        } */
           
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
                width: 100%;
                background-color: #ffe86a;
                border: none;
                color: #000;
            }
            .reg-phone {
                width: 70%;
                /* margin-left: 30%; */
                /* display: inline-block; */
            }
            .reg-form >>> .el-form-item__error {
                margin-left: 30%;
            }
            .reg-form >>> label {
                width: 100px;
            }
            .el-form-item >>> .el-form-item__label {
                padding-left: 20px;
            }
            
</style>

