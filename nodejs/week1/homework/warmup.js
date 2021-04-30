console.log("inside warmup file");

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return this.radius * 2;
    }

    getCircumference() {
        return this.radius * 2 * Math.PI;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const circle = new Circle(10);
const circle2 = new Circle(33);
console.log(circle.getDiameter()); // 20
console.log(circle.getCircumference());
console.log(circle.getArea());
console.log(circle2.getDiameter());
console.log(circle2.getCircumference());
console.log(circle2.getArea());