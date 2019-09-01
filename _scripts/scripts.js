var $ = require('jquery');

// (function($) {
//   // You pass-in jQuery and then alias it with the $-sign
//   // So your internal code doesn't change
// })(jQuery);

$(document).ready(function () {
  var mobileHover = function() {
    $('*').on('touchstart', function() {
      $(this).trigger('hover');
    }).on('touchend', function() {
      $(this).trigger('hover');
    });
  };
  
  mobileHover();
})
