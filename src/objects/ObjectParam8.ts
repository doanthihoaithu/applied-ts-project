import {Person} from "../Objects";

export function compoundConditionTest(a: string, person: Person): number {
    let result = person.age + person.height;
    // let schoolRooms = person.school.numberRoom;
    if (a.endsWith("hoaithu") && person.age == 10 + 2 ) {
        if (a.includes("zzz")){
            if (person.school.name.startsWith("aaaa"))
                return 1;
        }
        else return 2;
    }
    return result;
}
