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
