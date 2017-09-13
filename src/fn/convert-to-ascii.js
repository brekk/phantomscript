import {map, join, pipe} from 'f-utility'
import {EMPTY} from '@constants/empty'
import {controlSplit} from '@fn/control-split'

export const convertToAscii = (text) => pipe(
  Array.from,
  map(controlSplit),
  join(EMPTY)
)(text)
