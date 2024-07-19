const town = document.querySelector('#town');
const temperature = document.querySelector('#temperature');
const icon = document.querySelector('#tempIcon');
const description = document.querySelector('#tempDescription');
const myAPIkey = `feebc7e1e901130c1bd4d522b76df23a`;
const myLat = '6.14955';
const myLon = '-75.61519';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=metric&appid=${myAPIkey}`;

async function getData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(response.text());
        }
    } catch (error) {

    }
}

function displayResults(data) {
    const iconImg = document.createElement('img');
    town.textContent = `${data.name}, ${data.sys.country}`;
    temperature.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    iconImg.setAttribute('src', iconsrc);
    iconImg.setAttribute('alt', desc);
    icon.appendChild(iconImg);
    description.textContent = desc;

}

getData(url);