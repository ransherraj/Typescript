
// Explain the difference between == and ===.

| Operator | Name            | Type coercion | Example     | Result  |
| -------- | --------------- | ------------- | ----------- | ------- |
| `==`     | Equality        | Yes           | `5 == "5"`  | `true`  |
| `===`    | Strict Equality | No            | `5 === "5"` | `false` |


console.log(0 == false);   // true
console.log(0 === false);  // false
console.log(null == undefined); // true
console.log(null === undefined); // false

