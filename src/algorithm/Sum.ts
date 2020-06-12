export function sum(a: number, b: number): number {
    let x = a + b;
    let y = a - b;
    let z = x + y;
    if ( z > y) {
        return a;
    } else {
        z = z + 1;
        if (z < 10) {
            return b;
        }
    }
}
