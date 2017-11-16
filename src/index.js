/**
 * UUID.js - RFC-compliant UUID Generator for JavaScript
 *
 * @file
 * @author  lonly
 * @version v1.0.0
 * @license The MIT License: Copyright (c) 2010-2017 LiosK.
 */

/**
 * Returns an unsigned x-bit random integer.
 * @private
 * @param {number} x Unsigned integer ranging from 0 to 53, inclusive.
 * @returns {number} Unsigned x-bit random integer (0 <= f(x) < 2^x).
 */
function getRandomInt(x) {
  if (x < 0 || x > 53) {
    return NaN
  }
  const n = 0 | Math.random() * 0x40000000 // 1 << 30
  return x > 30 ? n + ((0 | Math.random() * (1 << x - 30)) * 0x40000000) : n >>> 30 - x
}

/**
 * Converts an integer to a zero-filled hexadecimal string.
 * @private
 * @param {number} num
 * @param {number} length
 * @returns {string}
 */
function getHexAligner(num, length) {
  let str = num.toString(16)
  let i = length - str.length
  let z = '0'
  for (; i > 0; i >>>= 1, z += z) {
    if (i & 1) {
      str = z + str
    }
  }
  return str
}

/**
 * UUID class
 */
class UUID {
  /**
   * Generates a version 4 UUID as a hexadecimal string.
   * @public
   * @returns {string} Hexadecimal UUID string.
   */
  static get generate() {
    // time_low
    const seg1 = getHexAligner(getRandomInt(32), 8)
    // time_mid
    const seg2 = getHexAligner(getRandomInt(16), 4)
    // time_hi_and_version
    const seg3 = getHexAligner(0x4000 | getRandomInt(12), 4)
    // clock_seq_hi_and_reserved_clock_seq_low
    const seg4 = getHexAligner(0x8000 | getRandomInt(14), 4)
    // node
    const seg5 = getHexAligner(getRandomInt(48), 12)
    return `${seg1}-${seg2}-${seg3}-${seg4}-${seg5}`
  }
}

export default UUID
