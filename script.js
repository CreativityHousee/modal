const mainTagElem = document.querySelector('main')
const modalElem = document.querySelector('#modal')
const openModalButton = document.querySelector('button')
const closeModalButton = document.querySelector('i')

openModalButton.addEventListener('click', () => {
    modalElem.classList.add('show')
    mainTagElem.classList.add('blur')
})

closeModalButton.addEventListener('click', () => {
    modalElem.classList.remove('show')
    mainTagElem.classList.remove('blur')
})