console.log(typeof null)  // Object
console.log(typeof String)
console.log(typeof Number)
console.log(typeof undefined) // undefined
console.log(typeof Boolean)
console.log(typeof BigInt)
console.log(typeof NaN) // number
console.log(null instanceof Object); // false null 为基本类型  instanceof判断 引用类型 object ，function
console.log(1 == 1);

// 浮点数精度问题

console.log(0.1 + 0.2 === 0.3);
console.log((0.1 + 0.2).toFixed(2) === 0.3);
console.log(NaN !== NaN)  // true
console.log(typeof Symbol)

// var               let              const区别 
// ES5之前的         ES6               ES6
// 函数、全局作用域  块级作用域          块级作用域
// 变量提升           无变量提升        无变量提升
// 重复声明            无               无
//                 重新赋值             不能赋值

// 箭头函数和普通函数区别
// 1.比普通函数写简洁
// 2.无this 无 argumengts  不能作为构造函数使用 无原型prototype
// 3.指向外部的this

// Json理解
// 1.通用数据结构的语言，交换格式
// 2.用做数据交换
// 3.对象，数组，String, boolean, number
// 4.ajax请求得到的就是JSON

// DOM
// 1.文档对象模型
// 2.用途: 网页编程中的js对象进行增删改查
// 3.document.getElementById()的属性进行操作

// BOM
// 1.浏览器对象模型
// 2.用途：操作浏览器前进后退
// 3.用js操作地址栏

// 原型
// 1.对象的属性_proto_属性指向它的构造函数prototype
// 举例：数组的原型-> Array.prototype里面

// 原型链
// 一个对象的原型指向另一个对象的原型

// 闭包
// 1.有权访问另一个函数作用域中变量的函数
// 2.作用：隐藏一个局部变量

// JS异步编程的实现
// 1、回调函数 
// 2，promise 解决回调地狱
// 3, async/await

// MVC
// 中的C比较手动的去监听视图和Model的变化,然后去发起请求，更新视图和Model

// MVVM
// 中VM 是自动化的对Model和视图双向绑定

// slot 
// 插槽： 写一些组件的时候他的子元素是可以通过外部直接指定的
// 默认 具名 作用域插槽

// v-model 语法糖
// == v-bind:value = "message"
//    v-on:input = "message=$event.target.value" 
// 例如: 表单 <input v-model="xxx" /> 与 data定义的xxx绑定
// 监听 on:input事件

// cookie
// 存sessionID


// TS 引入第三方库 坑 断言 ?.   ??  a??b a为空去b ,否则a type interface react继承接口，

// session的工作原理
// 1.session是将数据保存到服务端，是服务端技术
// 2.session是一个域对象，session中保存了一个map对象，往session中存储数据时，其实就是将数据保存到session的map中。
// 3.通过session的setAttribute()方法将数据保存到session中，通过getAttribute()方法将数据从session中取出。

// cookie的工作原理
// 1.cookie是将会话的数据保存到客户端，是客户端技术。
// 2.cookie是基于两个头进行工作的：分别是Set-Cookie响应头和Cookie请求头
// 3.通过set-Cookie响应头将会话中产生的数据保存到cookie中，并将其保存在客户端，当客户端再次访问服务器时
// 通过cookie请求头获取到cookie中保存的数据。

// 总结，两者的区别
// Cookie和Session都是会话级技术，都可以保存会话中的数据，但是由于两者的工作原理及特点不同，应用场景也不同。
// cookie的特点：
// 1.cookie是将数据保存在客户端，是客户端技术。（js可以直接访问cookie）
// 2.cookie数据容易随着用户的操作，导致数据丢失或窃取。因此cookie中的数据既不稳定，也不安全
// 3.cookie是将数据可以保存在客户端，对服务端没有什么影响，可以存储较长时间。
// 4.浏览器对存储的cookie的大小及个数都有限制，一般推荐每一个站点存储的cookie不超过20个，每个cookie大小不超过1kb
// 5.总结：cookie适合存储需要存储时间较长且对安全性要求不高的数据。
// 6.cookie的应用：购物车，记住用户名，30天内自动登录

