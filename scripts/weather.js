const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=1.08&lon=34.15&appid=4136f1ce92334c8e6d44435a49b60216'

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            displayResults(data)
        }else{
            throw Error(await response.text())
        }
    }catch(error){
        console.log(error);
    }
}

apiFetch()

const displayResults = (data) => {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src',iconSrc);
    weatherIcon.setAttribute('alt','Weater icon')
    const des = data.weather[0].description;
    captionDesc.textContent = des;
}