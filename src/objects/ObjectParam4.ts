import {Person} from "../Objects";

export function booleanTest2(isBig: boolean, person: Person): number {
    let result = person.age + person.height;
    // let schoolRooms = person.school.numberRoom;
    if (person.isGirl === true && result > 30) {
        if (person.height > 10 && person.age > 18) {
            return 1;
        }
        else return 2;
    }
    return result;
}
