<template>
    <div>
        <commentBox></commentBox>
        <div class="container">
            <div class="row">
                <div class="top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/index/user' }">个人中心</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/' }">订单管理</el-breadcrumb-item>
                        <el-breadcrumb-item>交易物流</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="log-main">
                    <div class="log-main-wl">
                        <h3 class="log-wl-title">物流信息</h3>
                        <div class="buzou center">
                            <el-steps :space="300" :active="3" finish-status="success" align-center class="buzou-com">
                                <el-step title="待揽件"></el-step>
                                <el-step title="运输中"></el-step>
                                <el-step title="派送中"></el-step>
                                <el-step title="待取件"></el-step>
                            </el-steps>
                        </div>
                        <div class="center">
                            <h4 class="log-wl-zt">待取件</h4>
                        </div>
                        <div class="log-time center">
                            <div class="log-block">
                                <el-timeline>
                                    <el-timeline-item
                                    v-for="(activity, index) in activities"
                                    :key="index"
                                    :icon="activity.icon"
                                    :type="activity.type"
                                    :color="activity.color"
                                    :size="activity.size"
                                    :timestamp="activity.timestamp">
                                    {{activity.content}}
                                    </el-timeline-item>
                                </el-timeline>
                            </div>
                        </div>
                        <div class="">
                            <ul class="center log-ul">
                                <li class="log-sp-xx">
                                    <div>
                                        <span>订单号：</span>
                                        <span>20200320000001</span>
                                    </div>
                                    <div>
                                        <span>物流公司：</span>
                                        <span>中通快递</span>
                                    </div>
                                    <div class="">
                                        <span class="">发货地址：</span>
                                        <span class="">广东省</span>
                                        <span class="">广州市</span>
                                        <span class="">天河区</span>
                                        <span class="">某某大楼几栋几层几号</span>            
                                    </div>
                                    <div>
                                        <span>收货人：</span>
                                        <span>卢俊羽</span>
                                        <span>18277107495</span>
                                    </div>
                                    <div class="log-xx-zp">
                                        <a href=""><img src="../../images/user/goods-1-(2).jpg" alt=""></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
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
        <commentup></commentup>
        <commentfooter></commentfooter>
    </div>
</template>

<style src='../../assets/css/shopclass.css'></style>
<style lang="css" scoped>
.log-main{
    border: 1px solid #ccc;
    margin-top: 30px;
    width: 100%;
}
.log-wl-title{
    border-bottom: 1px solid #ccc;
    padding: 10px 0 10px 30px;
    background-color: #EEEEEE;
    margin-top: 0px;
}
.buzou-com{
    width: 90%;
}
.log-block{
    width: 70%;
    padding: 20px;
    background-color: #EEEEEE;
}
.log-wl-zt{
    width: 70%;
    padding: 20px;
    margin-bottom: 0px;
    border-bottom: 1px solid #ccc;
    background-color: #EEEEEE;
}
.log-sp-xx{
    width: 70%;
    margin-top: 20px;
    padding: 20px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.log-sp-xx div{
    padding: 0 0 8px 0;
}
.log-sp-xx div span{
    font-size: 14px;
}
.log-xx-zp img{
    width: 10%;
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
import commentup from '../components/up.vue'
import commentfooter from "../components/footer.vue"
export default {
    components:{
        commentBox:comment,
        commentfooter:commentfooter,
        commentup:commentup,
    },
    data() {
       return {
        activities: [{
          content: '[代收点]您的快件已送达[快递超市的北流市白马镇]保管地址:白马镇富贵桥头北大建材对面中通快递如有疑问请电联: 18176448339 / 95311',
          timestamp: '2020-03-23 15:12',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '[玉林市]北流白马镇的白马镇中通营业部[18176448339]正在派件( 95720为中通快递员外呼专属号码，请放心接听)。小哥今日体温正常，将佩戴口罩为您投递，也可以联系小哥将您的快递，放到您指定的代收点，祝您身体健康!',
          timestamp: '2020-03-23 10:12',
          color: '#0bbd87'
        }, 
        {
          content: '[玉林市快件离开北流已发往北流白马镇',
          timestamp: '2020-03-22 20:12',
          size: 'large',
          color: '#0bbd87'
        },{
          content: '[玉林市]快件已到达北流',
          timestamp: '2020-03-22 17:12',
          size: 'large',
          color: '#0bbd87'
        },
        {
          content: '[广州市]快件离开广州中心已发往北流',
          timestamp: '2020-03-22 12:12',
          size: 'large',
          color: '#0bbd87'
        }, {
          content: '[广州市]广州同和的余杨帆[13342872723]已揽收',
          timestamp: '2020-03-21 20:12',
          color: '#0bbd87'
        }, {
          content: '包裹正在等待揽收',
          timestamp: '2020-03-20 17:12',
          color: '#0bbd87'
        }, {
          content: '商品已经下单',
          timestamp: '2020-03-19 12:12',
          color: '#0bbd87'
        }],
        shopslist:[],
      };
      
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