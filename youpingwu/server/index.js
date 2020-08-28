// 入口文件 
//1.导入相应模块
const express = require('express');
const path = require('path');
// const template = require('art-template');
const bodyParser = require('body-parser');

const router =require('./router.js');

const app = express();

//2.启动静态资源服务
app.use("/www",express.static(path.join(__dirname,"public")));

//4.处理post请求的参数
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//处理json格式的参数

app.all('*', (req, res, next) => {
    //设置允许跨域响应报文头
    //设置跨域
    // 启用 Node 服务器端的 cors 跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "*");
    // res.setheader('Content-Type', 'application/x-www-form-urlencoded');
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    next();
  });

//5.配置路由
app.use(router);

//6.启动服务器
app.listen(8080,()=>{
    console.log("running....");
})