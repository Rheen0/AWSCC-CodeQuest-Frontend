/* Task 1
function greet() {
    console.log("Hello, Console!");
}

greet();
*/

// Task 2
function greet(name) {
    console.log("Hello, " + name);
}


greet("Rhandie");

// Task 3
const addNumbers = (a, b) => a + b;

const sum = addNumbers(2, 3);
console.log(sum);

// Task 4
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

const numbers = [97, 95, 97, 96, 98, 99, 94, 92];
const average = calculateAverage(numbers);

console.log("The average is " + average);