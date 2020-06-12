import {Person} from "../Objects";

export function stringAndObjectTest1(a: string, person: Person): number {
    let result = person.age + person.height;
    result = person.age;
    // let schoolRooms = person.school.numberRoom;
    if (person.school.name.length > 5) {
        if (a === "hello" && person.age > 21 && result <= 100 ){
            return 1;
        }
        else return 2;
    }
    return result;
}
