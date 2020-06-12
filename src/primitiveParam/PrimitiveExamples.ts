export function max(a: number, b: number): number {
    if (a> b) {
        return a;
    } else if (a< b) {
        return b;
    }
    else return 1   ;
}

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

export function abs(a: number) {
    if ( a > 0) return a;
    else if (a < 0) return -a;
    else return 0;
}

export function booleanTest1(isBig: boolean, isRed: boolean): number {
    if (isBig === true) {
        if (isRed === false) {
            return 1;
        }
        else return 2;
    } else return 3;
}

export function primitive_param_function(isBig: boolean, a: number, s: string) {
    if (isBig == true) {
        a = a + 1;
        if (a > 10 && s.length > 5) {
            return 1;
        } else if (s.startsWith("ABC")) {
            return 2;
        } else {
            return 3;
        }
    } else {
        return 4;
    }
}
