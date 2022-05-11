// var url = 'https://gitbook.cn/gitchat/geekbooks?tag=JavaScript&name=pwwu&age=22';

// function paramsAnalysis(url) {  // 参数解析  
//     var arr = url.split('&');
//     // console.log(arr);
//     var obj = {}, innerArr;
//     for (var i = 0; i < arr.length; i++) {
//         innerArr = arr[i].split('=');
//         obj[innerArr[0]] = innerArr[1]
//     }
//     return obj
// }
// console.log(paramsAnalysis(url));


let arr1 = [1,2,3];
let arr2 = [3,4,5];
let s1 = new Set([...arr1,...arr2]) //这样就把重复的3去掉了
console.log([...s1]);//这就是并集的结果了复制代码

const getType = (s) => {
    const r = Object.prototype.toString.call(s)
    return r.replace(/\[object (.*?)\]/, '$1').toLowerCase()
  }
  
  console.log(getType())
  console.log(getType(null))
  console.log(getType(1))
  console.log(getType('前端胖头鱼'))
  console.log(getType(true))
  console.log(getType(Symbol('前端胖头鱼')))
  console.log(getType({}))
  console.log(getType([]))


  // 适合纯11位手机
const splitMobile = (mobile, format = '-') => {
    return String(mobile).replace(/(?=(\d{4})+$)/g, format)
  }
  // 适合11位以内的分割
  const splitMobile2 = (mobile, format = '-') => {
    return String(mobile).replace(/(?<=(\d{3}))/, format).replace(/(?<=([\d\-]{8}))/, format)
  }
  
  console.log(splitMobile(18379802267))
  console.log(splitMobile2(18379876545))