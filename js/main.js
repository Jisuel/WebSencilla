
$(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
        $('nav').addClass('header2');
    } else {
        $('nav').removeClass('header2');
    }
});