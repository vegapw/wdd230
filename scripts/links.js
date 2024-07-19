const baseURL = `https://vegapw.github.io/wdd230/`;
const linksURL = `https://vegapw.github.io/wdd230/data/links.json`;
const activities = document.querySelector('#activities');

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data);
        } else {
            throw Error(response.text())
        }
    } catch (error) {
        console.log(error);
    }
}

function displayLinks(weeks) {
    const list = document.createElement('ul');
    weeks.weeks.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.week}:`;
        item.links.forEach(link => {
            let anchor = document.createElement('a');
            let span = document.createElement('span');
            anchor.setAttribute('href', link.url)
            anchor.textContent = link.title;
            span.innerHTML = '&ensp;';
            listItem.appendChild(anchor);
            listItem.appendChild(span);
        });

        list.appendChild(listItem);

    });


    activities.appendChild(list);
}

getLinks();