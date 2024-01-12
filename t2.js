
// java will go here
let rannum = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastres = document.querySelector('.lastres');
const loworhigh = document.querySelector('.loworhigh');


const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');


let guessCount =1;
let resetButton;
function checkGuess() {

    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: '
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === rannum) {
        lastres = textContent = ' congrats you win!!';
        lastres.style.backgroundColor = 'blue';
        loworhigh.textContent = ' ';
        setGameOver();
    } else if (guessCount === 10) {
        lastres.textContent = 'THIS GAME IS OVER!';
        lastres.textContent = '';
        setGameOver();
    } else {
        lastres.textContent = ' wrong guess';
        lastres.style.backgroundColor = 'red';
        if (userGuess < rannum) {
            loworhigh.textContent = ' too low of a guess';
        } else if (userGuess > rannum) {
            loworhigh.textContent = ' too high of a guess';
        }
    }

    guessCount++;
    guessField.value = ''
    guessField.focus();
}
    guessSubmit.addEventListener("click", checkGuess);


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "start new game now";
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
    alert(
        ` the answer was ${rannum}`
    )

}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }
        resetParas.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
    

        lastres.style.backgroundColor = 'white';
        rannum = Math.floor(Math.random() * 100) +1;
    }

