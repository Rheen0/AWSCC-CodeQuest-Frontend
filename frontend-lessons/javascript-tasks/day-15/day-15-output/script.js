
//Task 1
for (let i = 1; i <= 5; i++) {
    console.log("Number " + i);
}

//Task 2
let cookies = ["Chocolate Chip", "Macaron", "Macaroon", "Biscotti", "Sugar", "Oatmeal Raisin", "Gingerbread", "Snickerdoodle", "Fortune Cookies"];

console.log("The different types of cookies are:");
for (let i = 1; i < cookies.length; i++) {
    console.log(cookies[i]);
}

//Task 3

let jarNotEmpty = true;
let i = 0;
const limit = 10;

while (jarNotEmpty && i < limit) {
    console.log("nom nom");
    i++;
}