function sayHi(humanName) {
    alert(`Hello, ${humanName}!`);
}
sayHi({ humanName : "Pengcheng Xu"});

// function concatStrings(str1: string, str2: string): string {}
// let a: string = "Hello";

const bestShowEver : string = "Babylon 5"

// bestShowEver =  42;

// const a: number = 42;
// const b: number = 3.14

// a = "42";
// b = "3.14";

const a: number = 0xf00d;
const b: number = 0o744;

const isThisTheBestBookEver: boolean = true;

let accountBalance;
accountBalance = 15000;
accountBalance = "15000";

let food: any = "pizza";
food = 123;

const pets = ["Belle", "Bubbles"]

// pets = [42];

const pets1: string[] = ["Belle", "Bubbles"];

const pets3: any[] = ["Belle", 42];

const authors: [string, number] = ["Frank", 46];

// const authors1 :[string, number] = [46,"Frank"];

const Pizza = 0;
const FriedChicken = 1;
const IceCream = 2;

enum Food {Pizza, FriedChicken, IceCream};
let myFavoriteFood: Food = Food.FriedChicken;
alert(myFavoriteFood);

// enum Food {Pizza, FriedChicken=500, IceCream};
// let myFavoriteFood: Food.FriedChicken;
// alert(myFavoriteFood);

let myMathFunction: (num1: number, num2: number) => string;

function add(n1: number, n2: number): string {
    return "" + n1 + n2;
}
myMathFunction = add;


let person : {
    firstName: string, lastName: string, age: number
} = {
    firstName: "John", lastName: "Xu", age: 22
};

let favoriteCar = "Benz";
// favoriteCar = null;
//
// let myFavoriteNumber: number = null;
// let myFavoriteString: string = null;
let favoriteCar1;
let favoriteCar3 = undefined;


let person1 = {
    firstName: "Mike", lastName: "James", age: 25
}
type PersonType = {
    firstName: string, lastName: string, age: number
};

let person2: PersonType = {
    firstName: "Curry", lastName: "James", age: 26
}

type MyAwesomeString = string;
let str: MyAwesomeString = "test";

let myAge: any;
myAge = 46;
myAge = "46";

if (typeof myAge =="string") {
    alert(parseInt(myAge) * 2);
} else if (typeof myAge == "number") {
    alert(myAge * 2)
}

function test() {
    if (true) {
        var greeting = "hello";
    }
    alert(greeting);
}
test();
//
// const test1 = (name1) => {
//     alert(`Hello, ${name1}!`);
// }
// test("Jack");
//
// const addNums = (a,b) => a+b;
// alert(addNums(2,3));


const multNums = (a: number, b: number = 10): number => a * b;
alert(multNums(3));


const addNums = (a?: number, b?: number): number => a + b;
const nums: number[] = [5, 6];
alert(addNums(...nums));

const person3 = {
    firstName: "Billy", lastName: "James", age: 25
};

// const firstName=  person3.firstName;
// const lastName=  person3.lastName;
// const age= person3.age;

// const {firstName, lastName, age} = person3

const vals = ["Billy", "Joel", 70];
const [firstName, lastName, age] = vals;
alert(firstName);
alert(lastName);
alert(age);

class Planet {
    name: string;
    mass: number;

    constructor(inName: string, inMass: number) {
        this.name = inName;
        this.mass = inMass;
    }

    public printName() {
        alert(this.name);
    }
}

class Jupiter extends Planet {
    private colorBands: boolean = true;
    constructor() {
        super("Jupiter", 1234);
    }
}

let j: Jupiter = new Jupiter();
//
// public calcSuperMass(a: number | string): number {
//     if (typeof a === "number") {
//         return this.mass * a;
//     }
//     return this.mass * parseInt(a);
// }



class Planet2{
    private _name: string = "No name set";
    get name() {
        return `This planet's name is '${this._name}.`;
    }
    set name (inName: string) {
        if (inName === "Pluto") {
            this._name = "Not a planet";
        } else {
            this._name = inName;
        }
    }
}
let p: Planet2 = new Planet2();
alert(p.name);
p.name = "Pluto";
alert(p.name);
p.name = "Venus";
alert(p.name);


class Planet3 {
    static theBorgLiveHere: boolean = true;
}
alert(Planet3.theBorgLiveHere);

abstract class BasePlanet {
    name: string;
    radius: number;
    constructor(inName: string, inRadius: number) {
        this.name = inName;
        this.radius = inRadius;
    }
    abstract collapseToBlackHole(inMoreMass: number): void;
    calcDiameter() {
        return this.radius * 2;
    }
}

class Earth extends BasePlanet {
    collapseToBlackHole(inMoreMass: number) {

    }
}