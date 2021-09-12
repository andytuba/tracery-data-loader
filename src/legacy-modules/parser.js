const peg = require('pegjs');
const fs = require('fs');

const grammarPegjs = fs.readFileSync('./src/grammar.pegjs', 'utf-8');

const grammar = peg.generate(grammarPegjs);

function parse(text) {
    const result = grammar.parse(text);
    return result;
}

module.exports = parse;
