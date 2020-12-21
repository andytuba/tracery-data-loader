const peg = require('pegjs');
const fs = require('fs');

const grammarPegjs = fs.readFileSync('./grammar.pegjs', 'utf-8');

const parser = peg.generate(grammarPegjs);

module.exports = parser;
