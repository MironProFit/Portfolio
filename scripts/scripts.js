// Бургер меню

function toggleMenu() {
    
    const menu = document.getElementById('menu');
    const burger = document.querySelector('.header__burger');

    menu.classList.toggle('active');
    burger.classList.toggle('active');
}

// Модальное окно на каждую карточку
const overlay = document.querySelector('.overlay');

document.querySelectorAll('.about-card__btn').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId); 
        if (modal) {
        modal.classList.add('active');
        overlay.classList.add('show'); // Показать затемнение
        }
        console.log(modalId);
        console.log(modal);
    });
});

document.querySelectorAll('.about-modal__btn.close').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.about-modal'); // Ищем модальное окно по классу
        overlay.classList.remove('show'); // Скрыть затемнение
        modal.classList.remove('active');
    });
});

// Слайдер

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    slides[currentIndex].classList.remove('img-active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('img-active');
console.log(currentIndex);

});

document.getElementById('prev').addEventListener('click', () => {
    slides[currentIndex].classList.remove('img-active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('img-active');
console.log(currentIndex);

});