// session的特点
// 1.session是将数据保存到服务端，是服务端技术。
// 2.session是将数据保存在服务端的session对象中，不会随着用户的操作丢失或被窃取。相对更加安全和稳定。
// 3.session存储在服务端，当并发量较高时，会占用大量服务器内存，影响效率。
// 4.总结：session适合存储对安全性要求较高但是存储时间不长的数据。
// 5.session的应用：保存登录状态，保存验证码等。

{/* <basefont> 默认字体，不设置字体，以此渲染
<font> 字体标签
<center> 水平居中
<u> 下划线
<big> 大字体
<strike> 中横线
<tt> 文本等宽 */}

// event loop 
// 主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。 如 宏任务-微任务


// nextTick 原理 
// 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

// 怎么解决跨域 
// JSONP


// 防抖和节流
// 防抖：防抖函数的作用就是控制函数在一定时间内的执行次数。防抖意味着N秒内函数只会被执行一次，如果N秒内再次被触发，则重新计算延迟时间。
// 防抖的应用场景
// 1.搜索框输入查询，如果用户一直在输入中，没有必要不停地调用去请求服务端接口，等用户停止输入的时候，再调用，设置一个合适的时间间隔，有效减轻服务端压力。
// 2.表单验证
// 3.按钮提交事件。
// 4.浏览器窗口缩放，resize事件(如窗口停止改变大小之后重新计算布局)等。

// 节流:节流函数的作用是规定一个单位时间，在这个单位时间内最多只能触发一次函数执行，如果这个单位时间内多次触发函数，只能有一次生效。
// 节流的应用场景
// 1.按钮点击事件
// 2.拖拽事件
// 3.onScoll
// 4.计算鼠标移动的距离(mousemove)



// http和https区别
// http是超文本传输协议，信息是明文传输，
// https 则是具有安全性的ssl加密传输协议。
// http和https使用的是完全不同的连接方式用的端口也不一样,前者是80,后者是443。 
// http的连接很简单,是无状态的。
// HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议 要比http协议安全。

// 头部字段
// 1.请求指令cache-control : no-cache no-store max-age
// 响应指令cache-control : no-cache no-store max-age s-maxage public private
// 2.connection: keep-alive close
// 3.Date 首部字段 Date 表明创建 HTTP 报文的日期和时间。



// ajax 五种状态
// 0：未初始化，还没有调用 open()。 
// 1：已经建立，但是还没有发送，还没有调用 send()。 
// 2：请求已发送，还未获取数据 
// 3：请求在处理中；通常响应中已有部分数据可用了，没有全部完成。 
// 4：响应已完成；您可以获取并使用服务器的响应了。


// TCP和UDP
// UDP:快，不可靠，面向报文，面向非连接;
// 包头结构：源端(16位)，目的端口16位，长度16位，效验和16位；
// TCP:慢，可靠，面向字节流，面向连接，拥塞控制;



// TCP可靠性是怎么保证的
// 1.数据包效验 
// 2.对失序数据包重新（排序）
// 3.丢弃重复数据
// 4.应答机制：接收方收到数据之后会发送一个确认 
// 5.超时重发（会启动定时器）
// 6.流量控制（不会缓冲区溢出）

// ES6新特性
// ES6类 Class
// for...of 和 for...in
// 对象的解构
// rest操作符 / Spread操作符
// 模板字符串
// const let
// promise
// async函数
// Module

console.log(1);
// !!obj  判断boolean 因为 null 为 Object  就是去点null
console.log(void 0  == undefined);  // true

var obj = {
    name: 18
}
console.log(obj instanceof Object);
console.log(typeof !!obj);
console.log(typeof obj);
console.log(typeof !obj);

// var total = 86;
// var newTotal = Math.floor(total / 10) * 10
// console.log(newTotal);

var bb= 1;
function aa(bb) {
    bb = 2
    alert(bb)
}
aa(bb)
alert(bb)