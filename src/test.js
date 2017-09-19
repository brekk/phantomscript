import {length, filter, map, pipe} from 'f-utility'
import {charCodeAt, magicRange} from '@fn/index'

/**
 * test whether a given input has zero-width characters in it
 * @method test
 * @param {string} whatever - a string or something
 * @returns {boolean} whether the input has some zero-width characters in it
 * @public
 */
export const test = pipe(
  Array.from,
  map(charCodeAt),
  filter(magicRange),
  length,
  (x) => {
    if (x > 0) throw new Error(`Found zero-width characters!`)
    return false
  }
)
