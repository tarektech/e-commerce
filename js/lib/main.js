$(function () {
  if ($('.owl-2').length > 0) {
    $('.owl-2').owlCarousel({
      center: false,
      items: 1,
      loop: false,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      nav: false,
      dots: false,
      pauseOnHover: false,
      autoWidth: true,
      responsive: {
        600: {
          margin: 0,
          nav: true,
          items: 2,
        },
        1000: {
          margin: 0,
          stagePadding: 0,
          nav: true,
          items: 3,
        },
      },
    });
  }
});