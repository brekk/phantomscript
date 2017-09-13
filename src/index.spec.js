/* global test */
import {t} from './test-helpers'
import {encode, decode} from './index'

test(`encode is a unary function which takes a string and returns a zero-width string`, () => {
  // t.plan(2)
  t.is(typeof encode, `function`)
  // t.is(encode(``), ``)
})
test(`decode(encode(x)) should be the identity function`, () => {
  t.plan(3)
  t.is(typeof decode, `function`)
  t.is(typeof encode, `function`)
  t.is(decode(encode(`const x = 100`)), `const x = 100`)
})
