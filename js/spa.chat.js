/*
 * spa.chat.js
 * Chat feature module for SPA
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa */

spa.chat = (function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      main_html : String()
        + '<div style="padding:1em; color: #FFF;">'
          + 'Say hello to chat'
        + '</div>',
      settable_map : {}
    },
    stateMap = { $container : null },
    jqueryMap = {},

    setJqueryMap, configModule, initModule
  ;
  //----------------- END MODULE SCOPE VARIABLES ---------------

  //------------------- BEGIN UTILITY METHODS ------------------
  //-------------------- END UTILITY METHODS -------------------

  //--------------------- BEGIN DOM METHODS --------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = { $container : $container };
  };
  // End DOM method /setJqueryMap/
  //---------------------- END DOM METHODS ---------------------

  //------------------- BEGIN EVENT HANDLERS -------------------
  //-------------------- END EVENT HANDLERS --------------------

  //------------------- BEGIN PUBLIC METHODS -------------------
  // Begin public method /configModule/
  //
  // Example    : spa.chat.configModule({...});
  // Purpose    : Configure the module prior to initialization
  // Action     :
  //  The internal configuration data structure (configMap) is updated
  //  with provided arguments. No other actions are taken.
  //  Expected arguments for this module:
  //    * set_chat_anchor - a method to modify the URI anchor to indicate
  //        opened or closed state.
  //        Return false if requested state can't be met
  //    * chat_model - the Chat model object provides methods to interact
  //        with our instant messaging
  //    * people_model - the People model object which provides methods
  //        to interactwith the list of users the model maintains
  //    * slider_* settings. All these are optional scalars.
  //        See mapConfig.mapSettable for a full list
  //        Example: slider_open_em is the open height in em
  //  Returns   : none
  //  Throws    : JavaScript error object and stack trace on unacceptable
  //              or missing arguments
  //
  configModule = function ( input_map ) {
    spa.util.setConfigMap({
      input_map     : input_map,
      settable_map  : configMap.settable_map,
      config_map    : configMap,
    });
    return true;
  };
  // End public method /configModule/

  // Begin public method /initModule/
  //
  // Example    : spa.chat.initModule( $('#spa') );
  // Purpose    :
  //    Directs module to offer its features to the user.
  // Arguments  :
  //    * append_target - the jQuery DOM element where we will
  //      append the slider div
  // Action     :
  //    Appends a slider div to the provided container and fills
  //    it with the chat HTML content. It then initializes elements,
  //    events, and handlers to provide the user with a chat-room
  //    interface.
  // Returns    : true on success
  // Throws     : none
  //
  initModule = function ( $container ) {
    $container.html( configMap.main_html );
    stateMap.$container = $container;
    setJqueryMap();
    return true;
  };
  // End public method /initModule/

  // Begin public method /setSliderPosition/
  //
  // Example    : spa.chat.setSliderPosition( 'closed' );
  // Purpose    : Ensure chat slider is in the requested state
  // Arguments  :
  //    * position_type - enum('closed', 'opened', or 'hidden')
  //    * callback      - optional callback at end of animation.
  //      (callback receives slider DOM element as argument)
  // Action     :
  //    Leaves slider in current state if it matches requested,
  //    otherwise animate to requested state.
  // Returns    :
  //    * true  - requested state achieved
  //    * false - requested state not achieved
  // Throws     : none
  //
  // End public method /setSliderPosition/

  // return public methods
  return {
    configModule  : configModule,
    initModule    : initModule
  };
  //------------------- END PUBLIC METHODS ---------------------
}());