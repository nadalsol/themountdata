////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// The document ready event executes already when the HTML-Document is loaded //
// and the DOM is ready, even if all the graphics haven't loaded yet.         //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

  var header = $('#header'),
      headerHamburger = $('#header-hamburger'),
      headerNav = $('#header-nav'),
      services = $('#services'),
      navSecondaryServices = $('#nav-secondary-services'),
      solutions = $('#solutions'),
      navSecondarySolutions = $('#nav-secondary-solutions');

  /**
   * Manage `is-sticky` state for `header`
   */
  // var toggleIsSticky = function() {
  //   var scrollTop = $(window).scrollTop();
  //   if (scrollTop > 0) {
  //     header.addClass('is-sticky');
  //   } else {
  //     header.removeClass('is-sticky');
  //   }
  // };
  //
  // toggleIsSticky();
  //
  // $(window).scroll(function() {
  //   toggleIsSticky();
  // });

  /**
   * Toggle `nav-secondary-services` visibility, via nav-main menu
   */
  services.click(function(event) {
    event.preventDefault();

    services.addClass('is-active');
    navSecondaryServices.removeClass('is-medium-hidden');

    solutions.removeClass('is-active');
    navSecondarySolutions.addClass('is-medium-hidden');
  });

  /**
   * Toggle `nav-secondary-solutions` visibility, via nav-main menu
   */
  solutions.click(function(event) {
    event.preventDefault();

    solutions.addClass('is-active');
    navSecondarySolutions.removeClass('is-medium-hidden');

    services.removeClass('is-active');
    navSecondaryServices.addClass('is-medium-hidden');
  });

  /**
   * Toggle `header-nav` visibility, via hamburger menu
   */
  headerHamburger.click(function(event) {
    event.preventDefault();
    headerNav.toggleClass('is-small-hidden');
  });

});


////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// The window load event executes a bit later when the complete page          //
// is fully loaded, including all frames, objects and images.                 //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// $(window).on('load', function() {
//
//   // your js code here...
//
// });
