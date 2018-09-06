<template>
  <div>
    <!--if...else-->
    <p v-if="show">you can see me</p>
    <p v-else>now you see me</p>
    <template v-if="show">
      <h1>heading</h1>
    </template>

    <!--click-->
    <p v-show="show">do you also see me?</p>
    <button @click="show=!show">switch</button>
    <button v-on:click="show=!show">switch</button>


    <!--html-->
    <p>{{sayHello()}} - <a v-bind:href="link">Google</a></p>
    <p v-html="finishLink"></p>


    <!--v-once-->
    <p v-once>{{title}}</p>
    <p>{{title}}</p>
    <input type="text" v-model = "title" name="">


    <!--for循环-->
    <ul>
      <li v-for="(ingredient, i) in ingredients" :key="ingredient">
       ({{i}})、 {{ingredient}}
      </li>
    </ul>


    <!--watch methods  computed-->
    <button v-on:click="increase">Click me</button>
    <button v-on:click="count++">Click me</button>
    <p>{{count*2 >10 ?'Greater than 10':'Smaller than 10'}}</p>
    <p>count:{{count}}</p>
    <p>result:{{result()}} | {{output}}</p>
    <p v-on:mousemove="updateCoordinates($event)">Coordinates: {{x}} / {{y}} -
      <span v-on:mousemove.stop="">DEAD SPOT</span>
    </p>


    <!--绑定-->
    <input type="text" v-on:keyup.enter.space="alertMe">
    <input type="text" v-model="name">
    <p>{{name}}</p>
  </div>
</template>

<script>
  import HelloWorld from './HelloWorld.vue';
  export default {
    component:{HelloWorld:HelloWorld},
    data(){
     return {
       name:'李旭',
       x:0,
       y:0,
       count:0,
       count1:0,
       title:'HelloWorld',
       link:'http://google.com',
       finishLink:'<a href="http://google.com">Google</a>',
       show:true,
       person:[
         {
           name:'lx',
           age:25,
           color:'red'
         },
         {
           name:'lxxx',
           age:25,
           color:'blue'
         }
       ],
       ingredients:['meat','fruit','cookies']
     }
    },

    methods:{
      sayHello:function() {
        this.title = '33'+ Math.random();
        return this.title;
      },
      result() {
        return this.count > 5 ? 'Greater 5':"Smaller than 5";
      },
      increase:function() {
        this.count1 +=1;
      },
      updateCoordinates:function(event) {
//        console.log(event);
//        this.x= event.clientX;
//        this.y= event.clientY;
      },
      alertMe:function() {
        alert('Alert!');
      }
    },
    computed:{
      output:function() {
        return this.count > 5 ? 'Greater 5':"Smaller than 5";
      }
    },
    watch:{
      count:function (value) {
        var vm = this;
        setTimeout(function() {
          vm.count = 0;
        },2000)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
