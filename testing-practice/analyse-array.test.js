import analyse from "./analyse-array";

test("[1,8,3,4,2,6]", () => {
    expect(analyse([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});
test("[88, 23.5, 38.99, 53, 3.14, 69]", () => {
    expect(analyse([88, 23.5, 38.99, 53, 3.14])).toStrictEqual({
        average: 41.326,
        min: 3.14,
        max: 88,
        length: 5
    });
});

test("[]", () => {
    expect(analyse([])).toStrictEqual([]);
});
test("['hello', 'goodbye', 1, 2, 3]", () => {
    expect(analyse(["hello", "goodbye", 1, 2, 3])).toBeUndefined();
});

test("string input: 'hello'", () => {
    expect(analyse("hello")).toBeUndefined();
});
test("12", () => {
    expect(analyse(12)).toBeUndefined();
});
