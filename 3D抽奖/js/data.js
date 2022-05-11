var personArray = new Array;
var nameList = [
    "小李11",
    "小敢",
    "小举",
    "小颖",
    "小坤",
    "小勇",
    "小娜",
    "小伟",
    "小钦",
    "小哲",
    "小其",
    "小鑫",
];
function initData() {
    //var $people = localStorage.getItem("peopleData");
    //if(!$people){
    //    localStorage.setItem("peopleData", nameList);
    //}else {
    //    nameList = $people.split(',');
    //}
    personArray = [];
    for(var i = 0; i < nameList.length; i++){
        var person = {
            id: i,
            image: "img/tx"+ (i+1)+".jpg",
            thumb_image: "img/tx"+ (i+1)+".jpg",
            name: nameList[i]
        }
        personArray.push(person)
    }
}
initData()

