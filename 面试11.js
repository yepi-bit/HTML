var arr2 = 'hello'
var arr3 = {tom:2,css:'abc'}
var arr5 = [1,2,3]
console.log(Object.entries(arr2));
console.log(Object.entries(arr3));
console.log(Object.entries(arr5));
console.log(Object.keys(arr2));
console.log(Object.keys(arr3));
console.log(Object.keys(arr5));
console.log(Object.values(arr2));
console.log(Object.values(arr3));
console.log(Object.values(arr5));

var arr6 = [1,2,3,5,6,7,9]
var arr8 = {a:1,b:2,c:3}
// for(var i in arr6) {
//     console.log(i +' '+ typeof i);
// }
// for(var i of arr6) {
//     console.log(i +' '+ typeof i);
// }
for(var i in arr8) {
    console.log(i +' '+ typeof i);
}
for(var i of arr8) {
    console.log(i +' '+ typeof i); // TypeError: arr8 is not iterable
}