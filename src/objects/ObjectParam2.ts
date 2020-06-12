import {Person} from "../Objects";

export function objectParam2(person: Person): number {
    let result = person.age + person.height;
    let person2 = new Person();
    if (person.name.length > 10) {
        if (person.height > 10) {
            return 1;
        }
        else return 2;
    }
    return result;
}
