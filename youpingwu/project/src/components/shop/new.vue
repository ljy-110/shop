<template>
    <div>
        <commentBox></commentBox>
        <div class="container">
            <div class="row">
                <div class="top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/index/user' }">个人中心</el-breadcrumb-item>
                        <el-breadcrumb-item>消息内容</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="new-main flex-between">
                    <div class="new-main-left">
                        <h2>最特色的年货都在这儿快来国年货啦!</h2>
                        <hr>
                        <div class="new-main-text">
                            <img src="../../images/user/goods-1-(2).jpg" alt="">
                            公益面前没有竞争，“我们要联合做公益”。9月5日，
                            第三届阿里巴巴95公益周线下论坛在杭州举行，阿里巴巴、
                            新浪微博、腾讯、字节跳动、小米、轻松筹等六大互联网公司同台，
                            探讨打破公益疆界、推进公益融合话题。
                            95公益周阿里、腾讯等六家公司同台联合做公益
来源： 公益中国网      2019-09-05 18:19      分享

公益面前没有竞争，“我们要联合做公益”。9月5日，第三届阿里巴巴95公益周线下论坛在杭州举行，阿里巴巴、新浪微博、腾讯、字节跳动、小米、轻松筹等六大互联网公司同台，探讨打破公益疆界、推进公益融合话题。

图片1

第三届阿里巴巴95公益周论坛现场，六大互联网公益同台谈公益

      
这是六家公司第一次集体同台畅谈互联网公益创新，或将成为互联网公益融合发展的一个新起点。
     
论坛上，阿里巴巴携手中央网信办、生态环保部、团中央、中国美院等相关部门及多家互联网公司联合发起人人公益倡议，号召全社会开放、透明、共享、联合做公益，共同带动人人参与。



第三届阿里巴巴95公益周发起人人公益倡议
    
今年95公益周，阿里巴巴用一个字表达了主题——“融”。
     
“一个人做很多不是公益，很多人做一点点，才是真正的公益。95公益周就是希望创造更多的公益交流机会，搭建创新公益的平台，让公益真正成为社会公众普遍接受的新生活方式。”阿里巴巴合伙人、阿里巴巴集团党委书记邵晓锋在致辞中说。

图片3

阿里巴巴合伙人、阿里巴巴集团党委书记邵晓锋

在圆桌论坛上，围绕公益如何跨界、公益的竞争与融合、互联网应该如何带动人人公益等话题，新浪微博高级副总裁曹增辉、轻松筹首席战略官王政、腾讯慈善公益基金会执行秘书长窦瑞刚、字节跳动公益总监张木兰、小米公益基金会副秘书长刁美玲，以及阿里巴巴合伙人、蚂蚁金服支付宝事业群总裁倪行军展开了深入的探讨。
   
新浪微博高级副总裁曹增辉在分享中说：“作为公益平台的运营方，感受很深的是越来越多的普通人愿意参与公益，同时愿意把自己的公益行为分享出来，这是非常好的现象，我希望微博和其他平台一起在公益上发挥更多作用，让普通人参与公益的价值更好地发挥出来。”

图片4

新浪微博高级副总裁曹增辉
       
腾讯公益慈善基金会执行秘书长窦瑞刚分享了他对互联网公益融汇的理解，“融的关键在于消融，做到无我,即放下组织本位，消融机构壁垒，一起做生态共建者，努力追求我将无我、不负公益。汇的核心是汇聚，汇聚亿万网友爱心，聚微爱为浩瀚，做人人公益的创连者。”

图片5

腾讯慈善公益基金会执行秘书长窦瑞刚
           
轻松筹首席战略官王政说，在公益上各家公司应该开放平台、资源：“开放互联，尽量开放我们所有的平台、所有的资源，我们在互联网公益平台里也做了一些自律公约，所有的公益项目在平台上都可以互联互通，公益不是你的我的，是社会的。”
      
“互联网公益因为具有互联网的基因，在融合这件事上最有优势。我理解人人参与，首先是人人都想参与，然后是人人能够参与进来。” 阿里巴巴合伙人、支付宝事业群总裁倪行军说，“依靠互联网技术，我们需要解决的，是通过开发互联网公益产品，降低公众参与的门槛，解决想参与、而且能参与进来的问题。”
                        </div>
                    </div>
                    <div class="new-main-time">
                        <el-calendar>
                            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
                            <template
                                slot="dateCell"
                                slot-scope="{date, data}">
                                <p :class="data.isSelected ? 'is-selected' : ''">
                                {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
                                </p>
                            </template>
                        </el-calendar>

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
.new-main-left{
    width: 80%;
}
.new-main-text{
    padding: 20px;
}
.new-main-text img{
    width: 100%;
    height: 500px;
}
.is-selected {
    color: #1989FA;
  }
.new-main-time{
    width: 20%;
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
}
</script>