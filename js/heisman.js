var navShow = $(window).scroll(function () {


    var when = $(window).scrollTop();

    if (when < 637) {
        $("#headOverlay").show();
    } else if (when > 1160) {
        $("#headOverlay").hide();
    }
    console.log(when);
});