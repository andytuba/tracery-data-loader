const applicable = require('./applicable');
const compare = require('./compare');
const environment = require('./environment');
const evaluate = require('./evaluate');
const parser = require('./parser');
const reduce = require('./reduce');

function process(dict, environmentDefaults) {
  return reduce(
		applicable(evaluate(compare(environment(environmentDefaults)))),
		parser,
	)(dict);
}
