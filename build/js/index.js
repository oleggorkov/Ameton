jQuery(document).ready(function() {

    $('.main-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: true,
        swipeToSlide: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });


});


