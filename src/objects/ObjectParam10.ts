import {Person} from "../Objects";

export function object_literal_expresion_test2( person: Person, s: string, a: Array<number>): number {
    console.log(person.pets[0].getSound());
    console.log(person.pets[0].getChildren()[0].getSound());
    if (person.pets[0].getSound() == "GauGau" && person.pets[0].getChildren()[0].getSound() == "MeoMeo") {
        if (person.school.name === "UET" && person.getName() === "HoaiThu") {
            return 1;
        }
        else return 2;
    }
    return 1;
}
