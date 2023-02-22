export default function reverseString(text) {
    try {
        // split into array, reverse with Array.reverse, join array with "" delimiter
        return text.split("").reverse().join("");
    } catch {
        return "error: not a string";
    }
}
