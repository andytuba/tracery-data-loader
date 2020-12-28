const applicable = require("../src/applicable");

describe("if item does not have label", () => {
	test("then it is not applicable", () => {
		const evaluate = () => false;
		expect(applicable(evaluate)({})).toBeFalsy();
		expect(applicable(evaluate)({ label: null })).toBeFalsy();
		expect(applicable(evaluate)({ label: false })).toBeFalsy();
		expect(applicable(evaluate)({ label: 0 })).toBeFalsy();
		expect(applicable(evaluate)({ label: "" })).toBeFalsy();
	});
});

describe("if item only has label", () => {
	test("then it is applicable if it's a string", () => {
		const evaluate = () => false;
		expect(applicable(evaluate)({ label: "a"})).toEqual(true);
		expect(applicable(evaluate)({ label: "aaaa"})).toEqual(true);
		expect(applicable(evaluate)({ label: 1 })).toBeFalsy();
	});
});

describe("if item has qualifiers", () => {
	test("then it is applicable if it's a string", () => {
		const evaluate = () => false;
		expect(applicable(evaluate)({ label: "a"})).toEqual(true);
		expect(applicable(evaluate)({ label: "aaaa"})).toEqual(true);
		expect(applicable(evaluate)({ label: 1 })).toBeFalsy();
	});
});
