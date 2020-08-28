<template>
    <div>
        <commentBox></commentBox>
        <div class="container">
            <div class="row">
                <div class="row-tabs">
                    <el-tabs type="border-card" tab-position="left" class="row-tabs-xc" v-model="tabsname">
                        <el-tab-pane class="tabs-xc-aa" name="first">
                            <span slot="label" class="tabs-xc-ab" style="font-size:18px;color:black;"><i class="el-icon-user-solid"></i> 个人中心</span>
                            <div class="one-main">
                              <el-card class="box-card one-main-aa">
                                <div class="one-main-bb">
                                  <div class="one-aa-za">
                                    <a href="#">
                                      <img src="../../images/ls/details-tx.jpg" alt="">
                                    </a>
                                  </div>
                                  <div class="one-aa-ya">
                                    <ul>
                                      <li>{{namelogin}}
                                        <a href="javascript:;" @click="grxx">
                                          <span><i class="el-icon-edit"></i></span>
                                        </a>
                                      </li>
                                      <li>铜牌会员</li>
                                      <li>
                                        <a href="#">会员福利</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="one-aa-sa">
                                    <ul>
                                      <li>
                                        <a href="javascript:;" @click="xiaoxi">
                                          <span><i class="el-icon-bell"></i>我的消息</span>
                                        </a>                     
                                      </li>
                                      <li>
                                        <a href="javascript:;" @click="dizhi">
                                          <span><i class="el-icon-s-promotion"></i>我的收货地址</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </el-card>
                              <div>
                              <el-card class="box-card one-main-width one-main-bb">
                                <div class="one-bb">
                                  <div slot="header" class="clearfix">
                                    <span>个人资产</span>
                                    <el-button style="float: right; padding: 3px 0" type="text"></el-button>
                                  </div>
                                  <div class="one-bb-ab">
                                    <ul>
                                      <li>
                                        <a href="javascript:;" @click="hongbao">
                                          <div class="one-ab-img">
                                            <img src="../../images/user/bonus.png" alt="">
                                          </div>
                                          <el-badge :value="2" :max="99" class="item">
                                            <el-button size="small">红包</el-button>
                                          </el-badge>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" @click="youhuijuan">
                                          <div class="one-ab-img">
                                            <img src="../../images/user/coupon.png" alt="">
                                          </div>
                                          <el-badge :value="3" :max="99" class="item">
                                            <el-button size="small">优惠劵</el-button>
                                          </el-badge>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div class="one-ab-img">
                                            <img src="../../images/user/wallet.png" alt="">
                                          </div>
                                          <el-badge :value="2" :max="99" class="item">
                                            <el-button size="small">钱包</el-button>
                                          </el-badge>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div class="one-ab-img">
                                            <img src="../../images/user/day-to.png" alt="">
                                          </div>
                                          <el-badge is-dot class="item">
                                            <el-button size="small">签到有礼</el-button>
                                          </el-badge>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <div class="one-ab-img">
                                            <img src="../../images/user/72h.png" alt="">
                                          </div>
                                          <el-badge class="item">
                                            <el-button size="small">72小时发货</el-button>
                                          </el-badge>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </el-card>
                              </div>
                              <div>
                                <el-card class="box-card one-main-width one-main-cc">
                                  <div slot="header" class="clearfix">
                                    <span>我的订单</span>
                                    <el-button style="float: right; padding: 3px 0" type="text" @click="dingdan">全部订单</el-button>
                                  </div>
                                  <div class="one-cc-aa">
                                    <ul>
                                      <li>
                                        <a href="#" class="one-cc-ab" @click="fukuan">
                                          <i class="el-icon-bank-card one-cc-ac"></i>
                                          <p class="one-cc-ad">
                                            <el-badge :value="1" :max="99" class="item">
                                              <span class="one-cc-ae">待付款</span>
                                            </el-badge>
                                          </p>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" class="one-cc-ab" @click="fahuo">
                                          <i class="el-icon-shopping-bag-1 one-cc-ac"></i>
                                          <p class="one-cc-ad">
                                            <el-badge :value="2" :max="99" class="item">
                                              <span class="one-cc-ae">待发货</span>
                                            </el-badge>
                                          </p>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" class="one-cc-ab" @click="shouhuo">
                                          <i class="el-icon-box one-cc-ac"></i>
                                          <p class="one-cc-ad">
                                            <el-badge :value="3" :max="99" class="item">
                                              <span class="one-cc-ae">待收货</span>
                                            </el-badge>
                                          </p>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" class="one-cc-ab" @click="pingjia">
                                          <i class="el-icon-document one-cc-ac"></i>
                                          <p class="one-cc-ad">
                                            <el-badge :value="4" :max="99" class="item">
                                              <span class="one-cc-ae">待评价</span>
                                            </el-badge>
                                          </p>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" class="one-cc-ab" @click="tuihuan">
                                          <i class="el-icon-guide one-cc-ac"></i>
                                          <p class="one-cc-ad">
                                            <el-badge class="item">
                                              <span class="one-cc-ae">退换货</span>
                                            </el-badge>
                                          </p>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </el-card>
                              </div>
                              <div>
                                <el-card class="box-card one-main-width one-main-dd">
                                  <div slot="header" class="clearfix">
                                    <span>我的物流</span>
                                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                                  </div>
                                  <div class="one-dd">
                                    <ul>
                                      <li>
                                        <div class="one-dd-aa">
                                          <a href="#">
                                            <img src="../../images/user/goods-1-(2).jpg" alt="">
                                          </a>
                                        </div>
                                        <div class="one-dd-bb">
                                          <p class="one-bb-kj">快件已从<span class="one-bb-dm">北流</span>发出</p>
                                          <p class="one-bb-wl">
                                            <span class="one-bb-sj">2020-3-19 10:47:29</span>
                                            <span class="one-bb-mx">
                                              <a href="#">
                                                查看物流明细
                                              </a>
                                            </span>
                                          </p>
                                        </div>
                                        <div class="one-dd-cc">
                                          <el-row>
                                            <el-button round>确认收货</el-button>
                                          </el-row>
                                        </div>
                                      </li>
                                      <hr>
                                      <li>
                                        <div class="one-dd-aa">
                                          <a href="#">
                                            <img src="../../images/user/goods-1-(3).jpg" alt="">
                                          </a>
                                        </div>
                                        <div class="one-dd-bb">
                                          <p class="one-bb-kj">已签收，签收人：用户名称</p>
                                          <p class="one-bb-wl">
                                            <span class="one-bb-sj">2020-3-19 10:47:29</span>
                                            <span class="one-bb-mx">
                                              <a href="#">
                                                查看物流明细
                                              </a>
                                            </span>
                                          </p>
                                        </div>
                                        <div class="one-dd-cc">
                                          <el-row>
                                            <el-button round>确认收货</el-button>
                                          </el-row>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </el-card>
                              </div>
                              <div>
                                <el-card class="box-card one-main-width one-main-ee">
                                  <div slot="header" class="clearfix">
                                    <span>给你推荐</span>
                                    <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
                                  </div>
                                  <div class="one-ee">
                                    <ul>
                                      <li v-for="(k,index) in goodslist.slice(100,120)" :key="index">
                                        <a href="#" class="one-ee-aa">
                                          <img :src="k.url" alt="">
                                          <p class="one-ee-bb">{{k.title}}</p>
                                          <div class="one-ee-cc">
                                            <span class="one-ee-dd">￥{{k.price}}</span>
                                            <span class="one-ee-ee">购买:{{k.purchase}}人</span>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </el-card>
                              </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" disabled>
                            <span slot="label" class="tabs-xc-ab" style="color:black;"><i class="el-icon-user"></i> 个人资料</span>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" name="two">
                            <span slot="label" class="tabs-xc-ab gray font14"> 个人信息</span>
                             <div class="tabs-three">
                                <div class="tabs-three-main">
                                    <h4>个人资料
                                        <span>/ Personal information</span>
                                    </h4>
                                    <hr>
                                    <div class="three-main">
                                          <el-upload
                                            class="avatar-uploader"
                                            action="https://jsonplaceholder.typicode.com/posts/"
                                            :show-file-list="false"
                                            :on-success="handleAvatarSuccess"
                                            :before-upload="beforeAvatarUpload">
                                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                            <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
                                          </el-upload>
                                        <div class="three-main-bb">
                                            <ul>
                                                <li>
                                                    <span>用户名：</span>
                                                    <span>{{namelogin}}</span>
                                                </li>
                                                <li>性别：{{namelist.user_gender}}</li>
                                                <li>电话号码：{{namelist.user_phone}}</li>
                                                <li>个人简介：{{namelist.jieshao}}</li>
                                                <li>
                                                    铜牌会员
                                                </li>
                                                <li>
                                                    <span>账户安全</span>
                                                    <span>60分</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="three-main-cc">
                                      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                        <el-form-item label="用户名" prop="name">
                                          <el-input v-model="ruleForm.name" placeholder="请输入你的用户名"></el-input>
                                        </el-form-item>
                                        <el-form-item label="性别" prop="region">
                                          <el-select v-model="ruleForm.region" placeholder="请选择你的性别" style="width:100%;" class="three-cc-region">
                                            <el-option label="男" value="男"></el-option>
                                            <el-option label="女" value="女"></el-option>
                                            <el-option label="保密" value="保密"></el-option>
                                          </el-select>
                                        </el-form-item>
                                        <el-form-item label="生日" prop="date1">
                                          <!-- <el-input v-model="ruleForm.date1" placeholder="请输入你的生日"></el-input> -->
                                          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;" class="three-cc-riqi"></el-date-picker>
                                        </el-form-item>
                                        <!-- <el-form-item label="手机号码" width="100px" prop="phone" status-icon show-message class="reg-form">
                                            <el-input v-model="ruleForm.phone" placeholder="请输入手机号" class="reg-phone"></el-input>
                                        </el-form-item> -->
                                        <el-form-item label="个人简介">
                                          <el-input type="textarea" v-model="ruleForm.jieshao"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                          <el-button type="primary" @click="submitForm('ruleForm')">立即保存</el-button>
                                          <el-button @click="resetForm('ruleForm')">重置</el-button>
                                        </el-form-item>
                                      </el-form>
                                    </div>
                                </div> 
                             </div>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" name="three">
                            <span slot="label" class="tabs-xc-ab"> 安全设置</span>
                            <div class="tabs-four">
                              <div class="tabs-four-main">
                                <h4>账户安全
                                        <span>/ Set up Safety</span>
                                    </h4>
                                    <hr>
                                    <div class="three-main">
                                        <div class="three-main-aa">
                                          <a href="#">
                                            <img src="../../images/ls/user-tx.jpg" alt="">
                                          </a>
                                        </div>
                                        <div class="three-main-bb">
                                            <ul>
                                                <li>
                                                    <span>用户名：</span>
                                                    <span>管理员</span>
                                                </li>
                                                <li>
                                                    铜牌会员
                                                </li>
                                                <li>
                                                    <span>账户安全</span>
                                                    <span>60分</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="four-main-aa">
                                          <ul>
                                            <li>
                                              <div class="four-aa-zz center">
                                                <img src="../../images/user/denglu.png" alt="">
                                              </div>
                                              <div class="four-aa-xx">
                                                <h4>登陆密码</h4>
                                                <p>为保证您购物安全，建议您定期更改密码以保护账户安全。</p>
                                              </div>
                                              <div class="four-aa-cc flex-center">
                                                <router-link to="/index/user/password">
                                                  <button class="four-cc-but">修改</button>
                                                </router-link>
                                              </div>
                                            </li>
                                            <hr>
                                            <li>
                                              <div class="four-aa-zz center">
                                                <img src="../../images/user/zhifumima.png" alt="">
                                              </div>
                                              <div class="four-aa-xx">
                                                <h4>支付密码</h4>
                                                <p>启用支付密码功能，为您资产账户安全加把锁。</p>
                                              </div>
                                              <div class="four-aa-cc flex-center">
                                                <router-link to="/index/user/zhifu">
                                                  <button class="four-cc-but">修改</button>
                                                </router-link>
                                              </div>
                                            </li>
                                            <hr>
                                            <li>
                                              <div class="four-aa-zz center">
                                                <img src="../../images/user/shouji.png" alt="">
                                              </div>
                                              <div class="four-aa-xx">
                                                <h4>手机验证</h4>
                                                <p>您验证的手机：186XXXXXXXX 若已丢失或停用，请立即更换</p>
                                              </div>
                                              <div class="four-aa-cc flex-center">
                                                <router-link to="/index/user/phone">
                                                  <button class="four-cc-but">修改</button>
                                                </router-link>
                                              </div>
                                            </li>
                                            <hr>
                                            <li>
                                              <div class="four-aa-zz center">
                                                <img src="../../images/user/youxiang.png" alt="">
                                              </div>
                                              <div class="four-aa-xx">
                                                <h4>邮箱验证</h4>
                                                <p>您验证的邮箱：1173908XXX@qq.com 可用于快速找回登录密码。</p>
                                              </div>
                                              <div class="four-aa-cc flex-center">
                                                <router-link to="/index/user/email">
                                                  <button class="four-cc-but">修改</button>
                                                </router-link>
                                              </div>
                                            </li>
                                            <hr>
                                            <li>
                                              <div class="four-aa-zz center">
                                                <img src="../../images/user/shiming.png" alt="">
                                              </div>
                                              <div class="four-aa-xx">
                                                <h4>实名认证</h4>
                                                <p>用于提升账号的安全性和信任级别，认证后不能修改认证信息。</p>
                                              </div>
                                              <div class="four-aa-cc flex-center">
                                                <router-link to="/index/user/name">
                                                  <button class="four-cc-but">认证</button>
                                                </router-link>
                                              </div>
                                            </li>
                                            <hr>
                                            <li>
                                              <div class="four-aa-zz center">
                                                <img src="../../images/user/denglu.png" alt="">
                                              </div>
                                              <div class="four-aa-xx">
                                                <h4>安全问题</h4>
                                                <p>保护账户安全，验证您身份的工具之一。</p>
                                              </div>
                                              <div class="four-aa-cc flex-center">
                                                <router-link to="/index/user/problem">
                                                  <button class="four-cc-but">修改</button>
                                                </router-link>
                                              </div>
                                            </li>
                                          </ul>
                                    </div>
                              </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" name="four">
                            <span slot="label" class="tabs-xc-ab"> 收货地址</span>
                            <div class="tabs-five">
                              <div class="five-main">
                                <h4>地址管理
                                  <span>/ Address list</span>
                                </h4>
                                <hr>
                                <div class="five-main-aa">
                                  <ul>                                  
                                    <li class="five-aa-li five-li-bg">
                                      <span class="five-aa-qq five-qq-bg"><i class="am-icon-check-circle"></i>默认地址</span>
                                      <p class="five-aa-ww">
                                        <span class="five-ww-aa"><i class="el-icon-user"></i>用户们</span>
                                        <span class="five-ww-ss"><i class="el-icon-mobile-phone"></i>18277576797</span>
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
                                    <li class="five-aa-li five-li-bg1" v-for="i in addresslist" :key="i.id">
                                      <span class="five-aa-qq none"><i class="am-icon-check-circle"></i>设为默认</span>
                                      <p class="five-aa-ww">
                                        <span class="five-ww-aa"><i class="el-icon-user"></i>{{i.login_name}}</span>
                                        <span class="five-ww-ss"><i class="el-icon-mobile-phone"></i>{{i.phone}}</span>
                                      </p>
                                      <div class="five-aa-ee">
                                        <p class="five-ee-zz">
                                          <span class="five-zz-title"><i class="el-icon-location-outline"></i>地址：</span>
                                          <span class="five-zz-province">{{i.province}}</span>
                                          <span class="five-zz-city">{{i.city}}</span>
                                          <span class="five-zz-dist">{{i.district}}</span>
                                          <span class="five-zz-street">{{i.address}}</span></p>
                                      </div>
                                      <div class="five-aa-rr">
                                        <a href="#" @click="putclick(i.id)"><i class="el-icon-edit-outline"></i>编辑</a>
                                        <span class="five-rr-dd">|</span>
                                        <a href="javascript:;" @click="delClick(i.id);"><i class="el-icon-delete"></i>删除</a>
                                      </div>
                                    </li>                                                             
                                  </ul>
                                </div>
                                <div class="five-main-bb">
                                  <h4>新增地址
                                    <span>/ Add address</span>
                                  </h4>
                                  <hr>
                                  <div>
                                    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                                      <el-form-item label="收货人" prop="name">
                                        <el-input v-model="form.name" placeholder="请输入收货人姓名"></el-input>
                                      </el-form-item>
                                      <el-form-item label="手机号码" width="100px" prop="phone" status-icon show-message class="reg-form">
                                        <el-input v-model="form.phone" placeholder="请输入手机号" class="reg-phone"></el-input>
                                      </el-form-item>
                                      <el-form-item label="地址" prop="address" class="five-address">
                                        <v-distpicker province="" city="" area="" @selected="onSelected" class="address-pca flex-between"></v-distpicker>
                                      </el-form-item>
                                      <el-form-item label="详细地址" prop="address2">
                                        <el-input type="textarea" v-model="form.jieshao" placeholder="请写到具体的街道门牌号"></el-input>
                                      </el-form-item>
                                      <el-form-item>
                                        <el-button type="primary" @click="onSubmit">立即保存</el-button>
                                        <el-button @click="quxiao">取消</el-button>
                                      </el-form-item>
                                    </el-form>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" disabled>
                            <span slot="label" class="tabs-xc-ab" style="color:black;"><i class="el-icon-document-copy"></i> 我的交易</span>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" name="five">
                            <span slot="label" class="tabs-xc-ab">订单管理</span>
                            <div class="tabs-six">
                              <div class="six-main">
                                <h4>订单管理
                                  <span>/ Order management</span>
                                </h4>
                                <hr>
                                <div class="six-main-aa">
                                   <el-tabs v-model="activeName" @tab-click="handleClick">
                                    <el-tab-pane label="所有订单" name="first">
                                      <div class="six-aa-pp">
                                        <ul>
                                          <li class="six-pp-sp">商品</li>
                                          <li class="six-pp-dj">单价</li>
                                          <li class="six-pp-sl">数量</li>
                                          <li class="six-pp-sc">商品操作</li>
                                          <li class="six-pp-hj">合计</li>
                                          <li class="six-pp-jy">交易状态</li>
                                          <li class="six-pp-jc">交易操作</li>
                                        </ul>
                                      </div>
                                      <div class="six-aa-oo">
                                        <ul>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000001</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(2).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>1</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">退货/换货</a>
                                                <a href="#">投诉商品</a>
                                                <a href="#">申请售后</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p>￥69.9</p>
                                                <p>(含运费：￥0.00)</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">交易成功</a>
                                                <a href="#">订单详情</a>
                                                <router-link to="/index/logistics">查看物流</router-link>
                                              </div>
                                              <div class="six-bb-ss six-bb-sh flex-center">
                                                <a href="#" class="six-sh">
                                                  <button class="six-sh-qr">确认收货</button>
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000002</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(3).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>1</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">投诉卖家</a>
                                                <a href="#">退运保险</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p>￥69.9</p>
                                                <p>(含运费：￥0.00)</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">等待卖家付款</a>
                                                <a href="#">订单详情</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fk flex-center">
                                                <a href="#" class="six-fk">
                                                  <button class="six-fk-qr">立即付款</button>
                                                </a>
                                                <a href="#">找朋友代付</a>
                                                <a href="#">取消订单</a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000003</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(3).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>1</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">退款/换货</a>
                                                <a href="#">投诉卖家</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p>￥69.9</p>
                                                <p>(含运费：￥0.00)</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">买家已付款</a>

                                                <el-tooltip class="item" effect="dark" content="留言：百世快递，谢谢" placement="bottom">
                                                  <el-button>买家留言</el-button>
                                                </el-tooltip>
                                                <a href="#">订单详情</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fk flex-center">
                                                <a href="#">提醒卖家发货</a>
                                                <a href="#">申请开票</a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000003</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(3).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>1</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">退款/换货</a>
                                                <a href="#">投诉卖家</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p>￥69.9</p>
                                                <p>(含运费：￥0.00)</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">物流派件中</a>
                                                <a href="#">订单详情</a>
                                                <a href="#">查看账单</a>
                                                <router-link to="/index/logistics">查看物流</router-link>
                                              </div>
                                              <div class="six-bb-ss six-bb-sh flex-center">
                                                <a href="#" class="six-sh">
                                                  <button class="six-sh-qr">确认收货</button>
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000003</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(3).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>1</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">举报违规</a>
                                                <a href="#">投诉卖家</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p>￥69.9</p>
                                                <p>(含运费：￥0.00)</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">交易关闭</a>
                                                <a href="#">订单详情</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-sh flex-center">
                                                
                                              </div>
                                            </div>
                                          </li>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000003</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(3).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>1</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">申请售后</a>
                                                <a href="#">投诉卖家</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p>￥69.9</p>
                                                <p>(含运费：￥0.00)</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">交易成功</a>
                                                <a href="#">订单详情</a>
                                                <a href="#">查看账单</a>
                                                <router-link to="/index/logistics">查看物流</router-link>
                                              </div>
                                              <div class="six-bb-ss six-bb-sh flex-center">
                                                 <router-link to="/index/comments" href="#" class="six-sh">
                                                  <button class="six-sh-qr">立即评价</button>
                                                </router-link>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="待付款" name="second">
                                      <div class="six-aa-pp">
                                        <ul>
                                          <li class="six-pp-sp">商品</li>
                                          <li class="six-pp-dj">单价</li>
                                          <li class="six-pp-sl">数量</li>
                                          <li class="six-pp-sc">商品操作</li>
                                          <li class="six-pp-hj">合计</li>
                                          <li class="six-pp-jy">交易状态</li>
                                          <li class="six-pp-jc">交易操作</li>
                                        </ul>
                                      </div>
                                      <div class="six-aa-oo">
                                        <ul>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000002</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(3).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>1</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">投诉卖家</a>
                                                <a href="#">退运保险</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p>￥69.9</p>
                                                <p>(含运费：￥0.00)</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">等待卖家付款</a>
                                                <a href="#">订单详情</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fk flex-center">
                                                <a href="#" class="six-fk">
                                                  <button class="six-fk-qr">立即付款</button>
                                                </a>
                                                <a href="#">找朋友代付</a>
                                                <a href="#">取消订单</a>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="待发货" name="third">
                                      <div class="six-aa-pp">
                                        <ul>
                                          <li class="six-pp-sp">商品</li>
                                          <li class="six-pp-dj">单价</li>
                                          <li class="six-pp-sl">数量</li>
                                          <li class="six-pp-sc">商品操作</li>
                                          <li class="six-pp-hj">合计</li>
                                          <li class="six-pp-jy">交易状态</li>
                                          <li class="six-pp-jc">交易操作</li>
                                        </ul>
                                      </div>
                                      <div class="six-aa-oo">
                                        <ul>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000003</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(3).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>1</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">退款/换货</a>
                                                <a href="#">投诉卖家</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p>￥69.9</p>
                                                <p>(含运费：￥0.00)</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">买家已付款</a>

                                                <el-tooltip class="item" effect="dark" content="留言：百世快递，谢谢" placement="bottom">
                                                  <el-button>买家留言</el-button>
                                                </el-tooltip>
                                                <a href="#">订单详情</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fk flex-center">
                                                <a href="#">提醒卖家发货</a>
                                                <a href="#">申请开票</a>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="待收货" name="fourth">
                                      <div class="six-aa-pp">
                                        <ul>
                                          <li class="six-pp-sp">商品</li>
                                          <li class="six-pp-dj">单价</li>
                                          <li class="six-pp-sl">数量</li>
                                          <li class="six-pp-sc">商品操作</li>
                                          <li class="six-pp-hj">合计</li>
                                          <li class="six-pp-jy">交易状态</li>
                                          <li class="six-pp-jc">交易操作</li>
                                        </ul>
                                      </div>
                                      <div class="six-aa-oo">
                                        <ul>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000003</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(3).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>1</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">退款/换货</a>
                                                <a href="#">投诉卖家</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p>￥69.9</p>
                                                <p>(含运费：￥0.00)</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">物流派件中</a>
                                                <a href="#">订单详情</a>
                                                <a href="#">查看账单</a>
                                                <router-link to="/index/logistics">查看物流</router-link>
                                              </div>
                                              <div class="six-bb-ss six-bb-sh flex-center">
                                                <a href="#" class="six-sh">
                                                  <button class="six-sh-qr">确认收货</button>
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="待评价" name="fiveth">
                                      <div class="six-aa-pp">
                                        <ul>
                                          <li class="six-pp-sp">商品</li>
                                          <li class="six-pp-dj">单价</li>
                                          <li class="six-pp-sl">数量</li>
                                          <li class="six-pp-sc">商品操作</li>
                                          <li class="six-pp-hj">合计</li>
                                          <li class="six-pp-jy">交易状态</li>
                                          <li class="six-pp-jc">交易操作</li>
                                        </ul>
                                      </div>
                                      <div class="six-aa-oo">
                                        <ul>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000003</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(3).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>1</span>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">申请售后</a>
                                                <a href="#">投诉卖家</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p>￥69.9</p>
                                                <p>(含运费：￥0.00)</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#">交易成功</a>
                                                <a href="#">订单详情</a>
                                                <a href="#">查看账单</a>
                                                <router-link to="/index/logistics">查看物流</router-link>
                                              </div>
                                              <div class="six-bb-ss six-bb-sh flex-center">
                                                 <router-link to="/index/comments" class="six-sh">
                                                  <button class="six-sh-qr">立即评价</button>
                                                </router-link>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </el-tab-pane>
                                  </el-tabs>
                                </div>
                              </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" name="six">
                            <span slot="label" class="tabs-xc-ab">退款售后</span>
                            <div class="tabs-seven">
                              <div class="seven-main">
                                <h4>退换货管理
                                <span>/ Return Handling</span>
                              </h4>
                              <hr>
                              </div>
                              <div class="seven-main-aa">
                                <div class="six-aa-pp">
                                    <ul>
                                      <li class="six-pp-sp">商品</li>
                                      <li class="six-pp-dj">退款金额</li>
                                      <li class="six-pp-time">申请时间</li>
                                      <li class="six-pp-hj">服务类型</li>
                                      <li class="six-pp-jy">服务状态</li>
                                      <li class="six-pp-jc">交易操作</li>
                                    </ul>
                                </div>
                                <div class="six-aa-oo">
                                        <ul>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000003</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(3).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-time flex-center">
                                                <span>2020-03-20 18:00:30</span>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p class="six-bb-tuik " style="color:red;">仅退款</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#" class="" style="color:#00CC00;">退款成功</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-sh flex-center">
                                                 <a href="#" class="" style="color:red;">
                                                  服务详情
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000004</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(2).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥258</span>
                                              </div>
                                              <div class="six-bb-time flex-center">
                                                <span>2020-03-20 18:00:30</span>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p class="six-bb-tuik" style="color:red;">退货</p>
                                                <p class="six-bb-tuik" style="color:red;">退款</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#" style="color:#00CC00;">退货成功</a>
                                                <a href="#" style="color:#00CC00;">退款成功</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-sh flex-center">
                                                 <a href="#" class="" style="color:red;">
                                                  服务详情
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="six-li">
                                            <div class="six-li-aa">
                                              <el-checkbox>
                                                <p class="six-aa-p">
                                                  <span>2020-03-20</span>
                                                  <span>订单号：</span>
                                                  <span>20200320000004</span>
                                                </p>
                                              </el-checkbox>
                                              <a href="#" class="six-aa-a">
                                                删除订单
                                              </a>
                                            </div>
                                            <div class="six-li-bb">
                                              <div class="six-bb-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(3).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <span>￥69.9</span>
                                              </div>
                                              <div class="six-bb-time flex-center">
                                                <span>2020-03-20 18:00:30</span>
                                              </div>
                                              <div class="six-bb-ss six-bb-fy flex-center">
                                                <p class="six-bb-tuik" style="color:red;">仅退款</p>
                                              </div>
                                              <div class="six-bb-ss flex-center">
                                                <a href="#" style="color:black;">退款失败</a>
                                              </div>
                                              <div class="six-bb-ss six-bb-sh flex-center">
                                                 <a href="#" class="" style="color:red;">
                                                  服务详情
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                </div>
                              </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" disabled>
                            <span slot="label" class="tabs-xc-ab" style="color:black;"><i class="el-icon-suitcase-1"></i> 我的福利</span>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" name="seven">
                            <span slot="label" class="tabs-xc-ab">优惠劵</span>
                            <div class="tabs-eight">
                              <div class="eight-main">
                                <h4>优惠劵
                                  <span>/ Coupon</span>
                                </h4>
                                <hr>
                                <div class="eight-main-aa">
                                  <el-tabs v-model="couponName" @tab-click="handleClick">
                                    <el-tab-pane label="可用优惠卷" name="first">
                                      <div class="eight-aa-mm">
                                        <ul>
                                          <li>
                                            <div class="eight-li-banner bg-color-ky">
                                              <p class="eight-ba-pr ">￥99</p>
                                              <p class="eight-ba-man">[消费满<span>199元</span>可用]</p>
                                              <p class="eight-ba-time p-font-color">2020-03-20 至 2020-04-20</p>
                                            </div>
                                            <div class="eight-li-footer">
                                              <p class="eight-fo-no p-font-color">
                                                <span>券编号：</span>
                                                <span>00000001</span>
                                              </p>
                                              <div class="eight-fo-but">
                                                <a href="#" class="eight-but-a1">
                                                  <button class="eight-but-b1">立即使用</button>
                                                </a>
                                                <a href="#" class="eight-but-a2">
                                                  <button class="eight-but-b2">删除</button>
                                                </a>
                                                
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <img src="../../images/user/youhui-4.png" alt="" class="eight-li-img">
                                            <div class="eight-li-banner bg-color-ky">
                                              <p class="eight-ba-pr ">￥99</p>
                                              <p class="eight-ba-man">[消费满<span>199元</span>可用]</p>
                                              <p class="eight-ba-time p-font-color">2020-03-20 至 2020-04-20</p>
                                            </div>
                                            <div class="eight-li-footer">
                                              <p class="eight-fo-no p-font-color">
                                                <span>券编号：</span>
                                                <span>00000001</span>
                                              </p>
                                              <div class="eight-fo-but">
                                                <a href="#" class="eight-but-a1">
                                                  <button class="eight-but-b1">立即使用</button>
                                                </a>
                                                <a href="#" class="eight-but-a2">
                                                  <button class="eight-but-b2">删除</button>
                                                </a>
                                                
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div class="eight-li-banner bg-color-ky">
                                              <p class="eight-ba-pr ">运费券</p>
                                              <p class="eight-ba-man">[不含偏远地区]</p>
                                              <p class="eight-ba-time p-font-color">2020-03-20 至 2020-04-20</p>
                                            </div>
                                            <div class="eight-li-footer">
                                              <p class="eight-fo-no p-font-color">
                                                <span>券编号：</span>
                                                <span>00000002</span>
                                              </p>
                                              <div class="eight-fo-but">
                                                <a href="#" class="eight-but-a1">
                                                  <button class="eight-but-b1">立即使用</button>
                                                </a>
                                                <a href="#" class="eight-but-a2">
                                                  <button class="eight-but-b2">删除</button>
                                                </a>
                                                
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="已用优惠劵" name="second">
                                      <div class="eight-aa-mm">
                                        <ul>
                                          <li>
                                            <img src="../../images/user/youhui-3.png" alt="" class="eight-li-img">
                                            <div class="eight-li-banner bg-color-ky">
                                              <p class="eight-ba-pr ">￥99</p>
                                              <p class="eight-ba-man">[消费满<span>199元</span>可用]</p>
                                              <p class="eight-ba-time p-font-color">2020-03-20 至 2020-04-20</p>
                                            </div>
                                            <div class="eight-li-footer">
                                              <p class="eight-fo-no p-font-color">
                                                <span>券编号：</span>
                                                <span>00000001</span>
                                              </p>
                                              <div class="eight-fo-but">
                                                <a href="#" class="eight-but-a1">
                                                  <button class="eight-but-b1">立即使用</button>
                                                </a>
                                                <a href="#" class="eight-but-a2">
                                                  <button class="eight-but-b2">删除</button>
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="过期优惠劵" name="three">
                                      <div class="eight-aa-mm">
                                        <ul>
                                          <li>
                                            <img src="../../images/user/youhui-1.png" alt="" class="eight-li-img">
                                            <div class="eight-li-banner bg-color-ky">
                                              <p class="eight-ba-pr ">￥99</p>
                                              <p class="eight-ba-man">[消费满<span>199元</span>可用]</p>
                                              <p class="eight-ba-time p-font-color">2020-03-20 至 2020-04-20</p>
                                            </div>
                                            <div class="eight-li-footer">
                                              <p class="eight-fo-no p-font-color">
                                                <span>券编号：</span>
                                                <span>00000001</span>
                                              </p>
                                              <div class="eight-fo-but">
                                                <a href="#" class="eight-but-a1">
                                                  <button class="eight-but-b1">立即使用</button>
                                                </a>
                                                <a href="#" class="eight-but-a2">
                                                  <button class="eight-but-b2">删除</button>
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <img src="../../images/user/youhui-2.png" alt="" class="eight-li-img">
                                            <div class="eight-li-banner bg-color-ky">
                                              <p class="eight-ba-pr ">￥99</p>
                                              <p class="eight-ba-man">[消费满<span>199元</span>可用]</p>
                                              <p class="eight-ba-time p-font-color">2020-03-20 至 2020-04-20</p>
                                            </div>
                                            <div class="eight-li-footer">
                                              <p class="eight-fo-no p-font-color">
                                                <span>券编号：</span>
                                                <span>00000001</span>
                                              </p>
                                              <div class="eight-fo-but">
                                                <a href="#" class="eight-but-a1">
                                                  <button class="eight-but-b1">立即使用</button>
                                                </a>
                                                <a href="#" class="eight-but-a2">
                                                  <button class="eight-but-b2">删除</button>
                                                </a>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </el-tab-pane>
                                  </el-tabs>
                                </div>
                              </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" name="eight">
                            <span slot="label" class="tabs-xc-ab"> 红包</span>
                            <div class="tabs-nine">
                              <div class="nine-main">
                                <h4>红包
                                  <span>/ Red envelopes</span>
                                </h4>
                                <hr>
                                <div class="nine-main-aa">
                                  <el-tabs v-model="hotName" @tab-click="handleClick">
                                    <el-tab-pane label="可用红包" name="first">
                                      <div class="nine-aa">
                                        <div class="nine-aa-nav">
                                          <ul>
                                            <li class="nav-hb nav-nav">红包名称/来源</li>
                                            <li class="nav-je nav-nav">可用金额</li>
                                            <li class="nav-qi nav-nav">有效期</li>
                                            <li class="nav-gz nav-nav">使用规则</li>
                                            <li class="nav-zt nav-nav">状态</li>
                                          </ul>
                                        </div>
                                        <div class="nine-aa-banner">
                                          <ul>
                                            <li class="banner-mc">
                                              <div class="banner-mc-img flex-center">
                                                <img src="../../images/user/hb-1.jpg" alt="">
                                              </div>
                                              <div class="banner-mc-word flex-center">
                                                支付宝专享红包
                                              </div>
                                            </li>
                                            <li class="banner-nr flex-center">
                                              <span>￥0.24</span>
                                            </li>
                                            <li class="banner-nr flex-center banner-time">
                                              <span>2020-03-21</span>
                                              至
                                              <span>2020-03-22</span>
                                            </li>
                                            <li class="banner-nr flex-center">
                                              <p class="banner-nr-aa">仅限支付宝app购买实物商品</p>
                                              <p class="banner-nr-gz">
                                                <a href="#">使用规则</a>
                                              </p>
                                            </li>
                                            <li class="banner-nr flex-center">
                                              <a href="#" class="banner-nr-mx">查看明细</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="已用红包" name="second">
                                      <div class="nine-aa">
                                        <div class="nine-aa-nav">
                                          <ul>
                                            <li class="nav-hb nav-nav">红包名称/来源</li>
                                            <li class="nav-je nav-nav">可用金额</li>
                                            <li class="nav-qi nav-nav">有效期</li>
                                            <li class="nav-gz nav-nav">使用规则</li>
                                            <li class="nav-zt nav-nav">状态</li>
                                          </ul>
                                        </div>
                                        <div class="nine-aa-banner">
                                          <ul>
                                            <li class="banner-mc">
                                              <div class="banner-mc-img flex-center">
                                                <img src="../../images/user/hb-2.jpg" alt="">
                                              </div>
                                              <div class="banner-mc-word flex-center">
                                                支付宝专享红包
                                              </div>
                                            </li>
                                            <li class="banner-nr flex-center">
                                              <span>￥0.24</span>
                                            </li>
                                            <li class="banner-nr flex-center banner-time">
                                              <span>2020-03-21</span>
                                              至
                                              <span>2020-03-22</span>
                                            </li>
                                            <li class="banner-nr flex-center">
                                              <p class="banner-nr-aa">仅限支付宝app购买实物商品</p>
                                              <p class="banner-nr-gz">
                                                <a href="#">使用规则</a>
                                              </p>
                                            </li>
                                            <li class="banner-nr flex-center">
                                              <p class="banner-nr-zt">已使用</p>
                                              <a href="#" class="banner-nr-mx">查看明细</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="过期红包" name="third">
                                      <div class="nine-aa">
                                        <div class="nine-aa-nav">
                                          <ul>
                                            <li class="nav-hb nav-nav">红包名称/来源</li>
                                            <li class="nav-je nav-nav">可用金额</li>
                                            <li class="nav-qi nav-nav">有效期</li>
                                            <li class="nav-gz nav-nav">使用规则</li>
                                            <li class="nav-zt nav-nav">状态</li>
                                          </ul>
                                        </div>
                                        <div class="nine-aa-banner">
                                          <ul>
                                            <li class="banner-mc">
                                              <div class="banner-mc-img flex-center">
                                                <img src="../../images/user/hb-2.jpg" alt="">
                                              </div>
                                              <div class="banner-mc-word flex-center">
                                                支付宝专享红包
                                              </div>
                                            </li>
                                            <li class="banner-nr flex-center">
                                              <span>￥0.24</span>
                                            </li>
                                            <li class="banner-nr flex-center banner-time">
                                              <span>2020-03-21</span>
                                              至
                                              <span>2020-03-22</span>
                                            </li>
                                            <li class="banner-nr flex-center">
                                              <p class="banner-nr-aa">仅限支付宝app购买实物商品</p>
                                              <p class="banner-nr-gz">
                                                <a href="#">使用规则</a>
                                              </p>
                                            </li>
                                            <li class="banner-nr flex-center">
                                              <p class="banner-nr-zt">已过期</p>
                                              <a href="#" class="banner-nr-mx">查看明细</a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </el-tab-pane>
                                  </el-tabs>
                                </div>
                              </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" disabled>
                            <span slot="label" class="tabs-xc-ab" style="color:black;"><i class="el-icon-shopping-bag-1"></i> 我的小窝</span>
                            我的行程
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" name="nine">
                            <span slot="label" class="tabs-xc-ab">收藏</span>
                            <div class="tabs-ten">
                              <div class="ten-mian">
                                <h4>收藏
                                  <span>/ Collection</span>
                                </h4>
                                <hr>
                              </div>
                              <div class="ten-main-aa">
                                <el-tabs v-model="collectionName" @tab-click="handleClick">
                                  <el-tab-pane label="全部收藏" name="first">
                                    <div class="ten-first">
                                      <div class="ten-first-aa">
                                        <ul class="flex-start">
                                          <li class="ten-li" v-for="it in collection" :key="it.id" @click="goInfo(it.goods_id)">
                                            <a href="#" class="ten-li-aq">
                                              <img :src="it.url" alt="" class="ten-aq-img">
                                            </a>
                                            <a href="javascript:;" @click="delColl(it.id)" class="ten-li-aw"><i class="el-icon-delete-solid"></i></a>
                                            <div class="ten-li-pq flex-between">
                                              <span><a href="#">找相似</a></span>
                                              <span><a href="#">加入购物车</a></span>
                                            </div>
                                            <div class="ten-li-div">
                                              <a href="#" class="ten-div-a">{{it.title}}</a>
                                              <p class="ten-div-p1">
                                                <span class="ten-p1-s1">￥{{it.price}}</span>
                                                <span class="ten-p1-s2">￥{{it.dis_price}}</span>
                                              </p>
                                              <p class="ten-div-p2 flex-between">
                                                <span>月销：<span>{{it.purchase}}</span></span>
                                                <span>收藏：<span>{{it.collection}}</span>人</span>
                                              </p>
                                            </div>
                                          </li>
                                          <li class="ten-li">
                                            <div class="ten-li-xx">
                                              <img src="../../images/user/shixiao-1.png" alt="" class="">
                                            </div>
                                            <a href="#" class="ten-li-aq">
                                              <img src="../../images/user/goods-1-(2).jpg" alt="" class="ten-aq-img">
                                            </a>
                                            <a href="#" class="ten-li-aw"><i class="el-icon-delete-solid"></i></a>
                                            <div class="ten-li-pq flex-between">
                                              <span><a href="#">找相似</a></span>
                                              <span><a href="#">加入购物车</a></span>
                                            </div>
                                            <div class="ten-li-div">
                                              <a href="#" class="ten-div-a">每日坚果混合坚果干果仁组合大礼包30小包</a>
                                              <p class="ten-div-p1">
                                                <span class="ten-p1-s1">￥69.9</span>
                                                <span class="ten-p1-s2">￥99.9</span>
                                              </p>
                                              <p class="ten-div-p2 flex-between">
                                                <span>月销：<span>699</span></span>
                                                <span>收藏：<span>555</span>人</span>
                                              </p>
                                            </div>
                                          </li>
                                          <li class="ten-li">
                                            <a href="#" class="ten-li-aq">
                                              <img src="../../images/user/goods-1-(2).jpg" alt="" class="ten-aq-img">
                                            </a>
                                            <a href="#" class="ten-li-aw"><i class="el-icon-delete-solid"></i></a>
                                            <div class="ten-li-pq flex-between">
                                              <span><a href="#">找相似</a></span>
                                              <span><a href="#">找同款</a></span>
                                            </div>
                                            <div class="ten-li-div">
                                              <a href="#" class="ten-div-a">每日坚果混合坚果干果仁组合大礼包30小包</a>
                                              <p class="ten-div-p1">
                                                <span><img src="../../images/user/jiangjia.png" alt="" class="ten-pi-img"></span>
                                                <span class="ten-p1-s1">￥69.9</span>
                                                <span class="ten-p1-s2">￥99.9</span>
                                              </p>
                                              <p class="ten-div-p2 flex-between">
                                                <span>月销：<span>699</span></span>
                                                <span>收藏：<span>555</span>人</span>
                                              </p>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </el-tab-pane>
                                  <el-tab-pane label="降价商品" name="second">
                                    <div class="ten-first">
                                      <div class="ten-first-aa">
                                        <ul class="flex-start">
                                          <li class="ten-li">
                                            <a href="#" class="ten-li-aq">
                                              <img src="../../images/user/goods-1-(2).jpg" alt="" class="ten-aq-img">
                                            </a>
                                            <a href="#" class="ten-li-aw"><i class="el-icon-delete-solid"></i></a>
                                            <div class="ten-li-pq flex-between">
                                              <span><a href="#">找相似</a></span>
                                              <span><a href="#">加入购物车</a></span>
                                            </div>
                                            <div class="ten-li-div">
                                              <a href="#" class="ten-div-a">每日坚果混合坚果干果仁组合大礼包30小包</a>
                                              <p class="ten-div-p1">
                                                <span><img src="../../images/user/jiangjia.png" alt="" class="ten-pi-img"></span>
                                                <span class="ten-p1-s1">￥69.9</span>
                                                <span class="ten-p1-s2">￥99.9</span>
                                              </p>
                                              <p class="ten-div-p2 flex-between">
                                                <span>月销：<span>699</span></span>
                                                <span>收藏：<span>555</span>人</span>
                                              </p>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </el-tab-pane>
                                  <el-tab-pane label="失效商品" name="third">
                                    <div class="ten-first">
                                      <div class="ten-first-aa">
                                        <ul class="flex-start">
                                          <li class="ten-li">
                                            <div class="ten-li-xx">
                                              <img src="../../images/user/shixiao-1.png" alt="" class="">
                                            </div>
                                            <a href="#" class="ten-li-aq">
                                              <img src="../../images/user/goods-1-(2).jpg" alt="" class="ten-aq-img">
                                            </a>
                                            <a href="#" class="ten-li-aw"><i class="el-icon-delete-solid"></i></a>
                                            <div class="ten-li-pq flex-between">
                                              <span><a href="#">找相似</a></span>
                                              <span><a href="#">加入购物车</a></span>
                                            </div>
                                            <div class="ten-li-div">
                                              <a href="#" class="ten-div-a">每日坚果混合坚果干果仁组合大礼包30小包</a>
                                              <p class="ten-div-p1">
                                                <span class="ten-p1-s1">￥69.9</span>
                                                <span class="ten-p1-s2">￥99.9</span>
                                              </p>
                                              <p class="ten-div-p2 flex-between">
                                                <span>月销：<span>699</span></span>
                                                <span>收藏：<span>555</span>人</span>
                                              </p>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </el-tab-pane>
                                </el-tabs>
                              </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" name="ten">
                            <span slot="label" class="tabs-xc-ab">足迹</span>
                            <div class="tabs-eleven">
                              <div class="eleven-main">
                                <h4>足迹
                                  <span>/ Footprint</span>
                                </h4>
                                <hr>
                              </div>
                              <div class="eleven-main-banner">
                                <div class="block">
                                  <el-timeline>
                                    <el-timeline-item timestamp="2020-03-22" placement="top">
                                      <el-card>
                                        <ul class="flex-start">
                                          <li class="ten-li">
                                            <a href="#" class="ten-li-aq">
                                              <img src="../../images/user/goods-1-(2).jpg" alt="" class="ten-aq-img">
                                            </a>
                                            <a href="#" class="ten-li-aw"><i class="el-icon-delete-solid"></i></a>
                                            <div class="ten-li-pq flex-between eleven-li-pq">
                                              <span><a href="#">找相似</a></span>
                                              <span><a href="#">加入购物车</a></span>
                                            </div>
                                            <div class="ten-li-div">
                                              <a href="#" class="ten-div-a">每日坚果混合坚果干果仁组合大礼包30小包</a>
                                              <p class="ten-div-p1">
                                                <span class="ten-p1-s1">￥69.9</span>
                                                <span class="ten-p1-s2">￥99.9</span>
                                              </p>
                                              <p class="ten-div-p2 flex-between">
                                                <span>月销：<span>699</span></span>
                                                <span>收藏：<span>555</span>人</span>
                                              </p>
                                            </div>
                                          </li>
                                          <li class="ten-li">
                                            <a href="#" class="ten-li-aq">
                                              <img src="../../images/user/goods-1-(2).jpg" alt="" class="ten-aq-img">
                                            </a>
                                            <a href="#" class="ten-li-aw"><i class="el-icon-delete-solid"></i></a>
                                            <div class="ten-li-pq flex-between eleven-li-pq">
                                              <span><a href="#">找相似</a></span>
                                              <span><a href="#">加入购物车</a></span>
                                            </div>
                                            <div class="ten-li-div">
                                              <a href="#" class="ten-div-a">每日坚果混合坚果干果仁组合大礼包30小包</a>
                                              <p class="ten-div-p1">
                                                <span class="ten-p1-s1">￥69.9</span>
                                                <span class="ten-p1-s2">￥99.9</span>
                                              </p>
                                              <p class="ten-div-p2 flex-between">
                                                <span>月销：<span>699</span></span>
                                                <span>收藏：<span>555</span>人</span>
                                              </p>
                                            </div>
                                          </li>
                                        </ul>
                                      </el-card>
                                    </el-timeline-item>
                                    <el-timeline-item timestamp="2020-03-21" placement="top">
                                      <el-card>
                                        <ul class="flex-start">
                                          <li class="ten-li">
                                            <a href="#" class="ten-li-aq">
                                              <img src="../../images/user/goods-1-(2).jpg" alt="" class="ten-aq-img">
                                            </a>
                                            <a href="#" class="ten-li-aw"><i class="el-icon-delete-solid"></i></a>
                                            <div class="ten-li-pq flex-between eleven-li-pq">
                                              <span><a href="#">找相似</a></span>
                                              <span><a href="#">加入购物车</a></span>
                                            </div>
                                            <div class="ten-li-div">
                                              <a href="#" class="ten-div-a">每日坚果混合坚果干果仁组合大礼包30小包</a>
                                              <p class="ten-div-p1">
                                                <span class="ten-p1-s1">￥69.9</span>
                                                <span class="ten-p1-s2">￥99.9</span>
                                              </p>
                                              <p class="ten-div-p2 flex-between">
                                                <span>月销：<span>699</span></span>
                                                <span>收藏：<span>555</span>人</span>
                                              </p>
                                            </div>
                                          </li>
                                        </ul>
                                      </el-card>
                                    </el-timeline-item>
                                    <el-timeline-item timestamp="2020-03-20" placement="top">
                                      <el-card>
                                        <ul class="flex-start">
                                          <li class="ten-li">
                                            <a href="#" class="ten-li-aq">
                                              <img src="../../images/user/goods-1-(2).jpg" alt="" class="ten-aq-img">
                                            </a>
                                            <a href="#" class="ten-li-aw"><i class="el-icon-delete-solid"></i></a>
                                            <div class="ten-li-pq flex-between eleven-li-pq">
                                              <span><a href="#">找相似</a></span>
                                              <span><a href="#">加入购物车</a></span>
                                            </div>
                                            <div class="ten-li-div">
                                              <a href="#" class="ten-div-a">每日坚果混合坚果干果仁组合大礼包30小包</a>
                                              <p class="ten-div-p1">
                                                <span class="ten-p1-s1">￥69.9</span>
                                                <span class="ten-p1-s2">￥99.9</span>
                                              </p>
                                              <p class="ten-div-p2 flex-between">
                                                <span>月销：<span>699</span></span>
                                                <span>收藏：<span>555</span>人</span>
                                              </p>
                                            </div>
                                          </li>
                                        </ul>
                                      </el-card>
                                    </el-timeline-item>
                                  </el-timeline>
                                </div>
                              </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" name="eleven">
                            <span slot="label" class="tabs-xc-ab">评价</span>
                            <div class="tabs-twelve">
                              <div class="twelve-main">
                                <h4>评价
                                  <span>/ Evaluate</span>
                                </h4>
                                <hr>
                              </div>
                              <div class="twelve-main-ban">
                                <div class="twelve-ban-nav">
                                  <ul class="flex-between">
                                    <li class="twelve-nav-sp">商品</li>
                                    <li class="twelve-nav-pj">评价内容</li>
                                    <li class="twelve-nav-cz">操作</li>
                                  </ul>
                                </div>
                                <div class="twelve-ban-bb">
                                  <ul>
                                    <li>
                                      <div class="six-li-bb">
                                              <div class="six-bb-sp twelve-nav-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(2).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="twelve-nav-pj">
                                                <p>宝贝非常漂亮，超级喜欢! ! !下次还要来买。就是物流太慢了，还要我自己去取快递,店家不考虑换个物流么?</p>
                                                <p>2020-3-22 15:45:25</p>
                                              </div>
                                              <div class="six-bb-sh flex-center twelve-nav-cz">
                                                <a href="#" class="six-sh">
                                                  <button class="six-sh-qr">删除评价</button>
                                                </a>
                                              </div>
                                            </div>
                                    </li>
                                    <li>
                                      <div class="six-li-bb">
                                              <div class="six-bb-sp twelve-nav-sp">
                                                <a href="#">
                                                  <img src="../../images/user/goods-1-(2).jpg" alt="" class="six-sp-left flex-center">
                                                  <div class="six-sp-right flex-center">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>口味：</span>
                                                      <span>你喜欢的</span>
                                                    </p>
                                                    <p>
                                                      <span>包装：</span>
                                                      <span>包装</span>
                                                    </p>
                                                  </div>
                                                </a>
                                              </div>
                                              <div class="twelve-nav-pj">
                                                <p>宝贝非常漂亮，超级喜欢! ! !下次还要来买。就是物流太慢了，还要我自己去取快递,店家不考虑换个物流么?</p>
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
                                                <p>2020-3-22 15:45:25</p>
                                              </div>
                                              <div class="six-bb-sh flex-center twelve-nav-cz">
                                                <a href="#" class="six-sh">
                                                  <button class="six-sh-qr">删除评价</button>
                                                </a>
                                              </div>
                                            </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane class="tabs-xc-aa" name="twelve">
                            <span slot="label" class="tabs-xc-ab">消息</span>
                            <div class="tabs-thirteen">
                              <h4>消息<span>/ News</span></h4>
                              <hr>
                              <el-tabs v-model="newsName" @tab-click="handleClick">
                                <el-tab-pane label="商城活动" name="first">
                                  <div class="thirteen-main">
                                    <ul class="flex-start">
                                      <li>
                                        <div class="thirt-main-top flex-between">
                                          <h4>每日新鲜事</h4>
                                          <a href="#"><i class="el-icon-delete-solid"></i></a>
                                        </div>
                                        <div class="thirt-main-banner">
                                          <img src="../../images/user/goods-1-(2).jpg" alt="">
                                        </div>
                                        <div class="thirt-main-bm">
                                          <router-link to="/index/user/newword">最特色的年货都在这儿快来国年货啦!</router-link>
                                        </div>
                                        <div class="thirt-main-footer">
                                          <router-link to="/index/user/newword" class="flex-between">
                                            <span>阅读全文</span>
                                            <span><i class="el-icon-d-arrow-right"></i></span>
                                          </router-link>
                                        </div>
                                      </li>
                                      <li>
                                        <div class="thirt-main-top flex-between">
                                          <h4>每日新鲜事</h4>
                                          <a href="#"><i class="el-icon-delete-solid"></i></a>
                                        </div>
                                        <div class="thirt-main-banner">
                                          <img src="../../images/user/goods-1-(2).jpg" alt="">
                                        </div>
                                        <div class="thirt-main-bm">
                                          <router-link to="/index/user/newword">最特色的年货都在这儿快来国年货啦!</router-link>
                                        </div>
                                        <div class="thirt-main-footer">
                                          <router-link to="/index/user/newword" class="flex-between">
                                            <span>阅读全文</span>
                                            <span><i class="el-icon-d-arrow-right"></i></span>
                                          </router-link>
                                        </div>
                                      </li>
                                      <li>
                                        <div class="thirt-main-top flex-between">
                                          <h4>每日新鲜事</h4>
                                          <a href="#"><i class="el-icon-delete-solid"></i></a>
                                        </div>
                                        <div class="thirt-main-banner">
                                          <img src="../../images/user/goods-1-(2).jpg" alt="">
                                        </div>
                                        <div class="thirt-main-bm">
                                          <router-link to="/index/user/newword">最特色的年货都在这儿快来国年货啦!</router-link>
                                        </div>
                                        <div class="thirt-main-footer">
                                          <router-link to="/index/user/newword" class="flex-between">
                                            <span>阅读全文</span>
                                            <span><i class="el-icon-d-arrow-right"></i></span>
                                          </router-link>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </el-tab-pane>
                                <el-tab-pane label="物流助手" name="second">
                                  <div class="thirteen-main">
                                    <ul class="flex-start">
                                      <li>
                                        <div class="thirt-main-top flex-between">
                                          <h4>订单已签收</h4>
                                          <a href="#"><i class="el-icon-delete-solid"></i></a>
                                        </div>
                                        <div class="thirt-li-two">
                                                <a href="#" class="thirt-two-a flex-between">
                                                  <img src="../../images/user/goods-1-(2).jpg" alt="" class="thirt-a-img">
                                                  <div class="flex-center thirt-a-div">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>快递单号：</span>
                                                      <span>202003210000001</span>
                                                    </p>
                                                  </div>
                                                </a>
                                        </div>
                                        <div class="thirt-main-footer">
                                          <a href="#" class="flex-between">
                                            <span>查看详情</span>
                                            <span><i class="el-icon-d-arrow-right"></i></span>
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </el-tab-pane>
                                <el-tab-pane label="交易信息" name="third">
                                  <div class="thirteen-main">
                                    <ul class="flex-start">
                                      <li>
                                        <div class="thirt-main-top flex-between">
                                          <h4>卖家已退款</h4>
                                          <a href="#"><i class="el-icon-delete-solid"></i></a>
                                        </div>
                                        <div class="thirt-li-two">
                                                <a href="#" class="thirt-two-a flex-between">
                                                  <img src="../../images/user/goods-1-(2).jpg" alt="" class="thirt-a-img">
                                                  <div class="flex-center thirt-a-div">
                                                    <p>良品铺子手剥松子218g坚果炒货巴西松子</p>
                                                    <p>
                                                      <span>快递单号：</span>
                                                      <span>202003210000001</span>
                                                    </p>
                                                  </div>
                                                </a>
                                        </div>
                                        <div class="thirt-main-footer">
                                          <a href="#" class="flex-between">
                                            <span>查看详情</span>
                                            <span><i class="el-icon-d-arrow-right"></i></span>
                                          </a>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </el-tab-pane>
                              </el-tabs>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
        <commentup></commentup>
        <commentfooter></commentfooter>
    </div>
