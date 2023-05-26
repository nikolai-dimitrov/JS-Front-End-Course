function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather);
    document.getElementById('button1').addEventListener('click', testF);
    let inputField = document.getElementById('location');
    let informationField = document.getElementById('forecast');
    let divWrapper = document.getElementById('current');
    let divUpcoming = document.getElementById('upcoming');

    let weatherIconsMapper = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601',
        'Rain': '&#x2614;',
        'Degree': '&#176;',
    }

    async function getWeather() {
        try {
            let response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            if (response.ok === false) {
                throw new Error(`Error from MAIN`);
            }
            let data = await response.json();
            let corespondingObj = data.filter(x => x.name === inputField.value)[0];
            informationField.style.display = 'block'
            let weatherInfoToday = document.getElementsByClassName('forecasts')[0];
            let weatherInfoUpcoming = document.getElementsByClassName('forecast-info')[0];
            if (weatherInfoToday && weatherInfoUpcoming) {
                divWrapper.removeChild(weatherInfoToday);
                divUpcoming.removeChild(weatherInfoUpcoming);
            }
            let code = corespondingObj.code;
            await todayWeather(code);
            await upcomingWeather(code);
            testF()
            console.log('after await funcs')
        } catch (error) {
            let divForecasts = document.createElement('div');
            divForecasts.classList.add('forecasts');
            divWrapper.appendChild(divForecasts)
            divForecasts.textContent = 'Error';

            let divUpcomingForecast = document.createElement('div');
            divUpcomingForecast.classList.add('forecast-info');
            divUpcoming.appendChild(divUpcomingForecast)
            divUpcomingForecast.textContent = 'Error'
            alert(error.message)
        }
    }

    async function todayWeather(code) {
        let response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
        if (response.ok === false) {
            throw new Error('Error from today');
        }
        let todayWeatherObj = await response.json()

        let divForecasts = document.createElement('div');
        divForecasts.classList.add('forecasts');
        divWrapper.appendChild(divForecasts);

        let spanConditionSymbol = document.createElement('span');
        spanConditionSymbol.classList.add('condition');
        spanConditionSymbol.classList.add('symbol');
        spanConditionSymbol.innerHTML = `${weatherIconsMapper[todayWeatherObj.forecast.condition]}`
        divForecasts.appendChild(spanConditionSymbol);

        let spanCondition = document.createElement('span');
        spanCondition.classList.add('condition');
        divForecasts.appendChild(spanCondition);

        spanCondition.innerHTML += `<span class="forecast-data">${todayWeatherObj.name}</span>`;
        spanCondition.innerHTML += `<span class="forecast-data">${todayWeatherObj.forecast.low}&#176;/${todayWeatherObj.forecast.high}&#176;</span>`;
        spanCondition.innerHTML += `<span class="forecast-data">${todayWeatherObj.forecast.condition}</span>`;
    }

    async function upcomingWeather(code) {
        let response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
        if (response.ok === false) {
            throw new Error('Error from upcoming');
        }
        let upcomingWeatherObj = await response.json();
        let divUpcomingForecast = document.createElement('div');
        divUpcomingForecast.classList.add('forecast-info');
        divUpcoming.appendChild(divUpcomingForecast);
        for (const currentObject of upcomingWeatherObj.forecast) {
            console.log(currentObject)

            divUpcomingForecast.innerHTML += `<span class="upcoming">
                                                <span class="symbol">${weatherIconsMapper[currentObject.condition]}</span>
                                                <span class="forecast-data">${currentObject.low}${weatherIconsMapper["Degree"]}/${currentObject.high}${weatherIconsMapper["Degree"]}</span>
                                                <span class="forecast-data">${currentObject.condition}</span>
                                          </span>`
        }
    }
    function testF(){
        console.log('TEST F CLICKED');
    }
}

attachEvents();
// let [today, upcoming] = await Promise.all([
//     fetch(`http://localhost:3030/jsonstore/forecaster/today/${corespondingObj.code}`),
//     fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${corespondingObj.code}`),
// ]);
// let [todayWeatherObj, upcomingWeatherObj] = await Promise.all([today.json(), upcoming.json()]);
// console.log(todayWeatherObj, upcomingWeatherObj)