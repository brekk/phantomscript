// import fs from 'fs'
// import F from 'fluture'
import {pipe} from 'f-utility'
import {cli as _cli} from './executable'
import {processor as _processor} from './processor'

export const cli = _cli
export const processor = _processor

// const readFile = (file) => F.node((done) => fs.readFile(file, `utf8`, done))

export const bin = (stdin) => pipe(
  cli,
  processor(stdin, () => {})
)
