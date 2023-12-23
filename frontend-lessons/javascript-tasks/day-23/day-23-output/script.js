// Task 1
const firstBtn = document.getElementById("myButton");

firstBtn.addEventListener('click', function () {
    alert('Button Clicked!');
});

// Task 2
const secondBtn = document.getElementById("doubleClickButton");

secondBtn.addEventListener('dblclick', function () {
    alert('Button Double-clicked!');
});

// Task 3
const thirdBtn = document.getElementById("mouseEnterButton");

thirdBtn.addEventListener('mouseenter', function () {
    thirdBtn.style.backgroundColor = "red";
});

// Task 4
const inputElement = document.getElementById("myInput");

inputElement.addEventListener('keypress', function (event) {
    console.log('Keypress event:', event.key);
})