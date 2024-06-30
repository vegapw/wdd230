const options1 = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

const lastModified = new Date(document.lastModified).toLocaleDateString("en-US", options1);

document.querySelector('#lastModified').textContent = lastModified;