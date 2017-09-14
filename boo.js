#!/usr/bin/env node
const getStdin = require(`get-stdin`)
const F = require(`fluture`)
const {exe} = require(`./phantomscript`)

const getStdinF = F.encaseP(getStdin)
exe(getStdinF())()
