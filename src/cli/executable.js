import {pipe} from 'f-utility'
import {cmd} from '@cli/cmd'
import {processor} from '@cli/processor'

export const exe = (stdin) => pipe(
  cmd,
  processor(stdin)
)
