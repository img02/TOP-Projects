import WeatherData from "./weather";

const currentTempClass = "current-temperature";

const currentLocationId = "location-name";
const currentTempId = "current-temperature";
const currentTempMinId = "current-temparature-min";
const currentTempMaxId = "current-temperature-max";
const currentHumidityId = "current-humidity";

const view = (() => {
    const currentWeatherDiv = document.getElementById("location-div");
    const weeklyWeatherDiv = document.getElementById("weather-main");
    const locationInput = document.getElementById("location-input");

    function drawCurrentWeather() {
        const weather = WeatherData.getCurrentWeather();
        const heading = document.getElementById(currentLocationId);
        const temp = document.getElementById(currentTempId);
        const maxTemp = document.getElementById(currentTempMaxId);
        const minTemp = document.getElementById(currentTempMinId);
        const humidity = document.getElementById(currentHumidityId);

        heading.textContent = `${weather.city}, ${weather.country}`;
        temp.textContent = WeatherData.usingMetric
            ? `Current: ${weather.temp}°C`
            : `Current:&emsp;${weather.temp}°F`;
        maxTemp.textContent = WeatherData.usingMetric
            ? `Max: ${weather.maxTemp}°C`
            : `Max: ${weather.maxTemp}°F`;
        minTemp.textContent = WeatherData.usingMetric
            ? `Min: ${weather.minTemp}°C`
            : `Min: ${weather.minTemp}°F`;
        humidity.textContent = `Humidity: ${weather.humidity}%`;
    }

    function drawWeeklyWeather() {
        const weeklyWeather = WeatherData.getWeeklyWeather();

        let prevDay = "";
        let dayNum = 0;
        weeklyWeather.forEach((day) => {
            if (day.day === prevDay || dayNum > 4) return;

            const dayName = document.getElementById(`daily-${dayNum}-day`);
            // const temp = document.getElementById(`daily-${dayNum}-temp`);
            const maxTemp = document.getElementById(`daily-${dayNum}-max`);
            const minTemp = document.getElementById(`daily-${dayNum}-min`);
            const humid = document.getElementById(`daily-${dayNum}-humidity`);

            dayName.textContent = day.day;
            maxTemp.textContent = WeatherData.usingMetric
                ? `Max: ${day.maxTemp}°C`
                : `Max: ${day.maxTemp}°F`;
            minTemp.textContent = WeatherData.usingMetric
                ? `Min: ${day.minTemp}°C`
                : `Min: ${day.minTemp}°F`;
            humid.textContent = `$Humidity: ${day.humidity}%`;

            prevDay = day.day;
            dayNum += 1;
        });
    }

    function update() {
        drawCurrentWeather();
        drawWeeklyWeather();
    }

    async function startup() {
        console.time();
        await WeatherData.update();
        console.timeEnd();

        update();
        locationInput.addEventListener("keyup", async (e) => {
            e.preventDefault();
            if (e.key === "Enter") {
                await WeatherData.setLocation(locationInput.value);
                update();
                console.log("enter pressed!");
            }
        });
    }

    return { startup };
})();

export default view;
