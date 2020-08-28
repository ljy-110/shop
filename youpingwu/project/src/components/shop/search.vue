<template>
    <div class="content">
        <commentBox @func='getData' :getlist='getList' :search='search' :init='init'></commentBox>
        <div class="container">
            <div class="row">
                <div class="top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>所有分类</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="search-banner">
                    <ul>
                        <li class="sea-li flex-between">
                            <div class="sea-li-class">零食种类：</div>
                            <div class="flex-start sea-li-type">
                                <div class="width10"><a href="javascript:;" @click="getQuanbu" class="border-a">全部</a></div>
                                <div class="width10"><a href="javascript:;" @click="getClick($event)">坚果</a></div>
                                <div class="width10"><a href="javascript:;" @click="getClick($event)">辣条</a></div>
                                <div class="width10"><a href="javascript:;" @click="getClick($event)">饼干</a></div>
                                <div class="width10"><a href="javascript:;" @click="getClick($event)">肉脯</a></div>
                                <div class="width10"><a href="javascript:;" @click="getClick($event)">干货</a></div>
                                <div class="width10"><a href="javascript:;" @click="getClick($event)">糖果</a></div>
                                <div class="width10"><a href="javascript:;" @click="getClick($event)">果冻</a></div>
                                <div class="width10"><a href="javascript:;" @click="getClick($event)">饮料</a></div>
                                <div class="width10"><a href="javascript:;" @click="getClick($event)">膨化食品</a></div>
                            </div>
                        </li>
                        <li class="sea-li flex-between">
                            <div class="sea-li-class">品牌：</div>
                            <div class="flex-start sea-li-type">
                                <div class="width10"><a href="javascript:;" @click="getQuanbu" class="border-a">全部</a></div>
                                <div class="width10" v-for="(item,index) in brandlist.slice(0,20)" :key="index"><a href="javascript:;" @click="getClick($event)">{{item.brand_name}}</a></div>
                            </div>
                        </li>
                        <li class="sea-li flex-between">
                            <div class="sea-li-class">口味：</div>
                            <div class="flex-start sea-li-type">
                                <div class="width10"><a href="#" class="border-a">全部</a></div>
                                <div class="width10"><a href="#">原味</a></div>
                                <div class="width10"><a href="#">麻辣味</a></div>
                                <div class="width10"><a href="#">香辣味</a></div>
                                <div class="width10"><a href="#">五香味</a></div>
                                <div class="width10"><a href="#">孜然味</a></div>
                                <div class="width10"><a href="#">泡椒味</a></div>
                                <div class="width10"><a href="#">不限</a></div>
                            </div>
                        </li>
                        <li class="sea-li flex-between">
                            <div class="sea-li-class">包装：</div>
                            <div class="flex-start sea-li-type">
                                <div class="width10"><a href="#" class="border-a">全部</a></div>
                                <div class="width10"><a href="#">袋装</a></div>
                                <div class="width10"><a href="#">罐装</a></div>
                                <div class="width10"><a href="#">礼盒装</a></div>
                                <div class="width10"><a href="#">盒装</a></div>
                                <div class="width10"><a href="#">散装</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="sea-nav">
                    <ul class="flex-start sea-nav-mm">
                        <li><a href="#"><button class="but-bg-co1">综合排序</button></a></li>
                        <li><a href="#"><button class="but-bg-co2">销量排序</button></a></li>
                        <li><a href="#"><button class="but-bg-co2">信用</button></a></li>
                        <li><a href="#"><button class="but-bg-co2">价格</button></a></li>
                    </ul>
                </div>
                <div class="sea-main">
                    <ul class="flex-start">
                        <li class="sea-main-li" v-for="(item,index) in list" :key="index" @click="goInfo(item.id)">
                            <div class="right-sea">
                                <a href="#">
                                    <img :src="item.url" alt="">
                                </a>
                            </div>
                            <div class="sea-li-hover">
                                <ul class="flex-between sea-hover-ul">
                                    <li class="sea-ul-li"><a href="#">找相似</a></li>
                                    <li class="sea-ul-li"><a href="#">找同款</a></li>
                                </ul>
                            </div>
                            <div class="right-sea2">
                                <p class="nut-price">
                                    <span class="nut-price1">￥{{item.price}}</span>
                                    <span class="nut-price2">{{item.purchase}}人购买</span>
                                </p>
                                <p class="nut-describe">
                                    <a href="#">{{item.title}}</a>
                                </p>
                                <p class="nut-but">
                                    <span class="nut-evaluate">评价:<span>{{item.evaluate}}人</span></span>
                                    <span class="nut-collection">收藏:<span>{{item.collection}}人</span></span>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div class="pagebox">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="page" :page-sizes="[50,100,200]" :page-size="limit"
                            layout="total, sizes, prev, pager, next, jumper" :total="total" hide-on-single-page>
                        </el-pagination>
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
.pagebox{
    display: flex;
    justify-content: center;
}
.pagebox >>>.el-select__caret.is-reverse {
    line-height: 20px;
}
.pagebox >>>.el-icon-arrow-up {
    line-height: 40px;
}
</style>

