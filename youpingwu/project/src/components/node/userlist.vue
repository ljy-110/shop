<template>
    <div class="sj">
      <div class="sj-top">
            <h3>用户信息管理</h3>
            <div class="search-box"> 
                <el-button icon="el-icon-plus" type="primary" @click="addDialog=true;">添加</el-button>
                <div class="search">
                   <el-row>
                      <el-col :span="12">
                        <el-input v-model="searchData"  placeholder="输入关键词搜索" @blur="init"></el-input>
                      </el-col>
                      <el-col :span="2" class="search-btn">
                          <el-button type="success" icon="el-icon-search" @click="search">搜索</el-button>
                      </el-col>
                      <!--  -->
                      <el-button-group>
                          <el-button  icon="el-icon-s-home" @click="home"></el-button>
                          <el-button  icon="el-icon-printer"></el-button>
                          <el-button  icon="el-icon-document-copy"></el-button>
                          <el-button  icon="el-icon-position"></el-button>
                          <el-button  icon="el-icon-refresh" @click="shuaxin"></el-button>
                      </el-button-group>
                  </el-row>
                    
                </div>
            </div>
            
        </div>
       <!-- 列表数据 -->
        <el-table :data="list" border>
            <el-table-column label="序号" type="index" width="55" align="center">
              <template scope="scope">
                  <span>{{(page - 1) * limit + scope.$index + 1}}</span>
              </template>
            </el-table-column>
            <el-table-column label="用户名" prop="user_name" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="性别" prop="user_gender" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="登陆密码" prop="user_password" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="生日" prop="birthday" :show-overflow-tooltip="true">
                 <template slot-scope="scope">
                  <span>{{timestampToTime(scope.row.birthday)}}</span>
                </template>
            </el-table-column>
            <el-table-column label="在线状态" prop="user_stats" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="注册时间" prop="user_time" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="用户电话" prop="user_phone" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="用户邮箱" prop="user_email" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="用户个人简介" prop="jieshao" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="操作" align="center" width="250">
                    <template scope="scope">
                        <el-button type="success" @click="seeInfo(scope.row.user_id)">查看</el-button>
                        <el-button type="primary" @click="getinfo(scope.row.user_id)">修改</el-button>
                        <el-button type="danger" @click="delList(scope.row.user_id)">删除</el-button>
                    </template>            
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="pagebox">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="page" :page-sizes="[1, 2,5,]" :page-size="limit"
                layout="total, sizes, prev, pager, next, jumper" :total="total" hide-on-single-page>
            </el-pagination>
        </div>
        <!-- 详情弹窗 -->
           <el-dialog title="查看详情" :visible.sync="seeDialog" width="30%"
            :before-close="handleClose">
            <div class="messageBox">
                <p><label>序号：</label>
                <span>{{userinfo.list_id}}</span></p>
                <p><label>用户名：</label>
                <span>{{userinfo.list_name}}</span></p>
                <p><label>性别：</label>
                <span>{{userinfo.list_gender}}</span></p>
                <p><label>密码：</label>
                <span>{{userinfo.list_password}}</span></p>
                <p><label>生日：</label>
                <span>{{userinfo.list_birthday}}</span></p>
                <p><label>在线状态：</label>
                <span>{{userinfo.list_stats}}</span></p>
                <p><label>注册时间：</label>
                <span>{{userinfo.list_time}}</span></p>
                <p><label>用户电话：</label>
                <span>{{userinfo.list_phone}}</span></p>
                <p><label>用户邮箱：</label>
                <span>{{userinfo.list_email}}</span></p>
                <p><label>用户个人简介：</label>
                <span>{{userinfo.list_jieshao}}</span></p>
            </div>
            </el-dialog>
            <!-- 添加弹窗 -->
           <el-dialog title="添加数据" :visible.sync="addDialog" width="30%"
            :before-close="handleClose">
            <span class="tips" v-show="flag1">信息不能为空!</span>
            <form>
                <!-- <label>序号：</label> -->
                <input type="hidden" v-model="userinfo.list_id">
                <label>用户名：</label>
                <input type="text" v-model="userinfo.list_name">
                <label>性别：</label>
                <input type="text" v-model="userinfo.list_gender">
                <label>密码：</label>
                <input type="text" v-model="userinfo.list_password">
                <label>生日：</label>
                <input type="text" v-model="userinfo.list_birthday">
                <label>在线状态：</label>
                <input type="text" v-model="userinfo.list_stats">
                <label>注册时间：</label>
                <input type="text" v-model="userinfo.list_time">
                <label>用户电话：</label>
                <input type="text" v-model="userinfo.list_phone">
                <label>用户邮箱：</label>
                <input type="text" v-model="userinfo.list_email">
                <label>用户个人简介：</label>
                <input type="text" v-model="userinfo.list_jieshao">
                
            </form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addList" class="btn1">确 定</el-button>
            </span>
            </el-dialog>
            <!-- 修改弹窗 -->
           <el-dialog title="信息修改" :visible.sync="dialogVisible" width="30%"
            :before-close="handleClose">
            <span class="tips" v-show="flag">请输入对应信息!</span>
            <form>
                <input type="hidden" v-model="userinfo.list_id">
                <label>名称：</label>
                <input type="text" v-model="userinfo.list_name">
                <label>性别：</label>
                <input type="text" v-model="userinfo.list_gender">
                <label>密码：</label>
                <input type="text" v-model="userinfo.list_password">
                <label>生日：</label>
                <input type="text" v-model="userinfo.list_birthday">
                <label>在线状态：</label>
                <input type="text" v-model="userinfo.list_stats">
                <label>注册时间：</label>
                <input type="text" v-model="userinfo.list_time">
                <label>用户电话：</label>
                <input type="text" v-model="userinfo.list_phone">
                <label>用户邮箱：</label>
                <input type="text" v-model="userinfo.list_email">
                <label>用户个人简介：</label>
                <input type="text" v-model="userinfo.list_jieshao">
                
            </form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="putlistinfo" class="btn1">确 定</el-button>
            </span>
            </el-dialog>
    </div>
