console.log("Task 1:");

let cities = ["Tokyo", "Seoul", "Manila", "Rome", "London"];
console.log(cities[2]); // Displays the third city in the array.

cities[1] = "Antipolo";
console.log(cities[1]); // Displays the modified second city in the array.
console.log("____________________________");

console.log("Task 2:");

console.log("Initial three fruits:");
let fruits = ["Apple", "Banana", "Watermelon"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log("____________________________");

// Using push method
fruits.push("Pineapple");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("____________________________");

// Using pop method
fruits.pop();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("____________________________");

console.log("Task 3:");
let numbers = [2, 4, 6, 8, 10];

let doubledNumbers = numbers.map(function (numbers) {
    return numbers * 2;
});

console.log(doubledNumbers);

let valid = numbers.filter(function (numbers) {
    return numbers <= 6;
});

console.log(valid);

console.log("____________________________");

console.log("Task 4:");

let colors = ["Red", "Orange", "Yellow", "Green"];

colors.unshift("Blue");

colors.shift();

console.log(colors);

let sliceDemo = colors.slice(0, 3);

console.log(sliceDemo);

console.log("____________________________");

console.log("Task 5:");

let characters = ['a', 'b', 'c', 'd', 'e', 'f']

characters.splice(2, 0, 'G', 'H');

// console.log(characters);

characters.splice(4, 3);
console.log(characters);