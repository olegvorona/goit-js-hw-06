const inputNameEl = document.getElementById('name-input');
const outputNameEl = document.getElementById('name-output');
inputNameEl.addEventListener('input', onInputChange);

function onInputChange() {
    if (inputNameEl.value.length === 0) {
outputNameEl.textContent = 'Anonymous'
    } else
    { outputNameEl.textContent = inputNameEl.value };
};