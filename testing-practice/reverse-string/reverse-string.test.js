import reverseString from "./reverse-string";

test("reverse 'hello world'", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
});
test("reverse 'HellO WoRlD'", () => {
    expect(reverseString("HellO WoRlD")).toBe("DlRoW OlleH");
});

test("reverse '012345679'", () => {
    expect(reverseString("0123456789")).toBe("9876543210");
});

test("reverse '012345679'", () => {
    expect(reverseString("0123456789")).toBe("9876543210");
});

test("reverse '!@#$%123$#@!'", () => {
    expect(reverseString("!@#$%123$#@!")).toBe("!@#$321%$#@!");
});

test("not a string gives error msg: 123", () => {
    expect(reverseString(123)).toBe("error: not a string");
});
