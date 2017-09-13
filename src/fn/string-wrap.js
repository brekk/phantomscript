import {curry, split, map, join, pipe} from 'f-utility'

export const stringWrap = curry((delimiter, fn, x) => pipe(
  split(delimiter),
  map(fn),
  join(delimiter)
)(x))
