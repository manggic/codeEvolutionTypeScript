"use strict";
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
exports.__esModule = true;
var message = 'let"s Nacho';
var name = 'manish';
var isHandsome = true;
var age = 24;
var sentence = "My name is ".concat(name, "\nI am a beginner in TS");
var n = null;
var u = undefined;
var cost = undefined;
var isNew = null;
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [12, 24, 36];
var mixArray = ['name', 20];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var inputFromUser;
inputFromUser = true;
// inputFromUser() is allowed
var random;
// random() is not allowed
// random.name is not allowed
// (random as string).toUpperCase()
var a;
a = 20;
a = 'coding';
// when we initialize var it type get fixed at that time (type inference)
var b = 'serious';
//  b =30 through us an error - Type 'number' is not assignable to type 'string'.ts(2322)
var multiType;
multiType = 'naming';
multiType = 35;
// multiType = true  error - Type 'boolean' is not assignable to type 'string | number'.ts(2322)
function add(num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    return num1 + (num2 ? num2 : 0) + num3;
}
function fullName(person) {
    console.log(person.firstName, '-', person.lastName);
}
fullName({ firstName: 'brucee', lastName: 'wayne' });
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Welcome ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Manish');
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('manager');
    };
    return Manager;
}(Employee));
var manager1 = new Manager('nikhil');
manager1.delegateWork();
manager1.greet();
console.log('manager1.employeeName', manager1.employeeName);
console.log(add(3, 10));
console.log(add(3));
