vue简单知识点：

（1）、点击事件
```
  <button @click="show=!show">switch</button>
  <button v-on:click="show=!show">switch</button>
```
(2)、判断条件

```
<p v-if="show">you can see me</p>
<p v-show="show">do you also see me?</p>
v-show相当于是给此标签添加css属性：display:none;
v-if相当于是remove
```
(3)、for循环
```
<!-- v-for循环数组 当用for来更新已被渲染的元素时，vue的“就地复用”机制 是不会改变数据项的顺序的。要想重新排序，需为每项添加key属性（也就是每项唯一的id） -->
<li v-for="(ingredient, i) in ingredients" :key='ingredient'>
        {{ingredient}}{{i}}
</li>
 <!-- 会改变原始数组的方法，为变异方法 例如push(),pop()等；  非变异方法，不会改变原始数组，但是会返回一个新数组 -->

```

(4)、v-once

只渲染元素和组件一次，随后的渲染，使用了此指令的元素/组件及其所有的子节点，都会当作静态内容并跳过，这可以用于优化更新性能。
```
<div id="app">
		<p v-once>{{msg}}</p>  //msg不会改变
		<p>{{msg}}</p>
		<p>
			<input type="text" v-model = "msg" name="">
		</p>
	</div>
	<script type="text/javascript">
		let vm = new Vue({
			el : '#app',
			data : {
				msg : "hello"
			}
		});
	</script>

```

(5)、v-model表单输入绑定
```
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```
(6)、methods,watch和computed的关系.
```
methods,watch和computed都是以函数为基础的，但各自却都不同 .
1、methods里面定义的函数，是需要主动调用的，而和watch和computed相关的函数，会自动调用,完成我们希望完成的作用。
作用机制：
1.watch和computed都是以Vue的依赖追踪机制为基础的，它们都试图处理这样一件事情：当某一个数据（称它为依赖数据）发生变化的时候，所有依赖这个数据的“相关”数据“自动”发生变化，也就是自动调用相关的函数去实现数据的变动。

2.对methods:methods里面是用来定义函数的，很显然，它需要手动调用才能执行。而不像watch和computed那样，“自动执行”预先定义的函数。

从性质上看

1.methods里面定义的是函数，你显然需要像"fuc()"这样去调用它（假设函数为fuc）
2.computed是计算属性，事实上和和data对象里的数据属性是同一类的（使用上）,
1.watch擅长处理的场景：一个数据影响多个数据
2.computed擅长处理的场景：一个数据受多个数据影响。
methods不处理数据逻辑关系，只提供可调用的函数
利用computed处理methods存在的重复计算情况
new Vue({
 el: '#app',
 // 设置两个button，点击分别调用getMethodsDate,getComputedDate方法
 template: '<div id="app"><button @click="getMethodsDate">methods</button><button @click="getComputedDate">computed</button></div>',
 methods: {
  getMethodsDate: function () {
   alert(new Date())
  },
  // 返回computed选项中设置的计算属性——computedDate
  getComputedDate: function () {
   alert(this.computedDate)
  }
 },
 computed: {
  computedDate: function () {
   return new Date()
  }
 }
 【注意】为什么两次点击computed返回的时间是相同的呢？new Date()不是依赖型数据（不是放在data等对象下的实例数据），所以computed只提供了缓存的值，而没有重新计算
 
  只有符合：1.存在依赖型数据 2.依赖型数据发生改变这两个条件,computed才会重新计算。 
 
 而methods下的数据，是每次都会进行计算的 
```


