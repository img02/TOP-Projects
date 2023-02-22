export default function analyse(arr) {
    if (arr.length === 0) return arr;
    try {
        let sum = 0;
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER;
        let length = 0;
        arr.forEach((num) => {
            // if the array contains non-number memebers, throw error to be caught below
            if (typeof num !== "number") throw new Error();

            sum += num;
            if (num < min) min = num;
            if (num > max) max = num;
            length += 1;
        });
        return { average: sum / length, min, max, length };
    } catch {
        return undefined;
    }
}
