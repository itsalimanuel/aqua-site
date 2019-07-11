$(document).ready(function () {
    $('.link-website').click(function(){
        $('nav').toggleClass('nav-active');
        $('.btn-click').removeClass('start-animation');
        $('.btn-click').toggleClass('start-animation');
    })
    $('.btn-row').click(function(ev){
        ev.preventDefault();

        $('.thanks').toggleClass('thanks-active')
        $('.thanks-overlay').toggleClass('active')
    });


    $('.thanks').click(function() {

        $('.thanks').removeClass('thanks-active')
        $('.thanks-overlay').removeClass('active')
    });
})