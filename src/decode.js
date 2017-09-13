import {join, filter, pipe, map} from 'f-utility'
import {EMPTY} from '@constants/empty'
import {parseBinaryCharCode, alterRange, charCodeAt, magicRange, match} from '@fn/index'

const joinNothing = join(EMPTY)

/**
 * convert a string from a zero-width representation
 * @method decode
 * @param {string} payload - a payload to decode
 * @returns {string} decoded string
 * @public
 */
export const decode = pipe(
  Array.from,
  map(charCodeAt),
  filter(magicRange),
  map(alterRange),
  joinNothing,
  match,
  map(parseBinaryCharCode),
  joinNothing
)
