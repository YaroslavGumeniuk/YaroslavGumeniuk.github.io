function setButtotUp() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $(".pageup").fadeIn();
        } else {
            $(".pageup").fadeOut();
        }
    });

    $("a[href^=#catalog], a[href^=#promo]").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $("body, html").animate({ scrollTop: destination }, 800); // скорость
        return false;
    });
}
setButtotUp();

new WOW().init();

// function feedsAnimate() {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 3200) {
//             $(".feed__item").addClass("animate__animated animate__fadeInUp");
//         } else {
//             $(".feed__item").removeClass("animate__animated animate__fadeInUp");
//         }
//     });
// }
// feedsAnimate();

// window.onscroll = function () {
//     var scrolled = window.pageYOffset;
//     console.log("Позиция скрола: " + scrolled);
// };
