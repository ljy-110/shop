<template>
    <div class="sj">
        <div class="sj-top">
            <h3>轮播图信息列表</h3>
            <div class="search-box"> 
                <el-button icon="el-icon-plus" type="primary" @click="addDialog=true;">添加</el-button>
                <div class="search">
                    <input type="text" class="form-control" v-model="keywords" placeholder="请输入关键词"> 
                    <el-button-group>
                        <el-button  icon="el-icon-printer"></el-button>
                        <el-button  icon="el-icon-document-copy"></el-button>
                        <el-button  icon="el-icon-share"></el-button>
                    </el-button-group>
                </div>
            </div>
            
        </div>
        <table>
            <thead>
                <tr class="title">
                    <th>序号</th>
                    <th>图片描述</th>
                    <th>图片地址</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,i) in search(keywords)" :key="i">
                    <td>{{num(i)}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.img_url}}</td>
                    <td>
                        <el-row>
                            <el-button type="success" icon="el-icon-view" @click="seeInfo(item.id)"></el-button>
                            <el-button type="primary" icon="el-icon-edit" @click="getinfo(item.id)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" @click="delBanner(item.id)"></el-button>
                        </el-row>
                        
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 分页 -->
        <div class="page">
            <el-pagination
            v-if="page.total > page.size"
            background
            layout="prev, pager, next"
            @current-change="currentChange"
            :page-size="page.size"
            :current-page="page.current"
            :total="page.total">
            </el-pagination>
        </div>
        <!-- 修改弹窗 -->
           <el-dialog title="信息修改" :visible.sync="dialogVisible" width="30%"
            :before-close="handleClose">
            <span class="tips" v-show="flag">请输入对应信息!</span>
            <form>
                
                <input type="hidden" v-model="imginfo.img_id">
                <label>图片描述：</label>
                <input type="text" v-model="imginfo.img_title">
                <label>图片地址：</label>
                <input type="text" v-model="imginfo.img_url">
            </form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="putimginfo" class="btn1">确 定</el-button>
            </span>
            </el-dialog>
            <!-- 添加弹窗 -->
           <el-dialog title="添加数据" :visible.sync="addDialog" width="30%"
            :before-close="handleClose">
            <span class="tips" v-show="flag1">信息不能为空!</span>
            <form>
                <input type="hidden" v-model="imginfo.img_id">
                <label>图片描述：</label>
                <input type="text" v-model="imginfo.img_title">
                <label>图片地址：</label>
                <input type="text" v-model="imginfo.img_url">
            </form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addBanner" class="btn1">确 定</el-button>
            </span>
            </el-dialog>
            <!-- 详情弹窗 -->
           <el-dialog title="查看详情" :visible.sync="seeDialog" width="30%"
            :before-close="handleClose">
            <div class="messageBox">
                <label>图片描述：</label>
                <p>{{imginfo.img_title}}</p>
                <img :src="imginfo.img_url" alt="">
            </div>
            </el-dialog>
    </div>
</template>

<style lang="css" scoped>
.tips {
    position: absolute;
    left: 20px;
    top: 50px;
    color: red;
}
.dialog-footer >>>.btn1 {
    padding: 10px 0px; 
}
.sj table {
    border-collapse: collapse;
    border-spacing: 0;
    color: #666;
    width: 100%;
    background-color: #fff;
}
thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
.title {
    background-color: #f2f2f2;
}
.sj table tr:hover {
    background-color: #f2f2f2;
}
.sj table th,.sj table td {
    position: relative;
    padding: 9px 15px;
    min-height: 20px;
    line-height: 20px;
    font-size: 14px;
    border: 1px solid #e6e6e6;
}
.title th {
    text-align: left;
    font-weight: 400;
}
.sj table tr td:nth-child(1) {
    width: 5%;
    text-align: center;
}
.el-button {
    padding: 10px 15px;
}
.el-button--primary {
    width: 46px;
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
    /* background-color: red; */
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
    margin-bottom: 15px;
}
.sj-top .el-button--primary {
    width: 65px;
    height: 40px;
    padding: 10px 0;
}
.messageBox img {
    width: 100%;
}
.page {
    display: flex;
    margin-top: 25px; 
    float: right;
}
.page button:nth-child(1) {
    margin-right: 5px;
}
.page button:last-child {
    margin-left: 5px;
}
.page .pageinp {
    margin: 0 5px 0 0;
    width: 45px;
    height: 35px;
}
.page ul {
    display: flex;
    justify-items: center;
    align-items: center;
    margin: 0 5px; 
}
.page ul li {
    width: 45px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 3px; 
    margin-right: 2px;
}
.page ul li:last-child {
    margin-right: 0px;
}
.active {
    color: #409eff;
    border:1px solid #409eff !important;
}
.disable{
  opacity:0.5;
  pointer-events:none;
}
</style>


