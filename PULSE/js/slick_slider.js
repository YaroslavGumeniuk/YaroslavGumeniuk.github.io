$(document).ready(function () {
    $(".carousel__inner").slick({
        infinite: true,
        speed: 600,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1200,
        // fade: true,
        // cssEase: "linear",
        prevArrow:
            '<button type="button" class="slick-prev"><img src="icons/prev.svg"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="icons/next.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                },
            },
        ],
    });
});
