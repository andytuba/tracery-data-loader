const applicable = require('src/applicable');

test('if item does not have label', () => {
	test('then it is not applicable', () => {
		const evaluate = () => false;
		expect(applicable(evaluate)({}).toBe(false);
		expect(applicable(evaluate)({ label: null }).toBe(false);
		expect(applicable(evaluate)({ label: false }).toBe(false);
		expect(applicable(evaluate)({ label: 0 }).toBe(false);
		expect(applicable(evaluate)({ label: '' }).toBe(false);
	});
});

test('if item only has label', () => {
	test("then it is applicable if it's a string", () => {
		const evaluate = () => false;
		expect(applicable(evaluate)({ label: 'a'}).toBe(true);
		expect(applicable(evaluate)({ label: 'aaaa'}).toBe(true);
		expect(applicable(evaluate)({ label: 1 }).toBe(false);
	});
});

test('if item has qualifiers', () => {
	test("then it is applicable if it's a string", () => {
		const evaluate = () => false;
		expect(applicable(evaluate)({ label: 'a'}).toBe(true);
		expect(applicable(evaluate)({ label: 'aaaa'}).toBe(true);
		expect(applicable(evaluate)({ label: 1 }).toBe(false);
	});
});
