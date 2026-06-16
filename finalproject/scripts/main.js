const hamBtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

hamBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");

    // Toggle icon
    if (navBar.classList.contains("open")) {
        hamBtn.textContent = "✕";
    } else {
        hamBtn.textContent = "☰";
    }
});




import { getGraduates } from "./modules/data.js";

const featuredContainer = document.querySelector("#featured");

async function displayFeatured() {
    if (!featuredContainer) return;

    const graduates = await getGraduates();

    const featured = [...graduates]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    featuredContainer.innerHTML = featured.map(student => `
        <div class="card">
            <img src="${student.photo}" alt="${student.name}" loading="lazy">
            <h3>${student.name}</h3>
            <p>${student.school}</p>
            <p>${student.level}</p>
        </div>
    `).join("");
}

displayFeatured();





