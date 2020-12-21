const applicable = require('./applicable');
const evaluate = require('./evaluate');
const parser = require('./parser');
const reduce = require('./reduce');

function process(dict, environmentDefaults) {
  return reduce(
		applicable(evaluate(environment(environmentDefaults))),
		parser,
	)(dict);
}
