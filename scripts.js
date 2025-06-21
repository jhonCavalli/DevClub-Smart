const prevButton = document.getElementByIdtEle('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

prevButton.addEventListener('click', function () => {
    alert("Prev");
})

nextButton.addEventListener('click', function () => {
    alert("Next");
})