<template>
    <div>
        <commentBox></commentBox>
        <div class="container">
            <div class="row">
                <div class="top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/' }">购物车</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/' }">结算</el-breadcrumb-item>
                        <el-breadcrumb-item>付款</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="suc-aa">
                    <div class="suc-aa-qq">
                        <span class="glyphicon glyphicon-ok-circle suc-qq-icon" aria-hidden="true"></span>
                        <span class="suc-qq-zz">您已经付款成功</span>
                    </div>
                </div>
                <div class="suc-bb">
                    <div class="suc-bb-ma">
                        <span class="suc-ma-oa">付款金额：</span>
                        <span class="suc-ma-ob">￥69.90</span>
                    </div>
                    <div class="suc-bb-mb">
                        <div class="suc-mb-vq">
                            <span>收货人：</span>
                            <span>用户们</span>
                        </div>
                        <div class="suc-mb-dh">
                            <span>电话：</span>
                            <span>18277107495</span>
                        </div>
                        <div class="suc-mb-dz">
                            <span class=""><i class="el-icon-location-outline"></i>寄送到：</span>
                            <span class="">广西壮族自治区</span>
                            <span class="">玉林市</span>
                            <span class="">北流市</span>
                            <span class="">白马镇金头圩</span>            
                        </div>
                        
                    </div>
                    <p class="suc-mb-xx">请认真核对您的收货信息，如有错误请联系客服</p>
                        <div class="suc-mb-ck">
                            <span>您可以查看</span>
                            <span><a href="#">已买到的宝贝</a></span>
                            <span>查看</span>
                            <span><a href="#">交易详情</a></span>
                        </div>
                </div>
                <div class="log-xh">
                    <img src="../../images/ls/index-1.jpg" alt="" class="log-xh-img">
                </div>
                <div>
                    <ul class="flex-start act-one-ul">
                        <li class="act-ul-li" v-for="(k,t) in shopslist.slice(0,12)" :key="t">
                            <a href="#" class="act-li-aa">
                                <div class="act-aa-zz">
                                    <img :src="k.url" alt="">
                                </div>
                                <p class="act-aa-xx">{{k.title}}</p>
                                <p class="act-aa-cc flex-between">
                                    <span class="act-cc-jg">￥{{k.price}}</span>
                                    <span class="act-cc-xh">{{k.collection}}人喜欢</span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <commentfooter></commentfooter>
    </div>
</template>

<style src='../../assets/css/shopclass.css'></style>
<style lang="css" scoped>
.suc-aa{
    margin-top: 20px;
}
.suc-aa-qq{
    height: 40px;
    line-height: 40px;
}
.suc-qq-icon{
    font-size: 30px;
    color: green;
}
.suc-qq-zz{
    display: inline-block;
    padding: 5px;
    padding-bottom: 10px;
}
.suc-bb{
    margin-top: 20px;
    margin-left: 50px;
}
.suc-ma-oa{
    font-size: 20px;
}
.suc-ma-ob{
    color: red;
}
.suc-bb-mb{
    border: 1px solid red;
    width: 50%;
    margin: 10px 0 10px 0;
}
.suc-mb-vq,.suc-mb-dh,.suc-mb-dz{
    padding: 10px;
}
.suc-mb-xx{
    font-size: 16px;
    color: black;
}
.suc-mb-ck span a{
    color: red;
    margin-left: 5px;
    margin-right: 5px;
}
.suc-mb-ck span a:hover{
    color: red;
    text-decoration: none;
}
.log-xh-img{
    width: 100%;
    margin: 10px 0 20px 0;
}
.act-ul-li{
    width: 24.2%;
    margin-right: 1%;
    padding: 1px;
    margin-bottom: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.act-ul-li:hover{
    border: 2px solid #ccc;
}
.act-aa-zz img{
    width: 100%;
}
.act-ul-li:nth-child(4n){
    margin-right: 0;
}
.act-aa-xx,.act-aa-cc{
    font-size: 16px;
    color: black;
    padding: 10px 10px 10px 10px;
}
.act-li-aa:hover{
    color: black;
    text-decoration: none;
}
.act-cc-jg{
    font-size: 20px;
    color: red;
}
.act-cc-xh{
    color: #1ABDE6;
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
            shopslist:[]
        }
    },
    created() {
        this.getShoplist();
    },
    methods: {
        getShoplist(){
            this.$http.get("shopsui")
            .then(res=>{
                this.shopslist = res.body;
            })
        }, 
    },
}
</script>