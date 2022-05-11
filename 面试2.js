// let tempArr = [1,[2,3],[4,5,[6,7]]];
// let result_str1 = tempArr.join(',').split(',');
// console.log(result_str1); //  ["1", "2", "3", "4", "5", "6", "7"]


// var arr = [1,2,3];
// var obj = {
//     1:'1'
// }
// var fun = function() {

// }
// var newArr = Object.prototype.toString.call(fun);
// console.log(newArr);
// var isArray = arr.constructor === Array
// console.log(isArray);

// console.log('object' === Object);
// console.log(typeof obj !== 'object');

// const products = ['橘子', '柠檬', '木瓜'];
// for (const pro of products.entries()) {
//     console.log(pro);
// }

// const person = { name: '前端小智', job: '前端分享者' }
// // console.log(Object.keys(person));
// Object.keys(person).forEach(prop => {
//     console.log(prop, person[prop]);
// })

// let arr = [10, 20,  , 30, 40, 50] // 角标2是一个空值
// for(let i in arr) {
//     console.log(i, typeof i, arr[i]);
// }
// for(let i of arr) {
//     console.log(i, typeof i, arr[i]);
// }

// var num = 5;
// var num = 10;
// console.log(num);
// num = 100;

// let num = 5;
// console.log(num);
// let num = 10;

// const num = 10;
// console.log(num);
// num = 100;

// console.log(typeof null);
// var arr = [1,2,3]
// console.log(arr instanceof Array);

// var arr = [1, 2, 3, 4, 5, 6];
// var newArr = arr.slice(1,3); // 不包含后面
// console.log(newArr);

// 闭包
// function f1(){
//     var n = 123;
//     function f2(){    //f2是一个闭包
//         console.log(n);
//     }    
//     return f2;
// }
// var a = f1()
// a()

// 两种 立即执行函数
// (function(){
//     console.log(1);
// })()

// (function(){
//     console.log(2);
// }())

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);                 
//     }, 1000);
// }

// console.log(i);

// var arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr.join(''));
// console.log(arr.join(','));
// console.log(arr.join(':'));

// var arr = [3, 5, 7, 1, 8, 1, 2, 8, 7];

// var newA = [...new Set(arr)]
// console.log(newA);
// var AA = newA.sort(function compare(a,b){
//     return a - b;
// })
// console.log(AA);

// var arr = [1,2,3,4,5];
// var newArr = arr.reduce(function(pre,next){
//     return pre + next
// },0)
// console.log(newArr);
// console.log(arr);

// var arr = [1, 2, 3, 4, 5];
// var total = 0;
// arr.forEach(function (item) {

//     total += item

// })
// console.log(total);

// console.log(6/3%3);
// console.log(null === undefined);
// console.log(typeof null);
// console.log(typeof null == 'object');
// console.log(typeof null == Object);
// console.log(null instanceof Object);
// console.log(Number(null));
// console.log(Number(undefined));


// var str = '110002312'    
// var newStr = str.split('').reverse()
// console.log(newStr);


// function parseNum(num) {
//     var list = new String(num).split('').reverse()
//     for (var i = 0; i < list.length; i++) {
//         if (i % 4 == 3) {
//             list.splice(i, 0, ',');
//         }

//     }
//     return list.reverse().join('')
// }
// console.log(parseNum(110002312));

// function Person() {
//     this.name = 'xiaoming';
//     this.colors = ['red','green'];
// }
// Person.prototype.getName = function() {
//     console.log(this.name);
// }
// function Child(age) {
//     Person.call(this);
//     this.age = age;
// }
// var child = new Child(18)
// var child2 = new Child(22)
// child.colors.push('blue');
// console.log(child.name); // xiaoming
// console.log(child.colors); // [ 'red', 'green', 'blue' ]
// console.log(child2.colors); // [ 'red', 'green' ]


// 作用域：(抽象概念，代码定义的时候作用域就确定了)
// 变量起作用的范围
// 隔离变量，防止变量命名污染

// 作用域链(Scope)
// 真实存在，作用域链是使用执行上下文当中变量对象所组成的链条结构
// 查找的时候其实真正是先去自身的变量对象当中去找，如果没有，去上级执行上下文的变量对象当中去找，直到找到全局执行上下文的变量对象

// console.log(parseInt('10', 2));  // 2
// console.log({} === {}); // false
// console.log(1 === true); // false
// console.log('10' + 3);
// console.log('10' + 2.3 + 3);
// console.log('10' + 2.3 * 3);

{/* <a href="javascript:void(8)">11</a> */ }

// var a = '40';
// var b = 7;
// console.log(a%b);

// var val = 'sss';
// console.log('Value is'+(val === 'ssws') ? 'Somes' : 'Nothing');

// var name = 'world';
// console.log(String === 'undefined');
// (function(){
//     // var 在外部 有作用域 未定义
//     if(typeof name === 'undefined'){
//         var name = 'Jack';
//         console.log('Good' + ' ' + name);
//     } else {
//         console.log('hello' + name);
//     }
// })()


// var obj = [1,2,3]
// var objs = {
//     a: '1',
//     b: '2'
// }
// for(var key of objs) {
//     console.log(key);
// }


// 前面数字不足 补 0 
// function CusZero(num, length) {
//     return (Array(length).join('0') + num).slice(-length);
// }
// console.log(CusZero(2, 10));


// Map 和 Set 区别
var set = new Set(['1', '2', '3']);
console.log(set);
console.log(set.size);
console.log(set.add('4'));
console.log(set.keys());
console.log(set.values());
console.log(set.entries());
console.log(set.has('2'));
set.forEach((item) => {
    console.log(item);
})


// var map = new Map([['a', '1'], ['b', '2'], ['c', '3']]);
// console.log(map);
// console.log(map.size);
// console.log(map.get('a'));
// console.log(map.set('d', '4'));
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
// console.log(map.has('b'));
// map.forEach((item) => {
//     console.log(item);
// })