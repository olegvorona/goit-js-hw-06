const changeInputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

changeInputEl.addEventListener("input", changeInputFn);

function changeInputFn(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
};