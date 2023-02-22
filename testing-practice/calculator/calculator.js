const calculator = (() => {
    function isNumber(num) {
        return typeof num === "number";
    }

    function add(one, two) {
        if (!isNumber(one) || !isNumber(two)) return NaN;
        try {
            return one + two;
        } catch {
            return undefined;
        }
    }

    function subtract(one, two) {
        if (!isNumber(one) || !isNumber(two)) return NaN;
        try {
            return one - two;
        } catch {
            return undefined;
        }
    }

    function divide(one, two) {
        if (!isNumber(one) || !isNumber(two)) return NaN;
        try {
            return one / two;
        } catch {
            return undefined;
        }
    }

    function multiply(one, two) {
        if (!isNumber(one) || !isNumber(two)) return NaN;
        try {
            return one * two;
        } catch {
            return undefined;
        }
    }

    return { add, subtract, divide, multiply };
})();

export default calculator;
