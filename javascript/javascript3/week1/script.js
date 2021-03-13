let weather = {
    "apiKey": "fd548f55ee5a12f2b7b63bfc72cd0260",
    fetchWeather: function (city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    fetchWeatherWithLocation: function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetch(
                    "https://api.openweathermap.org/data/2.5/weather?lat=" +
                    lat + "&lon=" + lon +
                    "&units=metric&appid=" +
                    weather.apiKey
                )
                .then((response) => response.json())
                .then((data) => weather.displayWeather(data));
        });
    },
    searchWithJson: function () {
        fetch('cities-of-turkey.json')
            .then(response => response.json())
            .then(data => {
                const random = Math.floor(Math.random() * data.length);
                const randomTrCity = data[random].name;
                this.fetchWeather(randomTrCity);
            });
    },
    displayWeather: function (data) {
        const {
            name
        } = data;
        const {
            icon,
            main,
            description
        } = data.weather[0];
        const {
            temp
        } = data.main;
        const {
            speed
        } = data.wind;
        const {
            sunrise,
            sunset
        } = data.sys;
        const {
            lon,
            lat
        } = data.coord;
        localStorage.clear();
        localStorage.setItem("name", name);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
        document.querySelector(".sunrise").innerText = "Sunrise: " + this.timeConverter(sunrise);
        document.querySelector(".sunset").innerText = "Sunset: " + this.timeConverter(sunset);
        const map = new google.maps.Map(document.querySelector(".map"), {
            center: {
                lat,
                lng: lon
            },
            zoom: 8,
        });
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900?" + name + "')";
        this.backgroundChange(main);
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        if (!document.querySelector(".search-bar").value) {
            alert("Enter a valid city name");
            return
        } else {
            this.fetchWeather(document.querySelector(".search-bar").value);
        }
    },
    backgroundChange: function (main) {
        let backgroundHolder = document.querySelector(".card");
        if (main == "Thunderstorm") {
            backgroundHolder.style.backgroundImage = "url('gifs/thunderstorm.gif')";
        } else if (main == "Drizzle") {
            backgroundHolderstyle.backgroundImage = "url('gifs/drizzle.gif')";
        } else if (main == "Rain") {
            backgroundHolder.style.backgroundImage = "url('gifs/rain.gif')";
        } else if (main == "Snow") {
            backgroundHolderstyle.backgroundImage = "url('gifs/snow.gif')";
        } else if (main == "Mist") {
            backgroundHolder.style.backgroundImage = "url('gifs/mist.gif')";
        } else if (main == "Smoke") {
            backgroundHolder.style.backgroundImage = "url('gifs/mist.gif')";
        } else if (main == "Haze") {
            backgroundHolder.style.backgroundImage = "url('gifs/mist.gif')";
        } else if (main == "Dust") {
            backgroundHolder.style.backgroundImage = "url('gifs/dust.gif')";
        } else if (main == "Fog") {
            backgroundHolder.style.backgroundImage = "url('gifs/fog.gif')";
        } else if (main == "Ash") {
            backgroundHolder.style.backgroundImage = "url('gifs/ash.gif')";
        } else if (main == "Squall") {
            backgroundHolder.style.backgroundImage = "url('gifs/tornado.gif')";
        } else if (main == "Tornado") {
            backgroundHolder.style.backgroundImage = "url('gifs/tornado.gif')";
        } else if (main == "Clear") {
            backgroundHolder.style.backgroundImage = "url('gifs/clear.gif')";
        } else if (main == "Clouds") {
            backgroundHolder.style.backgroundImage = "url('gifs/cloud.gif')";
        }
    },
    timeConverter: function (unix) {
        const date = new Date(unix * 1000);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime;
    },
};

weather.fetchWeather(localStorage.name);
document.querySelector(".search .searchButton")
    .addEventListener("click", function () {
        weather.search();
    });
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search()
    } else if (event.key == "+") {
        weather.searchWithJson()
    }
});
document.querySelector(".search .locationButton")
    .addEventListener("click", function () {
        weather.fetchWeatherWithLocation();
    });