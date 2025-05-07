const slider = () => {
let currentIndexSlide = 0

    const updateSlidePosition = () => {
      slides.forEach((slide, index) => {
          if (index === currentIndexSlide) {
              slide.style.transition = '0.5s'
              slide.style.opacity = '1'
              slide.style.cursor = 'pointer'
              slide.style.border = '3px solid rgba(124, 252, 0, 0.6)'
              slidesDescriptions[index].style.display = 'block'
          } else {
              slide.style.transition = '0.5s'
              slide.style.opacity = '0.2'
              slide.style.border = '3px solid transparent'
              slidesDescriptions[index].style.display = 'none'
              slide.style.cursor = 'default'
          }
  
          slide.style.boxShadow = `-20px 7px 29px 20px rgba(0, 0, 0, 0.4)`
      })
  }
  
  const slideChange = (slides) => {
      slides.forEach((slide, index) => {
          slide.addEventListener('click', () => {
              currentIndexSlide = index
              updateSlidePosition()
          })
      })
  }
  
  slideChange(slides)
  
  const buttonPrevChange = (button) => {
      button.addEventListener('click', () => {
          currentIndexSlide = (currentIndexSlide - 1 + slides.length) % slides.length
          console.log(currentIndexSlide)
          updateSlidePosition()
      })
  }
  
  const buttonNextChange = (button) => {
      button.addEventListener('click', () => {
          currentIndexSlide = (currentIndexSlide + 1) % slides.length
          console.log(currentIndexSlide)
          updateSlidePosition()
      })
  }
  
  buttonNextChange(buttonNext)
  buttonPrevChange(buttonPrev)
  updateSlidePosition()
  
  function openFullScreen(image) {
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
  
      // Получаем overlay и добавляем класс show
      const overlay = document.getElementById('overlay')
      if (overlay) {
          overlay.classList.add('show')
      } else {
          console.error('Overlay element not found!')
      }
  
      // Обработчик клика для закрытия изображения
      const closeFullScreen = () => {
          document.body.removeChild(fullScreenImageContainer)
          if (overlay) overlay.classList.remove('show')
      }
  
      // Добавляем обработчики клика
      fullScreenImageContainer.onclick = closeFullScreen
      if (overlay) {
          overlay.onclick = closeFullScreen
      }
  
      // Добавляем контейнер к body
      document.body.appendChild(fullScreenImageContainer)
  }
  
  // Получаем все контейнеры изображений с классом 'slide-img__box' и добавляем обработчик клика
  const imagesContainers = document.querySelectorAll('.slide-img__box')
  imagesContainers.forEach((container) => {
      const image = container.querySelector('img')
      container.addEventListener('click', () => {
          openFullScreen(image)
      })
  })
  }
  