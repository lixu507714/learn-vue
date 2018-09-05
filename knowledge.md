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
