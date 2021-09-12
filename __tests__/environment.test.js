const environment = require('../src/legacy-modules/environment');

test('given a default value for now, decompose that date into properties', () => {
    expect(environment({
        // Fri, 02 Feb 1996 03:04:05 GMT
        now: new Date(Date.UTC(96, 1, 2, 3, 45, 5)),
    })).toEqual({
        now: new Date(Date.UTC(96, 1, 2, 3, 45, 5)),
        day: 5,
        date: 2,
        fullYear: 1996,
        hours: 3,
        minutes: 45,
        minutesBy10Min: 40,
        minutesByQuarterHour: 45,
        month: 1,
        quarterOfYear: 0,
        halfOfYear: 0,
        decade: 90,
    });
});