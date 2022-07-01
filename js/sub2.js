$(function(){
    $('.tits h3').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.cons > div').hide();
        $('.cons > div').eq($(this).index()).show();
        return false;
    });
});