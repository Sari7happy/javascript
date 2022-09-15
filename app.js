$(function(){

$('a[href^="#"]').click(function(){
    let href=$(this).attr("href");
    let target=$(href== "#"||href==""?'html':href);
    let position=target.offset().top;
    $("html,body").animate({screenTop:position},600,"swing");
    return false
    });
});