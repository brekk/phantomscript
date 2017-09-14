// import fs from 'fs'
// import F from 'fluture'
import {pipe} from 'f-utility'
import {exe as _exe} from './executable'
import {processor as _processor} from './processor'

export const exe = _exe
export const processor = _processor

// const readFile = (file) => F.node((done) => fs.readFile(file, `utf8`, done))

export const bin = (stdin) => pipe(
  exe,
  processor(stdin, () => {})
)
