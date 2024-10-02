import getCurrentTime from "./src/time.js";
import getCurrentDate from "./src/date.js";
import { getBackground, updateTheme } from "./src/background.js";
import toggleFullscreen from "./src/utils.js";

// time
setInterval(getCurrentTime, 1000);

//date
getCurrentDate();
setInterval(getCurrentDate, 1000 * 60 * 60);

// background image
document.addEventListener("dblclick", getBackground);

// fullscreen mode (f) or reset background (r)
const inputEl = document.getElementById("change-thm");
document.addEventListener("keyup", (e) => {
	if (document.activeElement === inputEl)
		return;
    if (e.key === "f" || e.key === "F")
		toggleFullscreen();
	else if (e.key === "r" ||  e.key === "R")
		getBackground();
});

// weather
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok)
                throw Error("Weather data not available");
            return res.json();
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.getElementById("weather").innerHTML = `
                <div id="weather-first">
					<img src=${iconUrl} alt="weather icon" />
                	<p class="weather-temp">${Math.round(data.main.temp)}º</p>
                </div>
				<p class="weather-city">${data.name}</p>
            `;
        })
        .catch(err => console.error(err));
});

// change theme
inputEl.addEventListener("keyup", function (e) {
    if (e.key === "Enter" && inputEl.value)
	{
		updateTheme(inputEl.value.replaceAll(" ", "+"));
		inputEl.value = ""
		getBackground();
    }
});
