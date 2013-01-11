/*jslint
  browser : true, continue  : true, devel   :   true,
  indent  : 2,    maxerr    : 50,   newcap  :   true,
  nomen   : true, plusplus  : true, regexp  :   true,
  sloppy  : true, vars      : true, white   :   true
*/

/* global jQuery */
var spa = (function ( $ ) {
  // Module scope variables
  var configMap = {
      extended_height   : 434,
      extended_title    : 'Click to retract',
      retracted_height  : 16,
      retracted_title   : 'Click to extend',
      template_html     : '<div class="spa-slider"><\/div>'
    },
    $chatSlider,
    toggleSlider, onClickSlider, initModule;

  // DOM method
  toggleSlider = function() {
    var slider_height = $chatSlider.height();

    // extend slider if fully retracted
    if ( slider_height === configMap.retracted_height ) {
      $chatSlider
        .animate({ height : configMap.extended_height })
        .attr( 'title', configMap.extended_title );
      return true;
    }

    // retract slider is fully extended
    if ( slider_height === configMap.extended_height ) {
      $chatSlider
        .animate({ height :configMap.retracted_height })
        .attr( 'title', configMap.retracted_title );
      return true;
    }
    // do not take action if the slider is in transition
    return false;
  };

  // Event handler
  onClickSlider = function ( event) {
    toggleSlider();
    return false;
  }

  // Public method
  initModule = function ( $container ) {

    $container.html( configMap.template_html );
    $chatSlider = $container.find( '.spa-slider' );
    $chatSlider
      .attr( 'title', configMap.retracted_title )
      .click(onClickSlider);
    return true;
  };
  return { initModule : initModule };

}( jQuery ));

jQuery(document).ready(
  function() {
    spa.initModule( jQuery('#spa') );
  }
);
