<template>
    <div>
        <commentBox></commentBox>
        <div class="container">
            <div class="row">
                <div class="top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">商品结算</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="buzou">
                    <el-steps :space="300" :active="1" process-status="wait" align-center class="buzou-aa">
                        <el-step title="拍下商品" class="buzou-aa-mp"></el-step>
                        <el-step title="进行付款"></el-step>
                        <el-step title="确认收货"></el-step>
                        <el-step title="评价"></el-step>
                    </el-steps>
                </div>
                <div class="five-main-aa">
                    <h4 style="margin:20px 0 20px 0;">请选择收货地址</h4>
                    <ul>                                  
                        <li class="five-aa-li five-li-bg">
                            <span class="five-aa-qq five-qq-bg"><i class="am-icon-check-circle"></i>默认地址</span>
                                        <p class="five-aa-ww">
                                            <span class="five-ww-aa"><i class="el-icon-user"></i>用户们</span>
                                            <span class="five-ww-ss"><i class="el-icon-mobile-phone"></i>182****7495</span>
                                        </p>
                                        <div class="five-aa-ee">
                                            <p class="five-ee-zz">
                                            <span class="five-zz-title"><i class="el-icon-location-outline"></i>地址：</span>
                                            <span class="five-zz-province">广西壮族自治区</span>
                                            <span class="five-zz-city">玉林市</span>
                                            <span class="five-zz-dist">北流市</span>
                                            <span class="five-zz-street">白马镇金头圩</span></p>
                                        </div>
                                        <div class="five-aa-rr">
                                            <a href="#"><i class="el-icon-edit-outline"></i>编辑</a>
                                            <span class="five-rr-dd">|</span>
                                            <a href="#" onClick="delClick(this);"><i class="el-icon-delete"></i>删除</a>
                                        </div>
                                        </li>                                    
                                        <li class="five-aa-li five-li-bg1">
                                        <span class="five-aa-qq none"><i class="am-icon-check-circle"></i>设为默认</span>
                                        <p class="five-aa-ww">
                                            <span class="five-ww-aa"><i class="el-icon-user"></i>用户们</span>
                                            <span class="five-ww-ss"><i class="el-icon-mobile-phone"></i>182****7495</span>
                                        </p>
                                        <div class="five-aa-ee">
                                            <p class="five-ee-zz">
                                            <span class="five-zz-title"><i class="el-icon-location-outline"></i>地址：</span>
                                            <span class="five-zz-province">广西壮族自治区</span>
                                            <span class="five-zz-city">玉林市</span>
                                            <span class="five-zz-dist">北流市</span>
                                            <span class="five-zz-street">白马镇金头圩</span></p>
                                        </div>
                                        <div class="five-aa-rr">
                                            <a href="#"><i class="el-icon-edit-outline"></i>编辑</a>
                                            <span class="five-rr-dd">|</span>
                                            <a href="#" onClick="delClick(this);"><i class="el-icon-delete"></i>删除</a>
                                        </div>
                                        </li>                                                             
                                        <li class="five-aa-li five-li-bg1">
                                        <span class="five-aa-qq none"><i class="am-icon-check-circle"></i>设为默认</span>
                                        <p class="five-aa-ww">
                                            <span class="five-ww-aa"><i class="el-icon-user"></i>用户们</span>
                                            <span class="five-ww-ss"><i class="el-icon-mobile-phone"></i>182****7495</span>
                                        </p>
                                        <div class="five-aa-ee">
                                            <p class="five-ee-zz">
                                            <span class="five-zz-title"><i class="el-icon-location-outline"></i>地址：</span>
                                            <span class="five-zz-province">广西壮族自治区</span>
                                            <span class="five-zz-city">玉林市</span>
                                            <span class="five-zz-dist">北流市</span>
                                            <span class="five-zz-street">白马镇金头圩</span></p>
                                        </div>
                                        <div class="five-aa-rr">
                                            <a href="#"><i class="el-icon-edit-outline"></i>编辑</a>
                                            <span class="five-rr-dd">|</span>
                                            <a href="#" onClick="delClick(this);"><i class="el-icon-delete"></i>删除</a>
                                        </div>
                                        </li>                                                             
                                        <li class="five-aa-li five-li-bg1">
                                        <span class="five-aa-qq none"><i class="am-icon-check-circle"></i>设为默认</span>
                                        <p class="five-aa-ww">
                                            <span class="five-ww-aa"><i class="el-icon-user"></i>用户们</span>
                                            <span class="five-ww-ss"><i class="el-icon-mobile-phone"></i>182****7495</span>
                                        </p>
                                        <div class="five-aa-ee">
                                            <p class="five-ee-zz">
                                            <span class="five-zz-title"><i class="el-icon-location-outline"></i>地址：</span>
                                            <span class="five-zz-province">广西壮族自治区</span>
                                            <span class="five-zz-city">玉林市</span>
                                            <span class="five-zz-dist">北流市</span>
                                            <span class="five-zz-street">白马镇金头圩</span></p>
                                        </div>
                                        <div class="five-aa-rr">
                                            <a href="#"><i class="el-icon-edit-outline"></i>编辑</a>
                                            <span class="five-rr-dd">|</span>
                                            <a href="#" onClick="delClick(this);"><i class="el-icon-delete"></i>删除</a>
                                        </div>
                                        </li>                                                             
                        </ul>
                    <div class="set-add flex-between">
                        <a href="#">使用新地址</a>
                        <a href="#">管理收货地址</a>
                    </div>
                </div>
                <div class="set-shop">
                    <h4 style="margin:20px 0 20px 0;">确认订单信息</h4>
                    <div class="set-order-nav">
                        <ul class="flex-between">
                            <li class="width52 top-nav">商品信息</li>
                            <li class="width12 top-nav">单价</li>
                            <li class="width12 top-nav">数量</li>
                            <li class="width12 top-nav">优惠方式</li>
                            <li class="width12 top-nav">小计</li>
                        </ul>
                    </div>
                    <div class="car-main">
                                <ul>
                                    <li class="car-main-li set-main-li">
                                        <div class="six-li-bb main-li-div">
                                              <div class="width52">
                                                <a href="#" class="flex-between shop2-aa">
                                                  <img src="../../images/user/goods-1-(2).jpg" alt="" class="car-sp-left center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p><span>口味：</span><span>你喜欢的</span></p>
                                                    <p><span>包装：</span><span>包装</span></p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="width12 flex-center">
                                                <span class="text-align li-price">￥69.9</span>
                                              </div>
                                              <div class="width12 li-num">
                                                <el-input-number :min="1" @change="handleChange" size="small" v-model="num2" class="li-num-input1"></el-input-number>
                                              </div>
                                              <div class="width12 flex-center text-align shop2-aa">
                                                无优惠
                                              </div>
                                              <div class="width12 flex-center">
                                                <p class="text_color text_right f1-p li-zong-p1">￥69.9</p>
                                              </div>
                                        </div>
                                    </li>
                                </ul>
                     </div>
                     <div class="set-now">
                         <div class="flex-between">
                             <div class="flex-start set-now-left">
                                 <span class="now-left-aa font14">给卖家留言:</span>
                                 <div class="now-left-bb">
                                    <el-input maxlength="200" resize="none" show-word-limit type="textarea" placeholder="选填，请先和商家协商一致" v-model="textarea2"></el-input>
                                 </div>
                             </div>
                             <div class="set-now-right">
                                 <div class="set-right-shang">
                                     <ul class="flex-between font14">
                                         <li class="text_right li-text-up">运送方式：</li>
                                         <li class="text_left li-text-on">
                                             <span>普通配送</span>
                                             <span>快递</span>
                                             <span>免邮</span>
                                         </li>
                                         <li class="text_right li-text-in text_color">0.00</li>
                                     </ul>
                                 </div>
                                 <div class="set-right-xia">
                                     <ul class="flex-between font14">
                                         <li class="text_right li-text-up">运费险：</li>
                                         <li class="text_left li-text-on">
                                            <span><input type="checkbox" checked="checked" disabled="true"></span>
                                            <span class="on-yun">运费险</span>
                                            <span>卖家赠送，退换货可赔</span>
                                         </li>
                                         <li class="text_right li-text-in text_color">0.00</li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                     </div>
                    <div class="set-mm font14">
                        <div class="set-mm-pp text_right set-mm-oo">
                            <span class="set-pp-qq">店铺合计(含运费)</span>
                            <span class="text_color set-oo-aa">￥69.90</span>
                        </div>
                        <div class="set-mm-pp text_right">
                            <span class="set-pp-ww"><input type="checkbox" style="zoom:180%;">朋友代付</span>
                            <span><input type="checkbox" checked="checked" style="zoom:180%;">匿名购买</span>
                        </div>
                    </div>
                    <div class="set-pos row-reverse">
                       <div class="set-nn">
                            <div class="text_right set-nn-sa font14">
                                <span>实付款</span>
                                <span class="set-sa-zz">￥69.90</span>
                            </div>
                            <div class="text_right font14 set-nn-sa">
                                <span class=""><i class="el-icon-location-outline"></i>寄送到：</span>
                                <span class="">广西壮族自治区</span>
                                <span class="">玉林市</span>
                                <span class="">北流市</span>
                                <span class="">白马镇金头圩</span>            
                            </div>
                            <div class="text_right font14 set-nn-sa">
                                <span>收货人：</span>
                                <span>用户们</span>
                                <span>18277107495</span>
                            </div>
                        </div> 
                    </div>
                    <div class="text_right row-reverse set-footer">
                        <router-link to="/index/success" class="set-arrs" title="提交订单">提交订单</router-link>
                    </div>
                </div>
            </div>
        </div>
        <commentfooter></commentfooter>
    </div>
