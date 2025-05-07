import { myWorks } from './projects.js'
export const renderslider = () => {
    const worksContainer = document.querySelector('.slides')
    worksContainer.innerHTML = ''

    myWorks.forEach((work) => {
        const card = document.createElement('div')
        card.classList.add('slide')
        card.innerHTML = `<div class="slide-title">${work.title}</div>`
        worksContainer.appendChild(card)
    })
}
