//导入路由模块
const path = require('path');
var webpack = require('webpack');

//引入vue-loader的指令
const VueLoaderPlugin = require('vue-loader/lib/plugin')
/*
    导入在内存中生成html页面的插件
    只要是插件，都一定要放到plugins节点
    这个插件起了两个作用：
        1.自动在磁盘中根据指定页面生成一个内存的页面
        2.自动把打包好的bundle.js追加到页面中去
*/
const htmlWebpackPlugin= require('html-webpack-plugin')

// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，
//并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
    entry: path.resolve(__dirname, './src/main.js'), // 项目入口文件
    output: { // 配置输出选项
        path: path.resolve(__dirname, 'dist'), // 配置输出的路径
        filename: 'bundle.js' // 配置输出的文件名
    },
    plugins:[//配置插件的节点
        new htmlWebpackPlugin({//创建一个在内存中生成 HTML 页面的插件
            template:path.join(__dirname,"./src/index.html"),//指定模板页面，会根据该指定页面的路径生成内存中的页面
            filename:"index.html",//指定生成在内存中页面的名称
            favicon: 'src/logo.ico'
        }),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",  //之前之所以报错是因为把这里的jQuery 写成了jquery
        }),
        new VueLoaderPlugin()
    ],
    module:{//这个节点，是用于加载第三方的模块的 加载器
        rules:[//用正则来匹配我们css路径
            {test:  /\.css$/,use:['style-loader',"css-loader"]},
            //可以通过limit指定进行base编码的图片大小，只有小于指定字节的图片进行base64编码
            //limit 给定的值，是图片的大小，单位是byte，如果我们引用的图片大于或者等于给定limit的值，则不会被转换为base64格式的字符串。如果小于给定limit的值，则会被转换为base64的字符串
            {test:  /\.(png|jpg|gif)$/,use:[{
                    loader:'url-loader',
                    loader:"file-loader",
                    options:{esModule:false}}
            ]},
            //处理字体文件的loader
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test:  /\.vue$/,use:'vue-loader'}//处理/vue文件的loader
        ]

    },
    resolve:{
        alias:{//修改Vue被导入时候的包的路径
            //"vue$":"vue/dist/vue.js"
        }
    },
   
}

