<template>
    <div>
        <commentBox></commentBox>

        <div class="container">
            <div class="row">
                <div class="car-banner">
                     <el-tabs v-model="activeName" @tab-click="handleClick" class="car-banner-tabs">
                        <el-tab-pane label="全部商品" name="first">
                            <div class="car-nav">
                                <ul class="car-nav-ul flex-between">
                                    <li class="center flex-center li-checkbox"><input type="checkbox" name="toggle-checkboxes" id="CheckedAll"></li>
                                    <li class="center flex-center li-quan">全选</li>
                                    <li class="center flex-center li-shop">商品信息</li>
                                    <li class="center flex-center li-pr">单价</li>
                                    <li class="center flex-center li-num">数量</li>
                                    <li class="center flex-center li-zong">金额</li>
                                    <li class="center flex-center li-cao">操作</li>
                                </ul>
                            </div>
                            <div class="car-main">
                                <ul>
                                    <!-- <li class="car-main-li">
                                      <img src="../../images/user/goods-1-(2).jpg" alt="" class="car-sp-max none">
                                        <div class="six-li-bb main-li-div">
                                            <div class="li-checkbox"><input type="checkbox" name="checkitems" id="" class="checkbox1"></div>
                                              <div class="li-shop2">
                                                <a href="#" class="flex-between shop2-aa">
                                                  <img src="../../images/user/goods-1-(2).jpg" alt="" class="car-sp-left center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p><span>口味：</span><span>你喜欢的</span></p>
                                                    <p><span>包装：</span><span>包装</span></p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="li-pr flex-center">
                                                <span class="text-align li-price">￥69.9</span>
                                              </div>
                                              <div class="li-num">
                                                <el-input-number :min="1" @change="handleChange" size="small" v-model="num2" class="li-num-input1"></el-input-number>
                                              </div>
                                              <div class="li-zong six-bb-fy flex-center">
                                                <p class="text-align li-zong-p li-zong-p1">￥69.9</p>
                                              </div>
                                              <div class="li-cao flex-center text-align shop2-aa">
                                                <a href="javascript:void(0);" class="conput">移入收藏夹</a>
                                                <a href="javascript:void(0);" class="send">删除</a>
                                              </div>
                                            </div>
                                    </li> -->
                                    <li class="car-main-li" v-for="it in goodsList" :key="it.id">
                                      <img :src="it.url" alt="" class="car-sp-max none">
                                        <div class="six-li-bb main-li-div">
                                            <div class="li-checkbox"><input type="checkbox" name="checkitems" id="" class="checkbox1"></div>
                                              <div class="li-shop2">
                                                <a href="#" class="flex-between shop2-aa">
                                                  <img :src="it.url" alt="" class="car-sp-left center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>{{it.title}}</p>
                                                    <p><span>口味：</span><span>{{it.flavor}}</span></p>
                                                    <p><span>包装：</span><span>{{it.pack}}</span></p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="li-pr flex-center">
                                                <span class="text-align li-price">￥{{it.price}}</span>
                                              </div>
                                              <div class="li-num">
                                                <el-input-number :min="1" @change="handleChange" size="small" v-model="num2" class="li-num-input1"></el-input-number>
                                              </div>
                                              <div class="li-zong six-bb-fy flex-center">
                                                <p class="text-align li-zong-p li-zong-p1">￥{{it.price}}</p>
                                              </div>
                                              <div class="li-cao flex-center text-align shop2-aa">
                                                <a href="javascript:void(0);" class="conput" @click="addcollection(it.id)">移入收藏夹</a>
                                                <a href="javascript:void(0);" class="send" @click="delList(it.id)">删除</a>
                                              </div>
                                            </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="car-footer">
                              <ul class="flex-between">
                                <li class="footer-li-checkbox center flex-center"><input type="checkbox" name="toggle-checkboxes" id="checksall"></li>
                                <li class="center flex-center footer-li-quan">全选</li>
                                <li class="footer-li-cao">
                                  <a href="javascript:void(0);" class="send" @click="delList2(id)">删除</a>
                                  <a href="javascript:void(0);" class="conput">移入收藏夹</a>
                                  <a href="#">分享</a>
                                </li>
                                <li class="footer-li-num flex-center">
                                  <!-- <span>以选择商品<span class="li-num-span">0</span>件</span> -->
                                </li>
                                <li class="footer-li-pri1 flex-center">合计（不含运费）：</li>
                                <li class="footer-li-pri2 flex-center">
                                  <span class="jin-pri">0.00</span>
                                </li>
                                <li class="footer-li-jiesuan flex-center">
                                  <router-link to="/index/settlement/:id" title="结算" class="li-jiesuan-aa">结算</router-link>
                                </li>
                              </ul>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
        <!-- <commentfooter></commentfooter> -->
    </div>
