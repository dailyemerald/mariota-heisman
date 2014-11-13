var navShow = $(window).scroll(function () {


    var when = $(window).scrollTop();

    if (when < 200) {
        $("#headOverlay").show();
    } else if (when > 320) {
        $("#headOverlay").hide();
    }
    console.log(when);
});