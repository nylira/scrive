$(function() {

$('ul.tabs li.tab').click(function() {
  $('ul.tabs li.tab').removeClass('active');
  $('ul.tab-content li.tab-content').removeClass('active');
  $(this).addClass('active');
  var tab_content = $(this).attr('href');
  $(tab_content).addClass('active');
})

$('select').select2();

});
