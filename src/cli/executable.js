import F from 'fluture'
import {pipe} from 'f-utility'
import {cmd} from '@cli/cmd'
import {processor} from '@cli/processor'
import getStdin from 'get-stdin'

const getStdinF = F.encaseP(getStdin)

export const bin = () => pipe(
  cmd,
  processor(getStdinF(), () => {})
)
