<template>
    <div>
        <!-- 头部 -->
        <commentBox></commentBox>
        <div class="details">
            <div class="container container-top">
                <div class="row">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                      <el-breadcrumb-item :to="{ path: '/' }">分类</el-breadcrumb-item>
                      <el-breadcrumb-item :to="{ path: '/' }">内容</el-breadcrumb-item>
                    </el-breadcrumb>
                    <div class="shop-show">
                        <div class="show-left">
                            <div class="show-imgmax">
                                <div class="show-max">
                                    <img :src="goodsinfo.url" alt="">
                                </div>
                                <div class="show-max display">
                                    <img src="../../images/goods/details/02_mid.jpg" alt="">
                                </div>
                                <div class="show-max display">
                                    <img src="../../images/goods/details/03_mid.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="left-bot">
                            <div class="bot-1">
                                <div class="bot-img">
                                    <a href="#" onclick="return false">
                                        <img :src="goodsinfo.url" alt="">
                                    </a>
                                </div>
                                <div class="bot-img">
                                    <a href="#" onclick="return false">
                                        <img src="../../images/goods/details/02_small.jpg" alt="">
                                    </a>
                                </div>
                                <div class="bot-img">
                                    <a href="#" onclick="return false">
                                        <img src="../../images/goods/details/03_small.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="show-right">
                            <h3>{{goodsinfo.title}}</h3>
                            <div class="right-js">
                                <ul>
                                    <li>
                                        <span class="right-js-aa">店铺优惠</span>
                                        <span class="right-js-ab">购物满2件打8折，满3件打7折</span>
                                    </li>
                                    <li>
                                        <span class="right-js-aa">促销价</span>
                                        <span class="right-js-ac">￥{{goodsinfo.discount_price}}</span>
                                    </li>
                                    <li>
                                        <span class="right-js-aa">原价</span>
                                        <span class="right-js-ad">￥{{goodsinfo.price}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="right-add">
                                <span class="right-js-bb">配送到</span>
                                <!-- <el-cascader :options="options" clearable class="right-add-aa"></el-cascader> -->
                                <div class="right-js-zj">
                                  <v-distpicker province="" city="" area="" @selected="onSelected2" class="address-pca flex-between"></v-distpicker>
                                </div>
                                <span class="right-js-bb right-js-br">快递包邮</span>
                            </div>
                            <div class="right-nub">
                                <ul class="nub-mn">
                                    <li class="nub-mn-aa">
                                        <div class=""><span class="">月销量：</span><span class="nub-aa-bb">{{goodsinfo.purchase}}</span></div>
                                    </li>
                                    <el-divider direction="vertical"></el-divider>
                                    <li class="nub-mn-aa">
                                        <div class=""><span class="">累计销量：</span><span class="nub-aa-bb">{{goodsinfo.purchase}}</span></div>
                                    </li>
                                    <el-divider direction="vertical"></el-divider>
                                    <li class="nub-mn-aa">
                                        <div class=""><span class="">累计评价：</span><span class="nub-aa-bb">{{goodsinfo.evaluate}}</span></div>
                                    </li>
                                </ul>
                            </div>
                            <div class="right-xz">
                              <ul>
                                <li>
                                  <span class="right-xz-da">口味</span>
                                  <span class="right-xz-db">{{parameter.par_flavor}}</span>
                                </li>
                                <li>
                                  <span class="right-xz-da">包装</span>
                                  <span class="right-xz-dc">{{parameter.par_pack}}</span>
                                </li>
                              </ul>
                            </div>
                            <div class="theme-options">
                              <div class="cart-title number">数量</div>
                                <dd>
                                  <el-input-number :min="1" @change="handleChange" size="small" v-model="num3" id="op-num"></el-input-number>
                                  <span id="Stock" class="tb-hidden">库存<span class="stock">{{stocklist.stock_nub}}</span>件</span>
                                </dd>
                            </div>
                            <div class="shop-car">
                                <a href="javascript:;" class="car-1" title="加入购物车" @click="addToShopCar">加入购物车</a>
                                <a href="javascript:;" class="car-1" title="加入收藏夹" @click="addToCollection">加入收藏夹</a>
                                <router-link to="/index/settlement/:id" title="立即购买" class="car-2"> 立即购买</router-link>
                            </div>
                            <transition
                                @before-enter="beforeEnter"
                                @enter="enter"
                                @after-enter="afterEnter"
                            >
                            <div class="ball"  v-show="ballShow" ref="ball"></div>
                            </transition>
                            <div class="right-service">
                              <ul>
                                <li class="right-ser-aa">服务承诺</li>
                                <li>
                                  <a href="">赠保价险</a>
                                </li>
                                <li>
                                  <a href="">破损包退</a>
                                </li>
                                <li>
                                  <a href="">正品保证</a>
                                </li>
                                <li>
                                  <a href="">极速退款</a>
                                </li>
                                <li>
                                  <a href="">赠运费险</a>
                                </li>
                                <li>
                                  <a href="">七天无理由退换</a>
                                </li>
                              </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <hr>
            </div>
        </div>
        <div class="banner">
          <div class="container">
            <div class="row banner-row">
              <div class="left-like">
                <div class="like-top">
                  看了又看
                </div>
                <div class="like-banner">
                  <ul>
                    <li v-for="(d,index) in goodslist.slice(79,84)" :key="index">
                      <a href="" class="like-banner-a">
                        <img :src="d.url" alt="">
                        <p class="like-title">{{d.title}}</p>
                        <div class="like-price">
                          <span class="like-price-aa">￥{{d.price}}</span>
                          <span class="like-price-bb">收藏:{{d.collection}}人</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="riget-details">
                <el-tabs type="border-card">
                  <el-tab-pane label="宝贝详情" class="right-details-body">
                    <h4 class="right-details-h4">产品参数：</h4>
                    <table class="riget-details-table">
                      <tr class="riget-details-tr">
                        <td>
                          <span>商品分类：</span>
                          <span>{{goodsinfo.class_id}}</span>
                        </td>
                        <td>
                          <span>品牌：</span>
                          <span>{{goodsinfo.brand_id}}</span>
                        </td>
                        <td>
                          <span>商品编号：</span>
                          <span>{{parameter.par_no}}</span>
                        </td>
                      </tr>
                      <tr class="riget-details-tr">
                        <td>
                          <span>生产编号：</span>
                          <span>{{parameter.par_chan_no}}</span>
                        </td>
                        <td>
                          <span>工厂名称：</span>
                          <span>{{parameter.par_sup}}</span>
                        </td>
                        <td>
                          <span>工厂地址：</span>
                          <span>{{parameter.par_sup_address}}</span>
                        </td>
                      </tr>
                      <tr class="riget-details-tr">
                        <td>
                          <span>工厂电话：</span>
                          <span>{{parameter.par_sup_phone}}</span>
                        </td>
                        <td>
                          <span>保质期：</span>
                          <span>{{parameter.par_baozhiqi}}</span>
                        </td>
                        <td>
                          <span>食品产地：</span>
                          <span>{{parameter.par_chandi}}</span>
                        </td>
                      </tr>
                      <tr class="riget-details-tr">
                        <td>
                          <span>包装方式：</span>
                          <span>{{parameter.par_pack}}</span>
                        </td>
                        <td>
                          <span>口味：</span>
                          <span>{{parameter.par_flavor}}</span>
                        </td>
                        <td>
                          <span>净含量：</span>
                          <span>{{parameter.par_weight}}g</span>
                        </td>
                      </tr>
                      
                    </table>
                    <h4 class="right-details-h4 right-detail-shop">商品细节：</h4>
                    <div class="right-details-img">
                      <img :src="parameter.par_url" alt="">
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="全部评价" class="right-details-eva">
                    <div class="eva-top">
                      <div class="eva-top-praise">
                        <p class="eva-top-aa">
                          <span class="eva-top-ab">95</span>
                          <span class="eva-top-ac">%</span>
                        </p>
                        <span class="eva-top-ad">好评度</span>
                      </div>
                      <div class="eva-top-right">
                        <p class="eva-top-ba">买家印象</p>
                        <ul>
                          <li class="eva-top-bb">
                            <a href="#" class="eva-top-bc">"味道不错(2177)"</a>
                          </li>
                          <li class="eva-top-bb">
                            <a href="#" class="eva-top-bc">"颗粒饱满(2177)"</a>
                          </li>
                          <li class="eva-top-bb">
                            <a href="#" class="eva-top-bc">"口感好(2177)"</a>
                          </li>
                          <li class="eva-top-bb">
                            <a href="#" class="eva-top-bc">"商品不错(2177)"</a>
                          </li>
                          <li class="eva-top-bb">
                            <a href="#" class="eva-top-bc">"香甜可口(2177)"</a>
                          </li>
                          <li class="eva-top-bb">
                            <a href="#" class="eva-top-bc">"个个开口(2177)"</a>
                          </li>
                          <li class="eva-top-bb">
                            <a href="#" class="eva-top-bc">"价格实惠(2177)"</a>
                          </li>
                          <li class="eva-top-bb">
                            <a href="#" class="eva-top-bc">"皮很薄(2177)"</a>
                          </li>
                          <li class="eva-top-bb">
                            <a href="#" class="eva-top-bc">"特价优惠(2177)"</a>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                    <div class="eva-banner">
                      <div class="eva-banner-aa">
                          <span>全部评价</span>
                          <span>(100)</span>
                      </div>
                      <ul class="eva-banner-ab">
                        <li>
                          <span>好评</span>
                          <span>(98)</span>
                        </li>
                        <li>
                          <span>中评</span>
                          <span>(2)</span>
                        </li>
                        <li>
                          <span>差评</span>
                          <span>(0)</span>
                        </li>
                      </ul>
                    </div>
                    <div class="eva-main">
                      <div class="eva-main-aa" v-for="a in 10" :key="a">
                        <div class="eva-aa-left">
                          <div class="eva-left-tx">
                            <img src="../../images/ls/details-tx.jpg" alt="" class="eva-tx-img">
                          </div>
                          <i class="el-icon-caret-left eva-left-icon"></i>
                        </div>
                        <div class="eva-aa-right">
                          <el-card class="box-card">
                            <p class="eva-right-ma">
                              <span>某某某(匿名)</span>
                              <span>评论于</span>
                              <span>2020年03月15日 10:00</span>
                            </p>
                            <div class="eva-right-na">
                              <a href="#">
                                <img src="../../images/ls/details-tx.jpg" alt="">
                              </a>
                              <a href="#">
                                <img src="../../images/ls/details-tx.jpg" alt="">
                              </a>
                              <a href="#">
                                <img src="../../images/ls/details-tx.jpg" alt="">
                              </a>
                            </div>
                            <div class="eva-right-oa">
                              <p>份量挺足的追剧嘴馋吃不错 新鲜度：好吃喜欢酥糖包装很有创意、合起来是福气到家</p>
                              <p>
                                <span>口味：</span>
                                <span>你喜欢的</span>
                              </p>
                            </div>
                          </el-card>
                        </div>
                      </div>
                      
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="猜你喜欢" class="right-details-like">
                    <ul class="like-main">
                      <li class="like-main-aa" v-for="(c,index) in goodslist.slice(50,70)" :key="index">
                        <a href="" class="like-main-ab">
                          <img :src="c.url" alt="">
                          <p class="like-title">{{c.title}}</p>
                          <div class="like-price">
                            <span class="like-price-aa">￥{{c.price}}</span>
                            <span class="like-price-bb">收藏:{{c.collection}}人</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </div>
        </div>
        <!-- 底部 -->
        <commentfooter></commentfooter>
    </div>
</template>

<style src="../../assets/css/shopdetails.css"></style>
<style lang="css" scoped>
 .row >>> .el-breadcrumb{
    margin: 10px 0 10px 0;
  }
  .am-btn {
      font-size: 12px;
  }
  .am-btn-default {
      color: #444;
      background-color: #e6e6e6;
      border-color: #e6e6e6;
  }
  .am-btn {
      display: inline-block;
      margin-bottom: 0;
      vertical-align: middle;
      font-weight: normal;
      text-align: center;
      white-space: nowrap;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 0;
      cursor: pointer;
      outline: none;
  }
.ball{
        width: 15px;
        height: 15px;
        z-index: 99;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        top: 69%;
        left: 45%;
}
.address-pc select{
  width: 60%;
  border: 1px solid #ccc!important;
}
</style>

<script>
import { Message } from 'element-ui'
import comment from "../components/top.vue"
import commentfooter from "../components/footer.vue"
import commentaddress from "../components/address.vue"
export default {
    components:{
        commentBox:comment,
        commentfooter:commentfooter,
        commentaddress:commentaddress
    },
    data() {
        return { 
            id:this.$route.params.id,
            goodslist:[],
            parameter:[],
            goodsinfo:[],
            stocklist:[],
            shopclass:[],
            brandlist:[],
            selectedCount:1,
            ballShow:false,
            num3: 1,
            goodsinfo:{},
            currentdate:'',
            address:{
              province:'',
              city:'',
              county:''
            },
        }
    },
    created() {
        this.getGoodsList();
        this.getParameter();
        this.getGoodsInfo();
        this.getStock();
        this.getShopclass();
        this.getBrand();
    },
    mounted() {
      // 选择图片
      	$('.bot-img').mouseover(function(){
          $(this).css('border','1px solid gray');
          $(this).siblings().css('border','');
          var index2 = $(this).index();
          $(".show-max:eq("+index2+")").siblings('div').addClass('display');
          $(".show-max:eq("+index2+")").removeClass('display');
        })
        // 选择口味
        $('.right-xz-db').click(function(){
          $('.right-xz-db').toggleClass('right-xz-de');
          $(this).siblings().css('border','');
        })
        // 选择包装
        $('.right-xz-dc').click(function(){
          $('.right-xz-dc').toggleClass('right-xz-de');
          $(this).siblings().css('border','');
        })
      
    },
    methods: {
      onSelected2(data) {
            this.address.province = data.province.value
            this.address.city = data.city.value
            this.address.county = data.area.value
      },
        getGoodsList(){
            this.$http.get("good")
            .then(res=>{
                this.goodslist = res.body;
            })
        },
        getGoodsInfo(){
            this.$http.get("good/goods/"+this.id)
            .then(res=>{
                    this.goodsinfo = res.body;
                    console.log(res.body);
            })
        },
        getParameter(){
            this.$http.get("parameter/parameters/"+this.id)
            .then(res=>{
                this.parameter = res.body;
            })
        },
        getStock(){
            this.$http.get("stock/stocks/"+this.id)
            .then(res=>{
                this.stocklist = res.body;
            })
        },
        getShopclass(){
            this.$http.get("shopclass/shopclasses/"+this.id)
            .then(res=>{
                this.shopclass = res.body;
                console.log(res.body);
            })
        },
        getBrand(){
            this.$http.get("brand/goods_brand/"+this.id)
            .then(res=>{
                this.brandlist = res.body;
            })
        },
        // getUsers(){
        //     this.$http.get("login/user_login/"+this.id)
        //     .then(res=>{
        //         this.userslist = res.body;
        //     })
        // },
        handleChange(value) {
          console.log(value);
        },
        addToShopCar(){
          // 添加商品时间
          var date = new Date();
          var seperator1 = "-";
          var seperator2 = ":";
          //以下代码依次是获取当前时间的年月日时分秒
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var strDate = date.getDate();
          var minute = date.getMinutes();
          var hour = date.getHours();
          var second = date.getSeconds();
          //固定时间格式
          if (month >= 1 && month <= 9) {
            month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
          }
          if (hour >= 0 && hour <= 9) {
              hour = "0" + hour;
          }
          if (minute >= 0 && minute <= 9) {
              minute = "0" + minute;
          }
          if (second >= 0 && second <= 9) {
              second = "0" + second;
          }
          var currentdate =  year + seperator1 + month + seperator1 + strDate 
                    + " " + hour + seperator2 + minute + seperator2 + second;
    
          var count =$('#op-num > .el-input input').val();
          console.log(count);
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
                    });
                    }else{
                        this.ballShow = !this.ballShow;
                        if(!this.id || !this.goodsinfo.title){
                        this.flag1=true;
                        }else{
                        this.$http.post('shopcar/shop_car',{
                            id:this.id,
                            goods_id:this.id,
                            title:this.goodsinfo.title,
                            price:this.goodsinfo.price,
                            url:this.goodsinfo.url,
                            count:count,
                            flavor:this.parameter.par_flavor,
                            pack:this.parameter.par_pack,
                            add_time:currentdate,
                        }).then(function(data){
                            if(data.body.flag == 1){
                                
                            }else{
                                
                            }
                        })
                      }
                    }
            },
        addToCollection(){
          // 添加商品时间
          var date = new Date();
          var seperator1 = "-";
          var seperator2 = ":";
          //以下代码依次是获取当前时间的年月日时分秒
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var strDate = date.getDate();
          var minute = date.getMinutes();
          var hour = date.getHours();
          var second = date.getSeconds();
          //固定时间格式
          if (month >= 1 && month <= 9) {
            month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
          }
          if (hour >= 0 && hour <= 9) {
              hour = "0" + hour;
          }
          if (minute >= 0 && minute <= 9) {
              minute = "0" + minute;
          }
          if (second >= 0 && second <= 9) {
              second = "0" + second;
          }
          var currentdate =  year + seperator1 + month + seperator1 + strDate 
                    + " " + hour + seperator2 + minute + seperator2 + second;
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
                    });
                    }else{
                        if(!this.id || !this.goodsinfo.title){
                        this.flag1=true;
                        }else{
                        this.$http.post('collection/collections',{
                            id:this.id,
                            goods_id:this.id,
                            title:this.goodsinfo.title,
                            price:this.goodsinfo.price,
                            dis_price:this.goodsinfo.discount_price,
                            purchase:this.goodsinfo.purchase,
                            evaluate:this.goodsinfo.evaluate,
                            collection:this.goodsinfo.collection,
                            url:this.goodsinfo.url,
                            time:currentdate,
                        }).then(function(data){
                            if(data.body.flag == 1){
                                
                            }else{
                                
                            }
                        })
                      }
                      Message.success("成功加入收藏夹");
                    }
            },
        // 加入购物车小球
         beforeEnter(el) {
            el.style.transform = "translate(0, 0)";
          },
          enter(el, done) {
            el.offsetWidth;
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const xDist = 3000 - ballPosition.left;
            const yDist = ballPosition.top-4850;
            el.style.transform = `translate(${xDist}%, ${yDist}%)`;
            el.style.transition = "all 1s ease";
            done();
          },
          afterEnter(el) {
              setTimeout(()=>{
                  this.ballShow = !this.ballShow;
              },600)
          },
    },
//     mutations:{
//       addToCar(state,goodsinfo){
//           var flag=false
//           state.car.some(item=>{
//               if(item.id==goodsinfo.id){
//                   item.num+=parseInt(goodsinfo.num)
//                   flag=true
//                   return true
//               }
//           })
//           if(!flag){
//               state.car.push(goodsinfo)
//           }
//       }

// },
}
</script>