const year = new Date().getFullYear();
const currentYear = document.querySelector('#currentyear');
currentYear.innerHTML = year;

document.getElementById("lastmodified").textContent =
  "Last Modified: " + document.lastModified;