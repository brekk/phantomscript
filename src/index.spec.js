/* global test */
import {t} from './test-helpers'
import {test as detect, encode, decode} from './index'

test(`encode is a unary function which takes a string and returns a zero-width string`, () => {
  t.plan(2)
  t.is(typeof encode, `function`)
  t.is(encode(``), ``)
})
test(`decode(encode(x)) should be the identity function`, () => {
  t.plan(3)
  t.is(typeof decode, `function`)
  t.is(typeof encode, `function`)
  t.is(decode(encode(`const x = 100`)), `const x = 100`)
})
test(`test should throw an error in the presence of zero-width characters`, () => {
  t.plan(3)
  t.is(typeof detect, `function`)
  t.throws(() => detect(`=====>${encode(`butts`)}<=====`), `Found zero-width characters!`)
  t.false(detect(`no zero nothing here`))
})
