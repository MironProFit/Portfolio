export const lazyLoad = () => {
const allSections = document.querySelectorAll('.section')
    const apperanceSection = (entries, observer) => {
        const entry = entries[0]
        if (!entry.isIntersecting) return
        entry.target.classList.remove('section--hidden')
        observer.unobserve(entry.target)
    }
    const sectionObserver = new IntersectionObserver(apperanceSection, {
        root: null,
        threshold: 0.2
    })
    allSections.forEach((section) => {
        sectionObserver.observe(section)
        section.classList.add('section--hidden')
    })
}
lazyLoad()
