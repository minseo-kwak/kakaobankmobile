$(function(){
    $('.all > li > a').click(function(){
        $(this).toggleClass('active');
        $(this).next().toggle();
        return false;
    });

    $('.qna li a').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
        return false;
    });

    $('#sword').on('keyup', function(){
        var value = $(this).val();
        if(value !== '') {
            $('.qna li a').filter(function(){
                $('.qna').show();
                $(this).toggle($(this).text().indexOf(value) > -1)
            });
        } else {
            $('.qna').hide();
        }
    });
});