<template>
    <div>
        <commentBox></commentBox>
        <div class="shopclass">
            <div class="container">
                <div class="row">
                    <div class="top">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item>所有分类</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="banner">
                        <el-tabs type="border-card">
                            <el-tab-pane label="商品分类">
                                <div class="class flex-between">
                                    <div class="class-left center">
                                        所有分类
                                    </div>
                                    <div class="class-right">
                                        <ul class="flex-start">
                                            <li class="class-li"><a href="#"><button>坚果类</button></a></li>
                                            <li class="class-li"><a href="#"><button>辣条类</button></a></li>
                                            <li class="class-li"><a href="#"><button>面包类</button></a></li>
                                            <li class="class-li"><a href="#"><button>饼干类</button></a></li>
                                            <li class="class-li"><a href="#"><button>肉铺类</button></a></li>
                                            <li class="class-li"><a href="#"><button>干货类</button></a></li>
                                            <li class="class-li"><a href="#"><button>糖果类</button></a></li>
                                            <li class="class-li"><a href="#"><button>果冻类</button></a></li>
                                            <li class="class-li"><a href="#"><button>饮料类</button></a></li>
                                            <li class="class-li"><a href="#"><button>膨化食品</button></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="class-shop flex-start">
                                    <div class="shop">
                                        <h4>坚果类</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>榛子</button></a></li>
                                            <li class="shop-li"><a href="#"><button>杏仁</button></a></li>
                                            <li class="shop-li"><a href="#"><button>巴旦木</button></a></li>
                                            <li class="shop-li"><a href="#"><button>腰果</button></a></li>
                                            <li class="shop-li"><a href="#"><button>核桃仁</button></a></li>
                                            <li class="shop-li"><a href="#"><button>松子</button></a></li>
                                            <li class="shop-li"><a href="#"><button>瓜子</button></a></li>
                                            <li class="shop-li"><a href="#"><button>香榧</button></a></li>
                                            <li class="shop-li"><a href="#"><button>豆类制品</button></a></li>
                                        </ul>
                                    </div>
                                    <div class="shop">
                                        <h4>辣条类</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>卫龙</button></a></li>
                                            <li class="shop-li"><a href="#"><button>鱼仔</button></a></li>
                                            <li class="shop-li"><a href="#"><button>大刀肉</button></a></li>
                                            <li class="shop-li"><a href="#"><button>豆腐干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>亲嘴烧</button></a></li>
                                            <li class="shop-li"><a href="#"><button>辣片</button></a></li>
                                            <li class="shop-li"><a href="#"><button>网红辣条</button></a></li>
                                            <li class="shop-li"><a href="#"><button>辣条丝</button></a></li>
                                            <li class="shop-li"><a href="#"><button>牛板筋</button></a></li>
                                        </ul>
                                    </div>
                                    <div class="shop">
                                        <h4>面包类</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>蛋糕</button></a></li>
                                            <li class="shop-li"><a href="#"><button>三明治</button></a></li>
                                            <li class="shop-li"><a href="#"><button>吐司</button></a></li>
                                            <li class="shop-li"><a href="#"><button>全麦面包</button></a></li>
                                            <li class="shop-li"><a href="#"><button>蛋黄酥</button></a></li>
                                            <li class="shop-li"><a href="#"><button>手撕面包</button></a></li>
                                            <li class="shop-li"><a href="#"><button>欧包</button></a></li>
                                            <li class="shop-li"><a href="#"><button>紫薯面包</button></a></li>
                                            <li class="shop-li"><a href="#"><button>肉松面包</button></a></li>
                                            <li class="shop-li"><a href="#"><button>夹心面包</button></a></li>
                                            <li class="shop-li"><a href="#"><button>西式糕点</button></a></li>
                                        </ul>
                                    </div>
                                    <div class="shop">
                                        <h4>饼干类</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>早餐饼干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>奥利奥</button></a></li>
                                            <li class="shop-li"><a href="#"><button>小饼干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>进口饼干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>牛奶饼干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>夹心饼干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>苏打饼干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>肉松饼</button></a></li>
                                            <li class="shop-li"><a href="#"><button>巧克力饼</button></a></li>
                                            <li class="shop-li"><a href="#"><button>曲奇</button></a></li>
                                            <li class="shop-li"><a href="#"><button>达利园</button></a></li>
                                        </ul>
                                    </div>
                                    <div class="shop">
                                        <h4>肉铺类</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>猪肉铺</button></a></li>
                                            <li class="shop-li"><a href="#"><button>牛肉脯</button></a></li>
                                            <li class="shop-li"><a href="#"><button>麻辣肉</button></a></li>
                                            <li class="shop-li"><a href="#"><button>良品铺子</button></a></li>
                                            <li class="shop-li"><a href="#"><button>三只松鼠</button></a></li>
                                            <li class="shop-li"><a href="#"><button>来伊份</button></a></li>
                                            <li class="shop-li"><a href="#"><button>黄胜记</button></a></li>
                                            <li class="shop-li"><a href="#"><button>味巴哥</button></a></li>
                                            <li class="shop-li"><a href="#"><button>百草味</button></a></li>
                                        </ul>
                                    </div>
                                    <div class="shop">
                                        <h4>干货类</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>芒果干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>番薯干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>葡萄干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>蔬菜干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>草莓干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>香蕉干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>鱼干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>鱿鱼干</button></a></li>
                                            <li class="shop-li"><a href="#"><button>梅干</button></a></li>
                                        </ul>
                                    </div>
                                    <div class="shop">
                                        <h4>糖果类</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>喜糖</button></a></li>
                                            <li class="shop-li"><a href="#"><button>水果糖</button></a></li>
                                            <li class="shop-li"><a href="#"><button>软糖</button></a></li>
                                            <li class="shop-li"><a href="#"><button>棒棒糖</button></a></li>
                                            <li class="shop-li"><a href="#"><button>薄荷糖</button></a></li>
                                            <li class="shop-li"><a href="#"><button>奶糖</button></a></li>
                                            <li class="shop-li"><a href="#"><button>牛轧糖</button></a></li>
                                            <li class="shop-li"><a href="#"><button>润喉糖</button></a></li>
                                            <li class="shop-li"><a href="#"><button>椰子糖</button></a></li>
                                        </ul>
                                    </div>
                                    <div class="shop">
                                        <h4>果冻类</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>果味型</button></a></li>
                                            <li class="shop-li"><a href="#"><button>果肉型</button></a></li>
                                            <li class="shop-li"><a href="#"><button>果汁型</button></a></li>
                                            <li class="shop-li"><a href="#"><button>含乳型</button></a></li>
                                            <li class="shop-li"><a href="#"><button>喜之郎</button></a></li>
                                            <li class="shop-li"><a href="#"><button>盼盼</button></a></li>
                                            <li class="shop-li"><a href="#"><button>洽洽</button></a></li>
                                            <li class="shop-li"><a href="#"><button>旺旺</button></a></li>
                                            <li class="shop-li"><a href="#"><button>来伊份</button></a></li>
                                        </ul>
                                    </div>
                                    <div class="shop">
                                        <h4>饮料类</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>苏打水</button></a></li>
                                            <li class="shop-li"><a href="#"><button>可乐</button></a></li>
                                            <li class="shop-li"><a href="#"><button>果味饮料</button></a></li>
                                            <li class="shop-li"><a href="#"><button>运动饮料</button></a></li>
                                            <li class="shop-li"><a href="#"><button>矿泉水</button></a></li>
                                            <li class="shop-li"><a href="#"><button>咖啡</button></a></li>
                                            <li class="shop-li"><a href="#"><button>蔬菜汁</button></a></li>
                                            <li class="shop-li"><a href="#"><button>柠檬茶</button></a></li>
                                            <li class="shop-li"><a href="#"><button>奶茶</button></a></li>
                                        </ul>
                                    </div>
                                    <div class="shop">
                                        <h4>膨化食品</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>薯片</button></a></li>
                                            <li class="shop-li"><a href="#"><button>锅巴</button></a></li>
                                            <li class="shop-li"><a href="#"><button>虾片</button></a></li>
                                            <li class="shop-li"><a href="#"><button>雪米饼</button></a></li>
                                            <li class="shop-li"><a href="#"><button>爆米花</button></a></li>
                                            <li class="shop-li"><a href="#"><button>小馒头</button></a></li>
                                            <li class="shop-li"><a href="#"><button>薯条</button></a></li>
                                            <li class="shop-li"><a href="#"><button>仙贝</button></a></li>
                                            <li class="shop-li"><a href="#"><button>夹心卷</button></a></li>
                                        </ul>
                                    </div>
                                    <div class="shop">
                                        <h4>其他</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>火腿肠</button></a></li>
                                            <li class="shop-li"><a href="#"><button>减肥蔬菜</button></a></li>
                                            <li class="shop-li"><a href="#"><button>少热食品</button></a></li>
                                            <li class="shop-li"><a href="#"><button>手工食品</button></a></li>
                                            <li class="shop-li"><a href="#"><button>零食</button></a></li>
                                            <li class="shop-li"><a href="#"><button>奶片</button></a></li>
                                            <li class="shop-li"><a href="#"><button>栗子</button></a></li>
                                            <li class="shop-li"><a href="#"><button>沙琪玛</button></a></li>
                                            <li class="shop-li"><a href="#"><button>燕麦</button></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="特色商品">
                                <div class="class-shop flex-start">
                                <div class="shop">
                                        <h4>其他</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>火腿肠</button></a></li>
                                            <li class="shop-li"><a href="#"><button>减肥蔬菜</button></a></li>
                                            <li class="shop-li"><a href="#"><button>少热食品</button></a></li>
                                            <li class="shop-li"><a href="#"><button>手工食品</button></a></li>
                                            <li class="shop-li"><a href="#"><button>零食</button></a></li>
                                            <li class="shop-li"><a href="#"><button>奶片</button></a></li>
                                            <li class="shop-li"><a href="#"><button>栗子</button></a></li>
                                            <li class="shop-li"><a href="#"><button>沙琪玛</button></a></li>
                                            <li class="shop-li"><a href="#"><button>燕麦</button></a></li>
                                        </ul>
                                    </div>
                                <div class="shop">
                                        <h4>其他</h4>
                                        <ul class="flex-start">
                                            <li class="shop-li"><a href="#"><button>火腿肠</button></a></li>
                                            <li class="shop-li"><a href="#"><button>减肥蔬菜</button></a></li>
                                            <li class="shop-li"><a href="#"><button>少热食品</button></a></li>
                                            <li class="shop-li"><a href="#"><button>手工食品</button></a></li>
                                            <li class="shop-li"><a href="#"><button>零食</button></a></li>
                                            <li class="shop-li"><a href="#"><button>奶片</button></a></li>
                                            <li class="shop-li"><a href="#"><button>栗子</button></a></li>
                                            <li class="shop-li"><a href="#"><button>沙琪玛</button></a></li>
                                            <li class="shop-li"><a href="#"><button>燕麦</button></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
        </div>
        

        <commentfooter></commentfooter>
    </div>
</template>

<style src='../../assets/css/shopclass.css'></style>
<style lang="css" scoped>

</style>

<script>
import comment from "../components/top.vue"
import commentfooter from "../components/footer.vue"
export default {
    components:{
        commentBox:comment,
        commentfooter:commentfooter,
    },
}
</script>