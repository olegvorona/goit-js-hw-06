const counterButtonEl = document.getElementById('counter')
const counterValueEl = document.getElementById('value')

console.log(counterButtonEl)
console.log(counterValueEl)
let counterValue = 0;

counterButtonEl.firstElementChild.addEventListener('click', () => {
counterValueEl.textContent = counterValue -= 1;
});

counterButtonEl.lastElementChild.addEventListener('click', () => {
counterValueEl.textContent = counterValue += 1;
});