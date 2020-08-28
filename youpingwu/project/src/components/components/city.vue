<template>
  <div style="display: flex">
    <el-select  v-model="caddress.sheng" style="flex: 1;" placeholder="请选择省份" size="small" @change="getCityData">
      <el-option
        v-for="item in addressArray"
        :key="item.areacode"
        :label="item.areaname"
        :value="item.areaname"
      >
      </el-option>
    </el-select>
    <el-select  v-model="caddress.shi" style="flex: 1;margin-left: 10px" placeholder="请选择市区" size="small"
               @change="getAreaData">
      <el-option
        v-for="item in cityArray"
        :key="item.areacode"
        :label="item.areaname"
        :value="item.areaname">
      </el-option>
    </el-select>
    <el-select  v-model="caddress.qu" style="flex: 1;margin-left: 10px" placeholder="请选择县" size="small"
               @change="onAreaChanged">
      <el-option
        v-for="item in areaArray"
        :key="item.areacode"
        :label="item.areaname"
        :value="item.areaname">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  import axios from 'axios'
  // 使用说明：v-model时，必须传带有带有省，市，区拼音的字段

  export default {
    name: "city",
    //通过 model 选项配置子组件接收的 prop 名以及派发的事件名
    model: {
      prop: 'caddress',
      event: 'change',
    },
    props: {
      caddress: {
        type: Object,
      },
    },
    data() {
      return {
        areaJson: '../../assets/json/address.json',
        addressArray: [],//所有数据
        cityArray: [],
        areaArray: [],
      }
    },
    created() {
      this.getAddressData();
    },
    methods: {
      getAddressData() {
        var that = this
        axios.get(that.areaJson).then(function (response) {
          if (response.status === 200) {
            //获取地址
            that.addressArray = response.data.data;
            //默认值赋值获取城市数组
            if(that.caddress.sheng){
              for (let ad of that.addressArray) {
                if (ad.areaname === that.caddress.sheng) {
                  that.cityArray = ad.subarea;
                  //---
                  //默认赋值获取区域数组
                  if(that.caddress.shi){
                    for (let area of that.cityArray) {
                      if (area.areaname === that.caddress.shi) {
                        that.areaArray = area.subarea;
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
        })
      },
      //选择省份
      getCityData(val) {
        console.log("AAA",this.caddress);
        //清空市，和区
        this.caddress.shi='';
        this.caddress.qu='';
        this.$emit('change', this.caddress);//发送改变
        for (let ad of this.addressArray) {
          if (ad.areaname === val) {
            this.cityArray = ad.subarea;
            return
          }
        }
      },
      getAreaData(val) {
        console.log("BBB",this.caddress);
        //清空区
        this.caddress.qu='';
        this.$emit('change', this.caddress);//发送改变
        for (let area of this.cityArray) {
          if (area.areaname === val) {
            this.areaArray = area.subarea;
            return
          }
        }
      },
      //地区数据变动后
      onAreaChanged(val) {
        console.log("CCC",this.caddress);
        this.$emit('change', this.caddress);//发送改变
      }
    }
  }
</script>

<style scoped>

</style>