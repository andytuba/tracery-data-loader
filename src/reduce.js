
const reduce = (applicable, parser) => (dict) => {
	const parsedKeys = {};
  Object.keys(dict).forEach(key => { parsedKeys[key] = parse(key); });
	const applicableKeys = Set();
	Object.keys(dict).forEach(key => { applicableKeys[key] = applicable(parsedKeys[key]); });

	const reducedDict = {};
	Object.keys(dict).forEach(key => {
		if (applicableKeys[key]) {
			const label = parsedKeys[key].label;
			const item = dict[key];
			reducedDict[label] = dict[key];
		}
	});

	return reducedDict;
}

module.exports = reduce;

