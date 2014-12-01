var navShow = $(window).scroll(function () {


    var when = $(window).scrollTop();

    if (when > 880) {
        $("#").slideDown();
    } else if (when < 880) {
        $("#").slideUp();
    }
    console.log(when);
});



