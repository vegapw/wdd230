// Variables for welcome
const welcome = document.querySelector('.welcome');
let lastVisit = Date.parse(localStorage.getItem('lastVisitDateCH')) || 0;
const currentDate = new Date();
const msToDays = 86400000;


if (lastVisit === 0) {
    welcome.textContent = "Welcome! Let us know if you have any questions.";
    localStorage.setItem('lastVisitDateCH', currentDate);
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