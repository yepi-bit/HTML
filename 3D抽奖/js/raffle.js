/**
 * Created by admin on 2019/12/19.
 */
 function changeBackground(img) {
    if(img != 'video'){
        $('#video').hide()
        $('#video')[0].pause();
        var path ="url(style/" + img + ")";
        $('body').css({
            'background':path,
            'background-size':'100% 100%',
        })
    } else {
        $('#video').show();
        $('#video')[0].play();
    }
}
function addPersonToArr(){
    //var personStr = $('#name').val();
    //localStorage.peopleData += ','+personStr
    //initData()
    //window.location.reload()
}