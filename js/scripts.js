// ==========================================
// NOVA WEBSITE - jQuery Enhanced Scripts
// Responsive interactions with jQuery
// ==========================================

// jQuery is expected to be loaded via CDN in the HTML head
// Ensure jQuery is loaded before this script runs

(function($) {

    /* ==========================================
       Mobile Navigation Toggle
       ========================================== */
    $('.mobile-toggle').on('click', function() {
        $('.nav-links').slideToggle('fast');
        $(this).toggleClass('active');
        
        // Toggle between times and bars
        if ($(this).hasClass('active')) {
            $(children = 'span').html('&times;');
        } else {
            $(children = 'span').html('&#9776;');
        }
    });

    // Close mobile nav when a link is clicked
    $('.nav-links a').on('click', function() {
        if ($('.nav-links').is(':visible')) {
            $('.nav-links').slideUp('fast');
            $('.mobile-toggle').removeClass('active');
        }
    });

    /* ==========================================
       Sticky Header with Shadow
       ========================================== */
    var header = $('.navbar');
    var scrollThreshold = 50;

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        
        if (scroll > scrollThreshold) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    });

    /* ==========================================
       Smooth Scroll with jQuery
       ========================================== */
    $('a[href*="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        
        if (target.length) {
            e.preventDefault();
            
            var headerHeight = $('.navbar').outerHeight();
            var targetPosition = target.offset().top - headerHeight;
            
            $('html, body').animate({
                scrollTop: targetPosition
            }, 1000, 'easeInOutExpo');
        }
    });

    /* ==========================================
       Navbar Background on Scroll
       ========================================== */
    var lastScrollTop = 0;
    
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        var header = $('.navbar');
        
        if (scroll > 50) {
            header.css({
                'background': 'rgba(15, 23, 42, 0.95)',
                'boxShadow': '0 2px 20px rgba(0, 0, 0, 0.05)'
            });
        } else {
            header.css({
                'background': 'rgba(15, 23, 42, 0.9)',
                'boxShadow': '0 4px 15px rgba(0, 0, 0, 0.1)'
            });
        }
        
        lastScrollTop = scroll;
    });

    /* ==========================================
       Counter/Stat Animation on Load
       ========================================== */
    $('.counter').each(function() {
        var $this = $(this);
        var countTo = $this.attr('data-count');
        
        $this.countTo({
            from: 0,
            to: countTo,
            speed: 3000,
            refreshInterval: 50,
        });
    });

    /* ==========================================
       Progress Bars Animation
       ========================================== */
    $('.progress-bar').each(function() {
        var width = $(this).attr('aria-valuenow') + '%';
        $(this).css({
            width: width,
            transition: 'width 1.5s ease'
        });
    });

    /* ==========================================
       Testimonials Carousel (if exists)
       ========================================== */
    $('.testimonials-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    /* ==========================================
       Counter Up Plugin
       ========================================== */
    if ($.fn.counter) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

    /* ==========================================
       Isotope Portfolio Filter (if exists)
       ========================================== */
    if ($.fn.isotope) {
        var $container = $('.portfolio-gallery');
        
        $container.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        
        // Filter items on button click
        $('.filter-button').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });
    }

    /* ==========================================
       Magnify Popup for Images
       ========================================== */
    if ($.fn.magnificPopup) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                titleSrc: function(item) {
                    return item.el.attr('title') || '';
                }
            }
        });
    }

    /* ==========================================
       Form Validation with jQuery
       ========================================== */
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 3
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            subject: "Please enter a subject",
            message: "Please enter a message"
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                success: function(response) {
                    $('#formResponse')
                        .removeClass('error success')
                        .addClass('success')
                        .html('<i class="fas fa-check-circle"></i> Message sent successfully!')
                        .fadeIn('slow');
                    form.reset();
                },
                error: function() {
                    $('#formResponse')
                        .removeClass('error success')
                        .addClass('error')
                        .html('<i class="fas fa-exclamation-circle"></i> There was an error sending your message.')
                        .fadeIn('slow');
                }
            });
        }
    });

    /* ==========================================
       Parallax Effect for Hero Section
       ========================================== */
    if ($(window).width() > 768) {
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            
            // Parallax on hero background shapes
            $('.shape-1').css('top', (scroll * 0.3) + 'px');
            $('.shape-2').css('bottom', (scroll * 0.2) + 'px');
        });
    }

    /* ==========================================
       Skill Bars Animation on Scroll
       ========================================== */
    var $skillBars = $('.skill-bar');
    
    $(window).on('scroll', function() {
        var oTop = $('.skills-section').offset().top - $(window).height();
        
        if ($(window).scrollTop() > oTop) {
            $skillBars.each(function() {
                var percentage = $(this).attr('data-percent');
                $(this).css({
                    width: percentage
                });
            });
            $(window).off('scroll');
        }
    });

    /* ==========================================
       Ribbon Effect for Buttons (CSS-only, jQuery for trigger)
       ========================================== */
    $('.btn-primary').on('mouseenter', function() {
        var $btn = $(this);
        var btnWidth = $btn.width();
        var btnHeight = $btn.height();
        
        $btn.prepend('<div class="btn-ribbon" style="position: absolute; top: 0; left: 0; width: ' + btnWidth + '; height: ' + btnHeight + '; background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%); transform: rotate(45deg); animation: ribbon 0.6s forwards;"></div>');
        
        setTimeout(function() {
            $('.btn-ribbon').remove();
        }, 600);
    });

    /* ==========================================
       Responsive Grid Adjustments
       ========================================== */
    function adjustGrid() {
        var windowWidth = $(window).width();
        
        if (windowWidth < 992) {
            $('.services-grid .service-card').css('grid-column', 'span 2');
        } else {
            $('.services-grid .service-card').css('grid-column', 'auto');
        }
        
        if (windowWidth < 768) {
            $('.projects-grid .project-card').css('grid-column', 'span 1');
        }
    }
    
    $(window).on('resize', adjustGrid);
    $(window).trigger('resize');

    /* ==========================================
       Lazy Load Images
       ========================================== */
    if ($.fn.lazyload) {
        $("img.lazy").lazyload({
            effect: "fadeIn",
            threshold: 100
        });
    }

    /* ==========================================
       Scroll to Top Button
       ========================================== */
    var $scrollTop = $('#scroll-top');
    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $scrollTop.fadeIn();
        } else {
            $scrollTop.fadeOut();
        }
    });
    
    $scrollTop.on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });

    /* ==========================================
       Initialize All Functions
       ========================================== */
    $(document).ready(function() {
        // All the above functions are initialized here
    });

})(jQuery);