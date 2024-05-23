let random = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowerHi = document.querySelector('.lowerHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        vslidateGuess(guess)
    })
}

function vslidateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a valid number')

    }
    else if (guess > 100) {
        alert('Please enter a  number less than 100')

    }
    else {
        prevGuess.push(guess)
    }

    if (numGuess === 11) {
        displayGuess(guess)
        displayMsg(`Game over. random number was ${random}`)
        endGame()
    }
    else {
        displayGuess(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess) {
    if (guess === random) {
        displayMsg(`You guesses it right`)
    }
    else if (guess < random) {
        displayMsg(`Number is to Low`)
    }
    else if (guess > random) {
        displayMsg(`Number is to High`)
    }

}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,`
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`


}

function displayMsg(message) {
    lowerHi.innerHTML = `<h2>${message}</h2>`

}


function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>start new game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();

}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = ''
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true

    })



}