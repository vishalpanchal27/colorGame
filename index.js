const scoreBox = document.querySelector('#score');
const colorBox = document.querySelector('.random-color');
const allColors = document.querySelectorAll('.colors');
let score = 0;
// random generators

const randomIdx = (range) => {
    return Math.floor(Math.random() * range);
}

const randomColorGen = () => {
    let red = randomIdx(256);
    let green = randomIdx(256);
    let blue = randomIdx(256);
    let code = `rgb(${red}, ${green}, ${blue})`;

    return code;
};

let mainColor;

const start = () => {
    mainColor = randomColorGen();
    colorBox.style.backgroundColor = mainColor;

    allColors.forEach((box) => {
        box.style.backgroundColor = randomColorGen();
    });

    allColors[randomIdx(6)].style.backgroundColor = mainColor;
}

start();

// ---------------------color generation--------------------


allColors.forEach((box) => {
    box.addEventListener('click', function () {
        let color = this.style.backgroundColor;
        if (color === mainColor) {
            score++;
            scoreBox.textContent = score;
            start();
        }
        else {
            score--;
            scoreBox.textContent = score;
            start();
        }
    });
});