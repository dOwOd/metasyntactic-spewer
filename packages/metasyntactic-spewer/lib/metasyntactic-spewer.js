'use strict'

const hogeSpewer = require('hoge-spewer')
const fugaSpewer = require('fuga-spewer')

const metasyntacticSpewer = () => {
  return () => {
    const hoge = hogeSpewer()
    const fuga = fugaSpewer()
    return 'Metasyntactic variables: ' + hoge + ', ' + fuga
  }
}

module.exports = metasyntacticSpewer
