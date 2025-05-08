let currentIndex = 0
export const slider = () => {
    const slides = document.querySelectorAll('.slide')
    const slideImage = document.querySelectorAll('.slide-img__box')
    const slideUrl = document.querySelectorAll('.slide-box')
    const slideDots = document.querySelector('.slider-dots')

    const slideTitle = document.querySelectorAll('.slide-title')
    console.log(slideUrl)

    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + slides.length) % slides.length
        updateSlidePosition()
        console.log(currentIndex)
    }

    const clickSlide = () => {
        slides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                console.log(index)
                currentIndex = index
                updateSlidePosition()
            })
        })
    }
    clickSlide()

    function updateSlidePosition() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add('expand')
                slide.classList.remove('collapsed')

                slideImage[index].style.display = 'flex'
                slideUrl[index].style.display = 'flex'

                setTimeout(() => {
                    // slideImage[index].classList.add('visible')
                    // slideUrl[index].classList.add('visible')
                }, 500)
                setTimeout(() => {}, 300)

                // slide.style.cursor = 'pointer'
                slide.style.border = '1px solid rgba(124, 252, 0, 0.6)'
            } else {
                slide.classList.add('collapsed')

                // slide.style.transform = 'translateX(0)'

                slide.classList.remove('expand')

                slideImage[index].classList.remove('visible')
                slideUrl[index].classList.remove('visible')

                slideImage[index].style.display = 'none'
                slideUrl[index].style.display = 'none'
                // slide.style.cursor = 'default'
                slide.style.border = '1px solid transparent'
            }
            slide.style.boxShadow = `-20px 7px 29px 20px rgba(0, 0, 0, 0.4)`
        })
        updateDots()

        
    }
    const renderDots = () => {
        slideDots.innerHTML = ''; // Очистка предыдущих точек
    
        slides.forEach((item, index) => {
            const dotEl = document.createElement('div'); // Создание элемента для точки
            dotEl.classList.add('slider-dots__item'); // Добавление класса для точки
    
            const maxIndex = slides.length - 1;
            // Расчет размера точки: меньше на краях, больше в центре
            const size = 6 + (maxIndex - Math.abs(index - maxIndex / 2)) * 2; 
            dotEl.style.width = `${size}px`;
            dotEl.style.height = `${size}px`;
    
            // Установка data-атрибута для индекса
            dotEl.dataset.index = index;
    
            // Добавление обработчика события для переключения слайдов
            dotEl.addEventListener('click', () => {
                // Сброс активной точки
                document.querySelectorAll('.slider-dots__item').forEach((dot) => {
                    dot.classList.remove('select'); // Удаление активного класса у всех точек
                });
    
                // Установка текущего индекса и добавление класса активной точки
                currentIndex = index; // Обновляем текущий индекс
                dotEl.classList.add('select'); // Добавление активного класса к текущей точке
                
                console.log(`Текущий индекс: ${currentIndex}`); // Лог текущего индекса
                console.log(`Индекс точки: ${index}`); // Лог индекса точки
                
                // Вызов функции для обновления позиции слайда
                updateSlidePosition();
            });
    
            // Добавление точки в контейнер
            slideDots.appendChild(dotEl);
        });
    }
    
    const updateDots = () => {
        document.querySelectorAll('.slider-dots__item').forEach((dot) => {
            dot.classList.remove('select'); // Удаление активного класса у всех точек
        });
    
        const activeDot = document.querySelector(`.slider-dots__item[data-index="${currentIndex}"]`);
        if (activeDot) {
            activeDot.classList.add('select'); // Добавление активного класса к текущей точке
        }
    };
    
    // Вызов функции для рендеринга точек
    renderDots();

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

// Вы можете иметь дополнительную логику, которая изменяет currentIndex внутри slide.js
function changeSlide(newIndex) {
    currentIndex = newIndex
}
