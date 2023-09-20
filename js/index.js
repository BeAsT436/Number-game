const secretNumber = Math.floor(Math.random() * 100 + 1)
const attempts = document.getElementById("attempts")
let counter = 0
function checkGuess() {
    const userGuess = parseInt(document.querySelector("#userGuess").value)

    counter ++
    attempts.textContent = counter
    
    if (userGuess === secretNumber) {
        const message = document.querySelector("#message")
        message.textContent = "you win"
    }

    else if (userGuess > secretNumber) {
        const message = document.querySelector("#message")
        message.textContent = "guess lover"
    }

    else {
        const message = document.querySelector("#message")
        message.textContent = "guess higher"
    }
}
