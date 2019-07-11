
//****************************** Global Variables *********************************//
var  winHeight, winWidth, winScrollTop, oldScrollTop = 0,
    servicesLength = $('.service-titles .text-move').length - 1,
    activeService = 0,
    worksLength = $('.portfolio-dots .dots i').length - 1,
    activeWork = 0;

$(document).ready(()=> {
    winWidth = $(window).width();
    winHeight = $(window).height();
});

$(window).resize(()=> {
    winWidth = $(window).width();
    winHeight = $(window).height();
});

$(document).scroll(()=> {
    winScrollTop = $(this).scrollTop();
});
//*********************************************************************************//


//***************************************************************//

$('.burger-btn').click(function() {
   $(this).find('.burger').toggleClass('active');
   $('#mobile-menu').toggleClass('menu-open');
   $('body').toggleClass('menu-open');

});

//***************************************************************//



//************ Services Controllers *************//

$('.service-next-arrow').click(function(ev){
    ev.preventDefault();
    changeService('next');
});

$('.service-prev-arrow').click(function(ev){
    ev.preventDefault();
    changeService('prev');
});


function changeService(navigate) {
    /**** Variables ******/

    var serviceTitles = $('.service-titles .text-move'),
        serviceContents = $('.service-item'),
        length = servicesLength,
        activeIndex, prevIndex, nextIndex;

    /********************/
  

    /**** Active Index Search ******/

    $.each(serviceTitles, function(k, i) {
        activeIndex = $(i).hasClass('active') ? k : '';
        if($.isNumeric(activeIndex)) {
            return false;
        }
    });

    /********************/


    /**** Reseting all classes ******/

    serviceTitles.removeClass('aprev prev active next anext');
    serviceContents.removeClass('aprev prev active next anext');

    /********************/


    /**** prevIndex and nextIndex ******/

    if(isNaN(Number(navigate))) {
        if(navigate == 'prev') {
            // activeIndex = 0 == activeIndex ? activeIndex : activeIndex-1;
            if(activeIndex === 0) {
                activeIndex = 0;
                changeSection('prev');
            } else activeIndex -= 1;
        }
        else {
            // activeIndex = length == activeIndex ? activeIndex : activeIndex+1;
            if(activeIndex === length) {
                activeIndex = length;
                changeSection('next');
            } else activeIndex+=1;
        }
    } else {
        if(navigate == 0) activeIndex = 0;
        else if(navigate >= length) activeIndex = length;
    }

    activeService = activeIndex;

    prevIndex = activeIndex-1 < 0 ? '' : activeIndex-1;
    nextIndex = activeIndex+1 > length ? '' : activeIndex+1;

    /********************/


    /**** Arrow animation ******/

    var arrow = navigate == 'next' ? '.service-next-arrow' : '.service-prev-arrow';

    $(arrow).addClass('animate');

    setTimeout(function() {
        $(arrow).removeClass('animate');
    }, 300);


    /********************/


    /**** Hiding Arrows ******/

    if(activeIndex == 0) {
        $('.service-arrow').removeClass('hidden');
        $('.service-prev-arrow').addClass('hidden');
    }
    else if(activeIndex == length) {
        $('.service-arrow').removeClass('hidden');
        $('.service-next-arrow').addClass('hidden');
    }
    else {
        $('.service-arrow').removeClass('hidden');
    }

    /********************/


    /**** showing services ******/

    if(prevIndex && prevIndex !== 0) {
        for (var i = 0; i < prevIndex; i++) {
            $(serviceTitles[i]).addClass('aprev');
            $(serviceContents[i]).addClass('aprev');
        }
    }

    if(nextIndex && nextIndex !== length) {
        for (var i = length; i > nextIndex; i--) {
            $(serviceTitles[i]).addClass('anext');
            $(serviceContents[i]).addClass('anext');
        }
    }

    $(serviceTitles[prevIndex]).addClass('prev');
    $(serviceContents[prevIndex]).addClass('prev');

    $(serviceTitles[activeIndex]).addClass('active');
    $(serviceContents[activeIndex]).addClass('active');

    $(serviceTitles[nextIndex]).addClass('next');
    $(serviceContents[nextIndex]).addClass('next');

    activeIndex = '';

    /********************/
}

