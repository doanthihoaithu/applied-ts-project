export function simpleStringFunction2(s: string, a: number) {
    if ( a === 5) {
        if (s.length == a) {
            return 1;
        } else if (s.includes("abc")) {
            return 2;
        } else return 3;
    }
}
