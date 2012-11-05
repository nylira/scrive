$(function() {

$('ul.tabs li.tab').click(function() {
  $('ul.tabs li.tab').removeClass('active');
  $('ul.tab-content li.tab-content').removeClass('active');
  $(this).addClass('active');
  var tab_content = $(this).attr('href');
  $(tab_content).addClass('active');
});

$('#more-videos').toggle(function() {
  $(this).html("Fewer videos &rsaquo;");
  $('ul.more.videos').slideToggle();
}, function() {
  $(this).html("More videos &rsaquo;");
  $('ul.more.videos').slideToggle();
});

$('.action-sign-up').toggle(function() {
  $(this).removeClass('button-blue').text("Cancel");
  $(this).parent().parent().parent().toggleClass("active");
}, function() {
  $(this).addClass('button-blue').text("Sign Up");
  $(this).parent().parent().parent().toggleClass("active");
});

});