//**********************************************//


//************ Works Controllers *************//

$('.prev-work').click(function(ev) {
    ev.preventDefault();
    changeWork('prev');
});

$('.next-work').click(function(ev) {
    ev.preventDefault();
    changeWork('next');
});


function changeWork(navigate) {
    /**** Variables ******/

    var workDots = $('.portfolio-dots .dots i'),
        portfolioCards = $('.portfolio-card'),
        portfolioImages = $('.portfolio-images-cont a'),
        length = workDots.length - 1,
        activeIndex, prevIndex, nextIndex;

    /********************/


    /**** Active Index Search ******/

    $.each(workDots, function(k, i) {
        activeIndex = $(i).hasClass('active') ? k : '';
        if($.isNumeric(activeIndex)) {
            return false;
        }
    });


    /********************/


    /**** Reseting all classes ******/

    workDots.removeClass('aprev prev3 prev2 prev active next next2 next3 anext');
    portfolioCards.removeClass('aprev prev active next anext');
    portfolioImages.removeClass('active');

    /********************/


    /**** prevIndex and nextIndex ******/

    if(navigate == 'prev') {
        // activeIndex = 0 == activeIndex ? activeIndex : activeIndex-1;
        if(activeIndex === 0) {
            activeIndex = 0;
            changeSection('prev');
        } else activeIndex -= 1;
    }
    else {
        // activeIndex = length == activeIndex ? activeIndex : activeIndex+1;
        if(activeIndex === length) {
            activeIndex = length;
            changeSection('next');
        } else activeIndex+=1;
    }



    prevIndex = activeIndex-1 < 0 ? '' : activeIndex-1;

    nextIndex = activeIndex+1 > length ? '' : activeIndex+1;



    /********************/


    /**** Arrow animation ******/

    // var arrow = navigate == 'next' ? '.service-next-arrow' : '.service-prev-arrow';
    //
    // $(arrow).addClass('animate');
    //
    // setTimeout(function() {
    //     $(arrow).removeClass('animate');
    // }, 300);


    /********************/


    /**** Hiding Arrows ******/

    if(activeIndex == 0) {
        $('.portfolio-arrow').removeClass('hidden');
        $('.prev-work').addClass('hidden');
    }
    else if(activeIndex == length) {
        $('.portfolio-arrow').removeClass('hidden');
        $('.next-work').addClass('hidden');
    }
    else {
        $('.portfolio-arrow').removeClass('hidden');
    }

    /********************/


    /**** showing services ******/

    if(prevIndex && prevIndex !== 0) {
        for (var i = 0; i < prevIndex; i++) {
            $(workDots[i]).addClass('aprev');
            $(portfolioCards[i]).addClass('aprev');
            // $(portfolioImages[i]).addClass('aprev');
        }
    }

    // console.log(next3Index);

    if(nextIndex && nextIndex !== length) {
        for (var i = length; i > nextIndex; i--) {
            $(workDots[i]).addClass('anext');
            $(portfolioCards[i]).addClass('anext');
            // $(portfolioImages[i]).addClass('anext');
        }
    }


    $(workDots[prevIndex]).addClass('prev');
    $(portfolioCards[prevIndex]).addClass('prev');
    // $(portfolioImages[prevIndex]).addClass('prev');

    $(workDots[activeIndex]).addClass('active');
    $(portfolioCards[activeIndex]).addClass('active');
    $(portfolioImages[activeIndex]).addClass('active');

    $(workDots[nextIndex]).addClass('next');
    $(portfolioCards[nextIndex]).addClass('next');
    // $(portfolioImages[nextIndex]).addClass('next');


    var prevDots = $('.portfolio-dots .dots i.aprev'),
        nextDots = $('.portfolio-dots .dots i.anext');

    prevDots.eq(-1)
        .removeClass('aprev')
        .addClass('prev2');

    prevDots.eq(-2)
        .removeClass('aprev')
        .addClass('prev3');

    nextDots.eq(0)
        .removeClass('anext')
        .addClass('next2');

    nextDots.eq(1)
        .removeClass('anext')
        .addClass('next3');


    activeIndex = '';

    /********************/
}

