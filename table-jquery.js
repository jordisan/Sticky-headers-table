// jQuery sticky table
var $wrapper = $('.withjquery .table-wrapper');
var $th = $wrapper.find('thead th');
var $td = $wrapper.find('td:first-child');
$wrapper.on('scroll', function() {
  $th.css('transform', 'translateY('+ this.scrollTop +'px)');
  $td.css('transform', 'translateX('+ this.scrollLeft +'px)');
});