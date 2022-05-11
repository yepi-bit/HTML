// function fn() {
//     var num = 10;
//     function fun() {
//         console.log(num);
//     }
//     return fun
// }
// var f = fn();
// f();

// class Father {
//     constructor(){

//     }
//     money(){
//         console.log(100);
//     }
// }
// class Son extends Father {

// }
// var son =new Son()
// console.log(son.money())

// var str = 'abc';
// var newStr = JSON.stringify(str);
// console.log(newStr)
// var newStr2 = JSON.parse(newStr)
// console.log(newStr2)

// var arr = {name:'hh',sex:'男'};
// let {name: cc,sex} = arr;
// console.log(cc);
// console.log(arr[0]);

// var age = 100;
// var obj = {
//     age: 20,
//     say: () => {
//         console.log(this.age)
//     }
// }
// obj.say()

// let ary = [{
//     id: 1,
//     name: '张三'
// }, {
//     id: 2,
//     name: '李四'
// }];
// let newary = ary.filter(item => item.id == 1)
// console.log(newary);

// var arr = [10, 20, 30, 40, 50, 20, 30];

// var index = arr.indexOf(40);
// console.log(index);  // 3

// var arr = [10, 20, 30, 40, 50];

// var newArr = arr.map(function (item, index, arr) {

//     //遍历要做的事情 映射关系

//     return item * 2;//每一个映射要反应的关系

// });
// console.log(newArr); // [ 20, 40, 60, 80, 100 ]
// console.log(arr); // [ 10, 20, 30, 40, 50 ]

// var arr = [10, 20, 30, 40, 50];

// var newArr = arr.filter(function (item, index, arr) {
//     //过滤的条件
//     return item > 20;//过滤数组中大于20的数
// });
// console.log(newArr); // [ 30, 40, 50 ]
// console.log(arr); // [ 10, 20, 30, 40, 50 ]

// var arr = [10, 20, 30, 40, 50];

// var newArr = arr.some(function (item, index, arr) {

//     //过滤的条件
//     return item > 20;
// });
// console.log(newArr); // 
// console.log(arr); // [ 10, 20, 30, 40, 50 ]

// var arr = [10, 20, 30, 40, 50];

// var newArr = arr.reduce(function (prev, next) {
//     console.log(prev + ", " + next);  // 10,20 ->30,30 -> 60,40 -> 100,50

//     return prev + next;
// });
// console.log(newArr);

// var arr = [10, 20, 30, 40, 50];

// arr.forEach(function (item, index, arr) {
//     console.log(item + ", " + index + ", " + arr);

// });

// var arr = [3, 9, 4, 3, 6, 0, 9];
// function sum(arr) {
//     return arr.reduce(function (prev, curr, idx, arr) {
//         return prev + curr;
//     });
// }
// console.log(sum(arr));

// var arr = [3,9,4,3,6,0,9];
// var sum = arr.reduce(function (prev, cur) {
//     return prev + cur;
// },0);
// console.log(sum);

// var arr = [3,9,4,3,6];
// function sum(arr) {
//     var s = 0;
//     arr.forEach(function(val, idx, arr) {
//         s += val;
//     }, 0);

//     return s;
// };
// console.log(sum(arr));

// var arr = [3, 9, 4, 3, 6];
// var total = 0;
// var sum = arr.forEach(function (item) {
//     total += item
// })
// console.log(total);

// var arr = [3, 9, 4, 3, 6];
// function sum(arr) {
//     return eval(arr.join("+"));
// };
// console.log(sum(arr));

// var arr = [3, 9, 4, 3, 6];
// function sum(arr) {
//     var s = 0;
//     for (var i = 0; i < arr.length; i++ ) {
//         s += arr[i];
//     }
//     return s;
// }
// console.log(sum(arr));

// let arr = [1, 2, 2, 4, null, null];
// let str = arr.filter((item, index) => arr.indexOf(item) === index)
// console.log(str); // [1, 2, 4, null]
// var str = 'AaaBbCccDdddE';

// str2 = Array.from(new Set(str)).join(''); // ES6去重
// console.log(str2);

// var arr = [1, 2, 3, 2, 1, 3, 4];
// function f1(arr) {
//     var arr1 = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr1.indexOf(arr[i]) === -1) arr1.push(arr[i]);
//         //如果当前数组的第i已经保存进了临时数组，那么跳过，否则把当前项push到临时数组里面
//     }
//     return arr1;
// }
// console.log(f1(arr))

// var arr = [1, 9, 2, 8, 6, 7];
// arr.sort();
// console.log(arr); // [ 1, 2, 6, 7, 8, 9 ]

// var arr = [3, 1, 2, 5, 7, 8];
// function sortArray(arr) {
//     return arr.sort(function compare(a, b) {
//         return a - b;
//     })
// }
// sortArray(arr)
// console.log(arr);
let arr = [12, 32, 43, 11, 55, 12];
let val = arr.findIndex(function (ele, index) {
    return ele > 66;
});
console.log(val);

// var a = Number('123.3blue');
// var b = parseInt('123.3blue');
// var c = parseFloat('123.3blue');
// console.log(a);
// console.log(b);
// console.log(c);

var arr2 = ['apple','strawberry','banana','pear','apple','orange','orange']
var newArr = arr2.filter((item,index) => {
    console.log(item,index);
    return arr2.indexOf(item) === index
})
console.log(newArr);
