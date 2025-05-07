export const modalWindow = () => {
    document.querySelectorAll('.about-card__btn').forEach((button) => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal')
        const modal = document.getElementById(modalId)

        if (modal) {
            modal.classList.add('active')
            overlay.classList.add('show')
            setTimeout(() => {
                modal.style.opacity = '1'
            }, 30)
        }
        console.log(modalId)
        console.log(modal)
    })
})

document.querySelectorAll('.about-modal__btn.close').forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.about-modal')

        overlay.classList.remove('show')
        modal.classList.remove('active')
    })
})
}


