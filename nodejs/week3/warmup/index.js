const express = require("express");
const app = express();

app.use(express.urlencoded({
    extended: true
}))

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/:feature", (req, res) => {
    const feature = req.params.feature;
    const parameters = Object.keys(req.query);
    const numbers = Object.values(req.query).flat().map(number => parseFloat(number));

    function falsyCheck() {
        const falsyInParam = !parameters.some(element => !element);
        const falsyInNum = !numbers.some(element => !element);
        return parameters.length > 1 && (falsyInParam && falsyInNum);
    }
    let result = 0;
    if (falsyCheck()) {
        if (feature === "add") {
            result = numbers.reduce((acc, number) => acc + number);
            res.send(`${result}`);
        } else if (feature === "subtract") {
            result = numbers.reduce((acc, number) => acc - number);
            res.send(`${result}`);
        } else if (feature === "multiply") {
            result = numbers.reduce((acc, number) => acc * number)
            res.send(`${result}`);
        } else if (feature === "division") {
            result = numbers.reduce((acc, number) => acc / number);
            res.send(`${result}`);
        } else {
            res.status(404).json({
                error: "there is no such feature with that name"
            });
        }
    } else {
        res.status(400).json({
            error: "parameters or values are not valid"
        });
    }
});

app.post("/calculator/:feature", (req, res) => {
    const feature = req.params.feature;
    const parameters = Object.keys(req.body);
    const numbers = Object.values(req.body).flat().map(number => parseFloat(number));

    function falsyCheck() {
        const falsyInParam = !parameters.some(element => !element);
        const falsyInNum = !numbers.some(element => !element);
        return parameters.length > 1 && (falsyInParam && falsyInNum);
    }

    if (falsyCheck()) {
        if (feature === "add") {
            result = numbers.reduce((acc, number) => acc + number);
            res.send(`${result}`);
        } else if (feature === "subtract") {
            result = numbers.reduce((acc, number) => acc - number);
            res.send(`${result}`);
        } else if (feature === "multiply") {
            result = numbers.reduce((acc, number) => acc * number)
            res.send(`${result}`);
        } else if (feature === "division") {
            result = numbers.reduce((acc, number) => acc / number);
            res.send(`${result}`);
        } else {
            res.status(404).json({
                error: "there is no such feature with that name"
            });
        }
    } else {
        res.status(400).json({
            error: "parameters or values are not valid"
        });
    }
})


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));