export function booleanTest1(isBig: boolean, isRed: boolean): number {
    if (isBig === true) {
        if (isRed === false) {
            return 1;
        }
        else return 2;
    } else return 3;
}
