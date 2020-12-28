const parser = require('../src/parser');

test('can parse plain label', () => {
   const result = parser.parse('a plain label');
   expect(result).toStrictEqual({
      label: 'a plain label',
   });
});

test('can parse label with predicates in single quotes', () => {
   const result = parser.parse("/* a label with predicates */ [some_attr='some value']");
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
test('can parse label with several predicates', () => {
   const result = parser.parse("/* a label with predicates */ [some_other_attr~=\"one value of several\"][some_attr=\"some value\"]");
   expect(result).toStrictEqual({
      "label": "a label with predicates",
      "qualifiers": [
         {
            "type": "AttributeSelector",
            "attribute": "some_other_attr",
            "operator": [
               [],
               "~="
            ],
            "value": "one value of several"
         },
         {
            "type": "AttributeSelector",
            "attribute": "some_attr",
            "operator": "=",
            "value": "some value"
         }
      ]
   });
});
