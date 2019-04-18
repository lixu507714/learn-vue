vue简单知识点：



var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

el 限制了vue 实例处理dom 范围。
数据管理，不需要担心dom管理。
没有操作dom 直接操作数据

？ 啥是MVP的设计模式


虚拟dom？？？？？



props 从父组建接受值。


vue 传值: 单项数据流，子组件不能修改父组件传过来的数据。
子组件向父组件传值：通过change事件。@Output
方法里写 $emit。
父组件向子组件传值：通过属性的方式，v-bind（父组件通过 props 向下传递数据给子组件）

angular 传值：
子组件向父组件传数据：@Output,子组件需要实例化EventEmitter类来订阅和触发自定义事件
父组件向子组件传值：@Input

组件的参数校验和非props特性。
子组件接受参数props可以定义参数类型。（视频4-5）

生命周期钩子：mounted函数


非父子组件传值：
vuex：
发布订阅模式/观察者模式/Bus/总线：



vue 中的插槽（slot）

vue 中的 vm.$，是vue 的实例属性和实例方法 。
vue 的生命周期钩子：
生命周期函数就是vue实例在某一个时间点会自动执行的函数。
需要注意的是vue的生命周期函数不放在methods对象里面。单独的放在实例就可以？？？
beforeCreate 
created
beforeMount
mounted  页面渲染完毕之后
beforeDestory
destory
当数据发生改变的时候
beforeUpdate  重新渲染之前
updated       当重新渲染之后执行


Object.defineProperty





计算属性：（compluted）。不同的是计算属性是基于它们的响应式依赖进行缓存的。
内置缓存的。（如果值没有改变，不会重新计算）

计算属性的getter和setter：
get 拿值，set设置值。


侦听器：（watch）


（1）、点击事件
```
  <button @click="show=!show">switch</button>
  <button v-on:click="show=!show">switch</button>
```
(2)、判断条件

```
<p v-if="show">you can see me</p> 删除dom，性能相对低一些。
<p v-show="show">do you also see me?</p>
v-show相当于是给此标签添加css属性：display:none; dom 依然是存在的。
v-if相当于是remove
```
(3)、for循环 数组
```
<!-- v-for循环数组 当用for来更新已被渲染的元素时，vue的“就地复用”机制 是不会改变数据项的顺序的。要想重新排序，需为每项添加key属性（也就是每项唯一的id） -->
<li v-for="(ingredient, i) in ingredients" :key='ingredient'>
        {{ingredient}}{{i}}
</li>
 <!-- 会改变原始数组的方法，为变异方法 例如push(),pop(),shift(),unshift(),splice(),sort(),reverse()等；  非变异方法，不会改变原始数组，但是会返回一个新数组 -->
会改变原始数组的方法还可以改变数组的引用。
vue.set()
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

class样式的改变：
1 class可以跟一个对象绑定，对象里面定义变量
2 class可以跟一个数组相绑定



（7）vue.set()
1/往对象上加一个新的数据，可以用实例上的vm.$set.
2/vue.set( target, key, value )


(8)组件使用的细节点
1、引用组件的时候要注意标签的使用，比如用table的话，里面要用is属性去使用组件，不然会出现bug。
2、在自组件定义data的时候，data必须是一个函数，不能是一个对象。然后return 对象数据。因为子组件kennel被调用多次。每一个自组件都应该有自己的数据。
3、ref。ref操作dom节点。


冒泡排序


```

  let defArr = [1,2,4,3,0];
  let defArr1 = [0,1,2,3,4];
  let defArr2 = [1,2,3,4,0];
  let defArr3 = [4,1,2,3,0];

  //有问题 [1, 2, 3, 0, 4]
  function sort1(arr){
    for(let i=1; i<arr.length; i++){
      let currentVal = arr[i];
      if(arr[i] < arr[i-1]){
        arr[i] = arr[i-1];
        arr[i-1] = currentVal;
      }
    }
    return arr;
  }
  console.log(sort1(defArr));

  function sort2(arr){
    for(let i=0; i<arr.length; i++){
      for(let j=i+1; j<arr.length; j++){
        let currentVal = arr[i];
        if(arr[i] > arr[j]){
          arr[i] = arr[j];
          arr[j] = currentVal;
        }

      }
    }
    return arr;
  }
  console.log(sort2(defArr));

  function sort3(arr){
    for(let i=0; i<arr.length-1; i++){
      if(arr[i] > arr[i+1]){
        for(let j=0; j<=i; j++){
          let currentVal = arr[i+1];
          if(arr[i+1] < arr[j]){
            arr[i+1] = arr[j];
            arr[j] = currentVal;
          }
        }
      }
    }
    return arr;
  }
  console.log(sort3(defArr2));

```
