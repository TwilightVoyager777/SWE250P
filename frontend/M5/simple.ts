// function greet(person: { firstName: string }) {
//     alert(`Hello, ${person.firstName}`);
// }
// const person = {firstName : "Frank"};
// greet(person);
//
// interface IPerson {
//     firstName: string;
//     age? : number;
// }


// function greet1(person: IPerson) {
//     alert(`Hello, ${person.firstName}`);
// }
//
// function greetLouder(person: IPerson) {
//     alert(`Hello, ${person.firstName}!!!!`);
// }
//
// const person = {firstName : "Frank", hairColor : "Black"};
// greet(person);
// greet1(person);
// greetLouder(person);


// interface IPerson {
//     firstName: "Frank";
//     getGreeting(lastName: string): string ;
// };
// const person = {
//     firstName: "Frank",
//     getGreeting(lastName: string) {
//         return `Hello, ${this.firstName} ${lastName}`;
//     }
// }
// function greet(person: IPerson) {
//     alert(person.getGreeting("Zammetti"));
// }
// greet(person);


// interface IPerson {
//     firstName: string;
//     greet() : void ;
// };
// class Person implements IPerson {
//     firstName: string;
//     constructor(inFirstName: string) {
//         this.firstName = inFirstName;
//     }
//     greet() {
//         alert(`Hello, ${this.firstName}`);
//     }
// }
// const p = new Person("Frank");
// p.greet();


interface Iperson {
    firstName: string;
}

interface INinja extends Iperson {
    numberOfSwords: number;
}

let ninja = {} as INinja;
ninja.firstName = 'Jan';
ninja.numberOfSwords = 3;

namespace MyfirstNamespace {
    export let homeworld = "Jakku";
    export function sayName() {alert("Rey");};
}

alert(MyfirstNamespace.homeworld);
MyfirstNamespace.sayName();


// export let captain = "Picard";
//
// export interface CaptainChecker {
//     isGreat(inName: string): boolean;
// }
//
// export function addFirst(inLast: string) : string {
//     return "Jean" + inLast;
// }
//
// export class Ship {
//     const name = "Enterprise";
// }
// export type cap = captain;
//
// Import {addFirst} from "./addFirst";


//revise from m4
enum OrderStatus {
    Pending,
    Shipped,
    Delivered
}

let currentStatus: OrderStatus = OrderStatus.Shipped;
alert(currentStatus);
