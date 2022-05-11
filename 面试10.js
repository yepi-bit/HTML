var arr = 'abcdefg';
console.log(arr.substr(1,4)); // (start,length)	
console.log(arr.substring(1,4)); // (start,end)

//对象类型转换
var a = {
    i: 1,
    toString: function () {
        return a.i++;
    }
}
console.log(a == 1 && a == 2 && a == 3);  // true

//数组类型转换
var a = [1, 2, 3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3); // true