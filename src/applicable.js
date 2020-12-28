const applicable = (evaluate) => (parsedKey) => {
	if (parsedKey.selector && !evaluate(parsedKey.selector)) {
		return false;
	}

	return typeof parsedKey.label === 'string' && parsedKey.label.length;
}

module.exports = applicable;
