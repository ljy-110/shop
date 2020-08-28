<template>
    <div>
        <commentBox></commentBox>
        <div class="container">
            <div class="row">
                <div class="top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>关于我们</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="con-logo">
                    <h2>关于我们</h2>
                    <a href="#" class="center">
                        <img src="../../images/logo.png" alt="">
                    </a>
                </div>
                <div class="con-main">
                    <el-collapse v-model="activeNames" @change="handleChange" class="con-main-mm">
                        <el-collapse-item title="关于悠品屋" name="1" class="con-mm-nn">
                            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                        </el-collapse-item>
                        <el-collapse-item title="网站的起源" name="2">
                            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        </el-collapse-item>
                        <el-collapse-item title="我们的理念" name="3">
                            <div>休闲娱乐来-口,健康活力我们有。</div>
                        </el-collapse-item>
                        <el-collapse-item title="联系我们" name="4">
                            <div>联系客服：00000000000</div>
                            <div>电话：0000000000</div>
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
.con-logo h2{
    color: rgb(255,146,37);
    padding: 20px 0 20px 0;
    border-bottom: 1px solid #ccc;
}
.con-mm-nn >>> div .el-collapse-item__header{
    font-size: 20px;
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
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
}
</script>