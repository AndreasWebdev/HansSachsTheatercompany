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
});