<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            keywords:"",
            flag:false,
            flag1:false,
            img:[],
            dialogVisible: false,
            addDialog: false,
            seeDialog: false,
            imginfo:{
                img_title:'1',
                img_url:'123',
                img_id:'1'
            },
            page:{
                current:1,
                size:5,
                total:0
            },
            initlen:''
        }
    },
    created() {
        this.getImg();
        this.getImgPageData()
        
    },
    updated() {
        this.getImg();
    },
    methods: {
        // init(){
        //     如果当前页的数据被删除完，调回到第一页
        //    if(this.initlen <= 0){
        //        this.$http.get("imgdata/1/5")
        //     .then(result=>{
        //         console.log(result.body.length)
        //         this.img = result.body
        //     })
        //    }
        
        // },
        getImg(){
            this.$http.get("lunboimages")
            .then(result=>{
               this.page.total =result.body.length;
            })
        },
        getImgPageData(){
            this.$http.get("imgdata/"+this.page.current+'/'+this.page.size)
            .then(result=>{
                console.log(result.body.length)
                this. initlen = result.body.length
                this.img = result.body
            })
        },
        handleClose(done) {
            done();
            this.flag=false;
            this.flag1=false;
            this.imginfo={
                img_title:'',
                img_url:'',
                img_id:''
            }

      },
    //   修改信息部分
    // 1、根据id获取信息
       getinfo(id){
           this.dialogVisible = true
           this.$http.get("banner/"+id)
            .then(result=>{
                this.imginfo.img_title = result.body.title
                this.imginfo.img_url = result.body.img_url
                this.imginfo.img_id = result.body.id
            })
       },
    //    修改
       putimginfo(){
           if(this.imginfo.img_title == '' || this.imginfo.img_url == ''){
                this.flag=true
           }else{
                this.$http.put("banner",{
                id:this.imginfo.img_id,
                img_url:this.imginfo.img_url,
                title:this.imginfo.img_title
            }).then(function(data){
                console.log(data)
                if(data.body.flag == 1){
                    Toast({
                            message: '信息修改成功',
                            position: 'middle',
                            duration: 1500
                        });
                        this.imginfo={
                            img_title:'',
                            img_url:'',
                            img_id:''
                        }
                        this.dialogVisible=false;
                        this.getImgPageData();
                }else{
                    this.dialogVisible = false
                    this.imginfo={
                            img_title:'',
                            img_url:'',
                            img_id:''
                        }
                    Toast({
                            message: '信息修改失败',
                            position: 'middle',
                            duration: 1500
                        });
                }
            })
           }  
       },
    //    添加按钮
    addBanner(){
        if(!this.imginfo.img_title || !this.imginfo.img_url){
            this.flag1=true;
        }else{
            this.$http.post('addBanners',{
                id:this.imginfo.img_id,
                img_url:this.imginfo.img_url,
                title:this.imginfo.img_title
            }).then(function(data){
                if(data.body.flag == 1){
                    // this.getImg();
                    Toast({
                            message: '信息添加成功',
                            position: 'middle',
                            duration: 1500
                        });
                        this.imginfo={
                            img_title:'',
                            img_url:'',
                            img_id:''
                        }
                    this.addDialog=false;
                    this.getImgPageData();
                }else{
                    Toast({
                            message: '信息添加失败',
                            position: 'middle',
                            duration: 1500
                        });
                        this.imginfo={
                            img_title:'',
                            img_url:'',
                            img_id:''
                        }
                        this.addDialog=false;
                }
            })
        }
        
    },
    // 删除banner
    delBanner(id){
        this.$http.delete('delbanner/'+id)
        .then(result=>{
            if(result.body.flag == 1){
                Toast({
                            message: '信息已删除',
                            position: 'middle',
                            duration: 1500
                        });
                        // 如果当前页数据被删除完，返回到当前页的上一页
                       let totalPage = Math.ceil((this.page.total - 1) / this.page.size) // 总页数
                       let currentPage = this.page.current > totalPage ? totalPage : this.page.current
                       this.page.current = currentPage <1 ? 1:currentPage
                       this.getImgPageData();
            }else{
                Toast({
                            message: '信息删除失败',
                            position: 'middle',
                            duration: 1500
                        });
            }
        })
    },
    // 查看按钮
    seeInfo(id){
            this.seeDialog = true
            this.$http.get("banner/"+id)
            .then(result=>{
                this.imginfo.img_title = result.body.title
                this.imginfo.img_url = result.body.img_url
                this.imginfo.img_id = result.body.id
            })
    },
    // 搜索框
    search(keywords){//根据关键字，进行数据的搜索  
        //filter:过滤的意思。返回值 就是一个满足要求新数组。如果不满足还是原先的旧数组
        //forEach some filter findIndex都是数组的新方法
       var newList =  this.img.filter((item)=>{
          //includes ：判断当前字符串是否包含指定字符
          //contains 
          //indexOf
          if(item.title.includes(keywords)){
              return item;
          }
        })
        return newList;
      },
      //   分页功能
    currentChange(current){
        this.page.current = current;
        this.getImgPageData();
    }
    },
    computed: {
        num:function(){
            return function(i){
                return (this.page.current-1)*this.page.size+i+1
            }
        }
    },
    components:{
       
    }
}
</script>
