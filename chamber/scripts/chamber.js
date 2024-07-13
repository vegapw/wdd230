const options = {
    year: "numeric"
};
const options1 = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

const year = new Date().toLocaleDateString("en-US", options);
const lastModified = new Date(document.lastModified).toLocaleDateString("en-US", options1);
// Variables for hamburguer button
const hamButton = document.querySelector('#menu');
const navMenu = document.querySelector('.menuItems');
// Variables for welcome
const welcome = document.querySelector('.welcome');
let lastVisit = Date.parse(localStorage.getItem('lastVisitDate')) || 0;
const currentDate = new Date();
const msToDays = 86400000;

document.querySelector('#year').textContent = year;
document.querySelector('#lastModified').textContent = lastModified;

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
});

if (lastVisit === 0) {
    welcome.textContent = "Welcome! Let us know if you have any questions.";
    localStorage.setItem('lastVisitDate', currentDate);
} else {
    const daysSinceLastVisit = (Date.now() - currentDate.getTime()) / msToDays;
    if (daysSinceLastVisit < 1) {
        welcome.textContent = "Back so soon! Awesome!";
    } else {
        if (daysSinceLastVisit === 1) {
            welcome.textContent = 'You last visited ' + daysSinceLastVisit + ' day ago';
        } else {
            welcome.textContent = 'You last visited ' + daysSinceLastVisit + ' days ago';
        }
    }
}