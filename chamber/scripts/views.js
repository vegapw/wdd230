const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const divCards = document.querySelector('#cards');


gridButton.addEventListener('click', () => {
    divCards.classList.add('grid');
    divCards.classList.remove('list');
});

listButton.addEventListener('click', () => {
    divCards.classList.add('list');
    divCards.classList.remove('grid');
});