let currentIndex = 0
let clickEnabled = true
export const slider = () => {
    const slides = document.querySelectorAll('.slide')
    const slideImage = document.querySelectorAll('.slide-img__box')
    const slideUrl = document.querySelectorAll('.slide-box')
    const slideDots = document.querySelector('.slider-dots')

    const slideTitle = document.querySelectorAll('.slide-title')

    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + slides.length) % slides.length
        updateSlidePosition()
    }

    const clickSlide = () => {
        slides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                currentIndex = index
                updateSlidePosition()
            })
        })
    }
    clickSlide()

    function updateSlidePosition() {
        setTimeout(function () {
            slideImage[currentIndex].style.opacity = '1'
            slideUrl[currentIndex].style.opacity = '1'
        }, 300)
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slideImage[currentIndex].style.opacity = '0'
                slideUrl[currentIndex].style.opacity = '0'
                slide.classList.add('expand')
                slide.classList.remove('collapsed')
                slideImage[index].style.display = 'flex'
                slideUrl[index].style.display = 'flex'
                slide.style.border = '1px solid rgba(124, 252, 0, 0.6)'
            } else {
                slide.classList.add('collapsed')
                slide.classList.remove('expand')
                slideImage[index].classList.remove('visible')
                slideUrl[index].classList.remove('visible')
                slideImage[index].style.display = 'none'
                slideUrl[index].style.display = 'none'
                slide.style.border = '1px solid transparent'
            }
            slide.style.boxShadow = `-20px 7px 29px 20px rgba(0, 0, 0, 0.4)`
        })
        updateDots()
    }

    const renderDots = () => {
        slideDots.innerHTML = '' // Очистка предыдущих точек

        slides.forEach((item, index) => {
            const dotEl = document.createElement('div') // Создание элемента для точки
            dotEl.classList.add('slider-dots__item') // Добавление класса для точки

            const maxIndex = slides.length - 1
            // Расчет размера точки: меньше на краях, больше в центре
            const size = 6 + (maxIndex - Math.abs(index - maxIndex / 2)) * 2
            dotEl.style.width = `${size}px`
            dotEl.style.height = `${size}px`

            // Установка data-атрибута для индекса
            dotEl.dataset.index = index

            // Добавление обработчика события для переключения слайдов
            dotEl.addEventListener('click', () => {
                // Сброс активной точки
                document.querySelectorAll('.slider-dots__item').forEach((dot) => {
                    dot.classList.remove('select') // Удаление активного класса у всех точек
                })

                // Установка текущего индекса и добавление класса активной точки
                currentIndex = index // Обновляем текущий индекс
                dotEl.classList.add('select') // Добавление активного класса к текущей точке


                // Вызов функции для обновления позиции слайда
                updateSlidePosition()
            })

            // Добавление точки в контейнер
            slideDots.appendChild(dotEl)
        })
    }

    const updateDots = () => {
        document.querySelectorAll('.slider-dots__item').forEach((dot) => {
            dot.classList.remove('select') // Удаление активного класса у всех точек
        })

        const activeDot = document.querySelector(`.slider-dots__item[data-index="${currentIndex}"]`)
        if (activeDot) {
            activeDot.classList.add('select') // Добавление активного класса к текущей точке
        }
    }

    // Вызов функции для рендеринга точек
    renderDots()

    const images = document.querySelectorAll('.slides-img')
    const overlay = document.createElement('div')
    overlay.className = 'overlay'
    document.body.appendChild(overlay)

    images.forEach((image) => {
        image.addEventListener('click', function () {
            const fullScreenImageContainer = document.createElement('div')
            fullScreenImageContainer.style.position = 'fixed'
            fullScreenImageContainer.style.top = '50%'
            fullScreenImageContainer.style.left = '50%'
            fullScreenImageContainer.style.transform = 'translate(-50%, -50%)'
            fullScreenImageContainer.style.zIndex = '9999'
            fullScreenImageContainer.style.height = '80vh'
            fullScreenImageContainer.style.overflow = 'hidden'

            const fullScreenImage = document.createElement('img')
            fullScreenImage.src = image.src
            fullScreenImage.style.height = '100%'
            fullScreenImage.style.width = 'auto'
            fullScreenImage.style.objectFit = 'contain'

            fullScreenImageContainer.appendChild(fullScreenImage)
            overlay.appendChild(fullScreenImageContainer)
            overlay.classList.add('show')

            const closeFullScreenImage = () => {
                if (overlay.contains(fullScreenImageContainer)) {
                    fullScreenImageContainer.remove() // Используем remove() для удаления элемента
                }
                if (overlay.childNodes.length === 0) {
                    overlay.classList.remove('show')
                }
            }

            fullScreenImageContainer.onclick = closeFullScreenImage
            overlay.onclick = closeFullScreenImage
        })
    })

    // Проверка на существование элементов
    const prevButton = document.getElementById('prev')
    const nextButton = document.getElementById('next')

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            changeSlide(-1)
        })
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            changeSlide(1)
        })
    }

    updateSlidePosition()
}
// Функция для получения текущего индекса
export function getCurrentIndex() {
    return currentIndex
}

// // Вы можете иметь дополнительную логику, которая изменяет currentIndex внутри slide.js
// function changeSlide(newIndex) {
//     currentIndex = newIndex
// }
