$(function () {
    var Obj = {};
    Obj.luckyResult = [];
    Obj.luckyResult_history = [];
    Obj.luckyPrize = '';
    Obj.luckyNum = 1;
    //$(".select_lucky_number").bind('change', function() {
    //    Obj.luckyNum = $(this).val();
    //})
    function loadImage(arr, callback) {
        var loadImageLen = 1;
        var arrLen = arr.length;
        $('.all_number').html("/" + arrLen);
        for (var i = 0; i < arrLen; i++) {
            var img = new Image();
            img.onload = function () {
                img.onload = null;
                ++loadImageLen;
                $(".current_number").html(loadImageLen);
                if (loadImageLen == arrLen) {
                    callback(img);
                }
            }
            img.src = arr[i].image;
        }
    }
    Obj.M = $('.container').lucky({
        row: 5, //每排显示个数  必须为奇数
        col: 5, //每列显示个数  必须为奇数
        depth: 5, //纵深度
        iconW: 28, //图片的宽
        iconH: 28, //图片的高
        iconRadius: 8, //图片的圆角
        data: personArray //数据的地址数组
    });
    loadImage(personArray, function (img) {
        $('.loader_file').hide();
    });
    function showLuckyPeople(num) {
        setTimeout(function () {
            var $luckyEle = $('<img class="lucky_icon" />');
            var $userName = $('<p class="lucky_userName"></p>');
            var $fragEle = $('<div class="lucky_userInfo"></div>');
            $fragEle.append($luckyEle, $userName);
            $('.mask').append($fragEle);
            $(".mask").fadeIn(200);
            $luckyEle.attr('src', personArray[Obj.luckyResult[num]].image);
            $userName.text(personArray[Obj.luckyResult[num]].name)
            $fragEle.animate({
                'left': '50%',
                'top': '50%',
                'height': '200px',
                'width': '200px',
                'margin-left': '-100px',
                'margin-top': '-100px',
            }, 1000, function () {
                setTimeout(function () {
                    $fragEle.animate({
                        'height': '100px',
                        'width': '100px',
                        'margin-left': '-300px',
                        'margin-top': '-100px',
                    }, 400, function () {
                        $(".mask").fadeOut(0);
                        $luckyEle.attr('class', 'lpl_userImage').attr('style', '');
                        $userName.attr('class', 'lpl_userName').attr('style', '');
                        $fragEle.attr('class', 'lpl_userInfo').attr('style', '');
                        $('.lpl_list.active').append($fragEle);
                    })
                }, 1000)
            })
        }, num * 2000)
        //setTimeout(function() {
        //    $('.lucky_list').show();
        //}, 2500)
    }
    $('#stop').click(function () {
        Obj.M.stop();
        $(".container").hide();
        $(this).hide();
        var i = 0;
        for (; i < Obj.luckyResult.length; i++) {
            showLuckyPeople(i);
        }
        setTimeout(function () {
            $("#open").show();
        }, 2500)
    })
    $('#open').click(function () {
        //$('.lucky_list').hide();
        if (personArray.length == Obj.luckyResult_history.length) {
            alert('抽奖结束！');
            return 0;
        } else {
            $("#open").hide();
            $(".container").show();
            Obj.M.open();
            randomLuckyArr();
            setTimeout(function () {
                $("#stop").show();
            }, 1000)
        }
    })
    function randomLuckyArr() {
        Obj.luckyResult = [];
        for (var i = 0; i < Obj.luckyNum; i++) {
            var random = Math.floor(Math.random() * personArray.length);
            if (Obj.luckyResult.indexOf(random) == -1 && Obj.luckyResult_history.indexOf(random) == -1) {
                Obj.luckyResult.push(random)
                Obj.luckyResult_history.push(random)
            } else {
                i--;
            }
        }
    }
    //function tabPrize() {
    //    var luckyDefalut = $(".lucky_prize_picture").attr('data-default');
    //    var index = luckyDefalut ? luckyDefalut : 1;
    //    tabSport(index);
    //    var lucky_prize_number = $('.lucky_prize_show').length;
    //    $('.lucky_prize_left').click(function() {
    //        $('.lucky_prize_right').addClass('active');
    //        index <= 1 ? 1 : --index;
    //        tabSport(index, lucky_prize_number);
    //    })
    //    $('.lucky_prize_right').click(function() {
    //        $('.lucky_prize_left').addClass('active');
    //        index >= lucky_prize_number ? lucky_prize_number : ++index;
    //        tabSport(index, lucky_prize_number);
    //    })
    //}
    //function tabSport(i, lucky_prize_number) {
    //    if (i >= lucky_prize_number) {
    //        $('.lucky_prize_right').removeClass('active');
    //    }
    //    if (i <= 1) {
    //        $('.lucky_prize_left').removeClass('active');
    //    }
    //    Obj.luckyPrize = i;
    //    $('.lucky_prize_show').hide().eq(i - 1).show();
    //    $(".lucky_prize_title").html($('.lucky_prize_show').eq(i - 1).attr('alt'));
    //    $('.lpl_list').removeClass('active').hide().eq(i - 1).show().addClass('active');
    //}
    //tabPrize();
})
