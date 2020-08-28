const express= require("express");
const router = express.Router();

const service = require("./service.js");

//提供所有 列表
router.get("/good",service.allgoods);
router.get("/lunbos",service.alllunbo);
router.get("/side",service.allsiderbar);
router.get("/indexclass",service.allindex_class);
router.get("/brands",service.allbrands);
router.get("/brand",service.allbrands);
router.get("/parameter",service.allparameter);
router.get("/stock",service.allstock);
router.get("/shopclass",service.allshopclass);
router.get("/shopsui",service.allshopsui);
router.get("/shopcar",service.allshopcar);
router.get("/login",service.alllogin);
router.get("/collection",service.allcollection);
router.get("/address",service.alladdress);

// 特别的查询
// router.get("/username/:user_name",service.allname);

//添加提交数据
router.post("/good/goods",service.addgoods);
router.post("/lunbos/lunbo",service.addlunbo);
router.post("/side/siderbar",service.addsiderbar);
router.post("/indexclass/index_img_class",service.addindex_class);
router.post("/brands/goods_brand",service.addbrands);
router.post("/parameter/parameters",service.addparameter);
router.post("/stock/stocks",service.addstock);
router.post("/shopclass/shopclasses",service.addshopclass);
router.post("/shopcar/shop_car",service.addshopcar);
router.post("/login/user_login",service.addlogin);
router.post("/collection/collections",service.addcollection);
router.post("/address/addresses",service.addaddress);
// router.get("/shopsui/goods",service.addshopsuiclass);


//编辑时候根据id去查询
router.get("/good/goods/:id",service.getgoodsById)
router.get("/lunbos/lunbo/:lunbo_id",service.getlunboById)
router.get("/side/siderbar/:side_id",service.getsiderbarById)
router.get("/indexclass/index_img_class/:id",service.getindex_classById)
router.get("/brands/goods_brand/:brand_id",service.getbrandsById)
router.get("/brand/goods_brand/:brand_id",service.getbrandById)
router.get("/parameter/parameters/:par_id",service.getparameterById);
router.get("/stock/stocks/:stock_id",service.getstockById);
router.get("/shopclass/shopclasses/:class_id",service.getshopclassById);
router.get("/shopcar/shop_car/:id",service.getshopcarById);
router.get("/login/user_login/:user_id",service.getloginById);
router.get("/collection/collections/:id",service.getcollectionById);
router.get("/address/addresses/:id",service.getaddressById);
// router.get("/shopcar/shop_car/:car_id",service.getshopcarById);
// router.get("/shopsui/goods/:id",service.getshopsuiById)


//提交编辑的数据
router.put("/good/goods",service.editgoods);
router.put("/lunbos/lunbo",service.editlunbo);
router.put("/side/siderbar",service.editsiderbar);
router.put("/indexclass/index_img_class",service.editindex_class);
router.put("/brands/goods_brand",service.editbrands);
router.put("/parameter/parameters",service.editparameter);
router.put("/stock/stocks",service.editstock);
router.put("/shopclass/shopclasses",service.editshopclass);
router.put("/shopcar/shop_car",service.editshopcar);
router.put("/login/user_login",service.editlogin);
router.put("/collection/collections",service.editcollection);
router.put("/address/addresses",service.editaddress);

//删除
router.delete("/good/goods/:id",service.deletegoods);
router.delete("/lunbos/lunbo/:lunbo_id",service.deletelunbo);
router.delete("/side/siderbar/:side_id",service.deletesiderbar);
router.delete("/indexclass/index_img_class/:id",service.deleteindex_class);
router.delete("/brands/goods_brand/:brand_id",service.deletebrands);
router.delete("/parameter/parameters/:par_id",service.deleteparameter);
router.delete("/stock/stocks/:stock_id",service.deletestock);
router.delete("/shopclass/shopclasses/:class_id",service.deleteshopclass);
router.delete("/shopcar/shop_car/:id",service.deleteshopcar);
router.delete("/collection/collections/:id",service.deletecollection);
router.delete("/address/addresses/:id",service.deleteaddress);
module.exports = router;