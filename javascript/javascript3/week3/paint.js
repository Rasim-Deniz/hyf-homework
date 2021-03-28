const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        {
            context.beginPath();
            context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);
            context.fillStyle = this.fillColor;
            context.lineWidth = 3;
            context.fill();
        }
    }
    randomCircle() {
        setInterval(() => {
            this.r = Math.random() * 50;
            this.x = Math.random() * innerWidth;
            this.y = Math.random() * innerHeight;
            context.beginPath();
            context.fillStyle = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
            context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            context.fill();
        }, 100);
    }
    cursorCircle() {
        canvas.addEventListener("mousemove", e => {
            this.x = e.offsetX - 15;
            this.y = e.offsetY - 15;
            this.r = Math.random() * 50;
            context.beginPath();
            context.strokeStyle = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
            context.lineWidth = 5;
            context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            context.stroke();
        })

    }
}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw();
c1.cursorCircle();
c1.randomCircle();