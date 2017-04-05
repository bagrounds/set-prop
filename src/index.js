/**
 *
 * @module set-prop
 */
;(function () {
  'use strict'

  /* imports */
  var funAssert = require('fun-assert')
  var guarded = require('guarded')

  var isString = funAssert.type('String')
  var pass = funAssert.pass(true)
  var isTarget = funAssert.type('Object|Function|Array')

  /* exports */
  module.exports = guarded({
    inputs: [isString, pass, isTarget],
    f: setProp,
    output: isTarget
  })

  /**
   *
   * @function module:set-prop.setProp
   *
   * @param {String} key - to set
   * @param {*} value - of key
   * @param {Object|Function|Array} target - to set property on
   *
   * @return {Object|Function|Array} target with newly set property
   */
  function setProp (key, value, target) {
    return Object.defineProperty(
      target,
      key,
      { value: value }
    )
  }
})()

