const apiKey = "4136f1ce92334c8e6d44435a49b60216";
const lat = 49.77;
const lon = 6.64;

const currentURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function loadWeather() {

    try {

        // CURRENT WEATHER
        const currentRes = await fetch(currentURL);
        const currentData = await currentRes.json();

        const tempEl = document.querySelector("#temperature");
        const descEl = document.querySelector("#description");

        if (tempEl && descEl) {
            tempEl.textContent = `${Math.round(currentData.main.temp)}°C`;
            descEl.textContent = currentData.weather[0].description;
        }

        // FORECAST
        const forecastRes = await fetch(forecastURL);
        const forecastData = await forecastRes.json();

        renderForecast(forecastData);

    } catch (error) {
        console.error("Weather error:", error);
    }
}

function renderForecast(data) {

    const container = document.querySelector("#forecast");
    if (!container) return;

    container.innerHTML = "";

    const filtered = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    filtered.slice(0, 3).forEach(day => {

        const date = new Date(day.dt_txt);

        const card = document.createElement("p");

        card.innerHTML = `
            <strong>${date.toLocaleDateString("en-US", {
                weekday: "short"
            })}</strong>
            — ${Math.round(day.main.temp)}°C
        `;

        container.appendChild(card);
    });
}

loadWeather();