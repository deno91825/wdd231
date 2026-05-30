document.addEventListener("DOMContentLoaded", () => {

    const url = 'data/members.json';

    // =========================
    // NAVIGATION
    // =========================
    const navButton = document.querySelector('#ham-btn');
    const navBar = document.querySelector('#nav-bar');

    if (navButton && navBar) {
        navButton.addEventListener('click', () => {
            navButton.classList.toggle('show');
            navBar.classList.toggle('show');
        });
    }

    // highliting current page

    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
        link.parentElement.classList.add("current");
        }
    });


    // =========================
    // CARDS CONTAINER
    // =========================
    const cards = document.querySelector('#cards');

    const displayCompanies = (companies) => {

        if (!cards) return;

        cards.innerHTML = "";

        companies.forEach((company) => {

            const card = document.createElement('section');

            const fullName = document.createElement('h2');
            const address = document.createElement('p');
            const link = document.createElement('a');
            const portrait = document.createElement('img');

            fullName.textContent = company.companyName;
            address.textContent = company.address;
            link.textContent = company.website;
            link.href = company.website;
            link.target = "_blank";

            portrait.src = company.image;
            portrait.alt = `Portrait of ${company.companyName}`;
            portrait.loading = "lazy";
            portrait.width = 340;
            portrait.height = 440;

            card.appendChild(portrait);
            card.appendChild(fullName);
            card.appendChild(address);
            card.appendChild(link);

            cards.appendChild(card);
        });
    };

    // =========================
    // GRID / LIST TOGGLE
    // =========================
    const gridBtn = document.querySelector('#gridView');
    const listBtn = document.querySelector('#listView');

    if (cards && gridBtn && listBtn) {

        gridBtn.addEventListener('click', () => {
            cards.classList.remove('list');
        });

        listBtn.addEventListener('click', () => {
            cards.classList.add('list');
        });
    }

    

    // =========================
    // SPOTLIGHTS
    // =========================
    const spotlightsContainer = document.querySelector('#spotlights');

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function displaySpotlights(companies) {

        if (!spotlightsContainer) return;

        spotlightsContainer.innerHTML = "";

        const eligible = companies.filter(c =>
            Number(c.membershipLevel) === 2 ||
            Number(c.membershipLevel) === 3
        );

        const selected = shuffle(eligible).slice(0, 3);

        selected.forEach(company => {

            const card = document.createElement('section');
            card.classList.add("spotlight-card");

            const img = document.createElement('img');
            img.src = company.image;
            img.alt = company.companyName;

            const title = document.createElement('h3');
            title.textContent = company.companyName;

            const phone = document.createElement('p');
            phone.textContent = company.phone;

            const address = document.createElement('p');
            address.textContent = company.address;

            const link = document.createElement('a');
            link.href = company.website;
            link.textContent = "Visit";
            link.target = "_blank";

            const badge = document.createElement('p');
            badge.textContent =
                Number(company.membershipLevel) === 3 ? "Gold Member" : "Silver Member";

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(phone);
            card.appendChild(address);
            card.appendChild(link);
            card.appendChild(badge);

            spotlightsContainer.appendChild(card);
        });
    }

    // =========================
    // FETCH DATA
    // =========================
    async function getCompaniesData() {

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (cards) displayCompanies(data.companies);
            if (spotlightsContainer) displaySpotlights(data.companies);

        } catch (error) {
            console.error("Error loading company data:", error);
        }
    }

    getCompaniesData();

});
