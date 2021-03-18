// Movies exercise
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(data => {
        const badMovies = data.filter(movie => movie.rating < 5);
        const since2000 = badMovies.filter(movie => movie.year >= 2000);
        console.log(badMovies);
        console.log(since2000);
    });

// Promise that resolves after set time
function setPromise(resolveAfter) {
    return new Promise(resolve => {
        setTimeout(resolve, resolveAfter * 1000);
    })
};

setPromise(8).then(() => {
    console.log("I am called asynchronously");
});

async function setPromiseAsyncAwait(resolveAfter) {
    try {
        const data = await setPromise(resolveAfter);
        console.log("I am called asynchronously");
        return data;
    } catch (error) {
        console.log(error);
    }
};

setPromiseAsyncAwait(8);

// Rewrite time
function setTimeoutPromise(resolveAfter) {
    return new Promise(resolve => {
        setTimeout(resolve, resolveAfter);
    })
};

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });

// Fetching and waiting
// Promise way
function getPromiseData(resolveAfter) {
    return new Promise(resolve => {
        setTimeout(() => {
            const carModels = fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/nissan?format=json");
            resolve(carModels);
        }, resolveAfter * 1000);
    })
};

getPromiseData(3)
    .then(response => response.json())
    .then(data => {
        const modelNames = data.Results.map((model) => model.Model_Name);
        console.log(Object.assign({}, modelNames));
    });

// async/await way
async function getAsyncData() {
    try {
        const response = await getPromiseData(3);
        const data = await response.json();
        const modelNames = data.Results.map((model) => model.Model_Name);
        console.log(Object.assign({}, modelNames));
    } catch (error) {
        console.log(error);
    }
}

getAsyncData();