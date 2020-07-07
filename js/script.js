// fare 2 menu diverse?? o cercare su internet come gestire responsive?
// enter/leave menu

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
