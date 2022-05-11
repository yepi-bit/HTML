// function shallowClone (obj) {
//     const newObj = {};
//     for(let key in obj) {
//         if(obj.hasOwnProperty(key)){
//             newObj[key] = obj[key]
//         }
//     }
//     return newObj
// }
// console.log(shallowClone({1:'a',2:'b'}));

// var obj = {
//     age: 18,
//     nature: ['smart', 'good'],
//     names: {
//         name1: 'fx',
//         name2: 'xka'
//     },
//     love: function () {
//         console.log('fx is a great girl')
//     }
// }
// var newObj = Object.assign({}, fxObj);


let a = [0, 1, 2, 3, 4],
    b = a;
console.log(a === b); //true
a[0] = 1;
console.log(a, b); //[1,1,2,3,4]

// 2、Object.assing()
let obj = {
    name: 'chen',
    age: '18'
}
let obj2 = {
    hobby: 'music'
}
let obj3 = Object.assign(obj2, obj)
console.log(obj3)
obj.name = 'wang'
console.log(Object.assign({}, obj))
