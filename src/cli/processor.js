// import F from 'fluture'
import {curry} from 'f-utility'
import {encode} from '@phantomscript/encode'
import {decode} from '@phantomscript/decode'

// const getStdin = F.encaseP(getStdinP)

// const log = console.log.bind(console)

export const processor = curry((STD, out, $) => {
  const {encode: encodeData = true, args, output, stdin = false} = $
  console.log(`$`, $)
  console.log(`stdinP`, STD)
  console.log(`out`, out)
  const convert = (data) => {
    console.log(`|data|${data}|`)
    if (!data) {
      throw new Error(`Unable to convert null input`)
    }
    const process = encodeData ? encode : decode
    const value = process(data)
    const emit = output ? out : console.log
    emit(value)
    return value
  }
  if (stdin) {
    console.log(`STDIN`)
    return STD.fork(console.warn, convert)
  }
  convert(args[0])
})
