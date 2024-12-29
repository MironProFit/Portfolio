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

// Закрытие модального окна при клике вне него
// window.onclick = function(event) {
//     // Получаем все активные модальные окна
//     const modals = document.querySelectorAll('.about-modal.active');
//     modals.forEach(modal => {
//         // Проверяем, был ли клик вне модального окна
//         if (!modal.contains(event.target)) {
//             modal.classList.remove('active'); // Закрываем модальное окно
//         }
//     });
// }
