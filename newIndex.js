$(function(){

    //¹ö¶¯ÌõÊÂ¼þ
        $(document).scroll(function(){
            var top = $(document).scrollTop();
            if(top > 200){
                $('.fix .fix-bottom').css('display','block');
            }else{
                $('.fix .fix-bottom').css('display','none');
            }
        });
    
    
    //³öÏÖµÇÂ¼¿ò
        $('#loginbtn').click(function(){
            $('.loginwrap').show();
            $('.colth').show();
        })
    //¹Ø±ÕµÇÂ¼¿ò
        $('.close').click(function(){
            $('.loginwrap').hide();
            $('.colth').hide();
        })
    //¿ØÖÆÊ×Ò³Å¼ÊýÑÕÉ«
        var test = $(".contentWrap>div");
        var array = [];
        $.each(test,function(key,value){
            if(key%2 == 1){
                var index = value;
                array.push(index);
            }
        });
        $(function() {
           var len = array.length;
           for(var i = 0;i<len;i++){
    //           alert(i);
               $(array[i]).css({
                   "background":"#F8F8F8"
    //               "padding-top":"43px"
               });
               $(array[i]).find(".notify-more").css({"margin-bottom":"43px"});
           }
       });
    //    $(".contentWrap>div").eq(1).css("margin-top","7px");
    //Ñ§Ï°Ò³Ãætreeµã»÷Ð§¹û
        $(".ranklessonleft-list a").each(function(){
            $(this).click(function(){
                ranklessonDefault.css({display: 'none'});
                iframeMain.attr('src','').css({display: 'block'});
    //            $(this).parent('li').addClass('licur').siblings().removeClass('licur');
            })
        })
    //ÍÅ¶Ó½¨Éè
        $(".jpkmenuTwo").click(function(){
            $(this).css({color:"#b358e1"});
            $(".jpkmenuThree").css({color:"#555555"});
            $(this).next(".jpkmenuUl-li-ul").toggle();
            $(".jpkmenuUl-li-a-li").css({color:"#555555"});
        });
        $(".jpkmenuThree").click(function(){
            $(this).css({color:"#b358e1"});
            $(".jpkmenuTwo").css({color:"#555555"});
            $(this).parents('li').siblings().children("a").css({color:"#555555"});
            $(this).next(".jpkmenuThreeChild").toggle();
            $(".jpkmenuUl-li-a-li").css({color:"#555555"});
        });
        $(".jpkmenuUl-li-a-li").click(function(){
            $(this).css({color:"#b358e1"});
            $(this).parents("li").find('.jpkmenuThree').css({color:"#555555"});
            $(this).parents('li').siblings().find("a").css({color:"#555555"});
        })
    
    
    //Õë¶Ôä¯ÀÀÆ÷µÄ´°¿Ú´óÐ¡£¬À´ÅÐ¶Ï¹Ì¶¨¶¨Î»ÒÆ¶¯Ñ§Ï°µÄÎ»ÖÃ±ä»¯(ÒòÎªÏîÄ¿²»ÊÇÏìÓ¦Ê½²¼¾Ö£¬ÕâÑùÐ´µÄ±×¶ËÊÇ:Î»ÖÃ²»»áËæ×Åä¯ÀÀÆ÷µÄ¸Ä±ä¶øÖ±½Ó¸Ä±ä,ÐèÒªÖØÐÂ¼ÓÔØÒ³Ãæ)
    //    var width = $(window).width();
    //    var fixResult = (width - 1172)/2;
    //    var result = fixResult - 46 + 'px';
    //    document.querySelector('.fix').style.right = result;
    //¿ª¿ÎÔºÐ£¸ü¶àµã»÷ \
        var ulHeight = $('.blockModule .depwrap .dep-ul ul');
        var i=0;
        var height = ulHeight.height();
        if(height >= 110){
            ulHeight.css("height","110px").css("overflow",'hidden');
            $(".depwrap .notify-more").click(function(){
                   i++;
                   if(i%2!=0){
                       ulHeight.animate({"height":height});
                   }else{
                       ulHeight.animate({"height":"110px"});
                   }
               });
        }else{
            $(".depwrap .notify-more").hide();
        }
    
       /*Õ¹Ê¾Í¼µÄÇÐ»»*/
        // var _sideimg = $(".sideimg .blockbody ul>li");
        // var _jsSideUl = $("<ul class='siul'></ul>")
        // for(var i=0;i<_sideimg.length;i++){
        //     $("<li></li>").appendTo(_jsSideUl);
        // }
        // _jsSideUl.appendTo($(".sideimg"));
        // var _sideli = $(" li",_jsSideUl);
        // var _index = 0;
        // var _simg = _sideimg.length;
        // var timer = "";
        // var offset = 4000;
        //
        // function slideImg(){
        //     if(_index<_simg){
        //         _sideimg.eq(_index).fadeIn(1000).siblings("li").fadeOut(1100);
        //         setSimgStyle(_index);
        //         _index++;
        //     }else{
        //         _index = 0;
        //         _sideimg.eq(_index).fadeIn(1000).siblings("li").fadeOut(1100);
        //         setSimgStyle(_index);
        //     }
        //     timer = setTimeout(arguments.callee , offset);
        // }
        // slideImg();
        //
        // function setSimgStyle(i){
        //     _sideli.eq(i).addClass("click").siblings().removeClass("click");
        // };
        //
        // _sideli.each(function(i){
        //     $(this).click(function(){
        //         clearTimeout(timer);
        //         _index = i;
        //         slideImg();
        //     });
        // });
    
        scrollImg();
    
        function divHover(o){
            o.hover(function(){
                $(this).addClass("hover");
            },function(){
                $(this).removeClass("hover");
            })
        }
        divHover($(".phone"));
        divHover($(".login_button"));
    
        $("body").click(function(event){
            var loginwrap=$(".loginwrap");
                 if(loginwrap.css('display')=='block'&&!loginwrap.is(':animated')){
                     event.stopPropagation()
                     $('.loginsuccess').slideUp(400);
                 }else{
                     return true;
                 }
    //        }
        });
    
    
    
        $(".blockPicText .blockbody ul li").each(function(){
            $(this)
            .hover(function(){
                $(this).find(".text").stop().animate({"top":106},400);
            },function(){
                $(this).find(".text").stop().animate({"top":153+'px'},400);
            });
            if($(this).parent("a").length>0){
                $(this).find(".name").wrapInner($("<a href='"+$(this).parent("a").attr("href")+"' target='_blank'></a>"));
                $(this).find(".content").wrapInner($("<a href='"+$(this).parent("a").attr("href")+"' target='_blank'></a>"));
            }
    
        });
    
        $(".blockPicText .block_content ul li>div").each(function(){
            $(this).hover(function(){
    //            if(!$(this).is(":animated")){
                $(this).stop().animate({"top":0},400);
    //            }
            },function(){
    //            if(!$(this).is(":animated")){
                $(this).stop().animate({"top":100+'px'},400);
    //            }
            });
        })
    
        $(".fix-top").hover(function(){
            $('.fix-left').show();
        },function(){
            $('.fix-left').hide();
        })
    
       $('.fix-bottom').click(function(){
           $("html,body").animate({scrollTop:0}, 500);
       });
    
    
    
        //input placeholderÊôÐÔµÄ¼æÈÝÐÔ´¦Àí
        if(!placeholderSupport()){ // ÅÐ¶Ïä¯ÀÀÆ÷ÊÇ·ñÖ§³Ö placeholder
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        };
    function placeholderSupport() {
        return 'placeholder' in document.createElement('input');
    }
    
    
    
    
    
    
    
    
    
    
    });
    
    /*Ñ¡Ïî¿¨µÄÇÐ»»*/
    function sideColumn(li , div){
        var _li = $(li);
        var _div = $(div);
        _li.eq(0).addClass("click");
        _li.each(function(i){
            $("span" , $(this)).text($(".title h4" , _div.eq(i)).text());
    //        »¬¶¯Õ¹¿ª
            $(this).hover(function(){
                if(_div.is(':animated')){
                    _div.stop();
                }
                $(this).addClass("click").siblings().removeClass("click");
                _div.eq(i).fadeIn(400).siblings("div").hide();
            },function(){
    
            });
        });
    
    };
    
    function checkTopSearch(o){
        if($.trim($("#topsearchtitle").val()) == "" || $("#topsearchtitle").val() == "ÇëÊäÈë¿Î³Ì±àºÅ»òÃû³Æ" ){
            alert("¿Î³Ì±àºÅ»òÃû³Æ²»ÄÜÎª¿Õ£¡");
            return false;
        }else{
            o.submit();
        }
        //return true;
    }
    
    function reinitIframe() {
        var _iframe = document.getElementById("main");
        var _height = 0;
        if(_iframe!=null){
            _height = _iframe.height;
        }
        try {
    //        console.log("FF4:" + typeof _iframe.contentWindow.frameSetHeight);
            if(typeof _iframe.contentWindow.frameSetHeight != 'undefined'){
                _height = _iframe.contentWindow.frameSetHeight();
                //console.log(_height);
            }else{
                var bHeight = _iframe.contentWindow.document.body.scrollHeight;
                var dHeight = _iframe.contentWindow.document.documentElement.scrollHeight;
     //           console.log("bH="+bHeight+"===========dH="+dHeight);
                var tHeight = Math.min(bHeight,dHeight);
                if(_height != tHeight)
                    _height = tHeight + 20;
    //            console.log(bHeight+"__"+dHeight+"____"+_height);
            }
            if(_height<600){
                _height = 600
            }
            _iframe.height = _height;
        } catch (ex) {
        }
    }
    
    function setViewHeight(o,top,sideimg,foot){
        var topH = 0 ,
            sideimgH = 0 ,
            footH = 0;
    
        var vh = $(window).height();
        var oH = 0;
    
        if($(top).length>0){topH = $(top).height()};
        if($(sideimg).length>0){sideimgH = $(sideimg).height()};
        if($(foot).length>0){footH = $(foot).height()};
    
        var oH_temp = vh-topH-sideimgH-footH;
        if(oH_temp>0){
            oH = oH_temp;
        }else{
            oH = 0;
        }
    
        $(o).css({'height':'auto','minHeight':oH+'px','_height':oH+'px'});
    }
    
    function setCurNavClass(){
         var locationStr = window.location.href;
       //  console.log(locationStr);
         locationStr = locationStr.substr(locationStr.lastIndexOf("/"));
       //  console.log(locationStr);
         var ahref;
         $("#nav a").each(function(){
             if($(this).attr("target") != "_blank"){
                   ahref = $(this).attr("href");
                   ahref = ahref.substr(ahref.lastIndexOf("/"));
                   if(locationStr == ahref){
                       $(this).addClass("cur");
                   }
             }
         });
    }
    
    
    
    /*ÑÐ¾¿ÐÍ½ÌÑ§ Ð¡×éµÄµã»÷Õ¹¿ªÓëÏÔÊ¾*/
    function issueGroupClickExpend(issueGroup){
        var issuegroup = $(issueGroup);
    
    
        function doClickExpend(o){
            var list = $(' ul.list', o);
            if(list.css('display')=='none'&&!list.is(':animated')){
                $(' ul.list', o).fadeIn(400);
            }else if(!list.is(':animated')){
                $(' ul.list', o).fadeOut(400);
            }
    
        }
    
        issuegroup.each(function(i){
            var that = $(this);
            $('>span' , $(this)).click(function(){
                doClickExpend(that);
            });
        })
    }
    
    
    
    function scrollImg(){
        /*Õ¹Ê¾Í¼µÄÇÐ»»*/
        $(".sideimg div[data-image]").each(function(){
              $(this).css("background-image","url("+$(this).data("image")+")");
        });
        var _sideimg = $(".sideimg .blockbody ul>li");
        var _jsSideUl = $("<ul class='siul'></ul>");
        for(var i=0;i<_sideimg.length;i++){
            $("<li></li>").appendTo(_jsSideUl);
        }
        _jsSideUl.appendTo($(".sideimg"));
        var _sideli = $("li",_jsSideUl);
        var _index = 1,timer = "",offset = 4000;
        var _simg = _sideimg.length;
    
        _sideli.eq(0).addClass("click");//¸øµÚÒ»¸öÂÖ²¥Í¼Ö¸Ê¾Æ÷Ìí¼ÓÑùÊ½
        for(var j=0; j<_sideimg.length; j++){//ÎªÂÖ²¥Í¼LIÉèÖÃz-index
            _sideimg[j].style.zIndex = _sideimg.length-j;
        }
        var showIndex = function() {
            if (_index < _simg) {
                _sideimg.eq(_index).fadeIn(1000).siblings("li").fadeOut(1100);
                _sideli.eq(_index).addClass("click").siblings().removeClass("click");
                _index++;
            } else {
                _index = 0;
                _sideimg.eq(_index).fadeIn(1000).siblings("li").fadeOut(1100);
                _sideli.eq(_index).addClass("click").siblings().removeClass("click");
            }
        };
    
        timer = setInterval(showIndex, offset);
    
        _sideli.each(function(i){
            $(this).click(function(){
                clearInterval(timer);
                _index = i;
                timer = setInterval(showIndex, offset);
                $(this).addClass("click").siblings().removeClass("click");
                _sideimg.eq(i).fadeIn(1000).siblings().fadeOut(1100);
            });
        });
    }
    
    
    
    
    
    
    
    
    
    