// 1
setTimeout(() => console.log("Called after 2.5 seconds"), 2500);

// 2
function logWithDelay(delay, stringToLog) {
    setTimeout(() => console.log(stringToLog), delay * 1000);
};

logWithDelay(5, "This string is loaded after 5 seconds");
logWithDelay(3, "This string is loaded after 3 seconds");

// 3
const logButton = document.getElementById("log-button");
logButton.addEventListener("click", () => logWithDelay(5, "Called after 5 seconds"));

// 4
const earthLogger = () => console.log("Earth");
const saturnLogger = () => console.log("Saturn");

function planetLogFunction(functions) {
    return functions();
};

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// 5
const logLocationButton = document.getElementById("location-button");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
logLocationButton.addEventListener("click", () => navigator.geolocation.getCurrentPosition(findLocation));

function findLocation(location) {
    let latitudeInfo = location.coords.latitude;
    let longitudeInfo = location.coords.longitude;
    latitude.innerHTML = `This is the latitude ${latitudeInfo}.`
    longitude.innerHTML = `This is the longitude ${longitudeInfo}.`
};

// 6
const mapButton = document.getElementById("map-button");
const mapDiv = document.getElementById("map");

mapButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        logMap(lat, lng);
    });
});

function logMap(lat, lng) {
    let map = new google.maps.Map(mapDiv, {
        center: {
            lat,
            lng
        },
        zoom: 8,
    });
};

// 7
function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function () {
    console.log('should be logged after 4 seconds');
});

runAfterDelay(10, function () {
    console.log('10 seconds have passed');
});

// 8
document.addEventListener("dblclick", () => console.log("double click!"));

// 9
function jokeCreator(shouldTellFunnyJoke = true, logFunnyJoke, logBadJoke) {
    logFunnyJoke = () => console.log(`#wife {
    right:100%;
    margin:0;
}`);

    logBadJoke = () => console.log('How do you cheer up a JavaScript developer? You "Console" them!');
    shouldTellFunnyJoke == true ? logFunnyJoke() : logBadJoke();
};

jokeCreator(true);
jokeCreator(false);

// Function as a variable
const functionsArray = [
    () => console.log('first function'),
    () => console.log('second function'),
    () => console.log('third function')
];
functionsArray.forEach(element => element());

const varFunction = () => console.log("This is a variable");

function funcFunction() {
    console.log("This is a function");
};
varFunction();
funcFunction();

const objFunction = {
    functionKey: () => console.log("This is an object key")
};
objFunction.functionKey();