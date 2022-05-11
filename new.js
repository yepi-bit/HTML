var arr = [1,2,3,1,2,3,4,5];
function f1(arr) {
    var arr1 = []; //一个新的临时数组
    //遍历当前数组
    for (var i = 0; i < arr.length; i++) {
        if (arr1.indexOf(arr[i]) === -1) arr1.push(arr[i]);
        // 如果当前数组的第 i 已经保存进了临时数组，那么跳过，
        // 否则把当前项push到临时数组里面
    }
    return arr1;
}
console.log(f1(arr))
