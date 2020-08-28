<template>
        <div class="page-box">
        <table class="table table-hover ">
      <thead>
        <tr>
        　　<th class="number">序号</th>
        　　<th >题目</th>
       　　 <th class="del">删除</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tr" v-for="(item,index) in page_arrs" :key="index">
           <th>{{index+1}}</th>
           <td>{{item.name}}</td>
           <td><a href="">删除</a></td>
        </tr>
     </tbody>
</table>
<div class="page">
    <button class="btn btn-default" type="submit" @click="primaryPage">首页</button>
    <button class="btn btn-default" type="submit" @click="prePage">上页</button>
    <button class="btn btn-default" type="submit">{{current_page}}/{{Math.ceil(arrs.length/pagesize)}}</button>
    <button class="btn btn-default" type="submit" @click="nextPage">下页</button>
    <button class="btn btn-default" type="submit" @click="lastPage">尾页</button>
</div>
    </div> 

</template>

<style lang="css" scoped>
.page-box {
    background-color: aliceblue;
}
</style>

<script>
export default {
    data () {
  return {
     arrs : [
        {name:'Otto',id:1},
        {name:'Jacob',id:2},
        {name:'Larry',id:3},
        {name:'Tim',id:4},
        {name:'Tom',id:5},
        {name:'Jack',id:6},
        {name:'Otto',id:1},
        {name:'Jacob',id:2},
        {name:'Larry',id:3},
        {name:'Tim',id:4},
        {name:'Tom',id:5},
        {name:'Jack',id:6},
        {name:'Otto',id:1},
        {name:'Jacob',id:2},
        {name:'Larry',id:3},
        {name:'Tim',id:4},
        {name:'Tom',id:5},
        {name:'Jack',id:6}
      ],
      
      currentPage : 1,//当前页号
      pagesize :10 //每页大小
     }
},
    computed:{
    page_arrs(){
      let {currentPage,pagesize} = this
      return this.arrs.slice((currentPage-1)*pagesize,currentPage*pagesize)
    },
    current_page(){
      return this.currentPage
    }
},
methods: {
    primaryPage(){
      this.currentPage = 1
    },
    prePage(){
      if(this.currentPage == 1){
        return
      }
      this.currentPage = this.currentPage - 1
    },
    nextPage(){
      if(this.currentPage == Math.ceil(this.arrs.length/this.pagesize)){
        return
      }
      this.currentPage = this.currentPage + 1
    },
    lastPage(){
      this.currentPage = Math.ceil(this.arrs.length/this.pagesize)
    }
},
};
</script>