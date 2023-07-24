"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//primitive types
var age;
age = 30;
var username;
username = 'Shaimaa';
var active;
active = false;
// arrays
var names;
names = ["Hamza", "Omar", "Ali"];
var ages;
ages = [10, 7, 8];
var person;
person = {
    name: 'Shaimaa',
    age: 30,
    active: false
};
var persons;
persons = [
    {
        name: 'Hamza',
        age: 10,
        active: true
    },
    {
        name: 'Omar',
        age: 9,
        active: false
    },
    {
        name: 'Ali',
        age: 8,
        active: true
    }
];
var p1;
var pp;
p1 = {
    name: 'Aya',
    age: 20,
    active: true
};
pp = [
    {
        name: 'Ahmed',
        age: 30,
        active: true
    },
    {
        name: 'Ali',
        age: 20,
        active: false
    }
];
function add(a, b) {
    return a + b;
}
function print(value) {
    console.log(value);
}
function appendAtBeginning(arr, value) {
    var newArr = __spreadArray([value], arr, true);
    return newArr;
}
