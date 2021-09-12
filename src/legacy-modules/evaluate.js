const evaluate = (compare) => {
	const _evaluate = (selector) => {
		if (!selector) {
			return;
		}
		switch (selector.type) {
			case 'SimpleSelector': {
				if (Array.isArray(selector.qualifiers)
					&& !selector.qualifiers.length
					|| !selector.qualifiers.every(_evaluate)
				) {
					return false;
				}

				return true;
			}
			case 'AttributeSelector': {
				return compare(selector.attribute, selector.operator, selector.value);
			}
			default: {
				throw "Could not evaluate, no selector.type";
			}
		}
	}

	return _evaluate;
};


module.exports = evaluate;
