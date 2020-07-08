// fare 2 menu diverse?? o cercare su internet come gestire responsive?
// enter/leave menu
$(document).ready(function() {
$('.parent-dropdown')
  .mouseenter(function() {
    $(this).children('.dropdown').show();
  })
  .mouseleave(function() {
    $(this).children('.dropdown').hide();
  });

$('.h-parent-dropdown').click(function(){
  var myAct = $('.h-parent-dropdown');


  if($(this).children('.h-dropdown').hasClass('ciao') == false){
    $('.h-dropdown').removeClass('ciao');
    $('.h-dropdown').slideUp();
    $(this).children('.h-dropdown').addClass('ciao');
    $(this).children('.h-dropdown').slideDown();
  } else if ($(this).children('.h-dropdown').hasClass('ciao') == true){
    $(this).children('.h-dropdown').removeClass('ciao');
    $(this).children('.h-dropdown').slideUp();

  }

});


  $('.hamburger-icon').click(function() {
    // $(this).children('.dropdown').toggleClass('hide, show');
    $('.hamburger-menu').fadeIn(200)
  });

  $('#my-close').click(function(){
    $('.hamburger-menu').fadeOut(100);
  });

});
