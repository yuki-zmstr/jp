$(document).ready(function() {
    var wh = $(window).height();
    var ww = $(window).width();

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
        // $("#content").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);

    /* For the sticky navigation */
    // var lastScrollTop = 0;
    // $(window).scroll(function(event) {
    //     var st = $(this).scrollTop();
    //     if ($("#header").hasClass('up') || $("#header").hasClass('down')) {
    //         if (st > lastScrollTop) {
    //             $("#header").removeClass('up').animate({ opacity: 0.2 }, 500).addClass('down');
    //         } else {
    //             $("#header").removeClass('down').animate({ opacity: 1.0 }, 500).addClass('up')
    //         }
    //     }
    //     lastScrollTop = st;
    // });

    // show and hide the hidden nav bar
    function showhide() {
        var btn = $("#btn_menu i")
        if (btn.hasClass("fas fa-bars")) {
            btn.removeClass("fas fa-bars");
            btn.addClass("fas fa-times");
        } else {
            btn.removeClass("fas fa-times");
            btn.addClass("fas fa-bars");
        }
        console.log('clicked');
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
            }, 1000)
            console.log("bar is hidden");
        }

    }
    $("#btn_menu i").click(showhide)
    $(".selection li").click(showhide)


    /* Navigation scroll */
    // $(function() {
    //     $('a[href*=#]:not([href=#])').click(function() {
    //         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 $('html,body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000);
    //                 return false;
    //             }
    //         }
    //     });
    // });

    // Hide Header on on scroll down
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

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
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
    var start_pos = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var footerPos = $("#footer").offset().top;
        var current_pos = $(this).scrollTop();
        $(".sc").each(function() {
            var elemPos = $(this).offset().top;
            if (scroll > elemPos - wh / 1.3) {
                $(this).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
            }
        });
        if (scroll > footerPos - wh / 1.1) {
            $("#footer").css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
        }

    });

    //   
});




// form validation

// $(function() {
//     $("#form").submit(function(event) {
//         var name = $("#name").val();
//         var message = $("#message").val();
//         validateNameField(name, event);
//         validateMessageField(message, event);
//         if (confirm("Confirm submission")) {
//             alert("Thank you for your message")
//             return
//         } else {
//             event.preventDefault()
//         }
//     });

//     function validateNameField(name, event) {
//         if (name.trim().length < 3) {
//             alert("Please enter a valid name");
//             event.preventDefault();
//         } else {
//             return
//         }
//     };

//     function validateMessageField(message, event) {
//         if (message.trim() == "") {
//             alert("Please enter a valid message");
//             event.preventDefault();
//         } else {
//             return
//         }
//     }
// });