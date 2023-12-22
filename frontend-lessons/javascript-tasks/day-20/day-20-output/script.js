// Task 1
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

const infoClasses = document.getElementsByClassName("info");
console.log(infoClasses);

const headerElement = document.getElementById("header");
console.log(headerElement);

const firstHighlight = document.querySelector(".info");
console.log(firstHighlight);
console.log("____________________________");

// Task 2

paragraphs[1].textContent = "This paragraph is now updated!"

paragraphs[1].style.textAlign = "center"
headerElement.style.backgroundColor = "Orange";

// Task 3

const newSection = document.createElement("h3");
newSection.innerHTML = "New Section";
document.body.appendChild(newSection);

// Task 4

// paragraphs[0].remove();

// Task 5

headerElement.addEventListener("click", function () { console.log("Header clicked!") });

// Task 6

const colorsArray = ["red", "blue"];

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = colorsArray[i]
}


