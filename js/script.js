$(document).ready(function() {
    var wh = $(window).height();

    // freeze screen when logo is in play, then logo fade out
    $(function() {
        var body = $("html,body");
        var top = body.scrollTop();
        body.css({ overflow: 'hidden', height: '100%' });
        setTimeout(function() {
            body.css({ overflow: 'auto', 'overflow-x': 'hidden', height: 'auto' })
        }, 4000)
        if (top != 0) {
            body.animate({ scrollTop: 0 }, '0');
        }
        $("#logo").delay(2500).fadeOut(1000);
    });

    // after logo fadeout, show welcome, and sidenav and header in the backgroud.
    $("#welcome").delay(4000).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
    $("header").delay(5000).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
    $(".selection").delay(5000).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
    $(".sidenav").delay(5000).css({ opacity: 0.0, visibility: "visible" }).animate({ left: 10, opacity: 1.0 }, 1000)


    // show and hide the hidden nav bar
    function showhide() {
        var btn = $("#btn_menu i")
        var disabled = $("#btn_menu i").attr("disabled");
        if (typeof disabled == typeof undefined) {
            if (btn.hasClass("fas fa-bars")) {
                btn.removeClass("fas fa-bars");
                btn.addClass("fas fa-times");
            } else {
                btn.removeClass("fas fa-times");
                btn.addClass("fas fa-bars");
            }
            var onPage = $(".selection").css("display");
            if (onPage == "none") {
                $(".selection").css({ opacity: 0.0, "display": "block" }).animate({ opacity: 1.0, right: "+=10" }, 500);
                $(".container-fluid").animate({ opacity: 0.5 }, 500);
                console.log("bar is shown");
            } else {
                $(".selection").animate({ opacity: 0.0, right: "-=10" }, 500);
                $(".container-fluid").animate({ opacity: 1 }, 500);
                setTimeout(function() {
                    $(".selection").css({ "display": "none" })
                }, 500)
                console.log("bar is hidden");
            }
            $(this).attr("disabled", true);
            var that = this;
            setTimeout(function() { $(that).removeAttr("disabled") }, 600);

        }

    }


    $("#submit").click(function() {
        var that = this;
        $(this).attr("disabled", true);
        setTimeout(function() { enableSubmit(that) }, 1000);
    });
    $("#btn_menu i").click(showhide)
    $(".selection li").click(showhide)

    // Hide Header on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }

    // animate for each block
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        $(".sc").each(function() {
            var elemPos = $(this).offset().top;
            if (scroll > elemPos - wh / 1.3) {
                $(this).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
            }
        });
        $(".sc2").each(function() {
            var elemPos = $(this).offset().top;
            if (scroll > elemPos - wh / 1.1) {
                $(this).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
            }
        });
        $(".sc3").each(function() {
            var elemPos = $(this).offset().top;
            if (scroll > elemPos - wh * 1.1) {
                $(this).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
            }
        });
    });
});