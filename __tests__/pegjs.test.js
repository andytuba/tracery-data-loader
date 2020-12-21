const peg = require('pegjs');
const fs = require('fs');

const grammarPegjs = fs.readFileSync('src/grammar.pegjs', 'utf-8');


const parser = peg.generate(grammarPegjs);

test('can parse plain label', () => {
	const result = parser.parse('a plain label');
	console.log({ result });
	expect(result).toStrictEqual({
		label: 'a plain label',
	});
});

test('can parse label with predicates', () => {
	const result = parser.parse("/* a label with predicates */ [some_attr=\"some value\"]");
  expect(result).toStrictEqual({
   "label": "a label with predicates",
   "qualifiers": [
      {
         "type": "AttributeSelector",
         "attribute": "some_attr",
         "operator": "=",
         "value": "some value"
      }
   ]
	});
});
