import { getGraduates } from "./modules/data.js";
import { displayGraduates } from "./modules/render.js";

const container = document.querySelector("#graduates-container");
const searchInput = document.querySelector("#searchInput");
const levelFilter = document.querySelector("#levelFilter");

const modal = document.querySelector("#graduateModal");
const modalBody = document.querySelector("#modalBody");
const closeModal = document.querySelector("#closeModal");

let allGraduates = [];

async function init() {
    allGraduates = await getGraduates();

    render(allGraduates);
}

function render(data) {
    displayGraduates(data, container, showModal, toggleFavorite);
}

// SEARCH + FILTER LOGIC
function applyFilters() {
    let filtered = allGraduates;

    const searchValue = searchInput.value.toLowerCase();
    const levelValue = levelFilter.value;

    // filter by level
    if (levelValue !== "all") {
        filtered = filtered.filter(g => g.level === levelValue);
    }

    // search by name
    if (searchValue) {
        filtered = filtered.filter(g =>
            g.name.toLowerCase().includes(searchValue)
        );
    }

    render(filtered);
}

// EVENT LISTENERS
searchInput.addEventListener("input", applyFilters);
levelFilter.addEventListener("change", applyFilters);

// MODAL
function showModal(index) {
    const student = allGraduates[index];

    modalBody.innerHTML = `
        <img src="${student.photo}" alt="${student.name}" width="200">
        <h2>${student.name}</h2>
        <p><strong>School:</strong> ${student.school}</p>
        <p><strong>Level:</strong> ${student.level}</p>
        <p><strong>Career:</strong> ${student.career}</p>
        <p><em>"${student.quote}"</em></p>
    `;

    modal.showModal();
}

closeModal.addEventListener("click", () => {
    modal.close();
});

init();

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function toggleFavorite(id) {

    if (favorites.includes(id)) {
        favorites = favorites.filter(fav => fav !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    console.log("Favorites:", favorites);
}


