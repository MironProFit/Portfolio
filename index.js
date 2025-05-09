import { toggleDesc } from './src/descslide.js'
import { renderslider } from './src/renderslider.js'
import { toggleMenu } from './src/togglemenu.js'
import { modalWindow } from './src/modal.js'
import { slider } from './src/slider.js'
import { lazyLoad } from './src/lazyload.js'

export let menuVisible = false
window.onload = () => lazyLoad()

// Burger меню
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu')
    const items = Array.from(document.querySelectorAll('.nav__item'))
    const burger = document.querySelector('.header__burger')
    menu.style.display = 'none'

    burger.addEventListener('click', (e) => {
        console.log('бургер меню нажато')
        e.preventDefault()
        menuVisible = toggleMenu(menu, items, burger, menuVisible)
    })

    items.forEach((item) => {
        item.querySelector('a').addEventListener('click', () => {
            if (menuVisible) {
                menuVisible = toggleMenu(menu, items, burger, menuVisible)
            }
        })
    })
})

//Модальное окно

export const images = document.querySelectorAll('.slides-img')
export const overlay = document.createElement('div')
overlay.className = 'overlay'
document.body.appendChild(overlay)

modalWindow(overlay)

// слайдер
renderslider()
toggleDesc()
slider()
