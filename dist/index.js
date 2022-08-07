"use strict";
let id = 6;
let names = 'venky';
let gender = true;
let ids = 14;
let arr = [1, 2, 4, 5, 'venky']; // this is tuple array , bec we know fixed elements
let arr1 = [1, 4, 6, 'venky', false];
let arr2 = [1, 2, 4, 6];
let arr3 = [true, false];
let school = undefined;
var employe;
(function (employe) {
    employe["name"] = "venky";
    employe[employe["age"] = 27] = "age";
    employe["school"] = "Jaya";
    employe["college"] = "Veltech";
    employe["office"] = "Preqin";
})(employe || (employe = {}));
// console.log(id)
// console.log(arr)
// console.log(employe.name)
// console.log(employe['age'])
let str = employe["name"];
str = 'yousuf';
//console.log(str)
//console.log(employe["name"])
var shape;
(function (shape) {
    shape[shape["circle"] = 0] = "circle";
    shape[shape["rectangle"] = 1] = "rectangle";
    shape[shape["square"] = 5] = "square";
    shape[shape["polygen"] = 6] = "polygen";
})(shape || (shape = {}));
console.log(shape);
let obj = {
    id: 6, name: 'venky', school: 'Jaya'
};
obj.name = 'vicky';
let obj2 = {
    name: 'venky'
};
function abc(str) {
    console.log(str);
}
// abc('abc')
var Countries;
(function (Countries) {
    Countries["AUSTRALIA"] = "australia";
    Countries["INDIA"] = "Inda";
    Countries["SRILANKA"] = "Srilanka";
})(Countries || (Countries = {}));
var Sectors;
(function (Sectors) {
    Sectors["INDUSTRY"] = "Industry";
    Sectors["ESTATE"] = "Estate";
})(Sectors || (Sectors = {}));
console.log(Object.values(Sectors));
let result = {
    countries: Countries,
    sectors: Sectors
};
//console.log(Object.values(result['countries']))
let newArr = [
    ['venky', 'vicky'], ['new', 'new2'],
    ['venky', 'vicky'], ['new', 'new2'],
    ['venky', 'vicky'], ['new', 'new2'],
];
console.log(typeof (newArr));
let a = 10;
let b = a;
let emp = {};
emp.name = 'venky';
emp.age = 32;
//emp.school = 'Jaya'
console.log(emp);
const method1 = (number1, number2) => {
    return number1 + number2;
};
method1(5, 6);
