$(document).ready(function() {
   $('.hamburguer').click( function() {
      $('.hamburguer').toggleClass('active');
      $('.nav-menu').toggleClass('active');
   });

   $('.nav-link').each(function() {
      $(this).on('click', function() {
         $('.hamburguer').removeClass('active');
         $('.nav-menu').removeClass('active');
      });
   });
});