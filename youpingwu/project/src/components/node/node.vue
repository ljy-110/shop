<template>
    <div>
        <div class="center tuichu">
            <div class="node-div"><img src="../../images/logo.png" alt="" class="node-img"></div>
            <h2 class="flex-center">悠品屋商城后台管理</h2>
            <el-row class="admin">
                <el-button type="primary" @click="NoLogin" round>退出管理页面</el-button>
            </el-row>
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="商品信息管理" name="first">
                <shoplist></shoplist>
            </el-tab-pane>
            <el-tab-pane label="用户信息管理" name="second">
                <userlist></userlist>
            </el-tab-pane>
            <el-tab-pane label="主页轮播图管理" name="">
                <lunbolist></lunbolist>
            </el-tab-pane>
            <!-- <el-tab-pane label="分类管理" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="品牌管理" name="">定时任务补偿</el-tab-pane> -->
        </el-tabs>
    </div>
</template>

<style lang="css" scoped>
.tuichu{
    position: relative;
}
.admin{
    position: absolute;
    right: 30px;
    top: 30px;
}
.center{
    display: flex;
    justify-content: center;
}
.flex-center{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.node-div{
    width: 7%;
}
.node-img{
    width: 100%;
}
</style>

<script>
import shoplist from "./shoplist.vue"
import userlist from "./userlist.vue"
import lunbolist from "./lunbolist.vue"
export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      NoLogin(){
          const h = this.$createElement;
          this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '是否退出管理页面？？ '),
            // h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                  sessionStorage.clear();
                  window.location.href='http://localhost:3000/#/index';
                }, 300);
              }, 500);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'success',
            message: '退出成功！'
          });
        });
      }
    },
    components:{
        shoplist:shoplist,
        userlist:userlist,
        lunbolist:lunbolist,
    }
  };
</script>