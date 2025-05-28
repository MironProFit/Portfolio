export function toggleMenu(menu, items, burger, menuVisible) {

    menuVisible = !menuVisible // Переключаем видимость меню
    menu.classList.toggle('show', menuVisible) // Добавляем/удаляем класс 'show'

    if (menuVisible) {
        setTimeout(() => {
            burger.classList.add('active') // Добавляем класс 'active' к бургеру
            menu.style.maxHeight = '400px'
        }, 50)

        menu.style.display = 'flex' // Делаем меню видимым

        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show') // Добавляем класс 'show' для каждого элемента
            }, index * 100) // Задержка для каждого элемента
        })
    } else {

        burger.classList.remove('active') // Убираем класс 'active' у бургера
        ;[...items].reverse().forEach((item, i) => {
            setTimeout(() => {
                item.classList.remove('show') // Убираем класс 'show' для каждого элемента
            }, (items.length - i) * 100) // Задержка для каждого элемента в обратном порядке
        })

        // Убираем меню после завершения анимации скрытия элементов
        setTimeout(function() {
            menu.style.maxHeight = '0'
            
            
        }, 300);
        setTimeout(() => {
            
        }, items.length * 100 + 50) // Учитываем задержку для анимации
        setTimeout(function() {
                        // menu.style.display = 'none' // Скрываем меню

        }, 700);
    }
    return menuVisible // Возвращаем текущее состояние видимости меню
}
