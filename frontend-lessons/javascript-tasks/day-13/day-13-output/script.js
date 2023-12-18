// Task 1:
let CurrentLesson = "JavaScript Fundamentals";
console.log("Task 1: " + CurrentLesson);

// Task 2:
console.log("Task 2:");
let favoriteNumber = 7;
let favoriteWord = "Protein";
let isJavaScriptFun = true;
let nothing = null;
let undefinedVar;

console.log("My favorite number is " + favoriteNumber);
console.log("My favorite favorite word is " + favoriteWord);

if (isJavaScriptFun) {
    console.log("According to Rhandie, JavaScript is fun.");
}
else {
    console.log("According to Rhandie, Javascript is not fun.");
}

console.log(nothing);
console.log(undefinedVar);

// Task 3:
console.log("Task 3:");
let isMorning = true;
let isRaining = true;

if (isMorning && isRaining) {
    console.log("It is morning and raining at the same time.");
}
else {
    console.log("It is not morning and raining at the same time.");
}

if (isMorning || isRaining) {
    console.log("It is either morning or raining.");
}
else {
    console.log("It is neither morning nor raining.");
}

if (!isMorning && isRaining) {
    console.log("It is morning and raining at the same time.");
}
else {
    console.log("It is not morning and raining at the same time.");
}