let str = "aozisodsdkksdsd"
let obj = {}
for (let i = 0; i < str.length; i++) {
    let chars = str.charAt(i)
    if (obj[chars]) {
        obj[chars]++;
    } else {
        obj[chars] = 1
    }
}
let max = 0;
let ch = ''
for (let key in obj) {
    if (obj[key] > max) {
        max = obj[key]
        ch = key
    }
}
console.log(`字符串中出现次数最多的字符是${ch}，出现的次数是${max}次`)