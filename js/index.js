$(document).ready(function(){
    /*$("html,body").on("risize",function(){
               var box_h = $("div").height();
                alert(box_h)
                $("div").css({"line-height":box_h});
            });
            */
            var gnbA = $("#gnb >li");
            $(gnbA).eq(0).on('click',function(){
                /*if($("html,body").is(":animated")) return;
                var target = $(this).attr("href");*/
                $("html,body").stop().animate({
                    scrollTop:$("#page1").offset().top+'px'
                },1000);
            });
            $(gnbA).eq(1).on('click',function(){
                /*if($("html,body").is(":animated")) return;
                var target = $(this).attr("href");*/
                $("html,body").stop().animate({
                    scrollTop:$("#page2").offset().top+'px'
                },1000);
            });
            $(gnbA).eq(2).on('click',function(){
                /*if($("html,body").is(":animated")) return;
                var target = $(this).attr("href");*/
                $("html,body").stop().animate({
                    scrollTop:$("#page3").offset().top+'px'
                },1000);
            });
            var top = (($(window).height()-$("#gnb").height())/2);
            $("#gnb").css("top",top);
            
            $(window).scroll(function(){
                var newTop = $(window).scrollTop();
                var move = top + newTop;
                $("#gnb").stop().animate({
                    top:move
                },500);
            });
            gnbA[0].click();
});
