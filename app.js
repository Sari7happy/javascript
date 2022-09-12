$(function(){
    $('.menu-trigger').on('click',function(event){
        $(this).toddleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
    });
});
