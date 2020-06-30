$(document).ready(function () {
  $(".my_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });

  $(".switch-button").click(function () {
    if ($(".sidebar").hasClass("active")) {
      $(".sidebar").hide(700);
      $(".sidebar").removeClass("active");
      $(".switch-button img").attr("src", "images/arrow-right.png");
    } else {
      $(".sidebar").show(700);
      $(".sidebar").addClass("active");
      $(".switch-button img").attr("src", "images/arrow-left.png");
    }
  });
});
