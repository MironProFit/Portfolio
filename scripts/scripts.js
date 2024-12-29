
function toggleMenu() {
    
    const menu = document.getElementById('menu');
    const burger = document.querySelector('.header__burger');

    menu.classList.toggle('active');
    burger.classList.toggle('active');
}

// function toggleCard(card) {
//     const allCards = document.querySelectorAll('.about-card');
//     const isExpanded = card.classList.toggle('expanded');

//     // Находим блок описания внутри текущей карточки
//     const description = card.querySelector('.about-description');

//     if (isExpanded) {
//         allCards.forEach(c => {
//             if (c !== card) {
//                 c.style.display = 'none';  // Скрываем все остальные карты
//             }
//         });
//         card.style.display = 'flex';  // Убедимся, что текущая карта отображается
//         // Показываем блок описания
//         if (description) {
//             description.style.display = 'block';  // Отображаем описание
//         }
//     } else {
//         // Если карта закрыта, возвращаем все карты в исходное состояние
//         allCards.forEach(c => {
//             c.style.display = 'flex';
//             c.classList.remove('expanded');
//             // Прячем описание для любой закрытой карты
//             const desc = c.querySelector('.about-description');
//             if (desc) {
//                 desc.style.display = 'none'; // Скрываем описание
//             }
//         });
//     }
// }

function openModal(content) {
    document.getElementById('modalText').innerText = content;
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}