//**********************************************//






var scrolling = false;


//************ Sections Controllers *************//

$('.sections-control-btns .prev').click(function (ev) {
    ev.preventDefault();
    if(!scrolling) changeSection('prev');
});

$('.sections-control-btns .next').click(function (ev) {
    ev.preventDefault();
    if(!scrolling) changeSection('next');
});

$('.menu-items a').click(function(ev) {
   ev.preventDefault();
    if(!scrolling) changeSection($(this).attr('href').substring(1));
    
});


$('#mobile-menu .menu a').click(function(ev) {
    ev.preventDefault();
    if(!scrolling) {
        changeSection($(this).attr('href').substring(1));
        $('.burger-btn .burger').removeClass('active');
        $('#mobile-menu').removeClass('menu-open');
        $('body').removeClass('menu-open');
    }
});

$(document).ready(function() {

    animateHomeText(200);

    window.addEventListener("orientationchange", function(event) {
        if (window.orientation == 90 || window.orientation == -90) {


        }
    });


    const portfolioImages = $('.portfolio-images-cont a');
    portfolioImages.each(function (k,it) {
       $(it).css("background-color", "#"+$(it).data('bg-color'));
    });


    //Preventing Scroll
    $(document).on("mousewheel DOMMouseScroll", (e)=> {
        if (!scrolling) {
            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                if($(e.target).hasClass('services-cont') || $(e.target).closest('.services-cont').length > 0) {
                    if($(e.target).closest('.service-description').length > 0 && $(e.target).closest('.service-description').hasScrollBar()) {
                    }
                    else changeService('prev');
                }
                else if($(e.target).hasClass('portfolio') || $(e.target).closest('.portfolio').length > 0) {
                    changeWork('prev');
                }
                else {
                    changeSection('prev');
                }
            }
            else {
                if($(e.target).hasClass('services-cont') || $(e.target).closest('.services-cont').length > 0) {
                    if($(e.target).closest('.service-description').length > 0 && $(e.target).closest('.service-description').hasScrollBar()) {

                    }
                    else changeService('next');
                }
                else if($(e.target).hasClass('portfolio') || $(e.target).closest('.portfolio').length > 0) {
                    changeWork('next');
                }
                else {
                    changeSection('next');
                }
            }

            scrolling = true;
            setTimeout(()=> {
                scrolling = false;
            }, 1200);
        }
    });

    var ts;
    $(document).bind('touchstart', function (e){
        ts = e.originalEvent.touches[0].clientY;
    });

    $(document).bind('touchend', function (e){
        var te = e.originalEvent.changedTouches[0].clientY;
        if (!scrolling && Math.abs(ts-te) > 30) {
            if (ts > te) {
                if($(e.target).hasClass('services-cont') || $(e.target).closest('.services-cont').length > 0) {
                    if($(e.target).closest('.service-description').length > 0 && $(e.target).closest('.service-description').hasScrollBar()) {
                    }
                    else changeService('next');
                }
                else if($(e.target).hasClass('portfolio-cont') || $(e.target).closest('.portfolio-cont').length > 0) {
                    changeWork('next');
                }
                else {
                    changeSection('next');
                }
            }
            else {
                if($(e.target).hasClass('services-cont') || $(e.target).closest('.services-cont').length > 0) {
                    if($(e.target).closest('.service-description').length > 0 && $(e.target).closest('.service-description').hasScrollBar()) {
                    }
                    else changeService('prev');
                }
                else if($(e.target).hasClass('portfolio-cont') || $(e.target).closest('.portfolio-cont').length > 0) {
                    changeWork('prev');
                }
                else {
                    changeSection('prev');
                }
            }

            scrolling = true;
            setTimeout(()=> {
                scrolling = false;
            }, 1200);
        }
    });
    //End Preventing Scroll

    //Section Scroll
    //Keyboard arrows actions
    $(document).on('keydown', (e)=> {
        if(!scrolling) {
            if (e.which == 37 || e.which == 38) {
                changeSection('prev');
            }
            else if(e.which == 39 || e.which == 40){
                changeSection('next');
            }

            scrolling = true;
            setTimeout(()=> {
                scrolling = false;
            }, 1200);
        }
    });



});

