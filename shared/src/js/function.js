(function($) {
  "use strict";
  
  /*--------------------------------------------
                Active class jquery
  ---------------------------------------------*/
  $("ul.navber_list li").on("click", function() {
    $(this)
      .siblings()
      .removeClass("active");
    $(this).addClass("active");
  });


  /*--------------------------------------------
               Wow Js Jquery
  ---------------------------------------------*/
  new WOW().init();


  /*--------------------------------------------
              Click Search Jquery
  ---------------------------------------------*/
  $(".add_search").on("click", function() {
    $(".search_bar_sp").addClass("open");
  });
  $(".remove_search").on("click", function() {
    $(".search_bar_sp").removeClass("open");
  });


  /*--------------------------------------------
             Sticky Menu Jquery
  ---------------------------------------------*/
  var fixed_top = $("header");
  var width = $(window).width();
  $(window).on("scroll", function() {
    if ($(this).scrollTop() >= 70 && width <= 991) {
      fixed_top.addClass("menu-fixed animated fadeInDown");
    } else {
      fixed_top.removeClass("menu-fixed animated fadeInDown");
    }
  });

})(jQuery);
