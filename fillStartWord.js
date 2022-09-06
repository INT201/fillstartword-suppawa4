const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  return word == null || word == undefined?undefined:word.startsWith(startWord)?word:startWord+word
}
module.exports = fillStartWord
