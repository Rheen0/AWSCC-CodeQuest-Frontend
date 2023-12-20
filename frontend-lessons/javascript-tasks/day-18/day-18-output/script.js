// Task 1

// Empty object
/*const book = {};*/

const book = {
    title: 'No Longer Human',
    author: 'Osamu Dazai',
    year: 1948
};

console.log(book.author);

// Task 2

const student = {
    name: 'Rhandie',
    age: 18,
    grade: 'First Year Undergraduate'
};

student.age = 19;

console.log(student.age);

student.subjects = ['Introduction to Computing', 'Computer Programming 1', 'Principles of Accounting'];

console.log(student.subjects);

// Task 3

const rectangle = {
    width: 12,
    height: 12,

    calculateArea: function () {
        return this.width * this.height;
    }
};

let rectangleArea = rectangle.calculateArea();

console.log(rectangleArea);

// Task 4

const person = {
    name: 'Kamote Man',
    age: 39,
    address: 'Earth'
};

delete person.address;

console.log(person);

const employee = {
    name: 'Mighty Man',
    position: 'Senior High School IT Instructor'
}

const employeeDetails = {
    ...person,
    ...employee
}

console.log(employeeDetails);