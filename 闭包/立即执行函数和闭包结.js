let single = (function () {
    let name = "小明";
    let age = 20;
    return {
        getName: function () {
            return name;
        },
        getAge: function () {
            return age;
        }
    }
})();
console.log(single.getName()); //小明
console.log(single.getAge()); //20
