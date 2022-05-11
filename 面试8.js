// var arr = ['ww','hh','rr'] 
// console.log(arr.map(item => arr));
// console.log(arr.forEach(item => arr));



function luckdata() {
    var numdsf = Math.floor(Math.random() * (1 - 100) + 100);
    console.log(numdsf);

    if (numdsf >= 1 && numdsf <= 50) {
        console.log(6);
    } else if (numdsf >= 51 && numdsf <= 60) {
        console.log(1);
    } else if (numdsf >= 61 && numdsf <= 70) {
        console.log(2);
    } else if (numdsf >= 71 && numdsf <= 80) {
        console.log(3);
    } else if (numdsf >= 81 && numdsf <= 90) {
        console.log(4);
    } else if (numdsf >= 91 && numdsf <= 100) {
        console.log(5);
    }
}
console.log(luckdata());

var num = Math.floor(Math.random() * 100 + 1);
console.log(num);