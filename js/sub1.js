$(function(){
    var currentSlide = 0;
    $('.btn_prev').click(function(){
        currentSlide <= 0 ? (currentSlide = 0) : currentSlide--;
        // currentSlide--;
        $('.slide ul').animate({ left: -(currentSlide * 100) + '%' })
    });
    $('.btn_next').click(function(){
        currentSlide >= 3 ? (currentSlide = 3) : currentSlide++;
        // currentSlide++;
        $('.slide ul').animate({ left: -(currentSlide * 100) + '%' })
    });
});