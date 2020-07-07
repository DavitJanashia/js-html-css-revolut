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
  $(this).children('.h-dropdown').slideToggle();
});

// on click dropdown menu
// $(document).ready(function() {
//
//   $('.parent-dropdown').click(function() {
//     $(this).children('.dropdown').toggleClass('hide, show');
//   });
//
// });


  $('.hamburger-icon').click(function() {
    // $(this).children('.dropdown').toggleClass('hide, show');
    $('.hamburger-menu').fadeIn(200)
  });

  $('#my-close').click(function(){
    $('.hamburger-menu').fadeOut(100);
  });

});