<script>
import comment from "../components/top.vue"
import commentpage from "../components/page.vue"
import commentup from "../components/up.vue"
import commentfooter from "../components/footer.vue"
export default {
    components:{
        commentBox:comment,
        commentpage:commentpage,
        commentfooter:commentfooter,
        commentup:commentup,
    },
    data() {
        return {
            list:[],
            limit: 100, //每页数据条数
            total: null,  
            page: 1,  //当前页
            getseachData: "",
            brandlist:[],
            goodslist:[],
        }
    },
    created() {
        this.getBrands();
        this.getGoodslist();
    },
    mounted() {
        this.$nextTick(function(){
            setTimeout(()=>{
                $('.width10 > a').click(function(){
                    $(this).toggleClass('border-a');
                    $(this).parents('.width10').siblings().children('a').removeClass('border-a');
                    
                })
            },1000)
      })
    },
    methods: {
        getClick(event){
            sessionStorage.removeItem("seaData");
            var e = event.currentTarget.innerHTML;
            this.getseachData=e
            window.sessionStorage.setItem('seaData',this.getseachData)
            this.getList();
            this.search();
        },
        getQuanbu(){
            sessionStorage.removeItem("seaData");
            this.getseachData=''
            window.sessionStorage.setItem('seaData',this.getseachData)
            // this.init()
            this.search();
            this.getList();
            // this.getGoodslist();

        },
        getBrands(){
            this.$http.get("brands")
            .then(res=>{
                this.brandlist = res.body;
            })
        },
        getGoodslist(){
            this.$http.get("good")
            .then(res=>{
                this.goodslist = res.body
                this.getList();
            })
        },
        goInfo(id){
            this.$router.push("/index/shopdetails/"+id);
        },
        // 处理数据
            getList() {
                this.getseachData = sessionStorage.getItem("seaData");
                // es6过滤得到满足搜索条件的展示数据list
                let list = this.goodslist.filter((item, index) =>
                    item.title.includes(this.getseachData) ||
                    item.name.includes(this.getseachData) || item.brand_id.includes(this.getseachData)
                )
                console.log(list);
                this.list = list.filter((item, index) =>
                    index < this.page * this.limit && index >= this.limit * (this.page - 1)
                )
                this.total = list.length
            },
            // 当每页数量改变
            handleSizeChange(val) {
                this.limit = val
                this.getList()
            },
            // 当当前页改变
            handleCurrentChange(val) {
                this.page = val
                this.getList()
            },
            // 搜索过滤数据
            search() {
                this.page = 1
                this.getList()
            },
            // 搜索框失焦后为空，重新渲染列表数据
            init(){
                if(this.getseachData == ''){
                    this.getGoodslist()
                }
            },
            getData(data){
                this.getseachData = data
                // console.log(this.getseachData)
            }
    },
}
</script>