////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// The document ready event executes already when the HTML-Document is loaded //
// and the DOM is ready, even if all the graphics haven't loaded yet.         //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

  var header = $('#header'),
      headerNav = $('#header-nav'),
      headerHamburger = $('#header-hamburger');

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
