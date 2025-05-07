export function toggleMenu() {
    let menuVisible = false

    menuVisible = !menuVisible
    menu.classList.toggle('show', menuVisible)

    if (menuVisible) {
        setTimeout(() => {
            burger.classList.add('active')
        }, 0)

        menu.style.display = 'flex'

        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show')
            }, index * 100)
        })
    } else {
        burger.classList.remove('active')
        ;[...items].reverse().forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('show')
            }, index * 100)
        })

        setTimeout(() => {
            menu.style.display = 'none'
        }, items.length * 100)
    }
}
