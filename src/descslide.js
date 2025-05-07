import { myWorks } from './projects.js'
import { getCurrentIndex } from './slider.js'

let currentIndex = getCurrentIndex()
let showDesc = false

export const toggleDesc = () => {
    const toggleBtn = document.querySelector('.slide-description__toggle')
    const titleDesc = document.querySelector('.slide-description__title')
    const descriptionBox = document.querySelector('.slide-description__container')

    const renderDescriptions = () => {
        // Очищаем контейнер описания
        descriptionBox.innerHTML = ''

        myWorks.forEach((item, index) => {
            const descItem = document.createElement('div')
            descItem.classList.add('slide-description__item')
            descItem.setAttribute('data-id', index)

            if (index === currentIndex) {
                descItem.innerHTML = item.description.text
                descriptionBox.appendChild(descItem)
            }
        })

        // Устанавливаем видимость в зависимости от состояния showDesc
        if (showDesc) {
            descriptionBox.classList.add('active')
            toggleBtn.style.transform = 'rotate(45deg)'
        } else {
            descriptionBox.classList.remove('active')
            toggleBtn.style.transform = 'rotate(225deg)'

        }
    }

    // Проверяем, если обработчик события уже добавлен
    if (!titleDesc.dataset.listenerAdded) {
        // Обработчик клика для изменения видимости описания
        titleDesc.addEventListener('click', () => {
            showDesc = !showDesc
            renderDescriptions() // Перерисовываем описание с актуальным состоянием
            console.log(`Показ описания: ${showDesc}`)
        })

        titleDesc.dataset.listenerAdded = true // Отмечаем, что обработчик добавлен
    }

    renderDescriptions()
}

// Функция для обновления индекса и описания
const updateSlide = (direction) => {
    const totalSlides = myWorks.length

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalSlides // Переход к следующему слайду
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides // Переход к предыдущему слайду
    }

    toggleDesc() // Перерисовываем описание
}

// Пример вызова updateSlide при переключении слайда
document.getElementById('next').addEventListener('click', () => {
    updateSlide('next')
})

document.getElementById('prev').addEventListener('click', () => {
    updateSlide('prev')
})
