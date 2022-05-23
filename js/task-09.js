function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.body,
  changeColorBtnEl : document.querySelector('.change-color'),
  textColorEl: document.querySelector('.color'),
};
refs.changeColorBtnEl.addEventListener('click', onChangeColor);
function onChangeColor() {
  let color = getRandomHexColor()
  refs.bodyEl.style.backgroundColor = color;
  refs.textColorEl.textContent = color;
}

