function environment(defaults) {
	const result = {};

	const now = defaults["now"] instanceof Date ? defaults["now"] : new Date();

	result.now = now;
	result.day = now.getUTCDay();
	result.date = now.getUTCDate();
	result.fullYear = now.getUTCFullYear();
	result.hours = now.getUTCHours();
	result.minutes = now.getUTCMinutes();
	result.minutes1SD = Math.floor(now.getUTCMinutes() / 10) * 10;
	result.month = now.getUTCMonth();
	result.quarterOfYear = Math.floor(now.getUTCMonth() / 4);
	result.halfOfYear = Math.floor(now.getUTCMonth() / 2);
	result.decade = Math.floor(now.getUTCFullYear() % 10 / 10) * 10;

	return {
		...defaults,
		result,
	};
}

module.exports = environment;
