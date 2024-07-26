//Banner variables
const banner = document.querySelector('#ban');
const close = document.querySelector('#close');
const curDate = new Date();
const daysVisible = [1, 2, 3];


window.onload = () => {
    if (daysVisible.includes(curDate.getDay())) {
        banner.classList.add('banner');
    } else {
        banner.classList.remove('banner');
    }
};

close.addEventListener('click', () => {
    banner.classList.remove('banner');
});