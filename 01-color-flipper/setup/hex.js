const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const clickBtn = document.getElementById("btn");
const color = document.querySelector(".color");

clickBtn.addEventListener("click", () => {
    let randomHex = getRandomHex();

    document.body.style.backgroundColor = randomHex;
    color.textContent = randomHex;
    color.style.color = randomHex;
});

function getRandomHex() {
    let res = '#';

    for (let i = 0; i < 6; ++i) {
        res += hex[Math.floor(Math.random() * hex.length)];
    }

    return res;
}
