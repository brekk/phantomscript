import {length, filter, map, pipe} from 'f-utility'
import {charCodeAt, magicRange} from '@fn/index'

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
