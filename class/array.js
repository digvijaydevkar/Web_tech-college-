/* =====================================================
   File: array.js
   Topic: Functions + Array Methods
   Goal: Master arrays with real examples
===================================================== */

/* =========================
   FUNCTIONS BASICS
========================= */

/*
Why functions?
- Reusability
- Clean code
- Avoid repetition
*/

// Normal function
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Digvijay"));


// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 10));


/* =========================
   ARRAY BASICS
========================= */

let arr = [10, 20, 30, 40, 50];
console.log(arr);


/* =========================
   ARRAY ADD / REMOVE
========================= */

// push() → add at end
arr.push(60);
console.log(arr);

// pop() → remove from end
arr.pop();
console.log(arr);

// unshift() → add at start
arr.unshift(5);
console.log(arr);

// shift() → remove from start
arr.shift();
console.log(arr);


/* =========================
   ARRAY SEARCH METHODS
========================= */

// includes()
console.log(arr.includes(30)); // true

// indexOf()
console.log(arr.indexOf(40)); // index

// find()
let found = arr.find(num => num > 25);
console.log(found);

// findIndex()
let idx = arr.findIndex(num => num > 25);
console.log(idx);


/* =========================
   ARRAY TRANSFORMATION
========================= */

// map()
/*
Why used:
- Transform array without changing original
Real-world:
- Prices with GST, scores, UI data
*/
let doubled = arr.map(num => num * 2);
console.log(doubled);

// filter()
/*
Why used:
- Select specific elements
Real-world:
- Active users, passed students
*/
let filtered = arr.filter(num => num > 25);
console.log(filtered);

// reduce()
/*
Why used:
- Reduce array to single value
Real-world:
- Cart total, sum, max
*/
let sum = arr.reduce((total, num) => total + num, 0);
console.log(sum);


/* =========================
   ARRAY ITERATION
========================= */

// forEach()
arr.forEach((value, index) => {
  console.log(index, value);
});


/* =========================
   ARRAY SORTING
========================= */

// sort()
let nums = [5, 100, 25, 1];
nums.sort((a, b) => a - b); // ascending
console.log(nums);

// reverse()
nums.reverse();
console.log(nums);


/* =========================
   ARRAY SLICE & SPLICE
========================= */

// slice() → does NOT change original
let sliced = arr.slice(1, 4);
console.log(sliced);

// splice() → changes original
arr.splice(2, 1, 99);
console.log(arr);


/* =========================
   ARRAY JOIN & SPLIT
========================= */

let words = ["JavaScript", "is", "awesome"];
let sentence = words.join(" ");
console.log(sentence);

// split()
let chars = sentence.split(" ");
console.log(chars);


/* =========================
   REAL-WORLD PRACTICE
========================= */

// 1. Cart total
let cart = [200, 150, 300];
let total = cart.reduce((sum, price) => sum + price, 0);
console.log("Cart Total:", total);


// 2. Passed students
let marks = [35, 80, 45, 90, 20];
let passed = marks.filter(m => m >= 40);
console.log("Passed:", passed);


// 3. User names formatting
let users = ["rahul", "amit", "sneha"];
let capitalUsers = users.map(
  name => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalUsers);


/* =========================
   INTERVIEW QUICK NOTES
========================= */

/*
map vs forEach:
- map returns new array
- forEach does not

slice vs splice:
- slice → non-destructive
- splice → destructive

filter vs find:
- filter → multiple values
- find → first match only
*/
