export const game = () => {
    const buttons = document.querySelectorAll('.game__btn')
    let isAnimationActive = false

    buttons.forEach((button) => {
        button.addEventListener('click', function handleButtonClick(e) {
            e.stopPropagation()
            const userSelection = button.id
            userChoice(userSelection)
        })
    })

    function userChoice(userSelection) {
        const computerSelection = getComputerChoice()
        displayComputerChoiceAnimated()
        disableButtons()

        setTimeout(() => {
            displayComputerChoice(computerSelection)
            const result = getResult(userSelection, computerSelection)
            displayResult(result)
        }, 3000)

     
        buttons.forEach((button) => {
            button.style.opacity = '0.5'
            button.style.border = '3px solid #808080'
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

    function displayComputerChoiceAnimated() {
        const computerChoices = ['rock', 'paper', 'scissors']
        let index = 0
        const computerChoiceImg = document.getElementById('computer-choice')

        isAnimationActive = true // Устанавливаем флаг анимации

        const interval = setInterval(() => {
            computerChoiceImg.src = `../img/${computerChoices[index]}.png`
            index = (index + 1) % computerChoices.length
        }, 500)

        setTimeout(() => {
            clearInterval(interval)
            isAnimationActive = false // Сбрасываем флаг после анимации
        }, 1500)
    }

    function displayComputerChoice(computerSelection) {
        const computerChoiceImg = document.getElementById('computer-choice')
        computerChoiceImg.src = `../img/${computerSelection}.png`
    }

    function disableButtons() {
        buttons.forEach((button) => {
            button.setAttribute('aria-disabled', 'true') // Добавляем атрибут
            button.style.pointerEvents = 'none' // Отключаем события
        })
    }

    function enableButtons() {
        buttons.forEach((button) => {
            button.removeAttribute('aria-disabled') // Удаляем атрибут
            button.style.pointerEvents = 'auto' // Включаем события
        })
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

        const resultDisplay = document.getElementById('result')
        const computerChoiceImg = document.getElementById('computer-choice')

        resultDisplay.textContent = result

        setTimeout(() => {
            resultDisplay.textContent = 'Результат'
            resultDisplay.style.color = '#868686'
            computerChoiceImg.src = `../img/smile.png`
            enableButtons()
            buttons.forEach((button) => {
                button.style.opacity = '0.5'
                button.style.border = '3px solid #808080'
            })
        }, 3000)
    }
}

// Инициализация игры
game()
