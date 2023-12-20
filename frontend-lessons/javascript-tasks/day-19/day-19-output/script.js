// Task 1
const product = {
    name: "Kangkong Chips Original by Josh Mojica",
    price: "130",
    quantity: 3
};

console.log(JSON.stringify(product));

// Task 2

const bookJSON = '{"title":"No Longer Human","author":"Osamu Dazai","publishedYear":1948}';
const bookObject = JSON.parse(bookJSON);

console.log(bookObject.author);

// Task 3

const person = [
    {
        name: "Kamote Boy",
        age: 20,
        city: "Marikina"
    },
    {
        name: "Kamote Man",
        age: 40,
        city: "Marikina"
    },
    {
        name: "Tantan",
        age: 39,
        city: "Marikina"
    },
    {
        name: "Rhandie Sales",
        age: 18,
        city: "Antipolo"
    }
]

const personJSON = JSON.stringify(person);
console.log(personJSON);

const personObject = JSON.parse(personJSON);
console.log(personObject);
console.log("____________________________");

for (let i = 0; i < personObject.length; i++) {
    console.log(personObject[i].name + " " + personObject[i].city);
}
