import fs from 'fs'
import F from 'fluture'
import {curry} from 'f-utility'
import {encode} from '@phantomscript/encode'
import {decode} from '@phantomscript/decode'

const writeFile = curry((file, options, data) => new F(
  (reject, resolve) => {
    fs.writeFile(file, data, options, (e, o) => {
      if (e) {
        reject(e)
        return
      }
      resolve(o)
    })
  })
)

const log = (x) => x && process.stdout.write(x)
// const warn = (x) => x && console.warn(x)

export const processor = curry((STD, $) => {
  const {encode: encodeData = true, decode: decodeData = false, args, output, stdin = false} = $
  let process = encode
  if (encodeData) {
    process = encode
  }
  if (decodeData) {
    process = decode
  }
  const convert = (data) => {
    if (!data) {
      throw new Error(`Unable to convert null input`)
    }
    const emit = (
      output ?
        writeFile(output, `utf8`) :
        F.of
    )
    const value = process(data)
    emit(value).fork(
      log,
      log
    )
  }
  if (stdin || args.length === 0) {
    STD.fork(log, convert)
    return
  }
  convert(args[0])
})
