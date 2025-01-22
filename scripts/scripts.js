// Бургер меню

function toggleMenu() {
    
    const menu = document.getElementById('menu');
    const burger = document.querySelector('.header__burger');

    menu.classList.toggle('active');
    burger.classList.toggle('active');
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
                modal.style.visibliti = 'visible'}, 30);
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
    });
});

// Слайдер

let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex + direction + slides.length) % slides.length; 
    updateSlidePosition();
    console.log(currentIndex);
    slide.classList.add('active');



    
}

function updateSlidePosition() {
    const description = document.querySelectorAll('.slide-description__item');
    const slidesContainer = document.querySelector('.slides');
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
    fullScreenImageContainer.style.height = '80vh'; // Высота контейнера с отступами сверху и снизу
    fullScreenImageContainer.style.overflow = 'hidden';

    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.style.height = '100%'; // Заполнение контейнера по высоте
    fullScreenImage.style.width = 'auto'; // Автоматическая ширина для центровки
    fullScreenImage.style.objectFit = 'contain';

    fullScreenImageContainer.appendChild(fullScreenImage);
    overlay.classList.add('show');

    fullScreenImageContainer.onclick = function () {
        document.body.removeChild(fullScreenImageContainer);
        overlay.classList.remove('show');
    };

    document.body.appendChild(fullScreenImageContainer);
}
