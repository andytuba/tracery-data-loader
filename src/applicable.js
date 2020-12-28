const applicable = (evaluate) => (parsedKey) => {
	if (parsedKey.selector && !evaluate(parsedKey.selector)) {
		return false;
	}

	return typeof parsedKey.label === 'string' && parsedKey.label.length >= 1;
}

module.exports = applicable;
