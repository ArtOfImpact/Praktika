$(document).ready(function(){
    $('.menu-logo').click(function(event){
        $('.menu-logo,.menu').toggleClass('active');
    });
});


new Swiper('.image-slider',{

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
},
    pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
},
});