7. ❓ How does JavaScript handle type coercion?
Type coercion is JavaScript's automatic or implicit conversion of values from one data type to another.

🔸 Coercion in Comparisons
console.log('5' == 5);    // true (string → number)
console.log('5' === 5);   // false

🔸 Coercion in Arithmetic:
console.log('5' - 2);     // 3  → string converted to number
console.log('5' + 2);     // "52" → number converted to string



8. ❓ Event Bubbling and Capturing
🔸 Event Propagation Phases:

1. Capturing Phase – Event travels from root to target.

2. Target Phase – Event reaches target element.

3. Bubbling Phase – Event bubbles back up to root.

🔸 Example:
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked");
  }, false); // bubbling

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child Clicked");
  }, false);
</script>

Output when you click the button:
Child Clicked
Parent Clicked


9. ❓ Difference between Synchronous and Asynchronous Code
Type	Description
Synchronous	Executes line by line, blocking
Asynchronous	Executes in background, non-blocking

🔸 Example:
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
Output:
1
3
2




10. ❓ What are Closures? Provide a Practical Example
A closure is a function that remembers variables from its lexical scope, even when executed outside that scope.

🔸 Example: Counter Function
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
Why it works:
The returned inner function forms a closure over the count variable.








You said:
give good code example to prove this
| Feature       | var                            | let             | const           |
| ------------- | -------------------------------- | ----------------- | ----------------- |
| Scope         | Function-scoped                  | Block-scoped      | Block-scoped      |
| Redeclaration | Allowed                          | Not allowed       | Not allowed       |
| Reassignment  | Allowed                          | Allowed           | Not allowed       |
| Hoisted?      | Yes (initialized as undefined) | Yes (TDZ applies) | Yes (TDZ applies) |


ChatGPT said:
Absolutely! Here's a set of concise, proven code examples that clearly demonstrate the differences between var, let, and const in terms of:

Scope

Redeclaration

Reassignment

Hoisting

✅ 1. Scope
javascript
Copy
Edit
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
✅ 2. Redeclaration
javascript
Copy
Edit
var x = 10;
var x = 20;  // ✅ Allowed
console.log(x); // 20

let y = 10;
// let y = 20;  // ❌ SyntaxError: Identifier 'y' has already been declared

const z = 10;
// const z = 20;  // ❌ SyntaxError: Identifier 'z' has already been declared
✅ 3. Reassignment
javascript
Copy
Edit
var a = 1;
a = 2; // ✅ Allowed

let b = 3;
b = 4; // ✅ Allowed

const c = 5;
// c = 6; // ❌ TypeError: Assignment to constant variable.
✅ 4. Hoisting
javascript
Copy
Edit
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
🔁 Summary Table with Results
Feature	var	let	const
Scope	✅ function-scoped	✅ block-scoped	✅ block-scoped
Redeclaration	✅ allowed	❌ error	❌ error
Reassignment	✅ allowed	✅ allowed	❌ error
Hoisting	✅ hoisted (undefined)	❌ TDZ error	❌ TDZ error

Would you like this as part of a PDF or markdown export? Or would you like examples for temporal dead zone, closures, or event bubbling next?
