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
        }, 500);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#specials4").offset().top
        }, 500);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#company5").offset().top
        }, 500);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#work6").offset().top
        }, 500);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#recruit7").offset().top
        }, 500);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#footer9").offset().top
        }, 500);

    });
})(jQuery);    
