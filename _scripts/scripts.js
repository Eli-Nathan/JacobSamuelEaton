var $ = require('jquery');
var $ = require('bootstrap');

var mobileHover = function() {
  $('*').on('touchstart', function() {
    $(this).trigger('hover');
  }).on('touchend', function() {
    $(this).trigger('hover');
  });
};

mobileHover();
