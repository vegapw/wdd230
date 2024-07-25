const town = document.querySelector('#town');
const temperature = document.querySelector('#temperature');
const icon = document.querySelector('#tempIcon');
const description = document.querySelector('#tempDescription');
const myAPIkey = `feebc7e1e901130c1bd4d522b76df23a`;
const myLat = '6.14955';
const myLon = '-75.61519';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=metric&appid=${myAPIkey}`;
const urlfore = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&units=metric&cnt=20&appid=${myAPIkey}`

async function getData() {
    try {
        const response = await fetch(url);
        const response2 = await fetch(urlfore);
        if (response.ok) {
            const data = await response.json();
            const data2 = await response2.json();
            displayResults(data);
            displayForecast(data2);
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

function displayForecast(data) {
    console.log(data);
}

getData();