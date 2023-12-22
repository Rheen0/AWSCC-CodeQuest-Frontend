// Task 1
const dynamicDiv = document.getElementById("dynamicContainer");

const newImage = document.createElement('img');

newImage.src = 'https://picsum.photos/id/237/200/300';
newImage.alt = 'Dynamically created image';

dynamicContainer.appendChild(newImage);

// Task 2

const myList = document.getElementById("myList");
myList.removeChild(myList.children[1]);

myList.lastElementChild.remove();

myList.innerHTML = '';