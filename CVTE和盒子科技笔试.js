// function toCustomArray(n) {
//     var arr = [];
//     for (let i = 0; i < n; i++) {
//         arr[i] = [];
//         for (let j = 0; j < n; j++) {
//             arr[i][j] = (Math.random() * n).toFixed(1);
//         }
//         for (let k = 0; k < n; k++) {
//             arr[i].sort(function (a, b) {
//                 return a - b;
//             })
//         }
//     }
//     console.log(arr);
// }
// toCustomArray(3)

var ary = [1,1,1,2,3];
function cusValue() {
    var obj = {};
    for (var i = 0; i < ary.length; i++) {
        // var item = ary[i];
        obj[ary[i]] = (obj[ary[i]] + 1) || 1;
    }
    return obj;
}
console.log(cusValue(ary));