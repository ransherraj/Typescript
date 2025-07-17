
// Explain hoisting in JavaScript with examples.

2. ❓ Hoisting in JavaScript
Hoisting is JavaScript's behavior of moving declarations (not initializations) to the top of their scope.

🔸 Example:
console.log(a); // undefined
var a = 5;

foo(); // "Hello"
function foo() {
    console.log("Hello");
}

❌ let and const are hoisted too, but not initialized, causing a ReferenceError if accessed before declaration.
console.log(b); // ReferenceError
let b = 10;
