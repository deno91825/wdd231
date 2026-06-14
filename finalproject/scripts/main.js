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




const featuredContainer = document.querySelector("#featured");

const sampleFeatured = [
    { name: "Sarah Nankya", school: "Mbale SS", level: "S6" },
    { name: "David Okello", school: "Jinja College", level: "S4" },
    { name: "Amina Kato", school: "Kampala SS", level: "S6" }
];

featuredContainer.innerHTML = sampleFeatured.map(student => {
    return `
        <div class="card">
            <h3>${student.name}</h3>
            <p>${student.school}</p>
            <p>${student.level}</p>
        </div>
    `;
}).join("");

const params = new URLSearchParams(window.location.search);

const output = document.querySelector("#output");

if (output) {
    output.innerHTML = `
        <h2>Submission Details</h2>
        <p><strong>Name:</strong> ${params.get("name")}</p>
        <p><strong>School:</strong> ${params.get("school")}</p>
        <p><strong>Level:</strong> ${params.get("level")}</p>
        <p><strong>Career:</strong> ${params.get("career")}</p>
        <p><strong>Quote:</strong> ${params.get("quote")}</p>
    `;
}



