const baseURL = `https://vegapw.github.io/wdd230/`;
const linksURL = `https://vegapw.github.io/wdd230/data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();

        } else {
            throw Error(response.text())
        }
    } catch (error) {

    }
}

getLinks();