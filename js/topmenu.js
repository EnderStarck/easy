$(document).ready(function(){
    $('.topmenu a').click(function(){
        /*задали какой мы хотим отступ от верха страницы*/
        var otstupTop=105;
        $('body,html').animate({
        /*получили положение элемента вычли отступ и прокрутили*/
           scrollTop: $($(this).attr('href')).offset().top-otstupTop
        }, 500);
    });
});