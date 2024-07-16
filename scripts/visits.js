//Variable for visits
const visits = document.querySelector('.visits');
let numberVisits = Number(localStorage.getItem('numVisits')) || 0;

if (numberVisits !== 0) {
    visits.textContent = numberVisits;
} else {
    visits.textContent = "This is your first visit, Welcome.";
}

numberVisits++;
localStorage.setItem('numVisits', numberVisits);