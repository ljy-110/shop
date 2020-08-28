<template>
    <div class="content">
        <commentBox></commentBox> 
        <!-- 轮播图 -->
            <el-carousel trigger="click" :height="bannerHeight+'px'">
                <el-carousel-item v-for="item in lunbolist" :key="item.lunbo_id" >
                    <router-link to="/index/activity" class="lunbo-a">
                        <img ref="bannerHeight" :src="item.lunbo_url" alt="" @load="imgLoad" />
                    </router-link>
                </el-carousel-item>
            </el-carousel>
        <!-- 今日推荐 -->
        <div class="container head-day">
            <div class="row flex-between">
                <div class="dayone col-lg-3 hidden-md hidden-sm hidden-xs">
                    <img src="../../images/ls/0001.png" alt="" class="day-img1">
                    <img src="../../images/ls/0002.png" alt="" class="day-img2">
                </div>
                <div class="daytwo col-lg-3 col-md-4 col-sm-6 hidden-xs">
                    <router-link to="/index/activity" class="day-aa">
                        <div>
                            <p class="day-word-p1">坚果美食</p>
                            <p class="day-word-p2">限时 》》 六折喔</p>
                        </div>
                        <div class="day-img">
                            <img src="../../images/ls/01.png" alt="">
                        </div>
                    </router-link>
                    
                </div>
                <div class="daythree col-lg-3 col-md-4 col-sm-6">
                    <router-link to="/index/activity" class="day-aa">
                        <div>
                            <p class="day-word-p1">年年有鱼</p>
                            <p class="day-word-p2">新一年新福利</p>
                        </div>
                        <div class="day-img1">
                            <img src="../../images/ls/02.png" alt="">
                        </div>
                    </router-link>
                </div>
                <div class="dayfour col-lg-3 col-md-4 hidden-sm hidden-xs">
                    <router-link to="/index/activity" class="day-aa">
                        <div>
                            <p class="day-word-p1">浪漫情人</p>
                            <p class="day-word-p2">甜甜蜜蜜一天天</p>
                        </div>
                        <div class="day-img2">
                            <img src="../../images/ls/03.png" alt="">
                        </div>
                    </router-link>
                    
                </div>
                
                
            </div>

        </div>

        <!-- 活动 -->
        <div class="container">
            <div class="row">
                <div class="am-container activity ">
                    <div class="shopTitle ">
                        <h4>活动</h4>
                        <h3>每期活动 优惠享不停 </h3>
                        <span class="more ">
                            <a href="# ">全部活动>></a>
                        </span>
                    </div>
                    <div class="am-g am-g-fixed ">
                        <div class="col-md-3 am-u">
                            <router-link to="/index/activity">
                                <div class="icon-sale one "></div>	
                            <h4>秒杀</h4>							
                            <div class="activityMain ">
                                <img src="../../images/ls/activity1.jpg"/>
                            </div>
                            <div class="info ">
                                <h3>春节送礼优选</h3>
                            </div>	
                            </router-link>
                            													
                        </div>
						
                        <div class="col-md-3 am-u">
                            <router-link to="/index/activity">
                                <div class="icon-sale two "></div>	
                            <h4>特惠</h4>
                            <div class="activityMain ">
                                <img src="../../images/ls/activity2.jpg">
                            </div>
                            <div class="info ">
                                <h3>春节送礼优选</h3>								
                            </div>	
                            </router-link>					
                        </div>						
						
                        <div class="col-md-3 am-u">
                            <router-link to="/index/activity">
                                <div class="icon-sale three "></div>
                            <h4>团购</h4>
                            <div class="activityMain ">
                                <img src="../../images/ls/activity3.jpg">
                            </div>
                            <div class="info ">
                                <h3>春节送礼优选</h3>
                            </div>	
                            </router-link>
                            						
                        </div>						

                        <div class="col-md-3 last am-u">
                            <router-link to="/index/activity">
                                <div class="icon-sale "></div>
                            <h4>超值</h4>
                            <div class="activityMain ">
                                <img src="../../images/ls/activity.jpg">
                            </div>
                            <div class="info ">
                                <h3>春节送礼优选</h3>
                            </div>		
                            </router-link>									
                        </div>

			        </div>
                </div>
            </div>
        </div>

        <!-- 开始商品分类 坚果-->
         <div class="container">
            <div class="row">
                <div class="am-container activity ">
                    <div class="shopTitle ">
                        <h4>坚果</h4>
                        <h3>酥酥脆脆，回味无穷 </h3>
                        <div class="today-brands ">
								<a href="# ">腰果</a>
								<a href="# ">松子</a>
								<a href="# ">夏威夷果 </a>
								<a href="# ">碧根果</a>
								<a href="# ">开心果</a>
								<a href="# ">核桃仁</a>
							</div>
							<span class="more ">
                                <a href="# ">更多美味>></a>
                            </span>
                    </div>
                    <div class="goods-nut">
                        <div class="nut-right">
                            <ul>
                                <li v-for="(item,index) in goodslist.slice(0,10)" :key="index" @click="goInfo(item.id)">
                                    <div class="right-s">
                                        <a href="#">
                                            <img :src="item.url" alt="">
                                        </a>
                                    </div>
                                    <div class="right-gw flex-between">
                                        <div class="right-gw-bor"><a href="" class="right-gw-che">找相似</a></div>
                                        <div class="right-gw-bor"><a href="" class="right-gw-che">找同款</a></div>
                                    </div>
                                    <div class="right-x">
                                        <p class="nut-price">
                                            <span class="nut-price1">￥{{item.price}}</span>
                                            <span class="nut-price2">{{item.purchase}}人购买</span>
                                        </p>
                                        <p class="nut-describe">
                                            <a href="#">
                                                {{item.title}}
                                            </a>
                                        </p>
                                        <p class="nut-but">
                                            <span class="nut-evaluate">评价:<span>{{item.evaluate}}人</span></span>
                                            <span class="nut-collection">收藏:<span>{{item.collection}}人</span></span>
                                        </p>

                                    </div>
                                </li>
                            </ul>
                        </div>
			        </div>
                </div>
            </div>
        </div>

        <!-- 开始商品分类 辣条-->
         <div class="container">
            <div class="row">
                <div class="am-container activity ">
                    <div class="shopTitle ">
                        <h4>辣条</h4>
                        <h3>爱辣爱辣，与你约惠 </h3>
                        <div class="today-brands ">
								<a href="# ">辣片</a>
								<a href="# ">卫龙</a>
								<a href="# ">网红辣条 </a>
								<a href="# ">亲嘴烧</a>
								<a href="# ">大刀肉</a>
								<a href="# ">辣条丝</a>
							</div>
							<span class="more ">
                                <a href="# ">更多美味>></a>
                            </span>
                    </div>
                    <div class="goods-nut">
                        <div class="nut-right">
                            <ul>
                                <li v-for="(item,index) in goodslist.slice(60,70)" :key="index" @click="goInfo(item.id)">
                                    <div class="right-s">
                                        <a href="#">
                                            <img :src="item.url" alt="">
                                        </a>
                                    </div>
                                    <div class="right-gw flex-between">
                                        <div class="right-gw-bor"><a href="" class="right-gw-che">找相似</a></div>
                                        <div class="right-gw-bor"><a href="" class="right-gw-che">找同款</a></div>
                                    </div>
                                    <div class="right-x">
                                        <p class="nut-price">
                                            <span class="nut-price1">￥{{item.price}}</span>
                                            <span class="nut-price2">{{item.purchase}}人购买</span>
                                        </p>
                                        <p class="nut-describe">
                                            <a href="#">
                                                {{item.title}}
                                            </a>
                                        </p>
                                        <p class="nut-but">
                                            <span class="nut-evaluate">评价:<span>{{item.evaluate}}人</span></span>
                                            <span class="nut-collection">收藏:<span>{{item.collection}}人</span></span>
                                        </p>

                                    </div>
                                </li>
                            </ul>
                        </div>
			        </div>
                    <div class="banner-img">
                        <img src="../../images/ls/index-2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 肉铺 膨化 -->
        <div class="container">
            <div class="row flex-between">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>肉铺</span>
                        <a href="#">
                            <el-button style="float: right; padding: 3px 0" type="text">更多美味</el-button>
                        </a>
                    </div>
                    <div class="text ite">
                        <ul class="flex-start">
                            <li v-for="(item,index) in goodslist.slice(80,86)" :key="index" @click="goInfo(item.id)" class="item-lili">
                                <a href="#" class="item-aa">
                                    <img :src="item.url" alt="" class="item-img">
                                </a>
                                <a href="#">
                                    <p>{{item.title}}</p>
                                </a>
                               <p>
                                    <span>￥{{item.price}}</span>
                                    <span>{{item.purchase}}人购买</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>膨化食品</span>
                        <a href="#">
                            <el-button style="float: right; padding: 3px 0" type="text">更多美味</el-button>
                        </a>
                    </div>
                    <div class="text ite">
                        <ul class="flex-start">
                            <li v-for="(item,index) in goodslist.slice(180,186)" :key="index" @click="goInfo(item.id)" class="item-lili">
                                <a href="#" class="item-aa">
                                    <img :src="item.url" alt="" class="item-img">
                                </a>
                                <a href="#">
                                    <p>{{item.title}}</p>
                                </a>
                                <p>
                                    <span>￥{{item.price}}</span>
                                    <span>{{item.purchase}}人购买</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </el-card>
            </div>
        </div>
        <!--水果干 糖果  -->
        <div class="container">
            <div class="row flex-between">
                <el-card class="box-card ">
                    <div slot="header" class="clearfix">
                        <span>水果干</span>
                        <a href="#">
                            <el-button style="float: right; padding: 3px 0" type="text">更多美味</el-button>
                        </a>
                    </div>
                    <div class="text ite">
                        <ul class="flex-start">
                            <li v-for="(item,index) in goodslist.slice(100,106)" :key="index" @click="goInfo(item.id)" class="item-lili">
                                <a href="#" class="item-aa">
                                    <img :src="item.url" alt="" class="item-img">
                                </a>
                                <a href="#">
                                    <p>{{item.title}}</p>
                                </a>
                                <p>
                                    <span>￥{{item.price}}</span>
                                    <span>{{item.purchase}}人购买</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>糖果</span>
                        <a href="#">
                            <el-button style="float: right; padding: 3px 0" type="text">更多美味</el-button>
                        </a>
                    </div>
                    <div class="text ite">
                        <ul class="flex-start">
                            <li v-for="(item,index) in goodslist.slice(120,126)" :key="index" @click="goInfo(item.id)" class="item-lili">
                               <a href="#" class="item-aa">
                                    <img :src="item.url" alt="" class="item-img">
                                </a>
                                <a href="#">
                                    <p>{{item.title}}</p>
                                </a>
                                <p>
                                    <span>￥{{item.price}}</span>
                                    <span>{{item.purchase}}人购买</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </el-card>
                
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="banner-img">
                    <img src="../../images/ls/index-1.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class="container">
            <div class="row">
                <template>
                    <ul class="infinite-list flex-start">
                        <li v-for="(item,c) in indexclass.slice(70,120)" :key="c" class="infinite-list-item list-like" @click="goInfo(item.id)">
                            <div class="right-s">
                                        <a href="#">
                                            <img :src="item.url" alt="">
                                        </a>
                                    </div>
                                    <div class="right-gw flex-between">
                                        <div class="right-gw-bor"><a href="" class="right-gw-che">找相似</a></div>
                                        <div class="right-gw-bor"><a href="javascript:;" class="right-gw-che">找同款</a></div>
                                    </div>
                                    <div class="right-x">
                                        <p class="nut-price">
                                            <span class="nut-price1">￥{{item.price}}</span>
                                            <span class="nut-price2">{{item.purchase}}人购买</span>
                                        </p>
                                        <p class="nut-describe">
                                            <a href="#">
                                                {{item.title}}
                                            </a>
                                        </p>
                                        <p class="nut-but">
                                            <span class="nut-evaluate">评价:<span>{{item.evaluate}}人</span></span>
                                            <span class="nut-collection">收藏:<span>{{item.collection}}人</span></span>
                                        </p>
                                    </div>
                        </li>
                    </ul>
                </template>
            </div>
        </div>
        <!-- 查看更多按钮-->
        <div class="container">
            <div class="row row-chakan">
                <el-divider content-position="center"><router-link to="/index/search">查看更多</router-link></el-divider>
            </div>
        </div>
        <!-- 底部 -->
        <commentfooter></commentfooter>
        <!-- 回到顶部 -->
        <commentup></commentup>
         <!-- 固定侧边栏 -->
        <div class="sidebar">
            <ul>
                <li v-for="item in siderbar" :key="item.side_id">
                    <a href="javascript:;" @click="getSide">{{item.side_name}}</a>
                </li>
            </ul>
        </div>
        
    </div>
    
