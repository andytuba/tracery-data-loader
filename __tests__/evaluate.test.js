const evaluate = require("../src/evaluate");

// Fri, 02 Feb 1996 03:04:05 GMT	  
const environment = {
	now: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
	day: 5,
	date: 2,
	fullYear: 1996,
	hours: 3,
	minutes: 4,
};
const compare = (attr, op, value) => value === "true";

describe("if selector is empty", () => {
	test("then it is not applicable", () => {
		expect(evaluate()()).toBeFalsy();
		expect(evaluate()(null)).toBeFalsy();
		expect(evaluate()(0)).toBeFalsy();
		expect(evaluate()(false)).toBeFalsy();
		expect(evaluate()({
			type: 'SimpleSelector',
			qualifiers: [],
		})).toBeFalsy();
	});
});


describe("given a single qualifier", () => {
	test("if the qualifier selects on attribute", () => {
		expect(evaluate(compare)({
			type: "SimpleSelector",
			qualifiers: [
				{
					type: "AttributeSelector",
					value: "true",
				},
			],
		})).toEqual(true);

		expect(evaluate(compare)({
			type: "SimpleSelector",
			qualifiers: [
				{
					type: "AttributeSelector",
					value: "false",
				},
			],
		})).toBeFalsy();
	});
});

describe("given two qualifiers", () => {
	test("where both qualifiers are valid AttributeSelector", () => {
		const compare = (attr, op, value) => value === "true";

		expect(evaluate(compare)({
			type: "SimpleSelector",
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
		})).toEqual(true);
	});

	test("where some but not all qualifiers are valid", () => {
		expect(evaluate(compare)({
			type: "SimpleSelector",
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
		})).toBeFalsy();

		expect(evaluate(compare)({
			type: "SimpleSelector",
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
		})).toBeFalsy();
	});

	test("where none of the qualifiers are valid", () => {
		expect(evaluate(compare)({
			type: "SimpleSelector",
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
		})).toBeFalsy();
	});
});
