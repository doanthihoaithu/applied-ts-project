import {Person} from "../Objects";

export function stringAndObjectTest3(a: string, person: Person): number {
    let result = person.age + person.height;
    // let schoolRooms = person.school.numberRoom;
    let s : string = "aaaa";
    // a = s;
    if (person.school.name.startsWith("aaaa")) {
        if (a.includes(s)){
            if (a.length > 6)
                return 1;
        }
        else return 2;
    }
    return result;
}
