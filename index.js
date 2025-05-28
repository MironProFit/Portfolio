import { toggleDesc } from './src/descslide.js'
import { draw } from './src/matrix.js'
import { renderslider } from './src/renderslider.js'
import { toggleMenu } from './src/togglemenu.js'
import { modalWindow } from './src/modal.js'
import { slider } from './src/slider.js'
import { lazyLoad } from './src/lazyload.js'
import { game } from './src/game.js'
import { smilesMatrix } from './src/matrixsmile.js'

export let menuVisible = true
window.onload = () => lazyLoad()
const menu = document.getElementById('menu')
const items = Array.from(document.querySelectorAll('.nav__item'))
const burger = document.querySelector('.header__burger')
menu.style.display = 'flex'
menu.classList.add('show')
burger.classList.add('active')

items.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add('show') // Добавляем класс 'show' для каждого элемента
    }, index * 100) // Задержка для каждого элемента
})

// Burger меню
document.addEventListener('DOMContentLoaded', () => {
    burger.addEventListener('click', (e) => {
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

// эффект матрицы
draw()
smilesMatrix()

// слайдер
renderslider()
toggleDesc()
slider()

//игра
game()
