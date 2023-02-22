import calculator from "./calculator";

// Add
test("Add 1 + 1", () => {
    expect(calculator.add(1, 1)).toBe(2);
});
test("Add 1.5 + 1.5", () => {
    expect(calculator.add(1.5, 1.5)).toBeCloseTo(3);
});
test("Add -9 + 8", () => {
    expect(calculator.add(-9, 8)).toBe(-1);
});
test("Add -88.5 + 105.3", () => {
    expect(calculator.add(-88.5, 105.3)).toBeCloseTo(16.8);
});
test("Add 'hello' + 123", () => {
    expect(calculator.add("hello", 123)).toBeNaN();
});

// Subtract
test("subtract 1 - 1", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
});

test("subtract 1 - -1", () => {
    expect(calculator.subtract(1, -1)).toBe(2);
});
test("subtract 0.5 - 0.25", () => {
    expect(calculator.subtract(0.5, 0.25)).toBeCloseTo(0.25);
});
test("subtract 0.5 - 0", () => {
    expect(calculator.subtract(0.5, 0)).toBeCloseTo(0.5);
});
test("subtract '!!' - 0", () => {
    expect(calculator.subtract("!!", 0)).toBeNaN();
});

// Divide
test("divide 10 / 5", () => {
    expect(calculator.divide(10, 5)).toBe(2);
});
test("divide 5 / 2", () => {
    expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
});
test("divide 44.44 / 22.22", () => {
    expect(calculator.divide(44.44, 22.22)).toBeCloseTo(2);
});
test("divide -8 / 2", () => {
    expect(calculator.divide(-8, 2)).toBeCloseTo(-4);
});
test("divide 99 / 0", () => {
    expect(calculator.divide(99, 0)).toBe(Infinity);
});
test("divide 'hello' / 'goodbye'", () => {
    expect(calculator.divide("hello", "goodbye")).toBeNaN();
});

// Multiply
test("multiply 2 * 5", () => {
    expect(calculator.multiply(2, 5)).toBe(10);
});
test("multiply 2 * -5", () => {
    expect(calculator.multiply(2, -5)).toBe(-10);
});
test("multiply 2.5 * -5", () => {
    expect(calculator.multiply(2.5, -5)).toBeCloseTo(-12.5);
});
test("multiply 99 * 0", () => {
    expect(calculator.multiply(99, 0)).toBe(0);
});
test("multiply 6897 * 4653", () => {
    expect(calculator.multiply(6897, 4653)).toBe(32091741);
});
test("multiply 'hello' * 4653", () => {
    expect(calculator.multiply("hello", 4653)).toBeNaN();
});
