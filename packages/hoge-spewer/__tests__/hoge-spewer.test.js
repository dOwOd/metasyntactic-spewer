'use strict'

const hogeSpewer = require('..')
const assert = require('assert').strict

assert.strictEqual(hogeSpewer(), 'hoge')
console.info('hogeSpewer tests passed')
