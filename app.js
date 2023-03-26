const openBtn = document.querySelector('#openModal')
const closeBtn = document.querySelector('#closeBtn')
let modalContainer = document.querySelector('#modal-container')

openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if (e.target === modalContainer){
        modalContainer.style.display = 'none'
    }
})
