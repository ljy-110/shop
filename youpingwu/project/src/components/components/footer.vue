<template>
    <div>
        <div class="footer">
            <div class="container">
                <div class="row">
                   <p class="footer-pp">
                     <router-link to="/index/contact">关于我们</router-link>|
                     <router-link to="/index">商城首页</router-link>|
                     <router-link to="/index/contact">联系电话</router-link>|
                     <router-link to="/index/hezuo">合作平台</router-link>|
                     <router-link to="">帮助中心</router-link>|
                     <router-link to="">法律声明</router-link>|
                     <router-link to="/index/privacy">隐私政策</router-link>
                   </p> 
                   <p class="footer-pp">
                       <a href="#" v-for="(item,index) in brands.slice(0,16)" :key="index">
                           {{item.brand_name}}
                       </a>
                   </p>
                   <p class="footer-p2">休闲娱乐来一口，健康活力我们有。--悠品屋  @1173908229  网站版权所有</p>
                    <div class="code">
                        <img src="../../images/ls/ma.jpg" alt="" class="code-img">
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="css">
    .footer {
        background-color: white;
    }
    .row .footer-pp {
        margin-top: 2%;
        height: 40px;
        line-height: 40px;
    }
    .row .footer-pp a {
        color: black;
        text-decoration: none;
        display: inline-block;
        padding: 0 5px 0 5px;
        text-align: center;
        
    }
    .row .footer-p2 {
        margin-left: 5px;
        color: black;
        height: 40px;
        line-height: 40px;
    }
    .row .footer-pp a:hover {
        color: red;
    }
    .row .code {
        position: relative;
    }
    .row .code .code-img {
        width: 11%;
        position: absolute;
        right: 8%;
        top: -155px;
        
    }
</style>

<script>
export default {
    data() {
        return {
            brands:[],
        }
    },
    created() {
        this.getBrands();
    },
    methods: {
        getBrands(){
            this.$http.get("brands")
            .then(res=>{
                this.brands = res.body;
                // console.log(res.body);
            })
        },
    },
}
</script>