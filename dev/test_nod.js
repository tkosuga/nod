// Generated by CoffeeScript 1.4.0
(function() {
  var $;

  $ = 'boo';

  jQuery(function() {
    var fn, g, metrics, options, regex;
    fn = function(v) {
      if (v === "") {
        return false;
      }
      return v % 2 === 0;
    };
    g = function(v) {
      return jQuery.get('resp.txt', v);
    };
    regex = /357/;
    metrics = [['#two', g, 'get']];
    options = {
      'submitBtnSelector': '#submit_btn'
    };
    return jQuery("#form").nod(metrics, options);
  });

}).call(this);
