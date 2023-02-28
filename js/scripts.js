$('#cryptoOption').on('click', function() { {
  var slide_el = $(this).next().find('.v-dropdown');

  // don't slide up if clicking on the already visible element
  if (!slide_el.is(':visible')) {
    $('.v-dropdown').slideUp();
  }
  slide_el.slideToggle(); // only slide clicked element
  })