export const lazyLoad = () => {
    const allSections = document.querySelectorAll('.section')

    if (allSections.length === 0) return

    const appearanceSection = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('section--hidden')
                observer.unobserve(entry.target)
            }
        })
    }

    const sectionObserver = new IntersectionObserver(appearanceSection, {
        root: null,
        threshold: 0.2,
    })

    allSections.forEach((section) => {
        sectionObserver.observe(section)
        section.classList.add('section--hidden') // Скрываем элементы при загрузке
    })
}

// Вызов функции
document.addEventListener('DOMContentLoaded', () => {
    lazyLoad()
})
