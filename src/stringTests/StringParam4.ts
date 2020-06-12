export function not_handled_test(s: string) {
    let x = s.length +1;
    let ss = s.substring(0,5);
    if ( x > 10) {
        let a: number = 20;
        let sss: string = "aaaa"
        if (ss.startsWith("Thu") && sss.startsWith("a")) {
            x=x+10;
            let a: number = 1;
            let b: number = 2;
            if (a+b < s.length) {
                return 2;
            }
            return 1;
        }
    }
}
