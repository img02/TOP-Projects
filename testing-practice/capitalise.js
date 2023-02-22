export function capitalise(text) {
    try {
        return text[0].toUpperCase() + text.slice(1).toLowerCase();
    } catch {
        return "error: non-string passed";
    }
}
