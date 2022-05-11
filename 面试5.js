// var url = 'www.baidu.com?name=wtj&age=1'
// var str = url.split('?')[1]
// var arr = str.split('&')
// var obj = {}
// for (var i = 0; i < arr.length; i++) {
//     var newArr = arr[i].split('=')
//     obj[newArr[i-1]] = newArr[i]
// }
// console.log(obj);


// var robot_cart_id = 3
// function get_robotid(){
//     console.log(robot_picking_id);
//     console.log(obtain_id());
//     var robot_picking_id = 1;
//     var robot_cart_id = 4;
//     function obtain_id(){
//         return robot_cart_id
//     }
// }
// get_robotid()
// console.log(robot_cart_id);


// var robot_id = 8
// function refresh_id(){
//     robot_id = 10;
//     // return
//     function robot_id2(){
//         console.log(robot_id);
//     }
//     robot_id2()
// }

// refresh_id()
// console.log(robot_id);



// var result = undefined || false || 0 || '.';
// console.log(result);

// function format (num) {  
//     var reg=/\d{1,3}(?=(\d{3})+$)/g;   
//     return (num + '').replace(reg, '$&,');  
// }

const feeSign = 10111
const newFeeSign = feeSign.toLocaleString()
console.log(newFeeSign);


var arr = [1, 2, 3, 4, 5, 1, 2, 3]
function setArr(arr) {
    return [...new Set(arr)];
}
console.log(setArr(arr));

const newArr = arr.filter((item, index) => arr.indexOf(item) === index)
console.log(newArr);

function clearRepeat(arr) {
    return Array.from(new Set(arr))
}
console.log(clearRepeat(arr));

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