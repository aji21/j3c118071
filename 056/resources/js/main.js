(function ($) {

    $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
        if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
         $("html,body").stop();
        }
       })

    if ($(window).width() < 768) {
        $('#carousel').css("padding-top",$('#navbar').height());
        console.log($('#navbar').height());
    }

    // scroll functions
    $(window).scroll(function(e) {
        if ($(window).width() > 768)
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.navbar').addClass("navbar-hide");
        } else {
            $('.navbar').removeClass("navbar-hide");
        }
    });
    
    $("#scrollbtn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#nations3").offset().top
        }, 2000);
        $([document.documentElement, document.body]).delay("2500").animate({
            scrollTop: $("#specials4").offset().top
        }, 2000);
        $([document.documentElement, document.body]).delay("2500").animate({
            scrollTop: $("#company5").offset().top
        }, 2000);
        $([document.documentElement, document.body]).delay("2500").animate({
            scrollTop: $("#work6").offset().top
        }, 2000);
        $([document.documentElement, document.body]).delay("2500").animate({
            scrollTop: $("#recruit7").offset().top
        }, 2000);
        $([document.documentElement, document.body]).delay("2500").animate({
            scrollTop: $("#footer9").offset().top
        }, 2000);
    });
    
    $("#gotop").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#nav1").offset().top
        }, 2000);
    });

    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
          var objectTop = $(this).offset().top ;
          if (objectTop < windowBottom) {
            if ($(this).css("opacity")==0) {$(this).delay(1000).fadeTo(500,1);}
          }
        });
      }).scroll();
})(jQuery);    
