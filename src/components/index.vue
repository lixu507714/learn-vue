<template>
  <div>
    <p v-if="show">you can see me</p>
    <p v-else>now you see me</p>
    <template v-if="show">
      <h1>heading</h1>
    </template>

    <p v-show="show">do you also see me?</p>
    <button @click="show=!show">switch</button>
    <button v-on:click="show=!show">switch</button>

    <p>{{sayHello()}} - <a v-bind:href="link">Google</a></p>
    <p v-html="finishLink"></p>

    <p v-once>{{title}}</p>
    <p>{{title}}</p>
    <input type="text" v-model = "title" name="">

    <ul>
      <li v-for="(ingredient, i) in ingredients" :key="ingredient">
       ({{i}})、 {{ingredient}}
      </li>
    </ul>

    <button v-on:click="increase(2)">Click me</button>
    <p>{{count}}</p>
    <p v-on:mousemove="updateCoordinates">Coordinates: {{x}} / {{y}} -
      <!--<span v-on:mousemove.stop>DEAD SPOT</span>-->
    </p>
  </div>

</template>

<script>
  import HelloWorld from './HelloWorld.vue';
  export default {
    component:{HelloWorld:HelloWorld},
    data(){
     return {
       x:0,
       y:0,
       count:0,
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
      increase:function(step) {
        this.count +=step;
      },
      updateCoordinates(event) {
//        console.log(event);
//        this.x= event.clientX;
//        this.y= event.clientY;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
