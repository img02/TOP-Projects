import cipher from "./caesar-cipher";

test("cipher: 'hello world' shift: 5", () => {
    expect(cipher("hello world", 5)).toBe("mjqqt btwqi");
});
test("cipher: 'Hello World!' shift: 5", () => {
    expect(cipher("Hello world!", 5)).toBe("Mjqqt Btwqi!");
});
test("cipher: 'Hello World!' shift: 5", () => {
    expect(cipher("Hello world!", 5)).toBe("Mjqqt Btwqi!");
});
test("cipher: 'Hello World!' shift: 0", () => {
    expect(cipher("Hello world!", 0)).toBe("Hello World!");
});
test("cipher: 'Hello World!' shift: 26", () => {
    expect(cipher("Hello world!", 26)).toBe("Hello World!");
});
test("cipher: 'Hello World!' shift: 30", () => {
    expect(cipher("Hello world!", 30)).toBe("Mjqqt Btwqi!");
});
test("cipher: '1234' shift: 3", () => {
    expect(cipher("1234", 3)).toBe("1234");
});
test("non-string cipher: 3.1415 shift: 3", () => {
    expect(cipher("1234", 3)).toBeUndefined();
});
