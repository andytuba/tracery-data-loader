const applicable = (evaluate) => (parsedKey) => {
	if (parsedKey.qualifiers) {
		const result = parsedKey.qualifiers.some(qualifier => {
			const result = evaluate(qualifier);
			return result;
		});
		if (!result) {
			return false;
		}
	}

	return !!parsedKey.label;
}

module.exports = applicable;