function changeSection(navigate) {
    /**** Variables ******/

    var sections = $('main#page-container section'),
        length = sections.length - 1,
        activeIndex, prevIndex, nextIndex;

    /********************/

    /**** Active Index Search ******/

    $.each(sections, function(k, i) {
        activeIndex = $(i).hasClass('active-section') ? k : '';
        if($.isNumeric(activeIndex)) {
            return false;
        }
    });

    /********************/


    /**** Reseting all classes ******/

    sections.removeClass('aprev-section prev-section active-section next-section anext-section');

    /********************/


    /**** prevIndex and nextIndex ******/

    if(navigate == 'prev') {
        activeIndex = 0 == activeIndex ? activeIndex : activeIndex-1;
    }
    else if(navigate == 'next') {
        activeIndex = length == activeIndex ? activeIndex : activeIndex+1;
    }
    else {
        activeIndex = sections.index($('main#page-container section[data-hash="'+navigate+'"]'));
    }


    prevIndex = activeIndex-1 < 0 ? '' : activeIndex-1;
    nextIndex = activeIndex+1 > length ? '' : activeIndex+1;

    /********************/


    /**** Hiding Arrows ******/

    if(activeIndex == 0) {
        $('.sections-control-btns a').removeClass('hidden');
        $('.sections-control-btns .prev').addClass('hidden');
        animateHomeText(1000);
    }
    else if(activeIndex == length) {
        $('.sections-control-btns a').removeClass('hidden');
        $('.sections-control-btns .next').addClass('hidden');
    }
    else {
        $('.sections-control-btns a').removeClass('hidden');
    }

    /********************/


    var section = $(sections[activeIndex]),
        hashName = section.data('hash');

    $('.menu-items a').removeClass('active');

    $('.menu-items a[href="#'+hashName+'"]').addClass('active');
    // window.location.hash = hashName;


    /**** showing services ******/

    if(prevIndex && prevIndex !== 0) {
        for (var i = 0; i < prevIndex; i++) {
            $(sections[i]).addClass('aprev-section');
        }
    }

    if(nextIndex && nextIndex !== length) {
        for (var i = length; i > nextIndex; i--) {
            $(sections[i]).addClass('anext-section');
        }
    }


    if($(sections[activeIndex]).attr('id') == 'services') {
        changeService(0);
    }

    $(sections[prevIndex]).addClass('prev-section');

    $(sections[activeIndex]).addClass('active-section');

    $(sections[nextIndex]).addClass('next-section');

    activeIndex = '';

    /********************/
}

//**********************************************//

$('.mobile-form-btn a').click(function(ev){
    ev.preventDefault();
   $("#mobile-form").fadeIn();
});

$(document).on("click", ".modal .modal-close", function(ev) {
    ev.preventDefault();
    $(this).closest(".modal").fadeOut("fast");
    $("body").removeClass("modal-open");
});

$(window).click(function(e) {
    if(e.target.className == 'modal') {
        $(e.target).fadeOut();
        $("body").removeClass("modal-open");
    }
    else if(e.target.className == 'modal-container') {
        $(e.target).closest(".modal").fadeOut();
        $("body").removeClass("modal-open");
    }
});




$(".ui-animated input").focus(function(){
    $(this).closest(".form-group").addClass("focused");
});
$(".ui-animated input").blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
        $(this).removeClass('filled');
        $(this).closest(".form-group").removeClass('focused');
    } else {
        $(this).addClass('filled');
    }
});

$(".ui-animated textarea").focus(function(){
    $(this).closest(".form-group").addClass("focused");
});
$(".ui-animated textarea").blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
        $(this).removeClass('filled');
        $(this).closest(".form-group").removeClass('focused');
    } else {
        $(this).addClass('filled');
    }
});


(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);

function animateHomeText(time) {
    setTimeout(function(){
        $('.home-title').addClass('animate');
    }, time);
    setTimeout(function(){
        $('.home-title').removeClass('animate');
    },time + 1500);
}




