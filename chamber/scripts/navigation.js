const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
})

const cards = document.querySelector('#cards');
const url = 'data/members.json';

async function getCompaniesData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.companies);
    displayCompanies(data.companies);
}

getCompaniesData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const address = document.createElement('p');
        const link = document.createElement('a');
        const portrait = document.createElement('img');

        fullName.textContent = company.companyName;
        address.textContent = company.address;
        link.textContent = company.website
        

                // Image
        portrait.setAttribute('src', company.image);
        portrait.setAttribute('alt', `Portrait of ${company.companyName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(portrait);
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(link);

        cards.appendChild(card);
    });
}

const cardsContainer = document.querySelector('#cards');
const gridBtn = document.querySelector('#gridView');
const listBtn = document.querySelector('#listView');

/* Default = grid view (already handled by CSS) */

gridBtn.addEventListener('click', () => {
  cardsContainer.classList.remove('list');
});

listBtn.addEventListener('click', () => {
  cardsContainer.classList.add('list');
});