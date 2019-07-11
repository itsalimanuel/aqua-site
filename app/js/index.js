$(document).ready(function () {
    $('.link-website').click(function(){
        $('nav').toggleClass('nav-active');
        $('.btn-click').removeClass('start-animation');
        $('.btn-click').toggleClass('start-animation');
    })
    $('.btn-row').click(function(){
        $('.thanks').toggleClass('thanks-active')
    })
  

})