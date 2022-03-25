const computerChoiceDisplay = document.getElementById('random-choice')
const userChoiceDisplay = document.getElementById('my-choice')
const resultDisplay = document.getElementById('result')
let userChoice
let computerChoice
let result

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(evento)=>{
    userChoice = evento.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumer = Math.floor(Math.random() * possibleChoices.length) + 1 
    // +1 pois iria de 0 a 2. Entao +1 muda o intervalo para 1 a 3
    
    if(randomNumer === 1){
        computerChoice = 'rock'
    }
    if(randomNumer === 2){
        computerChoice = 'scissors'
    }
    if(randomNumer === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult(){
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            result = "YOU WIN!"
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            result = "YOU LOSE!"
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            result = "ITS A DRAW!"
            break
    }
    resultDisplay.innerHTML = result
}