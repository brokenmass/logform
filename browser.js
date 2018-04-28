'use strict';

/*
 * @api public
 * @property {function} format
 * Both the construction method and set of exposed
 * formats.
 */
const format = exports.format = require('././format');

/*
 * @api public
 * @method {function} levels
 * Registers the specified levels with logform.
 */
exports.levels = require('././levels');

/*
 * @api private
 * method {function} exposeFormat
 * Exposes a sub-format on the main format object
 * as a lazy-loaded getter.
 */
function exposeFormat(name, path) {
  path = path || name;
  Object.defineProperty(format, name, {
    value: require(`./${path}.js`)
  });
}

//
// Setup all transports as eager-loaded exports
// so that they are static for the bundlers.
//
exposeFormat('align');
exposeFormat('cli');
exposeFormat('combine');
exposeFormat('colorize');
exposeFormat('json');
exposeFormat('label');
exposeFormat('logstash');
exposeFormat('metadata');
exposeFormat('ms');
exposeFormat('padLevels', 'pad-levels');
exposeFormat('prettyPrint', 'pretty-print');
exposeFormat('printf');
exposeFormat('simple');
exposeFormat('splat');
exposeFormat('timestamp');
exposeFormat('uncolorize');
