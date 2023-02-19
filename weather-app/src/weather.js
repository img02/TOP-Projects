// http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&&APPID=f9281fab7d3058095f9025193db497a0 //5 day
/**
 *  list is array of 5 objects
 *  list.dt === unix time
 *  list.main.temp / feels_like / temp_min/ temp_max / pressure/ sea_level/ grnd_level/ humidity/ temp_kf
 *  list.weather.main / description
 *  list.clouds / wind / visibility ??
 *  city.name
 *  country
 *  timezone
 *  sunrise
 *  sunset
 *
 */

// http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&&APPID=f9281fab7d3058095f9025193db497a0 // current

/**
 *  weather.main / description
 *  main.temp / feels_like / temp_min / temp_max / pressure / humidity / sea_level / grnd_level
 *  wind.speed / deg / gust
 *  clouds
 *  dt === date time unix time
 *  sys.country / sunrise / sunset
 *  timezone
 *  name //city name?
 */

const apiKey = "f9281fab7d3058095f9025193db497a0"; // free api key...

class Weather {
    constructor(
        date,
        temp,
        maxTemp,
        minTemp,
        humidity,
        sea_level,
        grnd_level,
        clouds,
        rain,
        wind,
        city,
        country,
        sunrise,
        sunset
    ) {
        this.date = date;
        this.temp = temp;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.humidity = humidity;
        this.sea_level = sea_level;
        this.grnd_level = grnd_level;
        this.clouds = clouds;
        this.rain = rain;
        this.wind = wind;
        this.city = city;
        this.country = country;
        this.sunrise = new Date(sunrise).toTimeString();
        this.sunset = new Date(sunset).toTimeString();
        this.#setDay(date);
    }

    #setDay(date) {
        const dateFormatted = new Date(date * 1000); // api returns date in unix time seconds Date() needs milliseconds
        const day = dateFormatted.getDay();

        switch (day) {
            case 0:
                this.day = "Sunday";
                break;
            case 1:
                this.day = "Monday";
                break;
            case 2:
                this.day = "Tuesday";
                break;
            case 3:
                this.day = "Wednesday";
                break;
            case 4:
                this.day = "Thursday";
                break;
            case 5:
                this.day = "Friday";
                break;
            case 6:
                this.day = "Saturday";
                break;
            default:
                this.day = "ERROR: DAY NOT FOUND?!";
        }
    }
}

const WeatherData = (() => {
    let currentWeather = new Weather();
    let weeklyWeather = [];
    let unit = "metric";
    let location = "London";

    async function getCurrentWeatherFromAPI() {
        const currentWeatherAPIUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&&APPID=${apiKey}`;
        const res = await fetch(currentWeatherAPIUrl);
        const data = await res.json();
        try {
            // create new Weather() with json Data object....
            const date = data.dt;
            const { temp } = data.main;
            const maxTemp = data.main.temp_max;
            const minTemp = data.main.temp_min;
            const { humidity } = data.main;
            const { sea_level } = data.main; // api docs say sea_level, grnd_level, rain, etc exists, but api response does not contain it
            const { grnd_level } = data.main;
            const { clouds } = data;
            const { rain } = data;
            const { wind } = data;
            const city = data.name;
            const { country } = data.sys;
            const { sunrise } = data.sys;
            const { sunset } = data.sys;
            currentWeather = new Weather(
                date,
                temp,
                maxTemp,
                minTemp,
                humidity,
                sea_level,
                grnd_level,
                clouds,
                rain,
                wind,
                city,
                country,
                sunrise,
                sunset
            );
            console.log("Current:");
            console.log(currentWeather);
        } catch {
            console.log(`Error: ${data.message} @ ${currentWeatherAPIUrl}`);
        }
    }

    async function getWeeklyWeatherFromAPI() {
        const weeklyWeatherAPIUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&&APPID=${apiKey}`;
        const res = await fetch(weeklyWeatherAPIUrl);
        const data = await res.json();
        try {
            weeklyWeather = [];
            // create new Weather() with json Data object....
            const city = data.city.name;
            const { country } = data.city;
            const { sunrise } = data.city;
            const { sunset } = data.city;

            // actually contains 3-hour timestamp steps for each day...
            data.list.forEach((day) => {
                const date = day.dt;
                const { temp } = day.main;
                const maxTemp = day.main.temp_max;
                const minTemp = day.main.temp_min;
                const { humidity } = day.main;
                const { sea_level } = day.main; // api docs say sea_level, grnd_level, rain, etc exists, but api response does not contain it
                const { grnd_level } = day.main;
                const { clouds } = day;
                const { rain } = day;
                const { wind } = day;
                const weather = new Weather(
                    date,
                    temp,
                    maxTemp,
                    minTemp,
                    humidity,
                    sea_level,
                    grnd_level,
                    clouds,
                    rain,
                    wind,
                    city,
                    country,
                    sunrise,
                    sunset
                );
                weeklyWeather.push(weather);
            });
            console.log("Current:");
            console.log(weeklyWeather);
        } catch {
            console.log(`Error: ${data.message} @ ${weeklyWeatherAPIUrl}`);
        }
    }

    async function update() {
        // get current wetaher, get daily weather
        await getCurrentWeatherFromAPI();
        await getWeeklyWeatherFromAPI();
    }

    function getCurrentWeather() {
        return currentWeather;
    }
    function getWeeklyWeather() {
        return weeklyWeather;
    }

    async function setLocation(newlocation) {
        location = newlocation;
        await update();
    }

    function useMetric(use) {
        if (use) unit = "metric";
        else unit = "imperial";
    }
    function usingMetric() {
        if (unit === "metric") return true;
        return false;
    }

    return {
        update,
        getCurrentWeather,
        getWeeklyWeather,
        setLocation,
        useMetric,
        usingMetric
    };
})();

export default WeatherData;
