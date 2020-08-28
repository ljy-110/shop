<template>
    <div>
        <commentBox></commentBox>
        <div class="container">
            <div class="row">
                <div class="top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/index/user' }">个人中心</el-breadcrumb-item>
                        <el-breadcrumb-item>评价</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="buzou center">
                    <el-steps :space="300" :active="3" finish-status="success" align-center class="buzou-com">
                        <el-step title="拍下商品"></el-step>
                        <el-step title="进行付款"></el-step>
                        <el-step title="确认收货"></el-step>
                        <el-step title="评价"></el-step>
                    </el-steps>
                </div>
                <div class="com-main">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>发表评论 / Make Comments</span>
                        </div>
                        <div class="com-main-fg">
                            <ul>
                                <li class="flex-between com-li">
                                    <div class="com-li-aa">
                                        <a href="#">
                                            <img src="../../images/user/goods-1-(3).jpg" alt="" class="li-aa-img">
                                            <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                            <p>
                                                <span>价格：</span>
                                                <span>￥69.90</span>
                                            </p>
                                        </a>
                                    </div>
                                    <div class="com-li-bb">
                                        <div class="com-bb-za">
                                            <el-rate v-model="value" show-score text-color="#ff9900" score-template="{value}"></el-rate>
                                        </div>
                                        <div class="now-left-bb com-bb-zv">
                                            <el-input resize="none" rows="4" show-word-limit type="textarea" placeholder="请写下对宝贝的感受吧，对他人帮助很大哦!" v-model="textarea2"></el-input>
                                        </div>
                                        <div class="com-bb-zs">
                                            <el-upload
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                list-type="picture-card"
                                                :on-preview="handlePictureCardPreview"
                                                :on-remove="handleRemove" class="com-zs-up">
                                                <i class="el-icon-plus"></i>
                                            </el-upload>
                                                <el-dialog :visible.sync="dialogVisible">
                                                <img width="100%" :src="dialogImageUrl" alt="">
                                            </el-dialog>
                                        </div>
                                    </div>
                                    <div class="com-li-cc flex-center">
                                        <a href="#"><button class="com-aa-pj">立即评价</button></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>
        <commentfooter></commentfooter>
    </div>
</template>

<style src='../../assets/css/settlement.css'></style>
<style src="../../assets/css/user.css"></style>
<style lang="css" scoped>
.box-card{
    width: 100%;
}
.buzou-com{
    width: 90%;
}
.com-li-aa{
    width: 20%;
}
.com-li-bb{
    width: 60%;
}
.com-li-cc{
    width: 10%;
}
.li-aa-img{
    width: 100%;
}
.now-left-bb >>> .el-textarea textarea{
    width: 165%;
}
.com-bb-za{
    height: 10%;
}
.com-bb-za >>> .el-rate span i{
    font-size: 30px;
}
.com-bb-zs{
    height: 30%;
}
.com-zs-up >>> .el-upload .el-upload__input{
    display: none;
}
.com-zs-up >>> .el-upload--picture-card{
    width: 112px;
    line-height: 111px;
    height: 20%;
}
.com-bb-zv{
    margin-top: 20px;
}
.com-aa-pj{
    background-color: rgb(221,81,76);
    color: white;
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
            value: 5,
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
}
</script>