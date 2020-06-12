import {Algorithm, max, Person, sum} from "../Objects";

export function objectTest1(person3: Person, person: Person): number {
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

export function objectTest2( person: Person): number {
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

export function objectTest3(isBig: boolean, person: Person): number {
    let result = person.age + person.height;
    let x : boolean = true;

    let y;

    y = 1;
    y = isBig;

    // let schoolRooms = person.school.numberRoom;
    if (person.age == 18 && person.school.numberRoom > 30) {
        if (person.height > 10 && y != true) {
            return 1;
        }
        else return 2;
    }
    return result;
}

export function booleanTest1(isBig: boolean, isRed: boolean): number {
    if (isBig === true) {
        if (isRed === false) {
            return 1;
        }
        else return 2;
    } else return 3;
}

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


export function object_literal_expresion_test( person: Person, s: string, a: Array<number>): number {
    let names = [{name: "UET", age: 23, school: {name: "DHCN"}}];
    let list = [1,2,3,4,5];
    list[2] = 10;
    if (person.name === names[0].name && person.pets[0].getSound() == "GauGau" && person.pets[0].getChildren()[0].getSound() == "MeoMeo") {
        // console.log(person.school.getName());
        // console.log(names[0].school.name);
        if (person.school.name === names[0].school.name && names[0].name.length < list[2]) {
            return 1;
        }
        else return 2;
    }
    return 1;
}

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





