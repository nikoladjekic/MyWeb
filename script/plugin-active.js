$(document).ready(function () {
    $(".menu-trigger").click(function () {
        $(this).toggleClass('active');
        $(".mobile-menu").toggleClass('visible')
    });
    $('.nav-link').click(function () {
        var dis = $(this),
            disTarget = dis.data('target'),
            ScrollTo = $(disTarget).offset().top;
        dis.addClass('active').siblings('.nav-link').removeClass('active');
        $(".mobile-menu").toggleClass('visible');
        $(".menu-trigger").toggleClass('active');
        $('html,body').animate({
            scrollTop: ScrollTo
        })
    });
    $('.form-wrap input').blur(function () {
        tmpval = $(this).val();
        if (tmpval == '') {
            $(this).addClass('empty');
            $(this).removeClass('not-empty')
        } else {
            $(this).addClass('not-empty');
            $(this).removeClass('empty')
        }
    });
    $('.testimonial-slider').bxSlider({
        auto: !0,
        mode: 'fade',
        infiniteLoop: !0,
        controls: !1
    });
    window.sr = ScrollReveal();
    sr.reveal('.each-service', {
        origin: 'bottom',
        distance: '100px',
        duration: 1000,
        delay: 0,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $("#Header").addClass("header-fixed")
        } else {
            $("#Header").removeClass("header-fixed")
        }
    })
})
