import {Person} from "../Objects";

export function stringAndObjectTest2(a: string, person: Person): number {
    let result = person.age + person.height;
    // let schoolRooms = person.school.numberRoom;
    if (!person.school.name.startsWith("aaaa")) {
        if (!(a.includes("zzz"))){
            if (a.length > 6)
                return 1;
        }
        else return 2;
    }
    return result;
}
