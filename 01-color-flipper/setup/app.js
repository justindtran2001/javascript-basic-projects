const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const clickBtn = document.getElementById("btn");
const color = document.querySelector('.color');

clickBtn.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
    color.style.color = colors[randomNum];
});