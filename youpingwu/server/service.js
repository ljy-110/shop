const db = require("./mydb.js");

// 特别的查询
// 通过用户名查询
// exports.allname = (req,res)=>{
//     let loginname = req.params.user_name;
//     let sql = "select * from user_login where user_name = '?'";
//     let data = [loginname];
//     db.base(sql,data,(result)=>{
//        res.json(result[0]);
//     })
// }
// 商品表的增删查改
exports.allgoods = (_req,res)=>{
    let sql = "select * from goods";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}
exports.allshopsui = (_req,res)=>{
    let sql = "SELECT * FROM goods ORDER BY RAND();";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}

exports.addgoods=(req,res)=>{
    let info = req.body;
    let sql = "insert into goods set ?"
    // console.log(info);
    if(info.id==""||info.id){
        info.id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getgoodsById=(req,res)=>{
    let id = req.params.id;
    let sql = "select * from goods where id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editgoods=(req,res)=>{
    let info = req.body
    let sql = "update goods set name = ?,brand_id=?,class_id=?,price=?,discount_price=?,text=?,url=?,time=?,title=?,purchase=?,evaluate=?,collection=? where id =?";
    let data = [info.name,info.brand_id,info.class_id,info.price,info.discount_price,info.text,info.url,info.time,info.title,info.purchase,info.evaluate,info.collection,info.id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deletegoods=(req,res)=>{
    let id = req.params.id;
    let sql = "delete from goods where id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}
// 轮播表的增删查改
exports.alllunbo = (_req,res)=>{
    let sql = "select * from lunbo";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}

exports.addlunbo=(req,res)=>{
    let info = req.body;
    let sql = "insert into lunbo set ?"
    // console.log(info);
    if(info.lunbo_id==""||info.lunbo_id){
        info.lunbo_id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getlunboById=(req,res)=>{
    let id = req.params.lunbo_id;
    let sql = "select * from lunbo where lunbo_id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editlunbo=(req,res)=>{
    let info = req.body
    let sql = "update lunbo set lunbo_url=? where lunbo_id =?";
    let data = [info.lunbo_url,info.lunbo_id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deletelunbo=(req,res)=>{
    let id = req.params.lunbo_id;
    let sql = "delete from lunbo where lunbo_id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}
// 侧边栏的增删查改
exports.allsiderbar = (_req,res)=>{
    let sql = "select * from siderbar";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}

exports.addsiderbar=(req,res)=>{
    let info = req.body;
    let sql = "insert into siderbar set ?"
    // console.log(info);
    if(info.side_id==""||info.side_id){
        info.side_id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getsiderbarById=(req,res)=>{
    let id = req.params.side_id;
    let sql = "select * from siderbar where side_id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editsiderbar=(req,res)=>{
    let info = req.body
    let sql = "update siderbar set side_name=? where side_id =?";
    let data = [info.side_name,info.side_id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deletesiderbar=(req,res)=>{
    let id = req.params.side_id;
    let sql = "delete from siderbar where side_id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}
// 商品分类的增删查改
exports.allindex_class = (_req,res)=>{
    let sql = "select * from index_img_class";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}

exports.addindex_class=(req,res)=>{
    let info = req.body;
    let sql = "insert into index_img_class set ?"
    // console.log(info);
    if(info.id==""||info.id){
        info.id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getindex_classById=(req,res)=>{
    let id = req.params.id;
    let sql = "select * from index_img_class where id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editindex_class=(req,res)=>{
    let info = req.body
    let sql = "update index_img_class set class_no=? img_url=? price=? purchase=? describe=? evsluate=? collection=? where id =?";
    let data = [info.class_no,info.img_url,info.price,info.purchase,info.describe,info.evaluate,info.collection,info.id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deleteindex_class=(req,res)=>{
    let id = req.params.id;
    let sql = "delete from index_img_class where id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

// 品牌表的增删查改
exports.allbrands = (_req,res)=>{
    let sql = "select * from goods_brand";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}

exports.addbrands=(req,res)=>{
    let info = req.body;
    let sql = "insert into goods_brand set ?"
    // console.log(info);
    if(info.brand_id==""||info.brand_id){
        info.brand_id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getbrandsById=(req,res)=>{
    let id = req.params.id;
    let sql = "select * from goods_brand where brand_id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}
exports.getbrandById=(req,res)=>{
    let id = req.params.brand_id;
    let sql1 = "SELECT b.* from goods g,goods_brand b where g.brand_id=b.brand_id and g.id=?";
    let data = [id];
    db.base(sql1,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editbrands=(req,res)=>{
    let info = req.body
    let sql = "update goods_brand set brand_name=? brand_phone=? brand_logo=? brand_desc=? where brand_id =?";
    let data = [info.brand_name,info.brand_phone,info.brand_logo,info.brand_desc,info.brand_id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deletebrands=(req,res)=>{
    let id = req.params.id;
    let sql = "delete from goods_brand where brand_id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

// 参数表的增删查改
exports.allparameter = (_req,res)=>{
    let sql = "select * from goods_parameter";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}
exports.addparameter=(req,res)=>{
    let info = req.body;
    let sql = "insert into goods_parameter set ?"
    // console.log(info);
    if(info.par_id==""||info.par_id){
        info.par_id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getparameterById=(req,res)=>{
    let id = req.params.par_id;
    let sql = "select * from goods_parameter where par_id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editparameter=(req,res)=>{
    let info = req.body
    let sql = "update goods_parameter set par_no=? par_chan_no=? par_sup_address=? par_sup_phone=? par_baozhiqi=? par_chandi=? par_pack=? par_flavor=? par_weight=? par_url=? where par_id =?";
    let data = [info.par_no,info.par_chan_no,info.par_sup_address,info.par_sup_phone,info.par_baozhiqi,info.par_chandi,info.par_pack,info.par_flavor,info.par_weight,info.par_url,info.par_id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deleteparameter=(req,res)=>{
    let id = req.params.par_id;
    let sql = "delete from goods_brand where par_id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}
// 库存表的增删查改
exports.allstock = (_req,res)=>{
    let sql = "select * from goods_stock";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}
exports.addstock=(req,res)=>{
    let info = req.body;
    let sql = "insert into goods_stock set ?"
    // console.log(info);
    if(info.stock_id==""||info.stock_id){
        info.stock_id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getstockById=(req,res)=>{
    let id = req.params.stock_id;
    let sql = "select * from goods_stock where stock_id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editstock=(req,res)=>{
    let info = req.body
    let sql = "update goods_stock set goods_id=? stock_nub=? goods_nub=? where stock_id =?";
    let data = [info.goods_id,info.stock_nub,info.goods_nub,info.stock_id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deletestock=(req,res)=>{
    let id = req.params.stock_id;
    let sql = "delete from goods_stock where stock_id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}
// 分类表的增删查改
exports.allshopclass = (_req,res)=>{
    let sql = "select * from goods_class";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}
exports.addshopclass=(req,res)=>{
    let info = req.body;
    let sql = "insert into goods_class set ?"
    // console.log(info);
    if(info.class_id==""||info.class_id){
        info.class_id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getshopclassById=(req,res)=>{
    let id = req.params.class_id;
    let sql = "SELECT c.* from goods g,goods_class c where g.class_id=c.class_id and g.id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editshopclass=(req,res)=>{
    let info = req.body
    let sql = "update goods_class set class_name=? where class_id =?";
    let data = [info.class_name,info.class_id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deleteshopclass=(req,res)=>{
    let id = req.params.class_id;
    let sql = "delete from goods_class where class_id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}
// 购物车表的增删查改
exports.allshopcar = (_req,res)=>{
    let sql = "select * from shop_car";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}
exports.addshopcar=(req,res)=>{
    let info = req.body;
    let sql = "insert into shop_car set ?"
    // console.log(info);
    if(info.goods_id==""||info.goods_id){
        info.goods_id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getshopcarById=(req,res)=>{
    let id = req.params.id;
    let sql = "select * from shop_car where id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editshopcar=(req,res)=>{
    let info = req.body
    let sql = "update shop_car set user_id=? goods_id=? goods_num=? price=? add_time=? where id =?";
    let data = [info.user_id,info.goods_id,info.goods_num,info.price,info.add_time,info.id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deleteshopcar=(req,res)=>{
    let id = req.params.id;
    let sql = "delete from shop_car where id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}
// 用户表的增删查改
exports.alllogin=(_req,res)=>{
    let sql = "select * from user_login";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}
exports.addlogin=(req,res)=>{
    let info = req.body;
    let sql = "insert into user_login set ?"
    // console.log(info);
    if(info.user_id==""||info.user_id){
        info.user_id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getloginById=(req,res)=>{
    let id = req.params.user_id;
    let sql = "select * from user_login where user_id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editlogin=(req,res)=>{
    let info = req.body
    let sql = "update user_login set user_name=?, user_gender=?, user_password=?, birthday=?, user_stats=?, user_time=?, user_phone=?, user_email=?, jieshao=? where user_id =?";
    let data = [info.user_name,info.user_gender,info.user_password,info.birthday,info.user_stats,info.user_time,info.user_phone,info.user_email,info.jieshao,info.user_id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deletelogin=(req,res)=>{
    let id = req.params.user_id;
    let sql = "delete from user_login where user_id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}
// 收藏夹表的增删查改
exports.allcollection = (_req,res)=>{
    let sql = "select * from collection";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}
exports.addcollection=(req,res)=>{
    let info = req.body;
    let sql = "insert into collection set ?"
    // console.log(info);
    if(info.id==""||info.id){
        info.id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getcollectionById=(req,res)=>{
    let id = req.params.id;
    let sql = "select * from collection where id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editcollection=(req,res)=>{
    let info = req.body
    let sql = "update collection set user_id=?,goods_id=?,price=?,dis_price=?,url=?,time=?,title=?,purchase=?,evaluate=?,collection=?,zhuantai=? where id =?";
    let data = [info.user_id,info.goods_id,info.price,info.dis_price,info.url,info.time,info.title,info.purchase,info.evaluate,info.collection,info.zhuantai,info.id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deletecollection=(req,res)=>{
    let id = req.params.id;
    let sql = "delete from collection where id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}
// 地址表的增删查改
exports.alladdress = (_req,res)=>{
    let sql = "select * from address";
    db.base(sql,null,(result)=>{
        res.json(result)
    })
}
exports.addaddress=(req,res)=>{
    let info = req.body;
    let sql = "insert into address set ?"
    // console.log(info);
    if(info.id==""||info.id){
        info.id = undefined;
    }
    db.base(sql,info,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.getaddressById=(req,res)=>{
    let id = req.params.id;
    let sql = "select * from address where id = ?";
    let data = [id];
    db.base(sql,data,(result)=>{
       res.json(result[0]);
    })
}

exports.editaddress=(req,res)=>{
    let info = req.body
    let sql = "update address set login_name=?,phone=?,zip=?,province=?,city=?,district=?,address=? where id =?";
    let data = [info.login_name,info.phone,info.zip,info.province,info.city,info.district,info.address,info.id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

exports.deleteaddress=(req,res)=>{
    let id = req.params.id;
    let sql = "delete from address where id =?";
    let data = [id];
    db.base(sql,data,(result)=>{
        if(result.affectedRows>0){
            res.json({flag:1})
        }else{
            res.json({flag:0})
        }
    })
}

