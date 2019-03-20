<template>
  <!--template文件里面的dom,根只能有一个div-->
  <div>
    <input type="text" v-model="inputValue">
    <button v-on:click="buttonClick()">提交</button>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'todoList', //这个有没有都一样表示，现在的作用就是当前页面的一个// 就是这个name和index.js里面的有关系吗？
    data () {
      return {
        list:[1,2],
        inputValue:''
      }
    },
    methods: { // 点击方法不能用尖头函数吗？是不是因为this的指向改变了。
      buttonClick:function(){
        console.log(111);
        this.list.push(this.inputValue)

      }
    }
  }
</script>

<style scoped>

</style>