</template>

<style src="../../assets/css/user.css"></style>
<style lang="css">
.thirteen-main ul li{
  width: 32%;
  margin-right: 2%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.thirteen-main ul li:nth-child(3n){
  margin-right: 0;
}
.thirt-main-top,.thirt-main-footer,.thirt-main-bm{
  padding: 8px;
}
.thirt-main-top h4{
  font-size: 14px;
}
.thirt-main-bm a,
.thirt-main-footer a span{
  color: black;
  font-size: 14px;
  font-weight: 700;
}
.thirt-main-footer{
  border-top: 1px solid #ccc;
}
.thirt-main-banner,.thirt-main-banner img{
  width: 100%;
  height: 250px;
}
.thirt-li-two,.thirt-two-a{
  width: 100%;
}
.thirt-two-a:hover{
  text-decoration: none;
  color: black;
}
.thirt-a-img{
  width: 30%;
  padding: 5px;
}
.thirt-a-div p{
  color: #333333;
}
.avatar-uploader .el-upload {
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.address-pca select{
  width: 32%;
  border: 1px solid #ccc!important;
}
.five-aa-li{
  margin-bottom: 10px;
}
input[type="file"][name='file']{
  display: none!important;
}
</style>

<script>
import { Message } from 'element-ui'
import moment from 'moment'
import commentaddress from "../components/address.vue"
import comment from "../components/top.vue"
import commentfooter from "../components/footer.vue"
import commentup from '../components/up.vue'
export default {
    components:{
        commentBox:comment,
        commentaddress:commentaddress,
        // commentcity:commentcity,
        commentfooter:commentfooter,
        commentup:commentup,
    },
    data() {
      return {
        id:this.$route.params.id,
        goodslist:[],
        collection:[],
        addresslist:[],
        userinfo:[],
        namelist:[],
        date:moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        date2:moment(new Date()).format("YYYY-MM-DD"),
        userlist:{
          id:'',
          name:'',
          gender:'',
          password:'',
          birthday:'',
          stats:'',
          time:'',
          phone:'',
          email:'',
          jieshao:''
        },
        user_id:'',
        imageUrl: 'src/images/ls/user-tx.jpg',
         checked: false,
        activeName: 'first',
        couponName: 'first',
        hotName: 'first',
        collectionName: 'first',
        newsName: 'first',
        tabsname:"first",
        //   左边导航
        tabPosition: 'left',
        address:{
          province:'',
          city:'',
          county:''
        },
        ruleForm: {
          name: '',
          phone:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          jieshao: ''
        },
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          jieshao: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
          ],
          nicheng: [
            { required: true, message: '请输入你的昵称', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          // phone: [
          //     { required: true, message: '请输入手机号码', trigger: 'blur' },
          //     // { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur' }
          // ],
          region: [
            { required: true, message: '请选择你的性别', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          jieshao: [
            { required: true, message: '请填写个人简介', trigger: 'blur' }
          ],
          // address:[
          //   { required: true, message: '请填写地址', trigger: 'blur' }
          // ],
          // address2:[
          //   { required: true, message: '请填写详细地址', trigger: 'blur' }
          // ]
        }
        }
    },
    created() {
      this.getCollection();
      this.getUser();
      this.getAddress();
      this.getLogin();
      this.getShoplist();
    },
    mounted() {
      this.$nextTick(function(){
        setTimeout(()=>{
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
        },1000)
      })
      
    },
    methods: {
      onSelected(data) {
            this.address.province = data.province.value
            this.address.city = data.city.value
            this.address.county = data.area.value
      },
      getShoplist(){
            this.$http.get("shopsui")
            .then(res=>{
                this.goodslist = res.body;
            })
        }, 
      getUser(){
        this.$http.get("login")
            .then(res=>{
              this.userinfo=res.body
            })
        if(sessionStorage.getItem("user_name") === null){
          this.namelogin='请先登录'
        }else{
          this.namelogin=sessionStorage.getItem("user_name");
        }
      },
      getLogin(){
        var userid=sessionStorage.getItem("user_id")
        console.log(userid)
        this.$http.get("login/user_login/"+userid)
            .then(res=>{
              this.namelist=res.body
              console.log(res.body)
              this.userlist.id = res.body.user_id
              this.userlist.name = res.body.user_name
              this.userlist.gender = res.body.user_gender
              this.userlist.password=res.body.user_password
              this.userlist.stats=res.body.user_stats
              this.userlist.time=res.body.user_time
              this.userlist.email=res.body.user_email
              this.userlist.birthday = res.body.birthday
              this.userlist.phone = res.body.user_phone
              this.userlist.jieshao = res.body.jieshao
              
            })
      },
      getCollection(){
        this.$http.get("collection")
            .then(res=>{
                    this.collection = res.body;
                    // console.log(res.body);
            })
      },
      getAddress(){
        this.$http.get("address")
            .then(res=>{
                    this.addresslist = res.body;
                    // console.log(res.body);
            })
      },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(ruleForm.name)
            this.$http.put("login/user_login",{
                user_id:this.userlist.id,
                user_name:this.ruleForm.name,
                user_gender:this.ruleForm.region,
                user_password:this.userlist.password,
                birthday:this.date2,
                user_stats:this.userlist.stats,
                user_time:this.date,
                user_phone:this.userlist.phone,
                user_email:this.userlist.email,
                jieshao:this.ruleForm.jieshao
            }).then({
              userlist:{
                  id:'',
                  name:'',
                  gender:'',
                  password:'',
                  birthday:'',
                  stats:'',
                  time:'',
                  phone:'',
                  email:'',
                  jieshao:''
                },
            })
            this.resetForm(formName);
            this.tuichu();
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      goInfo(id){
            this.$router.push({name:"goodsInfo",params:{id}})
        },
      tuichu(){
                sessionStorage.clear();
                // window.location.reload();
                    setTimeout(function(){
                       window.location.href='http://localhost:3000/#/index/login';
                    }, 500); 
            },
      // 添加地址
      onSubmit() {
        if(this.form.name == "" || this.form.phone == "" ){
          Message.success("填写地址不能为空！！！");
        }else{
          this.$http.post('address/addresses',{
          login_name:this.form.name,
          phone:this.form.phone,
          province:this.address.province,
          city:this.address.city,
          district:this.address.county,
          address:this.form.jieshao
        }).then(res=>{
          this.getAddress();
          this.form={
            name:'',
            jieshao:'',
            phone:''
          }
          this.address={
            province:'',
            city:'',
            county:''
          }
        })
          
        }
      },
      // 修改地址
      putclick(id){
        this.$http.get('address/addresses/'+id)
        .then(res=>{
          this.form.name=res.body.login_name,
          this.form.phone=res.body.phone,
          this.address.province=res.body.province,
          this.address.city=res.body.city,
          this.address.county=res.body.district,
          this.form.jieshao=res.body.address
        })
        setTimeout(() => {
          this.$http.delete('address/addresses/'+id)
          .then(result=>{
            this.getAddress(); 
          })
        }, 300);
      },
      // 删除地址
      delClick(id){
        var that = this
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '此操作将永久删除该地址, 是否继续? '),
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
                  this.$http.delete('address/addresses/'+id)
                    .then(result=>{
                      Message.success("删除成功");
                      this.getAddress(); 
                    })
                }, 300);
              }, 800);
            } else {
              done();
              Message.error("删除失败"); 
            }
          }
        })
      },
      // 取消键
      quxiao(){
        this.form={
            name:'',
            jieshao:'',
          }
          this.ruleForm={
            phone:''
          }
          this.address={
            province:'',
            city:'',
            county:''
          }
      },
      delColl(id){
        var that = this
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '此操作将该商品从收藏夹中删除, 是否继续? '),
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
                  this.$http.delete('collection/collections/'+id)
                    .then(result=>{
                      this.getCollection();
                    })
                }, 200);
              }, 500);
              Message.success("删除成功");
            } else {
              done();
              Message.success("删除失败");
            }
          }
        })
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      hongbao(){
        this.tabsname = "eight"
      },
      youhuijuan(){
        this.tabsname = "seven"
      },
      fukuan(){
        this.tabsname = "five"
        this.activeName="second"
      },
      fahuo(){
        this.tabsname = "five"
        this.activeName="third"
      },
      shouhuo(){
        this.tabsname = "five"
        this.activeName="fourth"
      },
      pingjia(){
        this.tabsname = "five"
        this.activeName="fiveth"
      },
      dingdan(){
        this.tabsname = "five"
        this.activeName="first"
      },
      tuihuan(){
        this.tabsname = "six"
      },
      dizhi(){
        this.tabsname = "four"
      },
      xiaoxi(){
        this.tabsname = "twelve"
      },
      grxx(){
        this.tabsname = "two"
      },
    },
}
</script>