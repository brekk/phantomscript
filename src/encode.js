import {pipe} from 'f-utility'
import {convertToAscii, characterEdge, mapWrap, ninthBit} from '@fn/index'

/**
 * convert a string into a zero-width representation
 * @method encode
 * @param {string} payload - a payload to encode
 * @returns {string} encoded string
 * @public
 */
export const encode = pipe(
  convertToAscii,
  mapWrap(ninthBit),
  mapWrap(characterEdge)
)
