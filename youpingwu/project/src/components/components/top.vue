<template>
    <div class="bg">
        <div class="topnav">
            <div class="container">
                <div class="row flex-between">
                    <div class="nav1 col-lg-6 col-md-3 col-sm-4 col-xs-6">
                        <router-link to="/index/login" class="top-login">请先登陆</router-link>
                        <router-link to="/index/register" class="top-login">免费注册</router-link>
                        <a class="usernone" id="top-user" href="javascript:;">
                                <span class="top-user-span">{{lastname}},欢迎你进入悠品屋<i class="el-icon-arrow-down el-icon--right"></i></span>
                                <div class="user-xia usernone">
                                    <div><router-link to="/index/user">个人中心</router-link></div>
                                    <div @click="tuichu"><a href="javascript:;">退出登陆</a></div>
                                </div>
                        </a>
                         
                    </div>
                    <div class="nav1 nav2 col-lg-6 col-md-9 col-sm-8 col-xs-6">
                        <router-link to="/index">商城首页</router-link>
                        <a href="javascript:;" class="hidden-sm user-click">
                            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                            <el-button type="text" @click="open">个人中心</el-button>
                        </a>
                        <a href="javascript:;" class="hidden-xs user-click">
                            <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                            <el-button type="text" @click="openCar">购物车</el-button>
                        </a>
                        <router-link to="/index/shopclass" class="hidden-xs">商品分类</router-link>
                        <router-link to="/index/hezuo" class="hidden-sm hidden-xs">跨界合作</router-link>
                        <router-link to="/index/contact" class="hidden-sm hidden-xs">
                             <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
                            联系我们</router-link>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- logo,搜索框 -->
        <nav class="navbar">
            <div class="container">
                <div class="navbar-header col-lg-2 col-md-5 col-sm-4 hidden-xs" style="padding:0;">
                    <router-link class="navbar-brand" to="/index">
                        <img alt="休闲娱乐来一口，健康活力我们有。" src="../../images/logo.png">
                    </router-link>
                </div>
                <div class="navbar-word col-lg-3 hidden-md hidden-sm hidden-xs">
                    <span>
                        休闲娱乐来一口<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;健康活力我们有 
                    </span>
                </div>
                <div class="navbar-inp col-lg-7 col-md-7 col-sm-8 ">
                    <form>
						<input id="searchInput" v-model="searchData" @blur="inita"  type="text" placeholder="搜索" autocomplete="off">
						<input id="ai-topsearch" class="submit am-btn" value="搜索" @click="childSearch" index="1" type="submit">
					</form>
                    <ul class="hidden-xs">
                        <li>
                            <a href="#" @click="setSeach($event)">坚果</a>
                            <a href="#" @click="setSeach($event)">膨化食品</a>
                            <a href="#" @click="setSeach($event)">饼干</a>
                            <a href="#" @click="setSeach($event)">巧克力</a>
                            <a href="#" @click="setSeach($event)">糖果</a>
                            <a href="#" @click="setSeach($event)">饮料</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        
    </div>
</template>

