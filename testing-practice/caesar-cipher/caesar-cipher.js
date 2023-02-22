// ASCII uppercase : 65-90
//       lowercase : 97-122
// https://www.rapidtables.com/code/text/ascii-table.html
export default function cipher(text, shift) {
    if (typeof text !== "string") return undefined;

    shift %= 26;
    const result = text.split("").reduce((res, c) => {
        // if c is not [a-zA-Z] don't shift the character
        if (c < "A" || (c > "Z" && c < "a") || c > "z") return res + c;
        // otherwise, shift the char code and append the new character to the accumulator
        let charCode = c.charCodeAt(0) + shift;
        // if char greater than z ||  if char less than A, greater than Z, loop around
        if (charCode > 122 || (charCode < 97 && charCode > 90)) {
            charCode -= 26;
        }
        const shiftedChar = String.fromCharCode(charCode);
        return res + shiftedChar;
    }, "");

    return result;
}
