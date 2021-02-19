console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {

    products.forEach(element => {
        let list = document.querySelector(".ul-class");
        let productName = document.createElement("h2");
        let productPrice = document.createElement("li");
        let productRating = document.createElement("li");
        productName.innerHTML = element.name;
        list.appendChild(productName);
        productPrice.innerHTML = `Price: ${element.price}`;
        list.appendChild(productPrice);
        productRating.innerHTML = `Rating: ${element.rating}`;
        list.appendChild(productRating);
    });
}

renderProducts(products); 