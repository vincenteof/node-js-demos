#! /usr/bin/env node

const argv = require('argv')
const echo = require('../lib/echo')

console.log(echo(argv.run().targets.join(' ')))
