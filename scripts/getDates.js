//Variables for home page dates
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
// Variables for dark mode
const darkButton = document.querySelector('#darkButton');
const main = document.querySelector('main');
const homeDiv = document.querySelector('.home');
//Variable for visits
const visits = document.querySelector('.visits');
let numberVisits = Number(localStorage.getItem('numVisits')) || 0;

document.getElementById("year").textContent = year;
document.getElementById("lastModified").textContent = lastModified;


hamButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamButton.classList.toggle('open');
});

darkButton.addEventListener('click', () => {
  main.classList.toggle('dark');
  homeDiv.classList.toggle('dark');
});

if (numberVisits !== 0) {
  visits.textContent = numberVisits;
} else {
  visits.textContent = "This is your first visit, Welcome.";
}

numberVisits++;
localStorage.setItem('numVisits', numberVisits);