</template>

<style src='../../assets/css/shopcar.css'></style>
<style lang="css" scoped>
.li-jiesuan-aa:active{
  color: white;
  text-decoration: none;
}
</style>

<script>
import { Message } from 'element-ui'
import comment from "../components/top.vue"
import commentfooter from "../components/footer.vue"
export default {
    components:{
        commentBox:comment,
        commentfooter:commentfooter,
    },
    data() {
      return {
        id:this.$route.params.id,
        activeName: 'first',
        // num2: this.num2,
        num2: 1,
        goodsList:[],
        goods:[],
        listinfo:{
          list_id:'',
          list_name:'',
          list_brand:'',
          list_class_id:'',
          list_title:'',
          list_price:'',
          list_discountprice:'',
          list_text:'',
          list_img:'',
          list_time:'',
          list_purchase:'',
          list_evaluate:'',
          list_collection:''
        },
      };
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(()=>{
        $('.car-sp-left').hover(
          function(){
            $('.car-sp-max').removeClass('none');
            $(this).parents(".car-main-li").siblings().children('.car-sp-max').addClass('none');
          },
          function(){
            $('.car-sp-max').addClass('none');
            $(this).parents(".car-main-li").siblings().children('.car-sp-max').addClass('none');
          }
        )
        $(document).ready(function(){
          //全选
          $("#CheckedAll").click(function () {
            var yuan = $('.jin-pri').html();
            var jin = $('.li-zong-p1').html().replace(/[^\d.]/g, "");
            if (this.checked) {                 //如果当前点击的多选框被选中
              $('input[type=checkbox][name=checkitems]').prop("checked", true);
              $('.jin-pri').html(jin);
              $('#checksall').prop("checked", true);
            } else {
              $('input[type=checkbox][name=checkitems]').prop("checked", false);
              var hou = (yuan - yuan).toFixed(2);
              $('.jin-pri').html(hou);
              $('#checksall').prop("checked", false);
            }
          });
          $('input[type=checkbox][name=checkitems]').click(function () {
            var flag = true;
            $('input[type=checkbox][name=checkitems]').each(function () {
              if (!this.checked) {
                flag = false;
              }
            });
            if (flag) {
              $('#CheckedAll').prop('checked', true);
              $('#checksall').prop("checked", true);
            } else {
              $('#CheckedAll').prop('checked', false);
              $('#checksall').prop("checked", false);
            }
          });
          // 第二个全选
          $("#checksall").click(function () {
            if (this.checked) {                 //如果当前点击的多选框被选中
              $('input[type=checkbox][name=checkitems]').prop("checked", true);
              $('#CheckedAll').prop("checked", true);
            } else {
              $('input[type=checkbox][name=checkitems]').prop("checked", false);
              $('#CheckedAll').prop("checked", false);
            }
          });
          $('input[type=checkbox][name=checkitems]').click(function () {
            var flag = true;
            $('input[type=checkbox][name=checkitems]').each(function () {
              if (!this.checked) {
                flag = false;
              }
            });
            if (flag) {
              $('#CheckedAll').prop('checked', true);
              $('#checksall').prop("checked", true);
            } else {
              $('#CheckedAll').prop('checked', false);
              $('#checksall').prop("checked", false);
            }
          })
          // 移入收藏夹
          // $(".conput").click(function () {
          //   if($("input[type=checkbox][name=checkitems]:checked").prop("checked")){
          //   alert("你是否要将选中的商品加入收藏夹");
          //   }
          //   else{
          //       alert("你未选中任何商品，请选择后在操作！");
          //   }  
          // })
        });
        // 购物车商品金额
          $('.checkbox1').click(function(){
          var yuan = $('.jin-pri').html();
          var jin = $('.li-zong-p1').html().replace(/[^\d.]/g, "");
          if($("input[type=checkbox][name=checkitems]:checked").prop("checked")){
              $('.jin-pri').html(jin);
              $('.li-num-span').html(num);
            }
            else{
              var hou = (yuan - yuan).toFixed(2);
              $('.jin-pri').html(hou);
              $('.li-num-span').html(y_num);
            } 
        })
        $('.li-num-input1 > .el-input-number__decrease').click(function(){
          var yuan = $('.jin-pri').html();
          var jin = $('.li-zong-p1').html().replace(/[^\d.]/g, "");
          if($("input[type=checkbox][name=checkitems]:checked").prop("checked")){
              $('.jin-pri').html(jin);
            }
            else{
              var hou = (yuan - yuan).toFixed(2);
              $('.jin-pri').html(hou);
            } 
        })
        $('.li-num-input1 > .el-input-number__increase').click(function(){
          var yuan = $('.jin-pri').html();
          var jin = $('.li-zong-p1').html().replace(/[^\d.]/g, "");
          if($("input[type=checkbox][name=checkitems]:checked").prop("checked")){
              $('.jin-pri').html(jin);
            }
            else{
              var hou = (yuan - yuan).toFixed(2);
              $('.jin-pri').html(hou);
            } 
        })
        // 商品数量
      },1000)
      }) 
    },
    created() {
      this.getGoodsList();
      
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      handleChange(value) {
        this.$nextTick(() => {
          var price = $('.li-price').html().replace(/[^\d.]/g, "");
          var zong = (value * price).toFixed(2);
          $('.li-zong-p1').html("￥"+zong);
        })
        
      },
      getGoods(id){
        this.$http.get("good/goods/"+id)
              .then(result=>{
                  this.listinfo.list_id = result.body.id
                  this.listinfo.list_name = result.body.name
                  this.listinfo.list_brand = result.body.brand_id
                  this.listinfo.list_class_id = result.body.id
                  this.listinfo.list_price = result.body.price
                  this.listinfo.list_discountprice = result.body.discount_price
                  this.listinfo.list_title = result.body.title
                  this.listinfo.list_text = result.body.text
                  this.listinfo.list_img = result.body.url
                  this.listinfo.list_time = result.body.time
                this.listinfo.list_purchase = result.body.purchase
                this.listinfo.list_evaluate = result.body.evaluate
                this.listinfo.list_collection = result.body.collection
              })
            },
       getGoodsList(){
            // var idArr = [];
            // this.$store.state.car.forEach(item=> idArr.push(item.id));
            // if(idArr.length<=0){
            //     return;
            // }
            // console.log(idArr);
            this.$http.get("shopcar")
            .then(res=>{
                    this.goodsList = res.body;
                    console.log(res.body);
            })
        },
    delList(id){
        var that = this
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '此操作将永久删除该文件, 是否继续? '),
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
                  this.$http.delete('shopcar/shop_car/'+id)
                    .then(result=>{
                      this.getGoodsList();
                    })
                }, 300);
              }, 1000);
              Message.success("删除成功");
            } else {
              done();
              Message.success("删除失败");
            }
          }
        })
      },
    delList2(id){
        var that = this
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '此操作将永久删除该文件, 是否继续? '),
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
                  this.$http.delete('shopcar/shop_car/'+id)
                    .then(result=>{
                      this.getGoodsList();
                    })
                }, 300);
              }, 500);
              Message.success("删除成功");
            } else {
              done();
              Message.success("删除失败");
            }
          }
        })
      },
      addcollection(id){
        this.getGoods(id);
        var that = this
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '是否确定要将该商品移入收藏夹？ '),
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
                  this.$http.post('collection/collections',{
                      id:this.id,
                      goods_id:this.listinfo.list_id,
                      url:this.listinfo.list_img,
                      title:this.listinfo.list_title,
                      price:this.listinfo.list_price,
                      dis_price:this.listinfo.list_discountprice,
                      purchase:this.listinfo.list_purchase,
                      evaluate:this.listinfo.list_evaluate,
                      collection:this.listinfo.list_collection
                  }).then(result=>{
                     
                    })
                }, 300);
              }, 500);
               Message.success("移入收藏夹成功");
            } else {
              done();
              Message.success("移入收藏夹失败");
            }
          }
        })
      }
    }
}
</script>