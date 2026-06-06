import { places } from "../data/places.mjs";

const container = document.querySelector(".cards");

const messageBox = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();
if (!lastVisit) {

    messageBox.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const days =
        Math.floor((now - Number(lastVisit)) / 86400000);

    if (days < 1) {

        messageBox.textContent =
            "Back so soon! Awesome!";

    } else {

        messageBox.textContent =
            `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
    }
}




places.forEach(place => {

    const card = document.createElement("section");
    card.classList.add("card");

    // TITLE
    const title = document.createElement("h2");
    title.textContent = place.name;

    // FIGURE
    const figure = document.createElement("figure");

    // IMAGE
    const image = document.createElement("img");
    image.src = place.image;
    image.alt = place.name;
    image.loading = "lazy";

    figure.appendChild(image);

    // ADDRESS
    const address = document.createElement("address");
    address.textContent = place.address;

    // DESCRIPTION
    const description = document.createElement("p");
    description.textContent = place.description;

    // BUTTON
    const button = document.createElement("button");
    button.textContent = "Learn More";

    // BUILD CARD
    card.appendChild(figure);
    card.appendChild(title);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);

    // ADD CARD TO PAGE
    container.appendChild(card);

});

localStorage.setItem("lastVisit", now);