export function toggleMenu(menu, items, burger, menuVisible) {
    console.log('функция запущена');

    menuVisible = !menuVisible; // Переключаем видимость меню
    menu.classList.toggle('show', menuVisible); // Добавляем/удаляем класс 'show'

    if (menuVisible) {
        // Если меню открыто
        setTimeout(() => {
            burger.classList.add('active'); // Добавляем класс 'active' к бургеру
        }, 50);

        menu.style.display = 'flex'; // Делаем меню видимым

        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show'); // Добавляем класс 'show' для каждого элемента
            }, index * 100); // Задержка для каждого элемента
        });
    } else {
        // Если меню закрыто
        burger.classList.remove('active'); // Убираем класс 'active' у бургера

        [...items].reverse().forEach((item, i) => {
            setTimeout(() => {
                item.classList.remove('show'); // Убираем класс 'show' для каждого элемента
            }, (items.length - i) * 100); // Задержка для каждого элемента в обратном порядке
        });

        // Убираем меню после завершения анимации скрытия элементов
        setTimeout(() => {
            menu.style.display = 'none'; // Скрываем меню
        }, items.length * 100 + 50); // Учитываем задержку для анимации
    }
    return menuVisible; // Возвращаем текущее состояние видимости меню
}
