'use strict'

const hogeSpewer = require('hoge-spewer')
const fugaSpewer = require('fuga-spewer')

const metasyntacticSpewer = () => {
  return () => {
    const hoge = hogeSpewer()
    const fuga = fugaSpewer()
    const metasyntacticVariables = [hoge, fuga]
    return `Metasyntactic variables: [${metasyntacticVariables.join(', ')}]`
  }
}

module.exports = metasyntacticSpewer
