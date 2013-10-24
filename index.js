
var callback = require('callback');


/**
 * Expose `onReady`.
 */

module.exports = onReady;


/**
 * Callback when the document is ready.
 *
 * @param {Function} fn
 */

function onReady (fn) {
  ready ? callback.async(fn) : fns.push(fn);
}


/**
 * Cache ready state.
 */

var ready = false;


/**
 * Handlers.
 */

var fns = [];


/**
 * Bind to ready.
 */

document.addEventListener('DOMContentLoaded', function () {
  var fn;
  ready = true;
  while (fn = fns.shift()) fn();
});