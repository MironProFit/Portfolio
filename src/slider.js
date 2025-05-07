let currentIndex = 0
export const slider = () => {
    const slides = document.querySelectorAll('.slide')

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
                slide.style.transition = '0.5s'
                slide.style.opacity = '1'
                slide.style.cursor = 'pointer'
                slide.style.border = '3px solid rgba(124, 252, 0, 0.6)'
            } else {
                slide.style.transition = '0.5s'
                slide.style.opacity = '0.2'
                slide.style.border = '3px solid transparent'
                slide.style.cursor = 'default'
            }
            slide.style.boxShadow = `-20px 7px 29px 20px rgba(0, 0, 0, 0.4)`
        })
    }

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
                overlay.removeChild(fullScreenImageContainer)
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
