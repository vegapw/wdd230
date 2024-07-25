const town = document.querySelector('#town');
const temperature = document.querySelector('#temperature');
const icon = document.querySelector('#tempIcon');
const description = document.querySelector('#tempDescription');
const myAPIkey = `feebc7e1e901130c1bd4d522b76df23a`;
const myLat = '6.14955';
const myLon = '-75.61519';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=metric&appid=${myAPIkey}`;
const urlfore = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&units=metric&cnt=24&appid=${myAPIkey}`
const town1 = document.querySelector('#town_1');
const temp1 = document.querySelector('#tempDay1');
const temp2 = document.querySelector('#tempDay2');
const temp3 = document.querySelector('#tempDay3');

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
    town1.textContent = `${data.city.name}, ${data.city.country}`;
    temp1.innerHTML = `<strong>${data.list[7].dt_txt.substring(0, 10)}</strong><br> Temperature = ${data.list[7].main.temp}&deg;C`;
    temp2.innerHTML = `<strong>${data.list[15].dt_txt.substring(0, 10)}</strong><br> Temperature = ${data.list[15].main.temp}&deg;C`;
    temp3.innerHTML = `<strong>${data.list[23].dt_txt.substring(0, 10)}</strong><br> Temperature = ${data.list[23].main.temp}&deg;C`;
}

getData();