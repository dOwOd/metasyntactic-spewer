'use strict'

const metasyntacticSpewer = require('..')
const assert = require('assert').strict

assert.strictEqual(metasyntacticSpewer()(), 'Metasyntactic variables: hoge, fuga')
console.info('metasyntacticSpewer tests passed')