</template>

<style src='../../assets/css/shopclass.css'></style>
<style src="../../assets/css/index.css"></style>
<style lang="css">
.nut-right ul li{
    position: relative;
}
.right-gw{
    position: absolute;
    top: 54.8%;
}
.right-gw-bor{
    display: none;
    width: 49%;
    background-color: rgba(0,0,0,0.6);
    text-align: center;
}
.right-gw-bor:hover{
    background-color:rgb(254,144,29);
    color: white;
}
.right-gw-che{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    z-index: 34;
    color: white;
    font-weight: 800;
}
.right-gw-che:hover{
    text-decoration: none;
    color: white;
}
</style>
    
<script>
import { Message } from 'element-ui'
import comment from "../components/top.vue"
import commentfooter from "../components/footer.vue"
import commentup from '../components/up.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            bannerHeight:"",
            lunbolist:[],
            goodslist:[],
            indexclass:[],
            siderbar:[],
        }
    },
    created() {
        this.getLunbolist();
        this.getIndexClass();
        this.getGoodslist();
        this.getsiderbar();
    },
    methods: {
        getLunbolist(){
            this.$http.get("lunbos")
            .then(res=>{
                this.lunbolist = res.body;
                // console.log(res.body);
            })
        },
        getGoodslist(){
            this.$http.get("good")
            .then(res=>{
                this.goodslist = res.body;
                // console.log(res.body);
            })
        }, 
        getIndexClass(){
            this.$http.get("shopsui")
            .then(res=>{
                this.indexclass = res.body;
                // console.log(res.body);
            })
        }, 
         getsiderbar(){
                this.$http.get("side")
                .then(res=>{
                    this.siderbar = res.body;
                    // console.log(res.body);
                })
            },
        getSide(){
            window.location.href='http://localhost:3000/#/index/search';
            sessionStorage.removeItem("seaData");
            this.getseachData=''
            window.sessionStorage.setItem('seaData',this.getseachData)
            this.search();
            this.getList();
        },
        imgLoad(){
            this.$nextTick(()=>{
                this.bannerHeight=this.$refs.bannerHeight[0].height;
                // console.log(this.$refs.bannerHeight[0].height);
            })
        },
        goInfo(id){
            //编程式跳转
            //方式1：最简单的方式
            // this.$router.push("/index/shopdetails/"+id);

            //方式二：传递对象
            //this.$router.push({path:"/home/goodsInfo/"+id})

            //方式三：传递命名的路由 与 参数
            this.$router.push({name:"goodsInfo",params:{id}})

        },
        /*addCollection(){
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
         if(sessionStorage.getItem("user_name") === null){
                    const h = this.$createElement;
                    this.$msgbox({
                    title: '提示',
                    message: h('p', null, [
                        h('span', null, '你还没有登陆商城，'),
                        h('i', { style: 'color: teal' }, '请问是否前往登陆？')
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                        instance.confirmButtonLoading = true;
                        instance.confirmButtonText = '正在前往...';
                        setTimeout(() => {
                            done();
                            setTimeout(() => {
                                instance.confirmButtonLoading = false;
                                window.location.href='http://localhost:3000/#/index/login';
                            }, 300);
                        }, 1000);
                        } else {
                        done();
                        }
                    }
                    });
                    }else{
                        if(!this.id || !this.goodslist.title){
                        this.flag1=true;
                        }else{
                        this.$http.post('collection/collections',{
                            id:this.id,
                            goods_id:this.id,
                            title:this.title,
                            price:this.price,
                            dis_price:this.discount_price,
                            purchase:this.purchase,
                            evaluate:this.evaluate,
                            collection:this.collection,
                            url:this.url,
                            time:currentdate,
                        }).then(function(data){
                            if(data.body.flag == 1){
                                
                            }else{
                                
                            }
                        })
                      }
                      Message.success("成功加入收藏夹");
                    }
            },*/
    },
    mounted() {
        this.imgLoad();
        window.addEventListener('resize',() => {
            this.bannerHeight=this.$refs.bannerHeight[0].height
            this.imgLoad();
        },false)
    },
    components:{
        commentBox:comment,
        commentfooter:commentfooter,
        commentup:commentup,
    }
    
}
</script>