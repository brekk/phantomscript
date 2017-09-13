#!/usr/bin/env node
const getStdin = require(`get-stdin`)
const {bin} = require(`./phantomscript`)

bin(getStdin)()
