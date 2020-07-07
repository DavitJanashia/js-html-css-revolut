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
    $('.hamburger-menu').removeClass('hide').addClass('show');
  });

  $('#my-close').click(function(){
    $('.hamburger-menu').removeClass('show').addClass('hide');
  });

});
