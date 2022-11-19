let counterValue = 0

const counter = document.querySelector('#value')
const buttonMinus = document.querySelector('button[data-action="decrement"]')
const buttonAdd = document.querySelector('button[data-action="increment"]')

buttonMinus.addEventListener('click', () => {
    counterValue --
    counter.textContent = counterValue
})

buttonAdd.addEventListener('click', () => {
    counterValue ++
    counter.textContent = counterValue
})

