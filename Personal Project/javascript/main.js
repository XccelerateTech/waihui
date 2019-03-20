$(document).ready(function () {
    let scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
    });

    $('ul li a').click(function (e) {
        $('#mainNavbar').collapse('toggle');
    })

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('#header').hide();
        }
        else {
            $('#header').show();
        }
    })

    let position = $(window).scrollTop();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll < position) {
            $('#header').show();
        }
        else if (scroll == position) {
            $('#header').show();
        }
        position = scroll;
    });
})