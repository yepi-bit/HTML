// 方法1
const obj2=JSON.parse(JSON.stringify(obj1)); // 但是这种方式存在弊端，会忽略undefined、symbol和函数

// 方法2 递归实现
function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (typeof obj !== "object") return obj;
    // 是对象的话就要进行深拷贝
    if (hash.get(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    hash.set(obj, cloneObj);
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 实现一个递归拷贝
        cloneObj[key] = deepClone(obj[key], hash);
      }
    }
    return cloneObj;
  }


// 方法3
  const obj = {
    age: 20,
    address: {
        city: 'HaiNan'
    },
    arr: ['a', 'b'],
    function() {
        this.age
    },
    re: '^((\d2,3)|(\d{3}\-))?13\d{9}$'
}

function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
            // console.log(result[key]);
        }
    }
    return result
}
const obj2 = deepClone(obj)
console.log(obj2);
obj2.address.city = 'guangzhou'
console.log(obj2.address.city);
console.log(obj.address.city);
console.log(obj.re);