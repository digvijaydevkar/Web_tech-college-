/* =====================================================
   File: numberMath.js
   Topic: Number & Math Methods in JavaScript
   Purpose: Learn + Revise with real-world usage
===================================================== */

/* =========================
   NUMBER METHODS
========================= */

// 1. Number()
/*
   Why used:
   - Converts string or boolean into a number
   Real-world:
   - Form inputs come as strings, but calculations need numbers
*/
let price = "250";
console.log(Number(price)); // 250


// 2. parseInt()
/*
   Why used:
   - Converts string to integer (removes decimals)
   Real-world:
   - Reading age, quantity, IDs from user input
*/
let age = "21.8";
console.log(parseInt(age)); // 21


// 3. parseFloat()
/*
   Why used:
   - Converts string to floating-point number
   Real-world:
   - Prices, weights, percentages
*/
let weight = "61.5";
console.log(parseFloat(weight)); // 61.5


// 4. toFixed()
/*
   Why used:
   - Limits decimal places
   Real-world:
   - Showing currency values (₹, $, etc.)
*/
let bill = 123.4567;
console.log(bill.toFixed(2)); // "123.46"


/* =========================
   MATH METHODS
========================= */

// 1. Math.round()
/*
   Why used:
   - Rounds to nearest integer
   Real-world:
   - Ratings, averages
*/
console.log(Math.round(4.6)); // 5


// 2. Math.floor()
/*
   Why used:
   - Rounds DOWN
   Real-world:
   - Pagination, price slabs, discounts
*/
console.log(Math.floor(4.9)); // 4


// 3. Math.ceil()
/*
   Why used:
   - Rounds UP
   Real-world:
   - Shipping charges, total pages
*/
console.log(Math.ceil(4.1)); // 5


// 4. Math.abs()
/*
   Why used:
   - Returns absolute (positive) value
   Real-world:
   - Distance calculation, profit/loss
*/
console.log(Math.abs(-10)); // 10


// 5. Math.pow()
/*
   Why used:
   - Power calculation
   Real-world:
   - Scientific, financial formulas
*/
console.log(Math.pow(2, 3)); // 8


// 6. Math.sqrt()
/*
   Why used:
   - Square root
   Real-world:
   - Geometry, physics, ML formulas
*/
console.log(Math.sqrt(25)); // 5


// 7. Math.max() & Math.min()
/*
   Why used:
   - Find largest / smallest value
   Real-world:
   - Highest score, lowest price
*/
console.log(Math.max(10, 5, 20)); // 20
console.log(Math.min(10, 5, 20)); // 5


/* =========================
   Math.random()
========================= */

/*
   WHAT IT DOES:
   - Generates a random number between 0 (inclusive) and 1 (exclusive)

   WHY WE USE IT:
   - Randomness in applications
   - Simulations
   - Games
   - Security-related logic (with limits)

   IMPORTANT:
   - Not cryptographically secure
*/

// Basic usage
console.log(Math.random()); // Example: 0.345678


// Random number between 0 and 9
console.log(Math.floor(Math.random() * 10));


// Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);


/* =========================
   REAL-TIME / COMPANY USAGE
========================= */

// 1. OTP Generation (basic frontend)
let otp = Math.floor(100000 + Math.random() * 900000);
console.log("OTP:", otp);


// 2. Random Discount Coupon
let discount = Math.floor(Math.random() * 50) + 1;
console.log("Discount:", discount + "%");


// 3. Game Dice Roll
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice:", dice);


// 4. Shuffle Banner / Ads (E-commerce)
let banners = ["Sale", "New Arrival", "Best Offer"];
let randomIndex = Math.floor(Math.random() * banners.length);
console.log("Show Banner:", banners[randomIndex]);


/* =========================
   INTERVIEW NOTE
========================= */
/*
Q: Why Math.random() is not used for security?
A: Because it is predictable. For secure random numbers,
   companies use crypto.getRandomValues().
*/

