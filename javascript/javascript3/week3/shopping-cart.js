const currencyOption = document.getElementById('currency');
const productTable = document.querySelector(".product-table");
const totalTable = document.querySelector(".total-table");
const userName = document.getElementById("name")

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency) {
        switch (currency) {
            case "USD":
                this.price *= 0.16
                break;
            case "EUR":
                this.price *= 0.13
                break;
            case "AUD":
                this.price *= 0.2
                break;
            case "BGN":
                this.price *= 0.26
                break;
            case "BRL":
                this.price *= 0.9
                break;
            case "CAD":
                this.price *= 0.19
                break;
            case "CHF":
                this.price *= 0.14
                break;
            case "CNY":
                this.price *= 1.03
                break;
            case "CZK":
                this.price *= 3.5
                break;
            case "GBP":
                this.price *= 0.11
                break;
            case "HKD":
                this.price *= 1.23
                break;
            case "HRK":
                this.price *= 1.01
                break;
            case "HUF":
                this.price *= 48.89
                break;
            case "IDR":
                this.price *= 2284.35
                break;
            case "ILS":
                this.price *= 0.52
                break;
            case "INR":
                this.price *= 11.5
                break;
            case "ISK":
                this.price *= 20.14
                break;
            case "JPY":
                this.price *= 17.39
                break;
            case "KRW":
                this.price *= 179.15
                break;
            case "MXN":
                this.price *= 3.26
                break;
            case "MYR":
                this.price *= 0.65
                break;
            case "NOK":
                this.price *= 1.36
                break;
            case "NZD":
                this.price *= 0.22
                break;
            case "PHP":
                this.price *= 7.68
                break;
            case "PLN":
                this.price *= 0.62
                break;
            case "RON":
                this.price *= 0.65
                break;
            case "RUB":
                this.price *= 12.03
                break;
            case "SEK":
                this.price *= 1.37
                break;
            case "SGD":
                this.price *= 0.21
                break;
            case "THB":
                this.price *= 4.92
                break;
            case "TRY":
                this.price *= 1.27
                break;
            case "ZAR":
                this.price *= 2.37
        }
        return this.price.toFixed(2);
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products = this.products.filter(item => item.name !== product.name)
    }

    searchProduct(productName) {
        return this.products.filter(item => item.name === productName);
    }

    getTotal() {
        return this.products.reduce((accumulator, product) => accumulator + product.price, 0).toFixed(2);
    }

    renderProducts() {
        currencyOption.addEventListener('change', () => {
            const selectedCurrency = currencyOption.value;
            this.getUser();
            productTable.innerHTML = `
                <tr>
                <th>Product</th>
                <th>Price</th>
                </tr>`;
            this.products.forEach(product => {
                let productRow = document.createElement("tr");
                productRow.innerHTML += `
                    <td>
                    <p>${product.name}</p>
                    </td>
                    <td>${product.convertToCurrency(selectedCurrency)}</td>`
                productTable.appendChild(productRow);
            });
            let totalRow = document.createElement("tr");
            totalTable.innerHTML = "";
            totalRow.innerHTML = `
                <tr>
                <td>Total</td>
                <td>${this.getTotal()}</td>
                </tr>`;
            totalTable.appendChild(totalRow);
        })
    }

    getUser() {
        return fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then((data) => {
                const {
                    username
                } = data;
                userName.innerHTML = `${username}'s Cart`;
            })
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const mango = new Product("mango", 10);
const apple = new Product("apple", 5);
const plant = new Product("plant", 50);
shoppingCart.addProduct(mango);
shoppingCart.addProduct(apple);
shoppingCart.addProduct(plant);
shoppingCart.addProduct(flatscreen);
shoppingCart.removeProduct(flatscreen);
shoppingCart.renderProducts();
// Called getUser() and convertToCurrency() inside the renderProducts function
const search = shoppingCart.searchProduct("apple");
console.log(search);
console.log(shoppingCart);