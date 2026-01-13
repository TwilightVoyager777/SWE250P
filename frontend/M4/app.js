var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sayHi(humanName) {
    alert("Hello, ".concat(humanName, "!"));
}
sayHi({ humanName: "Pengcheng Xu" });
// function concatStrings(str1: string, str2: string): string {}
// let a: string = "Hello";
var bestShowEver = "Babylon 5";
// bestShowEver =  42;
// const a: number = 42;
// const b: number = 3.14
// a = "42";
// b = "3.14";
var a = 0xf00d;
var b = 484;
var isThisTheBestBookEver = true;
var accountBalance;
accountBalance = 15000;
accountBalance = "15000";
var food = "pizza";
food = 123;
var pets = ["Belle", "Bubbles"];
// pets = [42];
var pets1 = ["Belle", "Bubbles"];
var pets3 = ["Belle", 42];
var authors = ["Frank", 46];
// const authors1 :[string, number] = [46,"Frank"];
var Pizza = 0;
var FriedChicken = 1;
var IceCream = 2;
var Food;
(function (Food) {
    Food[Food["Pizza"] = 0] = "Pizza";
    Food[Food["FriedChicken"] = 1] = "FriedChicken";
    Food[Food["IceCream"] = 2] = "IceCream";
})(Food || (Food = {}));
;
var myFavoriteFood = Food.FriedChicken;
alert(myFavoriteFood);
// enum Food {Pizza, FriedChicken=500, IceCream};
// let myFavoriteFood: Food.FriedChicken;
// alert(myFavoriteFood);
var myMathFunction;
function add(n1, n2) {
    return "" + n1 + n2;
}
myMathFunction = add;
var person = {
    firstName: "John", lastName: "Xu", age: 22
};
var favoriteCar = "Benz";
// favoriteCar = null;
//
// let myFavoriteNumber: number = null;
// let myFavoriteString: string = null;
var favoriteCar1;
var favoriteCar3 = undefined;
var person1 = {
    firstName: "Mike", lastName: "James", age: 25
};
var person2 = {
    firstName: "Curry", lastName: "James", age: 26
};
var str = "test";
var myAge;
myAge = 46;
myAge = "46";
if (typeof myAge == "string") {
    alert(parseInt(myAge) * 2);
}
else if (typeof myAge == "number") {
    alert(myAge * 2);
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
var multNums = function (a, b) {
    if (b === void 0) { b = 10; }
    return a * b;
};
alert(multNums(3));
var addNums = function (a, b) { return a + b; };
var nums = [5, 6];
alert(addNums.apply(void 0, nums));
var person3 = {
    firstName: "Billy", lastName: "James", age: 25
};
// const firstName=  person3.firstName;
// const lastName=  person3.lastName;
// const age= person3.age;
// const {firstName, lastName, age} = person3
var vals = ["Billy", "Joel", 70];
var firstName = vals[0], lastName = vals[1], age = vals[2];
alert(firstName);
alert(lastName);
alert(age);
var Planet = /** @class */ (function () {
    function Planet(inName, inMass) {
        this.name = inName;
        this.mass = inMass;
    }
    Planet.prototype.printName = function () {
        alert(this.name);
    };
    return Planet;
}());
var Jupiter = /** @class */ (function (_super) {
    __extends(Jupiter, _super);
    function Jupiter() {
        var _this = _super.call(this, "Jupiter", 1234) || this;
        _this.colorBands = true;
        return _this;
    }
    return Jupiter;
}(Planet));
var j = new Jupiter();
//
// public calcSuperMass(a: number | string): number {
//     if (typeof a === "number") {
//         return this.mass * a;
//     }
//     return this.mass * parseInt(a);
// }
var Planet2 = /** @class */ (function () {
    function Planet2() {
        this._name = "No name set";
    }
    Object.defineProperty(Planet2.prototype, "name", {
        get: function () {
            return "This planet's name is '".concat(this._name, ".");
        },
        set: function (inName) {
            if (inName === "Pluto") {
                this._name = "Not a planet";
            }
            else {
                this._name = inName;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Planet2;
}());
var p = new Planet2();
alert(p.name);
p.name = "Pluto";
alert(p.name);
p.name = "Venus";
alert(p.name);
var Planet3 = /** @class */ (function () {
    function Planet3() {
    }
    Planet3.theBorgLiveHere = true;
    return Planet3;
}());
alert(Planet3.theBorgLiveHere);
var BasePlanet = /** @class */ (function () {
    function BasePlanet(inName, inRadius) {
        this.name = inName;
        this.radius = inRadius;
    }
    BasePlanet.prototype.calcDiameter = function () {
        return this.radius * 2;
    };
    return BasePlanet;
}());
var Earth = /** @class */ (function (_super) {
    __extends(Earth, _super);
    function Earth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Earth.prototype.collapseToBlackHole = function (inMoreMass) {
    };
    return Earth;
}(BasePlanet));
