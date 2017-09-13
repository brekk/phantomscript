#!/usr/bin/env node
const getStdin = require(`get-stdin`)
const F = require(`fluture`)
const {bin} = require(`./phantomscript`)

const getStdinF = F.encaseP(getStdin)
// const getStdinF = () => (new F((reject, resolve) => {
//   getStdin().then(resolve).catch(reject)
// }))
bin(getStdinF())()
