/* ---------------------------------------------
 common scripts
 --------------------------------------------- */

;(function () {

    "use strict"; // use strict to start

    /* ---------------------------------------------
     tb preloader init
     --------------------------------------------- */
    $(window).on('load', function() {
        $("body").imagesLoaded(function(){
            $(".mt-preloader-circle").fadeOut();
            $("#mt-preloader").delay(200).fadeOut("slow").remove();
        });
    });

    /* ---------------------------------------------
     WOW init
     --------------------------------------------- */
    if (typeof WOW == "function")
    new WOW().init();


    $(document).ready(function () {

        /* ---------------------------------------------
         menu scrolling
         --------------------------------------------- */

        $("#mt-nav li a, .go-down a").click(function(e) {
            e.preventDefault();
            var element_id = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(element_id).offset().top -60
            },500);
        });


        /* ---------------------------------------------
         add sticky
         --------------------------------------------- */


        $(window).scroll(function () {
            var wSize = $(window).width();
            if (wSize > 800 && $(this).scrollTop() > 1) {
                $('#header').addClass("sticky");
            }
            else {
                $('#header').removeClass("sticky");
            }
        });



        /* ---------------------------------------------
         testimonial
         --------------------------------------------- */

        if ($.fn.owlCarousel) {

            $("#testimonial-feed").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 1,
                navigation : false,
                pagination: true,
                itemsDesktop : [1000,3], //5 items between 1000px and 901px
                itemsDesktopSmall : [900,2], // betweem 900px and 601px
                itemsTablet: [600,1], //2 items between 600 and 0
                itemsMobile : [479,1] // itemsMobile disabled - inherit from itemsTablet option
            });

        }

        /* ---------------------------------------------
         portfolio filtering
         --------------------------------------------- */

        var $portfolio = $('.mt-portfolio');
        if ($.fn.imagesLoaded && $portfolio.length > 0) {
            imagesLoaded($portfolio, function () {
                $portfolio.isotope({
                    itemSelector: '.portfolio-item',
                    filter: '*'
                });
                $(window).trigger("resize");
            });
        }

        $('.portfolio-filter').on('click', 'a', function (e) {
            e.preventDefault();
            $(this).parent().addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $portfolio.isotope({filter: filterValue});
        });


        /* ---------------------------------------------
         Back To Top
         --------------------------------------------- */

        $('body').append('<a id="tb-scroll-to-top" data-scroll class="tb-scroll-to-top-hide" href="#"><i class="fa fa-angle-up"></i></a>');

        var tbScrollBack = $('#tb-scroll-to-top');
        $(window).on('scroll', function() {
            if($(this).scrollTop() > 250 ) {
                tbScrollBack
                .addClass('tb-scroll-to-top-show')
                .removeClass('tb-scroll-to-top-hide');
            } else {
                tbScrollBack
                .addClass('tb-scroll-to-top-hide')
                .removeClass('tb-scroll-to-top-show');
            }
        });

        tbScrollBack.on('click', function(e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 400 );
        });

    });

})(jQuery);