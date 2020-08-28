<template>
    <div>
        <commentBox></commentBox>
        <div class="container">
            <div class="row">
                <div class="top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>法律声明</el-breadcrumb-item>
                        <el-breadcrumb-item>隐私权规范</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="pri-title">
                    <h1>隐私权规范</h1>
                </div>
                <div class="pri-main">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>悠品屋网站
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>我们对您的承诺
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>收集之信息内容及收集方式
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>@个人信息处理方式
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>关于儿童之指导原则
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>匿名汇集信息之使用及披露
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>安全性措施
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>查询或问题--您的权利
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>如何拒绝接受我们使用您的个人信息
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>相连结网站
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>本隐私原则管理使用;本隐私原则变更
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                        <el-collapse-item class="pri-main-item">
                            <template slot="title" class="pri-main-title">
                                <i class="header-icon el-icon-s-opportunity pri-title-icon"></i>问题
                            </template>
                            <div class="pri-main-text">其明重视用户的隐私，隐私权是您重要的权利。您在使用我们的服务时，
                            我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说
                            明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及
                            我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与
                            您所使用的其明服务息息相关，希望您仔细阅读，在需要时， 按照本《隐私政
                            策》的指引,作出您认为适当的选择。本《隐私政策》中涉及的相关技术词
                            汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
        <commentfooter></commentfooter>
    </div>
</template>

<style src='../../assets/css/shopclass.css'></style>
<style lang="css" scoped>
.pri-title h1{
    padding-left: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
}
.pri-main-item{
    margin-bottom: 20px;
    border: 1px solid #ccc;
}
.pri-title-icon{
    font-size: 20px;
    color: rgb(158,234,106);
    margin: 0 10px 0 20px;
}
.pri-main-item >>> div .el-collapse-item__header{
    font-size: 25px;
    height: 70px;
    background-color: rgb(248,248,248);
}
.pri-main-item >>> div .el-collapse-item__header i:nth-child(2){
    margin-right: 20px;
}
.pri-main-text{
    padding: 20px;
    font-size: 16px;
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
        activeName: '1'
      };
    }
}
</script>