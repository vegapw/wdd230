const date0 = new Date();
const date1 = document.querySelector("#year");
const date2 = document.querySelector("#full-date");

date1.textContent = date0.getFullYear();
date2.textContent = date0.toLocaleDateString() + " - " + date0.toLocaleTimeString([], {
    hour12: false,
});

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});