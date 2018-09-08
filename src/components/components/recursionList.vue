<template>
  <div class="hello">
    <li v-if="result">
      <span>{{result.name}}</span>
    </li>
    <template v-if="result && result.groups && result.groups.length>0">
      <recursionList :result="item" v-for="item in result.groups"></recursionList>
    </template>
  </div>
</template>

<script>
export default {
  name: 'recursionList',
  props: ["result"],
  data () {
    return {
      
    }
  },
  created(){
    console.log(this.result);
  },
  methods:{
    
  }
}
</script>

<style scoped>
  li{
    height:30px;
    line-height:30px;
    border-top:1px solid #ccc;
    text-align:left;
  }
</style>
