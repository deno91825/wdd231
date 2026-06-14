export function displayGraduates(graduates, container, onCardClick, onFavorite) {

    container.innerHTML = graduates.map((student, index) => {

        return `
            <div class="card" data-index="${index}">
                <div class="img-wrapper">
                    <img src="${student.photo}" alt="${student.name}" loading="lazy">
                </div>

                <h3>${student.name}</h3>
                <p>${student.school}</p>
                <p>${student.level}</p>
                <p>${student.career}</p>

                <button class="fav-btn" data-id="${student.id}">
                    ⭐ Save
                </button>
            </div>
        `;
    }).join("");

    // card click (modal)
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (!e.target.classList.contains("fav-btn")) {
                onCardClick(card.dataset.index);
            }
        });
    });

    // favorite buttons
    document.querySelectorAll(".fav-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            onFavorite(btn.dataset.id);
        });
    });
}