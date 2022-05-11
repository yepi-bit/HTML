// B站自动点赞
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms || 1000))
// }

// async function doThumb() {
//     const list = $('.bb-comment .comment-list .list-item .info .like');
//     for(var i = 0; i < list.length; i++) {
//         if(!$(list[i]).hasClass('liked')){
//             console.log(list[i]);
//             await sleep(1500);
//             list[i].click()
//         }
//     }
// }
// doThumb()


// 爱奇艺自动点赞
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms || 1000))
// }

// async function doThumb() {
//     const list = $('.comment-operate-up');
//     for(var i = 0; i < list.length; i++) {
//         if(!$(list[i]).hasClass('comment-operate-upPoke--visited')){
//             console.log(list[i]);
//             await sleep(1500);
//             list[i].click()
//         }
//     }
// }
// doThumb()


//芒果自动点赞
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || 1000))
}

async function doThumb() {
    const list = $('.mango-comment-givelike');
    for(var i = 0; i < list.length; i++) {
        if(!$(list[i]).hasClass('on')){
            console.log(list[i]);
            await sleep(1500);
            list[i].click()
        }
    }
}
doThumb()