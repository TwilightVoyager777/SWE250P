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
var ninja = {};
ninja.firstName = 'Jan';
ninja.numberOfSwords = 3;
var MyfirstNamespace;
(function (MyfirstNamespace) {
    MyfirstNamespace.homeworld = "Jakku";
    function sayName() { alert("Rey"); }
    MyfirstNamespace.sayName = sayName;
    ;
})(MyfirstNamespace || (MyfirstNamespace = {}));
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
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
var currentStatus = OrderStatus.Shipped;
alert(currentStatus);