</template>

<style src='../../assets/css/shopclass.css'></style>
<style src='../../assets/css/user.css'></style>
<style src='../../assets/css/shopcar.css'></style>
<style src='../../assets/css/settlement.css'></style>
<style lang="css" scoped>

.buzou-aa-mp >>> .el-step__head.is-finish{
    color: black;
    border-color: black;
}
.buzou-aa-mp >>> .el-step__main .el-step__title.is-finish {
    color: black;
    font-size: 20px;
}
.now-left-bb >>> .el-textarea .el-input__count{
    background: none;
    bottom: 12px;
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
            num2: 1,
            textarea2:"",
        }
    },
    created() {
        // this.handleChange(value);
    },
     mounted() {
      $('.five-aa-li').hover(
        function(){
          var flag = $(this).children('.five-aa-qq').text()
          if(flag == "设为默认"){
            // console.log(flag)
            $(this).children('.five-aa-qq').removeClass('none')
          }
        },
        function(){
          var flag = $(this).children('.five-aa-qq').text()
         if(flag == "设为默认"){
           $(this).children('.five-aa-qq').addClass('none');
         }
        }
      );
      $(".five-aa-qq").click(function(){
        var flag = $(this).text();
        if(flag =='设为默认'){
          $(this).text('默认地址');
          $(this).parent('.five-aa-li').siblings().children('.five-aa-qq').text('设为默认');
          $(this).parent('.five-aa-li').siblings().children('.five-aa-qq').addClass('none')
          $(this).addClass('five-qq-bg');
          $(this).parent('.five-aa-li').removeClass('five-li-bg1').addClass('five-li-bg');
          $(this).parent('.five-aa-li').siblings('li').addClass('five-li-bg1');
        }
      })
      $('.li-num-input1 > .el-input-number__decrease').click(function(){
            var jin = $('.li-zong-p1').html().replace(/[^\d.]/g, "");
            $('.set-oo-aa').html("￥"+jin);
            $('.set-sa-zz').html("￥"+jin);
        })
        $('.li-num-input1 > .el-input-number__increase').click(function(){
            var jin = $('.li-zong-p1').html().replace(/[^\d.]/g, "");
            $('.set-oo-aa').html("￥"+jin);
            $('.set-sa-zz').html("￥"+jin)
        })
    },
    methods: {
        handleChange(value) {
        this.$nextTick(() => {
          var price = $('.li-price').html().replace(/[^\d.]/g, "");
          var zong = (value * price).toFixed(2);
          $('.li-zong-p1').html("￥"+zong);
        })
        }
    },
}
</script>