const _compare = require("../src/compare");

// Fri, 02 Feb 1996 03:04:05 GMT	  
const compare = _compare({
	now: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
	day: 5,
	date: 2,
	fullYear: 1996,
	hours: 3,
    minutes: 4,
    someString: "is a string",
});

test("nonexistent variable name", () => {
    expect(compare("doesNotExist", "=", "")).toEqual(false);
});

test("simple string equality", () => {
    expect(compare("someString", "=", "is a string")).toEqual(true);
    expect(compare("someString", "==", "is a string")).toEqual(true);
});

test("simple number equality", () => {
    expect(compare("day", "=", "4")).toEqual(false);
    expect(compare("day", "=", "5")).toEqual(true);
    expect(compare("day", "=", "6")).toEqual(false);

    expect(compare("day", "==", "4")).toEqual(false);
    expect(compare("day", "==", "5")).toEqual(true);
    expect(compare("day", "==", "6")).toEqual(false);
});

test("simple number greater-than", () => {
    expect(compare("day", ">", "4")).toEqual(true);
    expect(compare("day", ">", "5")).toEqual(false);
    expect(compare("day", ">", "6")).toEqual(false);
});

test("simple number greater-than-equals", () => {
    expect(compare("day", ">=", "4")).toEqual(true);
    expect(compare("day", ">=", "5")).toEqual(true);
    expect(compare("day", ">=", "6")).toEqual(false);
});

test("simple number less-than", () => {
    expect(compare("day", "<", "4")).toEqual(false);
    expect(compare("day", "<", "5")).toEqual(false);
    expect(compare("day", "<", "6")).toEqual(true);
});

test("simple number less-than-equals", () => {
    expect(compare("day", "<=", "4")).toEqual(false);
    expect(compare("day", "<=", "5")).toEqual(true);
    expect(compare("day", "<=", "6")).toEqual(true);
});

test("simple string begins-with", () => {
    expect(compare("someString", "^=", "i")).toEqual(true);
    expect(compare("someString", "^=", "is")).toEqual(true);
    expect(compare("someString", "^=", "is a ")).toEqual(true);
    expect(compare("someString", "^=", "is a string")).toEqual(true);

    expect(compare("someString", "^=", "n")).toEqual(false);
    expect(compare("someString", "^=", "nest c'est pas un string")).toEqual(false);
});

test("simple number begins-with", () => {
    expect(compare("fullYear", "^=", "1")).toEqual(true);
    expect(compare("fullYear", "^=", "19")).toEqual(true);

    expect(compare("fullYear", "^=", "96")).toEqual(false);
    expect(compare("fullYear", "^=", "6")).toEqual(false);
});

test("simple number ends-with", () => {
    expect(compare("fullYear", "$=", "96")).toEqual(true);
    expect(compare("fullYear", "$=", "6")).toEqual(true);

    expect(compare("fullYear", "$=", "1")).toEqual(false);
    expect(compare("fullYear", "$=", "19")).toEqual(false);
});

test("regex string", () => {
    expect(compare("someString", "~", "[\w\s]+")).toEqual(true);
    expect(compare("someString", "~", "\d+")).toEqual(false);
});

test("regex number", () => {
    expect(compare("fullYear", "~", "^19")).toEqual(true);
    expect(compare("fullYear", "~", "\\d{4}")).toEqual(true);
    expect(compare("fullYear", "~", "^\\d{1,2}$")).toEqual(false);
});