let playerOneDiv = document.querySelector("#playerOne")

let playerTwoDiv = document.querySelector("#playerTwo")

let inputOne = document.querySelector("#inputOne")

let inputTwo = document.querySelector("#inputTwo")

let buttonOne = document.querySelector("#buttonOne")

let buttonTwo = document.querySelector("#buttonTwo")

let result = document.querySelector("#result")
let reset = document.querySelector("#reset")

let secretNumber = ''
let guessedNumber = ''
let chances = 5

buttonOne.addEventListener('click', function () {
    secretNumber = inputOne.value;
    playerOneDiv.style.display = "none";
    playerTwoDiv.style.display = "block";
});
buttonTwo.addEventListener('click', function () {
    guessedNumber = inputTwo.value
    inputTwo.value = ''

    if (secretNumber == guessedNumber) {
        result.innerHTML = "congratulation"
    } else {
        chances--
        if (chances > 0) {
            result.innerHTML = ` wrong gusess ! ${chances} chances left`
        } else {

            result.innerHTML = "Playe two win"
        }
    }
})

reset.addEventListener('click', function () {
    playerOneDiv.style.display = 'block'
    playerTwoDiv.style.display = 'none'
    result.innerHTML = ''
    inputOne.value = ''
})




