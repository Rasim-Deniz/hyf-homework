let button = document.querySelector(".gif-button");
let searchInput = document.querySelector(".search-input");
let numberInput = document.querySelector(".number-input");
let container = document.querySelector(".gifs-container");

let giphy = {
    "apiKey": "Iq6e2OqICdwLruJcmEfLuxqQTQWbXxvP",
    giphySearch: function (keyword) {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
            .then(response => response.json())
            .then(content => {
                container.innerHTML = "";
                content.data.forEach(element => {
                    const {
                        url
                    } = element.images.original;
                    let images = document.createElement("img");
                    images.src = url;
                    container.appendChild(images);
                });
            });
    },
    getUserInput: function () {
        const inputValue = searchInput.value;
        return inputValue;
    },
    displayNChild: function (element, limit, total) {
        for (let i = 0; i < total; i++) {
            if (i < limit) {
                element.item(i).style.display = "block";
            } else {
                element.item(i).style.display = "none";
            }
        }
    },
}

button.addEventListener("click", function () {
    const userInput = giphy.getUserInput();
    giphy.giphySearch(userInput);
});

searchInput.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        const userInput = giphy.getUserInput();
        giphy.giphySearch(userInput);
    }
});
numberInput.addEventListener("keyup", () => {
    let images = container.children;
    let imagesCount = container.children.length;
    let searchValue = searchInput.value;
    let numberValue = numberInput.value;
    if (!searchValue) {
        return alert("Write in search for gif!");
    } else if (!numberValue) {
        numberValue = imagesCount;
        giphy.displayNChild(images, numberValue, imagesCount);
    } else {
        giphy.displayNChild(images, numberValue, imagesCount);
    }
})