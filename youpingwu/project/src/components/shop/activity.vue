<template>
    <div>
        <commentBox></commentBox>
        <div class="container">
            <div class="row">
                <div class="top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="act-main">
                    <div class="act-main-one">
                        <h3 class="act-one-ww">活动</h3>
                        <div class="act-one-qq">
                            <ul class="flex-start act-one-ul">
                                <li class="act-ul-li" v-for="(k,t) in shopslist.slice(0,8)" :key="t" @click="goInfo(k.id)">
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
                    <div class="act-main-one">
                        <h3 class="act-one-ww">秒杀</h3>
                        <div class="act-one-qq">
                            <ul class="flex-start act-one-ul">
                                <li class="act-ul-li" v-for="(k,t) in shopslist.slice(0,8)" :key="t" @click="goInfo(k.id)">
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
                    <div class="act-main-one">
                        <h3 class="act-one-ww">特惠</h3>
                        <div class="act-one-qq">
                            <ul class="flex-start act-one-ul">
                                <li class="act-ul-li" v-for="(k,t) in shopslist.slice(0,8)" :key="t" @click="goInfo(k.id)">
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
                    <div class="act-main-one">
                        <h3 class="act-one-ww">超值</h3>
                        <div class="act-one-qq">
                            <ul class="flex-start act-one-ul">
                                <li class="act-ul-li" v-for="(k,t) in shopslist.slice(0,8)" :key="t" @click="goInfo(k.id)">
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
            </div>
        </div>
        <commentup></commentup>
        <commentfooter></commentfooter>
    </div>
</template>

<style src='../../assets/css/shopclass.css'></style>
<style lang="css" scoped>
.act-ul-li{
    width: 24%;
    margin-right: 1%;
    padding: 1px;
    margin-bottom: 20px;
    border: 1px solid white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.act-ul-li:hover{
    border: 1px solid #ccc;
}
.act-one-ww{
    width: 10%;
    padding: 20px;
    background-color: rgb(255,136,204);
    color: white;
    font-size: 25px;
    text-align: center;
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
            id:this.$route.params.id,
            shopslist:[],
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
        goInfo(id){
            this.$router.push({name:"goodsInfo",params:{id}})
        },
    },
}
</script>