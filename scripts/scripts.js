
let menuVisible = false;

function toggleMenu() {
    const header = document.querySelector('.header');
    const menu = document.getElementById('menu');
    const items = document.querySelectorAll('.nav__item');
    const burger = document.querySelector('.header__burger');
    const screenWidth = window.innerWidth;

    menuVisible = !menuVisible;
    menu.classList.toggle('show', menuVisible);

    if (menuVisible) {
        setTimeout(() => {
            burger.classList.add('active');
        }, 0);
        
        // if (screenWidth <= 849) {
        //     header.style.height = 'clamp(245px, 2vw, 500px)';
        // }

        menu.style.display = 'flex';
        
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
            }, index * 100);
        });
    } else {
        burger.classList.remove('active');
        
        [...items].reverse().forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('show');
            }, index * 100);
        });

        setTimeout(() => {
            menu.style.display = 'none';
            // menu.style.width = '1px';

        }, items.length * 100);
    }
}

// Модальное окно

const overlay = document.querySelector('.overlay');

document.querySelectorAll('.about-card__btn').forEach(button => {

    button.addEventListener('click', () => {

        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId); 

        if (modal) {
        modal.classList.add('active');
        overlay.classList.add('show');
            setTimeout(() => {
                modal.style.opacity = '1'}, 30);
            }
        console.log(modalId);
        console.log(modal);
    });
});

document.querySelectorAll('.about-modal__btn.close').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.about-modal'); 

        overlay.classList.remove('show'); 
        modal.classList.remove('active');
        
        }
    );
});

// Слайдер

let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex + direction + slides.length) % slides.length; 
    updateSlidePosition();
    console.log(currentIndex);
    // slide.classList.add('active');



    
}

function updateSlidePosition() {
    const description = document.querySelectorAll('.slide-description__item');
    // const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');

   

    slides.forEach((slide, index) => {

        if (index === currentIndex) {
            slide.style.transition = '0.5s';
            slide.style.opacity = '1';
            slide.style.cursor = 'pointer';
            slide.style.border = '3px solid rgba(124, 252, 0, 0.6)';
            description[index].style.display = 'block';
        } else {
            slide.style.transition = '0.5s';
            slide.style.opacity = '0.2';
            slide.style.border = '3px solid transparent';
            description[index].style.display = 'none';
            slide.style.cursor = 'default';

        }
        
        slide.style.boxShadow = `-20px 7px 29px 20px rgba(0, 0, 0, 0.4)`;
    });
    
}

function openFullScreen(image) {
    const fullScreenImageContainer = document.createElement('div');
    fullScreenImageContainer.style.position = 'fixed';
    fullScreenImageContainer.style.top = '50%';
    fullScreenImageContainer.style.left = '50%';
    fullScreenImageContainer.style.transform = 'translate(-50%, -50%)';
    fullScreenImageContainer.style.zIndex = '9999';
    fullScreenImageContainer.style.height = '80vh';
    fullScreenImageContainer.style.overflow = 'hidden';

    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.style.height = '100%';
    fullScreenImage.style.width = 'auto';
    fullScreenImage.style.objectFit = 'contain';

    fullScreenImageContainer.appendChild(fullScreenImage);
    overlay.classList.add('show');

    fullScreenImageContainer.onclick = function () {
        document.body.removeChild(fullScreenImageContainer);
        overlay.classList.remove('show');
    };

    overlay.onclick = function () {
        document.body.removeChild(fullScreenImageContainer);
        overlay.classList.remove('show');
    }

    document.body.appendChild(fullScreenImageContainer);
}

// Game

function userChoice(userSelection) {
    const computerSelection = getComputerChoice();
    displayComputerChoiceAnimated();
    
    setTimeout(() => {
        displayComputerChoice(computerSelection);
        const result = getResult(userSelection, computerSelection);
        displayResult(result);
    }, 3000); 

    const buttons = document.querySelectorAll('.game__btn');
    buttons.forEach(button => {
        button.style.opacity = '0.5';
        button.style.border = '3px solid #808080';
        
    });
    const selectedButton = document.getElementById(userSelection);
    selectedButton.style.opacity = '1';
    selectedButton.style.border = '3px solid #7CFC00'

}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let isAnimationActive = false;

function displayComputerChoiceAnimated() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    let index = 0;
    const computerChoiceImg = document.getElementById('computer-choice');

    isAnimationActive = true;
    
    const interval = setInterval(() => {
        computerChoiceImg.src = `../img/${computerChoices[index]}.png`;
        index = (index + 1) % computerChoices.length; 
    }, 500);

    setTimeout(() => {
        clearInterval(interval);
        isAnimationActive = false;
     }, 1500);

    
}

function displayComputerChoice(computerSelection) {
    const computerChoiceImg = document.getElementById('computer-choice');
    computerChoiceImg.src = `../img/${computerSelection}.png`;
}

function getResult(userSelection, computerSelection) {
    const colorResult = document.getElementById('result');
    
    if (userSelection === computerSelection) {
        colorResult.style.color = 'blue';
        return "Ничья!";
    } else if (
        (userSelection === 'rock' && computerSelection === 'scissors') ||
        (userSelection === 'scissors' && computerSelection === 'paper') ||
        (userSelection === 'paper' && computerSelection === 'rock')
    ) {
        colorResult.style.color = '#00f200';
        return "Вы выиграли!";
    } else {
        colorResult.style.color = 'red';
        return "Компьютер выиграл!";
    }
    
}

function displayResult(result) {
    if (isAnimationActive) return;

    const buttons = document.querySelectorAll('.game__btn');
    const resultDisplay = document.getElementById('result');
    const computerChoiceImg = document.getElementById('computer-choice');
    const colorResult = document.getElementById('result');

    resultDisplay.textContent = result;

    
    setTimeout(() => {
        buttons.forEach(button => {
                    button.style.opacity = '1';
                    button.style.border = '3px solid #808080';
    });
                resultDisplay.textContent = 'Результат';
                colorResult.style.color = '#868686'
                computerChoiceImg.src = `../img/smile.png`}, 3000);
                

}
