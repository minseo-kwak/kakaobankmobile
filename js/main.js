$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() + 200 > $('.con4').offset().top){
            $('.con4').addClass('bgdark');
        } else {
            $('.con4').removeClass('bgdark');
        }
    })
})