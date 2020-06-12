export function calculate_discount(prize: number, name: string) {
    let result = 0;
    if ( name == "QuangHai") {
        result = prize*80/100;
        if (result < 5000000) return result;
        else {
            result = result + 200000;
        }
    } else if (name == "CongPhuong") {
        result = prize*50/100;
        if (result < 5000000) return result;
        else {
            result = result + 500000;
        }
    }
    return prize;
}
