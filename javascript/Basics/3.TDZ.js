
// What is the Temporal Dead Zone?

TDZ is the time between entering a block and the actual variable declaration where accessing it causes a ReferenceError.

🔸 Example:
{
  // TDZ starts
  // console.log(myVar); // ReferenceError
  let myVar = 'hello'; // TDZ ends here
  console.log(myVar); // hello
}


