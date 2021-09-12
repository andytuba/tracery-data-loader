const compare = environment => (attribute, operator, value) => {
    const expected = environment[attribute];
    if (expected === undefined) {
        return false;
    }
    if (Array.isArray(operator[0]) && typeof operator[1] === "string") {
        // why does the parser parse this way ...
        operator = operator[1];
    }

    // leaning heavily on JavaScript typecasting here
    // deliberately using == and !=

    if (operator === "=" || operator === "==") {
        return expected == value;
    }  else if (operator === "!=" || operator === "<>") {
        return expected != value;
    } else if (operator === ">") {
        return expected > value;
    } else if (operator === ">=") {
        return expected >= value;
    } else if (operator === "<") {
        return expected < value;
    } else if (operator === "<=") {
        return expected <= value;
    } else if (operator === "^=") {
        return String(expected).startsWith(value);
    } else if (operator === "$=") {
        return String(expected).endsWith(value);
    } else if (operator === "~=") {
        return (Array.isArray(expected) ? expected : String(expected))
            .includes(value);
    } else if (operator === "~") {
        return RegExp(value).test(expected);
    }

    console.error(`compare could not handle the operator ${operator} for compare("${attribute}", "${operator}", "${value}")`);
}

module.exports = compare;