import {CONTROL_REGEX} from '@constants/regex-control'
import {hexCharCode} from '@fn/hex-char-code'
import {mapWrap} from '@fn/map-wrap'

export const controlSplit = (char) => (CONTROL_REGEX.test(char) ?
  mapWrap(hexCharCode, char) :
  char
)
