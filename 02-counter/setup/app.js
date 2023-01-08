let countValue = 0;
const valueElement = document.getElementById("value");
const buttonList = document.querySelectorAll(".btn");

function updateValueToElement() {
    valueElement.textContent = countValue;
}

buttonList.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("dec"))
            countValue--;
        else if (btn.classList.contains("inc"))
            countValue++;
        else countValue = 0;

        if (countValue > 0)
            valueElement.style.color = "green";
        else if (countValue < 0)
            valueElement.style.color = "red";
        else
            valueElement.style.color = "black";

        updateValueToElement();
    });
});

