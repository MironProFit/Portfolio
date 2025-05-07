export const game = () => {
    function userChoice(userSelection) {
        const computerSelection = getComputerChoice()
        displayComputerChoiceAnimated()
        const buttons = document.querySelectorAll('.game__btn')

        setTimeout(() => {
            displayComputerChoice(computerSelection)
            const result = getResult(userSelection, computerSelection)
            displayResult(result)
            ena
        }, 3000)

        buttons.forEach((button) => {
            button.style.opacity = '0.5'
            button.style.border = '3px solid #808080'
            button.onclick = null
        })

        const selectedButton = document.getElementById(userSelection)
        selectedButton.style.opacity = '1'
        selectedButton.style.border = '3px solid #7CFC00'
    }

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors']
        const randomIndex = Math.floor(Math.random() * choices.length)
        return choices[randomIndex]
    }

    let isAnimationActive = false

    function displayComputerChoiceAnimated() {
        const computerChoices = ['rock', 'paper', 'scissors']
        let index = 0
        const computerChoiceImg = document.getElementById('computer-choice')

        isAnimationActive = true

        const interval = setInterval(() => {
            computerChoiceImg.src = `../img/${computerChoices[index]}.png`
            index = (index + 1) % computerChoices.length
        }, 500)

        setTimeout(() => {
            clearInterval(interval)
            isAnimationActive = false
        }, 1500)
    }

    function displayComputerChoice(computerSelection) {
        const computerChoiceImg = document.getElementById('computer-choice')
        computerChoiceImg.src = `../img/${computerSelection}.png`
    }

    function getResult(userSelection, computerSelection) {
        const colorResult = document.getElementById('result')

        if (userSelection === computerSelection) {
            colorResult.style.color = 'blue'
            return 'Ничья!'
        } else if (
            (userSelection === 'rock' && computerSelection === 'scissors') ||
            (userSelection === 'scissors' && computerSelection === 'paper') ||
            (userSelection === 'paper' && computerSelection === 'rock')
        ) {
            colorResult.style.color = '#00f200'
            return 'Вы выиграли!'
        } else {
            colorResult.style.color = 'red'
            return 'Комп выиграл!'
        }
    }

    function displayResult(result) {
        if (isAnimationActive) return

        const buttons = document.querySelectorAll('.game__btn')
        const resultDisplay = document.getElementById('result')
        const computerChoiceImg = document.getElementById('computer-choice')
        const colorResult = document.getElementById('result')

        resultDisplay.textContent = result

        setTimeout(() => {
            buttons.forEach((button) => {
                button.style.opacity = '1'
                button.style.border = '3px solid #808080'
                button.onclick = () => userChoice(button.id)
            })
            resultDisplay.textContent = 'Результат'
            colorResult.style.color = '#868686'
            computerChoiceImg.src = `../img/smile.png`
        }, 3000)
    }
}
