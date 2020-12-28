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

test("simple string equality", () =>
    expect(compare("someString", "=", "is a string")).toEqual(true);
});

test("simple number equality", () =>
    expect(compare("day", "=", "5")).toEqual(true);
});

test("simple number less-than", () =>
    expect(compare("day", ">", "4")).toEqual(true);
});