const evaluate = require("src/evaluate");

test("if selector is empty", () => {
		test("then it is not applicable", () => {
				expect(evaluate()()).toBe(false);
				expect(evaluate()(null)).toBe(false);
				expect(evaluate()(0)).toBe(false);
				expect(evaluate()(false)).toBe(false);
				expect(evaluate()({ qualifiers: [] })).toBe(false);
		});
});

test("given a date in the environment", () => {
// Fri, 02 Feb 1996 03:04:05 GMT	  
const environment = {
	now: new Date(Date.UTC(96, 1, 2, 3, 4, 5)), 
	 day: 5,
	 date: 2,
	 fullYear: 1996,
	 hours: 3,
	 minutes: 4,
});

		test("and a single qualifier for simple equality", () => {
			test("if the qualifier selects on attribute", () => {
					expect(evaluate(() => true)({
qualifiers: [
{
type: "AttributeSelector",
},
],
})).toBe(true);

					expect(evaluate(() => false)({
qualifiers: [
{
type: "AttributeSelector",
},
],
})).toBe(false);
					});
			});

test("and a two qualifiers for simple equality", () => {
		test("where both qualifiers are valid AttributeSelector", () => {
				expect(evaluate(x => x.value === "true")({
qualifiers: [
{
type: "AttributeSelector",
attribute: "hard coded state",
operator: "=",
value: "true",
},
{
type: "AttributeSelector",
attribute: "hard coded state",
operator: "=",
value: "true",
},
],
})).toBe(true);
				});

		test("where some but not all qualifiers are valid", () => {
			expect(evaluate(x => x.value === "true")({
qualifiers: [
{
type: "AttributeSelector",
attribute: "hard coded state",
operator: "=",
value: "true",
},
{
type: "AttributeSelector",
attribute: "hard coded state",
operator: "=",
value: "false",
},
],
})).toBe(false);

			expect(evaluate(x => x.value === "true")({
qualifiers: [
{
type: "AttributeSelector",
attribute: "hard coded state",
operator: "=",
value: "false",
},
{
type: "AttributeSelector",
attribute: "hard coded state",
operator: "=",
value: "true",
},
],
})).toBe(false);
});

test("where none of the qualifiers are valid", () => {
		expect(evaluate(x => x.value === "true")({
qualifiers: [
{
type: "AttributeSelector",
attribute: "hard coded state",
operator: "=",
value: "false",
},
{
type: "AttributeSelector",
attribute: "hard coded state",
operator: "=",
value: "false",
},
],
})).toBe(false);
		});
});

