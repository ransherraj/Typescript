//  Basics (1–10)
// What are the differences between var, let, and const?

TDZ = Temporal Dead Zone

| Feature       | `var`                            | `let`             | `const`           |
| ------------- | -------------------------------- | ----------------- | ----------------- |
| Scope         | Function-scoped                  | Block-scoped      | Block-scoped      |
| Redeclaration | Allowed                          | Not allowed       | Not allowed       |
| Reassignment  | Allowed                          | Allowed           | Not allowed       |
| Hoisted?      | Yes (initialized as `undefined`) | Yes (TDZ applies) | Yes (TDZ applies) |

  Examples

1. Scopes

function testScope() {
    if (true) {
        var a = 1;
        let b = 2;
        const c = 3;
    }
    console.log(a); // ✅ Works: function-scoped
    // console.log(b); // ❌ ReferenceError: block-scoped
    // console.log(c); // ❌ ReferenceError: block-scoped
}
testScope();

2. Redeclaration

var x = 10;
var x = 20;  // ✅ Allowed
console.log(x); // 20

let y = 10;
// let y = 20;  // ❌ SyntaxError: Identifier 'y' has already been declared

const z = 10;
// const z = 20;  // ❌ SyntaxError: Identifier 'z' has already been declared


3. Reassignment
var a = 1;
a = 2; // ✅ Allowed

let b = 3;
b = 4; // ✅ Allowed

const c = 5;
// c = 6; // ❌ TypeError: Assignment to constant variable.


4. Hoisting
// var is hoisted and initialized to undefined
console.log(varVar); // undefined
var varVar = "I am var";

// let and const are hoisted but not initialized (TDZ applies)
try {
    console.log(letVar); // ❌ ReferenceError
} catch (e) {
    console.log("letVar error:", e.message);
}
let letVar = "I am let";

try {
    console.log(constVar); // ❌ ReferenceError
} catch (e) {
    console.log("constVar error:", e.message);
}
const constVar = "I am const";


// What are closures? Provide a practical example.
