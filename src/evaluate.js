const evaluate = (compare) => (selector) => {
		switch (selector.type) {
			case 'SimpleSelector': {
				if (selector.qualifiers && !selector.qualifiers.all(evaluate(compare))) {
					return false;
				}

				return true;
			}
			case 'AttributeSelector': {
				return compare(attribute, qualifier.operator, qualifier.value);
			}
	}
};


module.exports = evaluate;
