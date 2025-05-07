export const slider = () => {

    let currentIndex = 0;

    const slides = document.querySelectorAll('.slide');

    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        updateSlidePosition();
    }
    const clickSlide = () => {
        slides.forEach((slide, index)  => {
            slide.addEventListener('click', () => {
                console.log(index);
                currentIndex = index
                updateSlidePosition()
            })
        })
    }
    clickSlide()

    function updateSlidePosition() {
        const description = document.querySelectorAll('.slide-description__item');
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

    const images = document.querySelectorAll('.slides-img');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    images.forEach((image) => {
        image.addEventListener('click', function () {
            const fullScreenImageContainer = document.createElement('div');
            fullScreenImageContainer.style.position = 'fixed';
            fullScreenImageContainer.style.top = '50%';
            fullScreenImageContainer.style.left = '50%';
            fullScreenImageContainer.style.transform = 'translate(-50%, -50%)';
            fullScreenImageContainer.style.zIndex = '9999';
            fullScreenImageContainer.style.height = '80vh';
            fullScreenImageContainer.style.overflow = 'hidden';

            const fullScreenImage = document.createElement('img');
            fullScreenImage.src = image.src;
            fullScreenImage.style.height = '100%';
            fullScreenImage.style.width = 'auto';
            fullScreenImage.style.objectFit = 'contain';

            fullScreenImageContainer.appendChild(fullScreenImage);
            overlay.appendChild(fullScreenImageContainer);
            overlay.classList.add('show');

            const closeFullScreenImage = () => {
                if (overlay.contains(fullScreenImageContainer)) {
                    overlay.removeChild(fullScreenImageContainer);
                }
                if (overlay.childNodes.length === 0) {
                    overlay.classList.remove('show');
                }
            };

            fullScreenImageContainer.onclick = closeFullScreenImage;
            overlay.onclick = closeFullScreenImage;
        });
    });

    // Обработчики событий для кнопок
    document.getElementById('prev').addEventListener('click', () => {
        changeSlide(-1); // Теперь changeSlide доступна
    });

    document.getElementById('next').addEventListener('click', () => {
        changeSlide(1); // Теперь changeSlide доступна
    });

    

    updateSlidePosition();
};