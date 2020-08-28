<template>
    <div>
        <commentBox></commentBox>
        <div class="container">
            <div class="row">
                <div class="top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>跨界合作</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="hezuo-title">
                    <h1>跨界合作</h1>
                </div>
                <div class="hezuo-box">
                    <div class="box-one flex-between">
                        <div class="box-one-left hz-width-left part">
                            <div class="one-title">三只松鼠</div>
                            <div class="one-text">
                                三只松鼠联盟小店是三只松鼠旗下新零售赋能创业平台，肩负“助力年轻人创业，
                                让天下没有难开的零食店”的使命， 开创了基于“简单、透明、信任、共生“的
                                联盟经营模式，主张以商品绝对价值为本，以人为核心的经营模式。 
                                三只松鼠正式开启”和主人一起开店“的新时代！
                            </div>
                            <span class="res"></span>
                            <span class="icon icon-img1"></span>
                        </div>
                        <div class="box-one-right hz-width-right part">
                            <img src="../../images/hezuo/hezuo-(3).jpg" alt="" class="">
                        </div>
                    </div>
                    <div class="box-one flex-between">
                        <div class="box-one-right hz-width-right part">
                            <img src="../../images/hezuo/hezuo-(5).jpg" alt="" class="">
                        </div>
                        <div class="box-one-left hz-width-left part">
                            <div class="one-title">产品合作</div>
                            <div class="one-text">
                                目前，三只松鼠已经完成从坚果品牌到全品类零食品牌的历史性转变，
                                构建了以坚果/果干、面包烘焙、肉制品为核心品类的休闲食品产品体系。 
                                通过供应链的快速反向定制，三只松鼠具备40天完成自用户洞察到产品上线的能力，
                                力求向用户提供更丰富的产品。同时，公司不断致力于产品的创新， 强化“造货+造体验”的
                                核心能力，通过“风味”、“鲜味”和“趣味”构建起独特的“松鼠味”。
                            </div>
                            <span class="res2"></span>
                            <span class="icon icon-img2"></span>
                        </div>
                    </div>
                    <div class="box-one flex-between">
                        <div class="box-one-left hz-width-left part">
                            <div class="one-title">品牌合作</div>
                            <div class="one-text">
                                三只松鼠诞生于2012年2月，以三只形态各异的小松鼠为IP形象，全球目前拥有超1亿注册会员粉丝。 
                                公司构建以三只松鼠为主角的松鼠宇宙，运用成熟的商业模式进行IP变现，
                                通过双品牌IP合作模式触达更多的行业， 与商业伙伴共同搭建IP运营生态圈，携手解决IP变现这一难题。
                            </div>
                            <span class="res"></span>
                            <span class="icon icon-img3"></span>
                        </div>
                        <div class="box-one-right hz-width-right part">
                            <img src="../../images/hezuo/hezuo-(11).jpg" alt="" class="">
                        </div>
                    </div>
                    <div class="box-one flex-between">
                        <div class="box-one-right hz-width-right part">
                            <img src="../../images/hezuo/hezuo-(13).jpg" alt="" class="">
                        </div>
                        <div class="box-one-left hz-width-left part">
                            <div class="one-title">媒体联络</div>
                            <div class="one-text">
                                三只松鼠自2012年创立以来，连续七年位列天猫坚果零食销量第一，累计销售坚果零食超300亿元。 
                                2019年7月12日，三只松鼠正式在深交所开盘上市，首开A股无人敲钟先河，被媒体誉为“国民零食第一股”。
                            </div>
                            <span class="res2"></span>
                            <span class="icon icon-img4"></span>
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
.hezuo-title h1{
    color: rgb(255,146,37);
    font-weight: 800;
    font-size: 50px;
    padding:50px 0 20px 0;
}
.part{
    height: 620px;
    margin-top: 50px;
    cursor: pointer;
}
.hz-width-left{
    width: 30%;
    transition: all .3s;
    background-color: #f2f2f2;
    color: #5a5a5c;
    position: relative;
    padding: 90px 30px 0;
    box-sizing: border-box;
}
.hz-width-right{
    width: 70%;
}
.hz-width-right img{
    width: 100%;
    height: 620px;
}
.one-title{
    transition: all .3s;
    font-size: 36px;
    font-weight: bold;
    height: 40px;
}
.one-text{
    
    margin-top: 10px;
    transition: all .3s;
    font-weight: 200;
    font-size: 16px;
    line-height: 36px;
    text-indent: 32px;
    box-sizing: border-box;
}
.res{
    display: block;
    position: absolute;
    top: 48%;
    right: -30px;
    z-index: 9;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-left: 30px solid #f2f2f2;
    border-bottom: 15px solid transparent;
}
.res2{
    display: block;
    position: absolute;
    top: 48%;
    left: -30px;
    z-index: 9;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-right: 30px solid #f2f2f2;
    border-bottom: 15px solid transparent;
    transition: all .3s;
}
.icon{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 128px;
    height: 150px;
}
.box-one-left .icon-img1{
    background-image: url(../../images/hezuo/hezuo-1.jpg);
    transition: all .3s;
}
.box-one-left .icon-img2{
    background-image: url(../../images/hezuo/hezuo-4.jpg);
    transition: all .3s;
}
.box-one-left .icon-img3{
    background-image: url(../../images/hezuo/hezuo-10.jpg);
    transition: all .3s;
}
.box-one-left .icon-img4{
    background-image: url(../../images/hezuo/hezuo-12.jpg);
    transition: all .3s;
}
.box-one:hover .hz-width-left{
    background-color: #ff9225;
    color: #fff;
}
.box-one:hover .box-one-left .res{
    border-left: 30px solid #ff9225;
}
.box-one:hover .box-one-left .res2{
    border-right: 30px solid #ff9225;
}
.box-one:hover .box-one-left .one-title,
.box-one:hover .box-one-left .one-text{
    color: white;
}
</style>

<script>
import comment from "../components/top.vue"
import commentfooter from "../components/footer.vue"
import commentup from '../components/up.vue'
export default {
    components:{
        commentBox:comment,
        commentfooter:commentfooter,
        commentup:commentup,
    },
}
</script>