<style lang="css">
.user-click button span{
    color: black;
}
.user-click button:active{
    background-color: rgb(245,245,245);
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
.el-icon-arrow-down {
    font-size: 12px;
}
.usernone{
    display: none;
}
.flex-between{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.user-xia{
    background-color: white;
    position: absolute;
    z-index: 33;
    left: 1%;
    width: 100%;
    text-align: center;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.user-xia div a{
    color: black;
    font-size: 14px;
    padding: 5px 0 5px 0;
}
.user-xia div a:hover{
    text-decoration: none;
    color: black;
}
.user-xia div:hover{
    background-color:rgb(245,245,245);
}
#top-user{
    position: relative;
}
#top-user:hover .user-xia{
    display: block;
}
.top-user-span{
    display: inline-block;
    height: 40px;
    line-height: 40px;
}
    body {
        background-color: white;
        width: 100%;
    }
    .topnav{
        height: 40px;
        line-height: 40px;
        background-color: rgb(245,245,245);
    }
    .nav1 {
        line-height: 40px;
    }
    .topnav .row .nav1>a{
        color: black;
        margin-left: 10px;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        padding: 10px 0 10px 0;
    }
    .col-lg-4.col-md-3.col-sm-4.col-xs-6,
    .col-lg-8.col-md-9.col-sm-8.col-xs-6 {
        padding: 0;
    }
     
    .topnav .row .nav1>a:hover {
        border-bottom: 2px solid red;
    }
    .navbar {
        height: 9.7%;
        margin-bottom: 0px;
        background-color: white;
        border-bottom: 1px solid red;
    }
    .navbar-brand img {
        height: 100px;
        margin: -6px 0 0 20px;
    }
    .navbar-word > span {
        display: inline-block;
        font-family: 华文行楷;
        font-size: 22px;
        margin-top: 40px;
    }
    #searchInput {
        width: 84%;
        margin-top: 30px;
        border-radius: 30px;
        border: 1px solid rgb(241, 212, 153);
        font-size: 14px;
    }
    #ai-topsearch {
        height: 40px;
        margin-top: 30px;
        margin-left: -20px;
        border-radius: 0 30px 30px 0;
    }
    input[type=submit] {
        background-color: rgb(254,144,29);
        border: 1px solid rgb(254,144,29);
    }
    .navbar-inp ul li {
        list-style: none;
        margin: -10px 0 0 20px;
    }
    .navbar-inp ul li > a{
        color: black;
        font-size: 14px;
        padding: 0 5px 0 5px;
        text-decoration: none;
    }
    .navbar-inp ul li > a:hover {
        color: red;
    }
    .navbar-inp ul li > a:nth-child(1) {
        color: red;
    }
    
</style>

<script>
export default {
        data() {
           return {
            searchData:'',
            lastname:'',
           }
        },
        created() {
            this.getItem();
        },
        mounted() {
            $(document).ready(function(){
                if(sessionStorage.getItem("user_name") === null){
                    $('#top-user').addClass('usernone');
                }else{
                    $('.nav1 > .top-login').addClass('usernone');
                    $('#top-user').removeClass('usernone');
                }
            })
        },
        methods: {
            setSeach(event){
                sessionStorage.removeItem("seaData");
                var e = event.currentTarget.innerHTML;
                this.searchData=e
                this.childSearch()
                var url =this.$route.path
                if(url == "/index/search"){
                    this.$parent.getList()
                    if(this.getList){
                    this.getList();
                }
                }else{
                    window.location.href='http://localhost:3000/#/index/search';
                }
                sessionStorage.removeItem("seaData");
                window.sessionStorage.setItem('seaData',this.getseachData)
                this.$emit('func',this.searchData)
                if(this.getList){
                    this.getList();
                }
                if(this.search){
                    this.search();
                }
                if(this.init){
                    this.init();
                }
            },
            // 搜索过滤数据
            childSearch() {
                var url =this.$route.path
                if(url == "/index/search"){
                    this.$parent.getList()
                    if(this.getList){
                    this.getList();
                }
                }else{
                    window.location.href='http://localhost:3000/#/index/search';
                }
                sessionStorage.removeItem("seaData");
                window.sessionStorage.setItem('seaData',this.searchData)
                this.$emit('func',this.searchData)
                if(this.getList){
                    this.getList();
                }
                if(this.search){
                    this.search();
                }
                if(this.init){
                    this.init();
                }
            },
            // 搜索框失焦后为空，重新渲染列表数据
            inita(){
                if(this.getseachData == ''){
                    if(this.init){
                    this.init();
                    }
                }
            },
            getItem(){
                this.lastname = sessionStorage.getItem("user_name");
                console.log(sessionStorage.getItem("user_name"));
            },
            tuichu(){
                sessionStorage.clear();
                // window.location.reload();
                var url =this.$route.path
                console.log(url);
                if(url == "/index"){
                    window.location.reload();
                }else{
                    setTimeout(function(){
                       window.location.href='http://localhost:3000/#/index';
                    }, 500); 
                }
                 
            },
            open() {
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
                    // }).then(action => {
                    // this.$message({
                    //     type: 'info',
                    //     message: 'action: ' + action
                    // });
                    });
                    }else{
                        setTimeout(() => {
                            window.location.href='http://localhost:3000/#/index/user';
                        }, 200);
                    }
                
            },
            openCar() {
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
                    // }).then(action => {
                    // this.$message({
                    //     type: 'info',
                    //     message: 'action: ' + action
                    // });
                    });
                    }else{
                        setTimeout(() => {
                            window.location.href='http://localhost:3000/#/index/shopcar';
                        }, 200);
                    }
                
            }
        },
}

</script>