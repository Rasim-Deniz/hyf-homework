// Housey pricey (A house price estimator)

/* Two of your friends are considering buying a house, but cannot figure out what the right price should be. 
Your friends know the width, the height and the depth of the house and the garden size. 
Lets help them figure out if they paid too much */

class House {
    constructor(width, height, depth, gardenSizeInM2, houseCost, x = 2.5, y = 1000, z = 300) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.gardenSizeInM2 = gardenSizeInM2;
        this.houseCost = houseCost;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    get price() {
        return this.priceCalculation();
    }
    priceCalculation() {
        const volumeInMeters = this.width * this.height * this.depth;
        return volumeInMeters * this.x * this.y + this.gardenSizeInM2 * this.z;
    }
}

const peterHouse = new House(8, 10, 10, 100, 2500000);
const juliaHouse = new House(5, 8, 11, 70, 1000000);

if (peterHouse.price > peterHouse.houseCost) {
    console.log("Dear Peter, the recommended price for your house is " + peterHouse.price + ". So you are in advantage, Congrats!");
}
else {
    console.log("Dear Peter, the recommended price for your house is " + peterHouse.price + ". Sorry for your loss.");
}

if (juliaHouse.price > juliaHouse.houseCost) {
    console.log("Dear Julia, the recommended price for your house is " + juliaHouse.price + ". So you are in advantage, Congrats!");
}
else {
    console.log("Dear Julia, the recommended price for your house is " + juliaHouse.price + ". Sorry for your loss.");
}