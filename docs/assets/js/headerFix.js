$(document).ready(function() {
  var headerHeight = $("header").height();
  $(".header-fix").height(headerHeight);

  $("#openMobileMenu").click(function() {
    $(".mobile-offcanvas").addClass('show');
    $(".mobile-offcanvas").animate({opacity: 1}, 150);
  });
  $("#closeMobileMenu").click(function() {
    $(".mobile-offcanvas").animate({opacity: 0}, 150, function() {
      $(".mobile-offcanvas").removeClass('show');
    });
  });
  $(".mobile-offcanvas a").click(function() {
    $(".mobile-offcanvas").animate({opacity: 0}, 150, function() {
      $(".mobile-offcanvas").removeClass('show');
    });
  });

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    if($.attr(this, 'href') == "#") {
      var heightAnchor = 0;
    } else {
      var heightAnchor = $($.attr(this, 'href')).offset().top;
    }
    var correctHeight = heightAnchor - headerHeight - 25;

    $('html, body').animate({
        scrollTop: correctHeight
    }, 500);
  });
});
