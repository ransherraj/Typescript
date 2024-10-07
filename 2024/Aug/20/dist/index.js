"use strict";
var _a;
let num = [1, 2, 3];
let num2 = [1, 2, 3];
let x = [];
x[0] = 1;
x[2] = 3;
console.log(x);
let numstr = [1, 'str'];
let multivar = [1, 'str', true, 0];
function render(h) {
    console.log(h);
}
;
let user = [1, 'raj', false];
let a = user[0].toString(10);
let b = user[1].length;
user.push(1, 3, 5);
user.push('raj', 'aniket', 'ayush');
user.push(1.1, true);
user.push(a, b);
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function GetTaxRate(name, surname) {
    return 8.5 + name.length + surname.length;
}
let rate = GetTaxRate('raj', 'raman');
console.log(rate);
let emp = { id: 1, name: 'raj' };
let emp2 = { id: 1 };
let emp3 = { id: 1, name: 'raj' };
emp3.name = 'Anurag';
let emp4 = { id: 1, name: 'raj', retire: (date) => { console.log(date); } };
let emp5 = { id: 1, name: 'raj', retire: (date) => { console.log(date); } };
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { console.log("drag"); },
    resize: () => { console.log("resize"); }
};
let quantity = 100;
function Greet(name) {
    if (name) {
        console.log(name.toLocaleUpperCase());
    }
    else {
        console.log("Hi");
    }
}
Greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map