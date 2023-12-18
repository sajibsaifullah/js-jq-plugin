$(document).ready(function () {
  $(".slick-container").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
      },
    ],
  });
});
