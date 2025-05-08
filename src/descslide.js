import { myWorks } from './projects.js' // Предполагается, что это массив объектов с описаниями
import { getCurrentIndex } from './slider.js' // Предполагается, что это функция, возвращающая текущий индекс слайда

let currentIndex = getCurrentIndex()
let showDesc = false

export const toggleDesc = () => {
    const toggleBtn = document.querySelector('.slide-description__toggle')
    const titleDesc = document.querySelector('.slide-description__title')
    const descriptionBox = document.querySelector('.slide-description__container')

    const renderDescriptions = () => {
        descriptionBox.innerHTML = ''

        myWorks.forEach((item, index) => {
            if (index === currentIndex) {
                const tempDiv = document.createElement('div')
                tempDiv.innerHTML = item.description.text
                const contentItems = tempDiv.querySelectorAll('.slide-description__item-content, .slide-description__item-pun')

                contentItems.forEach((elem, i) => {
                    elem.style.transitionDelay = `${i * 0.2}s`
                    descriptionBox.appendChild(elem)

                    if (showDesc) {
                        setTimeout(() => elem.classList.add('show'), 50)
                    } else {
                        setTimeout(() => elem.classList.remove('show'), (contentItems.length - i) * 200)
                    }
                })
            }
        })

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
        toggleBtn.addEventListener('click', () => {
            showDesc = !showDesc
            renderDescriptions() // Перерисовываем описание с актуальным состоянием
            console.log(`Показ описания: ${showDesc}`)
        })
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
