// Task 1

const anchorElement = document.getElementById("myLink");

anchorElement.setAttribute('target', '_blank');

console.log(anchorElement);

// Task 2

const myDiv = document.getElementById("myDiv");

myDiv.classList.add('highlight');

console.log(myDiv);

// Task 3

myDiv.classList.remove('highlight');
console.log(myDiv);

// Task 4

const myParagraph = document.getElementById("myParagraph");

myParagraph.innerText = "This is my updated paragraph.";

// Task 5

const paragraphElements = document.getElementsByTagName("p");

for (let i = 0; i < paragraphElements.length; i++) {
    const paragraphStyle = paragraphElements[i].style

    paragraphStyle.color = "red";
    paragraphStyle.backgroundColor = "lightgray";
    paragraphStyle.fontSize = "18px";
}