</template>

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
.messageBox img {
    width: 100%;
}
.dialog-footer >>>.btn1 {
  width: 60px;
    padding: 10px 0px; 
}
.el-dialog textarea {
    resize: none;
}
.tips {
    position: absolute;
    left: 20px;
    top: 50px;
    color: red;
}
.dialog-footer >>>.btn1 {
    padding: 10px 0px; 
}
.el-pagination {
  margin-top: 15px;
  float: right;
}
.search-btn {
  margin-right: 60px;
}
.search-btn >>>.el-button{
  margin-left: 10px;
  height: 40px;
}
.sj {
  background-color: white;
  padding-right: 10px;
}
.sj-top {
    width: 100%;
    padding: 0px 0 10px 0;
}
.sj-top .search-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0 80px 0 40px;
}
.sj-top .search-box .search {
    display: flex;
    align-items: center;
    /* width: 70%; */
}
.sj-top div input {
    margin: 0 5px 0 10px;
    /* width: 80%; */
}
.el-button-group {
    display: flex;
}
.el-button-group .el-button {
    height: 40px;
    font-size: 16px;
}
.sj-top h3 {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 15px;
    text-align: center;
}
.sj-top .el-button--primary {
    width: 65px;
    height: 40px;
    padding: 10px 0;
}
.el-button {
    padding: 10px 15px;
}
</style>

