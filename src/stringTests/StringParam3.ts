export function simpleStringFunction3(s: string, a: number) {
    let x = s.length +1;
    let ss = "End"
    if ( x > 10) {
        if (s.startsWith("Hoaithu")) {
            return 1;
        } else if (s.includes("UET")) {
            return 2;
        } else if (s.endsWith(ss)) {
            return 3;
        }
    }
}
