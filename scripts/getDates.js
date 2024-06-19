const options = {
  year: "numeric"
};
const options1 = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};
const year = new Date().toLocaleDateString("en-US", options);
const lastModified = new Date(document.lastModified).toLocaleDateString("en-US", options1);

document.getElementById("year").textContent = year;
document.getElementById("lastModified").textContent = lastModified;