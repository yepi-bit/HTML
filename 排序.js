
// 冒泡
// var arr = [3, 2, 1, 4, 8, 7, 6, 5];
// function bubbleSort(arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr
// }

// 数组排序
// var arr = [3, 2, 1, 4, 8, 7, 6, 5];
// var newArr = bubbleSort(arr)
// console.log(newArr)

// function sortArray(arr) {
//     return arr.sort(function compare(a, b){
//         return a - b;
//     })
// }
// sortArray()
// console.log(arr)

// 快排
var arr = [3, 2, 1, 4, 8, 7, 6, 5];
function quickSort(arr) {
    if (arr.length <= 1)
        return arr;

    let arrLength = arr.length >> 1;
    let first = arr.splice(arrLength, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < first) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(first, quickSort(right));
}
var newArray = quickSort(arr)
console.log(quickSort(newArray))