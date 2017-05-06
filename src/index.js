/**
 *
 * @module set-prop
 */
;(function () {
  'use strict'

  /* exports */
  module.exports = setProp

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
    if (typeof key !== 'string') {
      throw Error(key + ' should be a string')
    }

    if (!(validTarget(target))) {
      throw Error(target + ' should be an Array | Function | Object')
    }

    return Object.defineProperty(
      target,
      key,
      { value: value }
    )
  }

  function validTarget (target) {
    return target instanceof Array ||
      target instanceof Function ||
      target instanceof Object
  }
})()

