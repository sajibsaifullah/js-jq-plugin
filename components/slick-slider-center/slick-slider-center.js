$(document).ready(function () {
  $(".slick-container").slick({
    infinite: true,
    speed: 500,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
            slidesToShow: 3
        },
      },
      {
        breakpoint: 767,
        settings: {
            slidesToShow: 1
        },
      },
      {
        breakpoint: 575,
        settings: {
            slidesToShow: 1
        },
      },
    ],
  });
});
