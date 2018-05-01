$(document).ready(function() {

    var x;
    var $winner = $("#winner-animate-img1");
    var $winnerDesk = $("#winner-animate-img2");
    bounceForward();
    bounceForwardDesktop();

    function bounceForward() {
        $winner.animate({
            width: "+=90"
        }, 1000, function() {
            $winner.animate({
                width: "0"
            }, 0, function() {
                bounceForward();
            });
        });
    }


    function bounceForwardDesktop() {
        $winnerDesk.animate({
            width: "+=140"
        }, 1000, function() {
            $winnerDesk.animate({
                width: "0"
            }, 0, function() {
                bounceForwardDesktop();
            });
        });
    }
    if (($(window).width() <= 400) && ($(window).width() > 320)) {
        $("#rectmapid").attr({
            "coords": "25, 85, 100 , 120"
        });
    }

    if (($(window).width() <= 500) && ($(window).width() > 400)) {
        $("#rectmapid").attr({
            "coords": "35, 105, 125 , 145"
        });
    }

    if (($(window).width() <= 600) && ($(window).width() > 500)) {
        $("#rectmapid").attr({
            "coords": "55, 120, 145 , 180"
        });
    }
    if (($(window).width() <= 700) && ($(window).width() > 600)) {
        $("#rectmapid").attr({
            "coords": "75, 145, 175 , 215"
        });
    }
    if (($(window).width() <= 767) && ($(window).width() > 700)) {
        $("#rectmapid").attr({
            "coords": "85, 185, 175 , 245"
        });
    }

    // if (($(window).width() < 630) && ($(window).width() > 580)) {
    //     $("#rectmapid").attr({
    //         "coords": "55, 130, 125 , 170"
    //     });
    // }
    // if (($(window).width() < 680) && ($(window).width() > 630)) {
    //     $("#rectmapid").attr({
    //         "coords": "55, 130, 125 , 170"
    //     });
    // }
    // if (($(window).width() < 730) && ($(window).width() > 680)) {
    //     $("#rectmapid").attr({
    //         "coords": "55, 130, 125 , 170"
    //     });
    // }
    // if (($(window).width() < 768) && ($(window).width() > 730)) {
    //     $("#rectmapid").attr({
    //         "coords": "55, 130, 125 , 170"
    //     });
    // }
});