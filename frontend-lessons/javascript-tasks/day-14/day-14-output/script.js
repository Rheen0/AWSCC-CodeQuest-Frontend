console.log("Day 14 Assignment:");

// Task 1
let temperature = 37;

if (temperature > 30) {
    console.log("Your temperature is higher than 30.");
} else {
    console.log("Your temperature is below 30.");
}

// Task 2
let time = 3;

if (time < 12) {
    console.log("Good morning.");
}
else if (time < 18) {
    console.log("Good afternoon.");
}
else if (time <= 24) {
    console.log("Good night.");
}
else {
    console.log("Please refrain from using numbers outside of 1-24.");
}

// Task 3
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("It is Wednesday my dudes.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Good day!");
}