<script>
import moment from 'moment'
import { Modal } from 'ant-design-vue';

    export default {
        data() {
            return {
                list: [],
                data: [],
                limit: 10, //每页数据条数
                total: null,  
                page: 1,  //当前页
                searchData: "",
                seeDialog: false,
                dialogVisible: false,
                addDialog: false,
                flag:false,
                flag1:false,
                date:moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                date2:moment(new Date()).format("YYYY-MM-DD"),
                userinfo:{
                    list_id:'',
                    list_name:'',
                    list_gender:'',
                    list_password:'',
                    list_birthday:'',
                    list_stats:'',
                    list_time:'',
                    list_phone:'',
                    list_email:'',
                    list_jieshao:''
              },
            }
        },
       created() {
            this.pageList()
        },
        methods: {
          // 弹窗关闭
            handleClose(done) {
                done();
                this.flag=false;
                this.flag1=false;
                this.userinfo={
                    list_id:'',
                    list_name:'',
                    list_gender:'',
                    list_password:'',
                    list_birthday:'',
                    list_stats:'',
                    list_time:'',
                    list_phone:'',
                    list_email:'',
                    list_jieshao:''
                }
            },
            pageList() {
                // 发请求拿到数据并暂存全部数据,方便之后操作
                this.$http.get("login")
                .then(result=>{
                    this.data= result.body
                    // console.log(data)
                    this.getList()
                })  
            },
            // 处理数据
            getList() {
                // es6过滤得到满足搜索条件的展示数据list
                let list = this.data.filter((item, index) =>
                    item.user_name.includes(this.searchData) ||
                    item.user_phone.includes(this.searchData)  
                )
                this.list = list.filter((item, index) =>
                    index < this.page * this.limit && index >= this.limit * (this.page - 1)
                )
                this.total = list.length
                console.log(list);
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
                if(this.searchData == ''){
                    this.pageList()
                }
            },
            // 详情按钮
            seeInfo(id){
              this.seeDialog = true
              this.$http.get("login/user_login/"+id)
              .then(result=>{
                this.userinfo.list_id = result.body.user_id
                this.userinfo.list_name = result.body.user_name
                this.userinfo.list_gender = result.body.user_gender
                this.userinfo.list_password = result.body.user_password
                this.userinfo.list_birthday = result.body.birthday
                this.userinfo.list_stats = result.body.user_stats
                this.userinfo.list_time = result.body.user_time
                this.userinfo.list_phone = result.body.user_phone
                this.userinfo.list_email = result.body.user_email
                this.userinfo.list_jieshao = result.body.jieshao
              })
            },
            // 修改按钮
            // 1、根据id获取信息
       getinfo(id){
           this.dialogVisible = true
           this.$http.get("login/user_login/"+id)
            .then(result=>{
                this.userinfo.list_id = result.body.user_id
                this.userinfo.list_name = result.body.user_name
                this.userinfo.list_gender = result.body.user_gender
                this.userinfo.list_password = result.body.user_password
                this.userinfo.list_birthday = result.body.birthday
                this.userinfo.list_stats = result.body.user_stats
                this.userinfo.list_time = result.body.user_time
                this.userinfo.list_phone = result.body.user_phone
                this.userinfo.list_email = result.body.user_email
                this.userinfo.list_jieshao = result.body.jieshao
            })
       },
    //    修改
       putlistinfo(){
           if(this.userinfo.list_name == '' || this.userinfo.list_phone == ''){
                this.flag=true
           }else{
                this.$http.put("login/user_login",{
                user_id:this.userinfo.list_id,
                user_name:this.userinfo.list_name,
                user_gender:this.userinfo.list_gender,
                user_password:this.userinfo.list_password,
                birthday:this.userinfo.list_birthday,
                user_stats:this.userinfo.list_stats,
                user_time:this.userinfo.list_time,
                user_phone:this.userinfo.list_phone,
                user_email:this.userinfo.list_email,
                jieshao:this.userinfo.list_jieshao
            }).then(function(data){
                if(data.body.flag == 1){
                 this.editsuccess()
                        this.userinfo={
                            list_id:'',
                            list_name:'',
                            list_gender:'',
                            list_password:'',
                            list_birthday:'',
                            list_stats:'',
                            list_time:'',
                            list_phone:'',
                            list_email:'',
                            list_jieshao:''
                        }
                        this.dialogVisible=false;
                        this.pageList()
                }else{
                    this.dialogVisible = false
                    this.userinfo={
                            list_id:'',
                            list_name:'',
                            list_gender:'',
                            list_password:'',
                            list_birthday:'',
                            list_stats:'',
                            list_time:'',
                            list_phone:'',
                            list_email:'',
                            list_jieshao:''
                        }
                    this.editfail()
                }
            })
           }  
       },
      //  添加按钮
      addList(){
        if(!this.userinfo.list_name || !this.userinfo.list_phone){
            this.flag1=true;
        }else{
            this.$http.post('login/user_login',{
                user_id:this.userinfo.list_id,
                user_name:this.userinfo.list_name,
                user_gender:this.userinfo.list_gender,
                user_password:this.userinfo.list_password,
                birthday:this.userinfo.list_birthday,
                user_stats:this.userinfo.list_stats,
                user_time:this.userinfo.list_time,
                user_phone:this.userinfo.list_phone,
                user_email:this.userinfo.list_email,
                jieshao:this.userinfo.list_jieshao
            }).then(function(data){
                if(data.body.flag == 1){
                    this.addsuccess()
                        this.userinfo={
                            list_id:'',
                            list_name:'',
                            list_gender:'',
                            list_password:'',
                            list_birthday:'',
                            list_stats:'',
                            list_time:'',
                            list_phone:'',
                            list_email:'',
                            list_jieshao:''
                        }
                    this.addDialog=false;
                    this.pageList()
                }else{
                    this.addfail()
                        this.userinfo={
                            list_id:'',
                            list_name:'',
                            list_gender:'',
                            list_password:'',
                            list_birthday:'',
                            list_stats:'',
                            list_time:'',
                            list_phone:'',
                            list_email:'',
                            list_jieshao:''
                        }
                        this.addDialog=false;
                }
            })
        }
        
    },
    // 删除
    delList(id){
        var that = this
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '此操作将永久删除该用户, 是否继续? '),
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
                  this.$http.delete('login/user_login/'+id)
                    .then(result=>{
                            if(result.body.flag == 1){
                                    that.delsuccess()
                                    // 如果当前页数据被删除完，返回到当前页的上一页
                                let totalPage = Math.ceil((that.total - 1) / that.limit) // 总页数
                                let currentPage = that.page > totalPage ? totalPage : that.page
                                that.page = currentPage <1 ? 1:currentPage
                                this.pageList();
                            }else{
                                this.delfail()
                            }
                    })
                }, 300);
              }, 1000);
            } else {
              done();
            }
          }
        })
      },
    // 时间格式化
    timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s;
    },
     // 操作提示框
            addsuccess(){
                this.$message({
                message: '数据添加成功！',
                type: 'success'
                });
            },
            addfail(){
                this.$message({
                message: '数据添加失败！',
                type: 'error'
                });
            },
            editsuccess(){
                this.$message({
                message: '信息修改成功！',
                type: 'success'
                });
            },
            editfail(){
                this.$message({
                message: '信息修改失败！',
                type: 'error'
                });
            },
            delsuccess(){
                this.$message({
                message: '信息删除成功！',
                type: 'success'
                });
            },
            delfail(){
                this.$message({
                message: '信息删除失败！',
                type: 'error'
                });
            },
            home(){
                setTimeout(() => {
                    window.location.href='http://localhost:3000/#/index';
                }, 300);
            },
            shuaxin(){
                setTimeout(() => {
                    window.location.reload();
                }, 300);
            }
        },
        components:{
            AModal:Modal
        }
    }
</script>