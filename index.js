const scoreBox = document.querySelector('#score');
const colorBox = document.querySelector('.random-color');
const allColors = document.querySelectorAll('.colors');
const startScreen = document.querySelector('.start-game-screen');
const startBtn = document.querySelector('.btn');
const container = document.querySelector('.container');
const scoreText = document.querySelector('.score-box');
const chanceBox = document.querySelector('#chance');
let score = 0;
let chance = 3;
let mainColor;
let rightAns;

// ------------------Functions ----------------------
const randomNum = range => {
    return Math.floor(Math.random() * range);
}

const randomColor = () => {
    let red = randomNum(256);
    let green = randomNum(256);
    let blue = randomNum(256);

    let code = `rgb(${red}, ${green}, ${blue})`;
    return code;
};


const start = () => {
    mainColor = randomColor();
    colorBox.style.backgroundColor = mainColor;

    allColors.forEach((box) => {
        box.style.backgroundColor = randomColor();
    });

    rightAns = randomNum(6);
    allColors[rightAns].style.backgroundColor = mainColor;
    scoreBox.textContent = score;
    chanceBox.textContent = chance;
}

const handleExit = () => {
    startScreen.classList.remove('start');
    startScreen.style.display = 'flex';
    container.style.display = 'none';
    scoreText.style.display = 'none';
    startBtn.textContent = 'Restart Game';
    alert(`Your Score is : ${score}\nCorrect Answer was ${rightAns + 1}`);
    score = 0;
    chance = 2;
}
// ---------------------Event Listeners--------------------


allColors.forEach((box) => {
    box.addEventListener('click', function () {
        let color = this.style.backgroundColor;
        if (color === mainColor) {
            score++;
        }
        else {
            score--;
            chance--;
            if (chance == 0) {
                handleExit();
            }
        }
        start();
    });
});


startBtn.addEventListener('click', () => {
    startScreen.classList.add('start');
    setTimeout(() => {
        startScreen.style.display = 'none';
        container.style.display = 'flex';
        scoreText.style.display = 'flex';
    }, 1000);
});


// ----------------------Fucntion Invokation----------------------
start();