console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
let list = document.querySelector(".ul-class");

function renderProducts(products) {
  products.forEach((element) => {
    let listDiv = document.createElement("div");
    listDiv.classList.add("li-container");
    let productName = document.createElement("h2");
    let productPrice = document.createElement("li");
    let productRating = document.createElement("li");
    productName.innerHTML = element.name;
    listDiv.appendChild(productName);
    productPrice.innerHTML = `Price: ${element.price}`;
    listDiv.appendChild(productPrice);
    productRating.innerHTML = `Rating: ${element.rating}`;
    listDiv.appendChild(productRating);
    list.appendChild(listDiv);
  });
}

renderProducts(products);

// Filter products - Searching for products
const searchInput = document.getElementById("productInput");
searchInput.addEventListener("keyup", function () {
  let inputValue = searchInput.value.toLowerCase();
  let filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(inputValue)
  );
  list.innerHTML = "";
  renderProducts(filterProducts);
});

// Filter products based on max price
const priceInput = document.getElementById("priceInput");
priceInput.addEventListener("input", function () {
  let inputPrice = priceInput.value;
  let filterProductPrice = products.filter(
    (product) => product.price <= inputPrice
  );
  list.innerHTML = "";
  renderProducts(filterProductPrice);
});

// Sort the products
const selectedOption = document.getElementById("sortProducts");
selectedOption.addEventListener("change", function () {
  let userOption = selectedOption.value;
  let sortedProducts = products.sort(function (a, b) {
    let firstValue = a[userOption];
    let secondValue = b[userOption];
    return firstValue - secondValue;
  });
  list.innerHTML = "";
  renderProducts(sortedProducts);
});
