import {Person} from "../Objects";

export function objectParam1(person3: Person, person: Person): number {
    let result = person.age + person.height;
    let person2 = new Person();
    if (person.age == 18) {
        if (person.height > 10) {
            return 1;
        }
        else return 2;
    }
    return result;
}
