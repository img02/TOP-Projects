import { capitalise } from "./capitalise";

test("Capitalise sentence: 'hello world!'", () => {
    expect(capitalise("hello world!")).toBe("Hello world!");
});
test("Capitalise sentence: 'goodbye world!'", () => {
    expect(capitalise("goodbye world!")).toBe("Goodbye world!");
});
test("Capitalise turns all other letters to lowercase: 'HELLO world!'", () => {
    expect(capitalise("HELLO world!")).toBe("Hello world!");
});
test("Capitalise non-alphabetical character does nothing: '123'", () => {
    expect(capitalise("123")).toBe("123");
});
test("Capitalise non-string returns error msg: 456.123", () => {
    expect(capitalise(456.123)).toBe("error: non-string passed");
});
