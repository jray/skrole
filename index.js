
(function(){

  'use strict';

  // locals
  var _api = {};
  var _didScroll = false;
  var _direction = null;
  var _registeredHandler = function() {};
  var _registeredFirstHandler = null;
  var _awaitingFirst = false;

  // the scroll handler
  var onUserScroll = function( cb ) {
    if ( cb && typeof cb === 'function' ) {
      _registeredHandler = cb;
    }
    return _api;
  };

  // detaches the user scroll
  var detachUserScroll = function() {
    _registeredHandler = function(){};
  };

  // to be fired on the first scroll and never again
  var onFirstScroll = function( cb ) {
    if ( cb && typeof cb === 'function' ) {
      _registeredFirstHandler = cb;
    }
    return _api;
  }

  window.onscroll = _onScroll;

  // determines the scroll direction. this information
  // is passed to the scroll callback
  function _onScroll() {

    if ( typeof _onScroll.x === 'undefined' ) {
      _onScroll.x = window.pageXOffset;
      _onScroll.y = window.pageYOffset;
    }
    var diffX = _onScroll.x-window.pageXOffset;
    var diffY = _onScroll.y-window.pageYOffset;
    var thresh = 0;

    // potentiall increase threshold
    if ( diffX < thresh ) {
      _direction = 'right';
    } else if( diffX > thresh ) {
      _direction = 'left';
    } else if( diffY < thresh ) {
      _direction = 'down';
    } else if( diffY > thresh ) {
      _direction = 'up';
    } else {
      if ( _registeredFirstHandler ) {
        _registeredFirstHandler();
        _awaitingFirst = false;
      } else {
        _awaitingFirst = true;
      }
    }

    _onScroll.x = window.pageXOffset;
    _onScroll.y = window.pageYOffset;

    _didScroll = true;
  }

  setInterval(function() {
    if ( _didScroll && !_awaitingFirst ) {
      _didScroll = false;
      if ( _direction ) {
        _registeredHandler( _direction );
      }
    }
  }, 100);

  // expose the API
  _api.scroll       = onUserScroll;
  _api.firstScroll  = onFirstScroll;
  _api.destroy      = detachUserScroll;

  if ( typeof module !== 'undefined' && module.exports ) {
    module.exports = _api;
  } else if ( typeof define !== 'undefined' && define.amd ) {
    // AMD compatibility
    define([], function () {
      return _api;
    });
  } else {
    window.skrole = _api;
  }

}());