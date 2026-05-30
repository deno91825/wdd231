
const params = new URLSearchParams(window.location.search);

document.querySelector("#firstName").textContent =
    params.get("firstname");

document.querySelector("#lastName").textContent =
    params.get("lastname");

document.querySelector("#email").textContent =
    params.get("email");

document.querySelector("#phone").textContent =
    params.get("phone");

document.querySelector("#organization").textContent =
    params.get("organization");

const membership = params.get("membership");

let membershipText = "";

if (membership === "np") membershipText = "NP Membership";
if (membership === "bronze") membershipText = "Bronze Membership";
if (membership === "silver") membershipText = "Silver Membership";
if (membership === "gold") membershipText = "Gold Membership";

document.querySelector("#membership").textContent = membershipText;

const rawTimestamp = params.get("timestamp");

document.querySelector("#timestamp").textContent =
    new Date(rawTimestamp).toLocaleString();

