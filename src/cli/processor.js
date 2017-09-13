import F from 'fluture'
import {curry} from 'f-utility'
import {encode} from '@phantomscript/encode'
import {decode} from '@phantomscript/decode'

// const getStdin = F.encaseP(getStdinP)

// const log = console.log.bind(console)

export const processor = curry((stdinP, out, $) => {
  const {encode: encodeData, args, output, stdin = false} = $
  console.log(`$`, $)
  console.log(`stdinP`, stdinP)
  console.log(`out`, out)
  const convert = (data) => {
    console.log(`|data|${data}|`)
    const process = encodeData ? encode : decode
    const value = process(data)
    const emit = output ? out : console.log
    emit(value)
    return value
  }
  if (stdin) {
    console.log(`STDIN`)
    stdinP()
      // .map(
      //   (x) => {
      //     console.log(`>>${x}<<`)
      //     return x
      //   }
      // )
      .then(convert)
      .catch(process.stderr.write)
  }
  convert(args[0])
})
