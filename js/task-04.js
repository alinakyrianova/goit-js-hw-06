const counterValue = document.querySelector('#value')
const decrementBtn = document.querySelector("button [data-action='decrement']");
const incrementBtn = document.querySelector("button [data-action='incremen']");

let value = 0;
incrementBtn.addEventListener("click", function () {
    value += 1;
    counterValue.textContent = value;
    counterValue.style.color = 'blue'
});

decrementBtn.addEventListener("click", function () {
    counterValue.textContent -= 1;
    counterValue.style.color = 'green'
});