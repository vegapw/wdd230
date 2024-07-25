const urlMembers = 'https://vegapw.github.io/wdd230/chamber/data/members.json';
const news = document.querySelector('#news');

async function getCompanies() {
    try {
        const response = await fetch(urlMembers);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data.companies);
        } else {
            throw Error(response.text());
        }
    } catch (error) {

    }
}

function displayMembers(members) {
    const premiumMembers = members.filter((member) => member.membershiplevel === 'gold' || member.membershiplevel === 'silver');
    let showMembers = [];
    let index = 0;
    while (index < 3) {
        if (!showMembers.includes(getRandom(premiumMembers))) {
            showMembers.push(getRandom(premiumMembers));
            index++;
        }
    }
    console.log(showMembers);
    showMembers.forEach(member => {
        const section = document.createElement('section');
        const title = document.createElement('h3');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const psite = document.createElement('p');
        const wsite = document.createElement('a');
        section.setAttribute('class', `${member.membershiplevel}, card`);
        title.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phonenumber;
        wsite.setAttribute('href', member.website);
        wsite.textContent = member.website;
        psite.appendChild(wsite);
        section.appendChild(title);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(psite);
        news.appendChild(section);
    });
}

function getRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

getCompanies();