(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        // Initialize Hero Carousel
        function initHeroCarousel() {
            if ($('.hero-carousel').length) {
                $('.hero-carousel').owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 7000,
                    autoplayHoverPause: true,
                    smartSpeed: 1200,
                    dots: true,
                    nav: false,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    mouseDrag: false,
                    touchDrag: true,
                    onInitialized: function() {
                        // Animate first slide content
                        animateSlideContent(0);
                    },
                    onTranslated: function(event) {
                        // Animate active slide content
                        var current = event.item.index;
                        animateSlideContent(current);
                    }
                });
            }
        }
        initHeroCarousel();
    });

    // Animate slide content
    function animateSlideContent(index) {
        var $slide = $('.hero-carousel .owl-item').eq(index).find('.hero-slide');
        if ($slide.length) {
            // Reset animations
            $slide.find('[data-anim]').css({
                'opacity': '0',
                'transform': 'translateY(20px)'
            });
            
            // Animate with delays
            $slide.find('[data-anim="fadeDown"]').each(function(i) {
                var $el = $(this);
                setTimeout(function() {
                    $el.css({
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    }).css('transition', 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)');
                }, i * 150);
            });
            
            $slide.find('[data-anim="fadeUp"]').each(function(i) {
                var $el = $(this);
                setTimeout(function() {
                    $el.css({
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    }).css('transition', 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)');
                }, 200 + i * 150);
            });
            
            $slide.find('[data-anim="fadeRight"]').each(function(i) {
                var $el = $(this);
                setTimeout(function() {
                    $el.css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    }).css('transition', 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)');
                }, 300 + i * 150);
            });
            
            $slide.find('[data-anim="fadeLeft"]').each(function(i) {
                var $el = $(this);
                setTimeout(function() {
                    $el.css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    }).css('transition', 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)');
                }, 300 + i * 150);
            });
            
            $slide.find('[data-anim="fadeInScale"]').each(function(i) {
                var $el = $(this);
                setTimeout(function() {
                    $el.css({
                        'opacity': '1',
                        'transform': 'scale(1)'
                    }).css('transition', 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)');
                }, 400 + i * 150);
            });
        }
    }

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });
    
})(jQuery);

