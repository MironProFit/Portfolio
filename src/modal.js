export const modalWindow = (overlay) => {
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
