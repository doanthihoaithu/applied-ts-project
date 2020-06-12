export function forLoopExample(a: number, b: number) {
    if ( a < b ) {
        let array: number [] = [9,8,7,6];
        let greater: boolean = false;
        for (var i = 0; i < array.length; i++) {
            if (a > array[i]) {
                greater = true;
            }
        }
        if (greater == false) {
            return 1;;
        } else return 2;

    } else {
        return 3;
    }
}
