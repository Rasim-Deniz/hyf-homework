const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const targets = {
    red: {
        x: 20 - parseInt(redBox.style.left),
        y: 300 - parseInt(redBox.style.top)
    },
    blue: {
        x: 400 - parseInt(blueBox.style.left),
        y: 300 - parseInt(blueBox.style.top)
    },
    green: {
        x: 400 - parseInt(greenBox.style.left),
        y: 20 - parseInt(greenBox.style.top)
    }
};

function translateOneByOne(box, target) {
    return new Promise(resolve => resolve(moveElement(box, target)));
}

const redBoxPromise = () => translateOneByOne(redBox, targets.red);
const blueBoxPromise = () => translateOneByOne(blueBox, targets.blue);
const greenBoxPromise = () => translateOneByOne(greenBox, targets.green);

redBoxPromise()
    .then(() => console.log("Red circle is in the target"))
    .then(() => blueBoxPromise())
    .then(() => console.log("Blue circle is in the target"))
    .then(() => greenBoxPromise())
    .then(() => console.log("Green circle is in the target"))
    .catch((error) => console.log(error));

function translateAllAtOnce() {
    return Promise.all([redBoxPromise(), blueBoxPromise(), greenBoxPromise()]);
}
// Comment this function to see translateOneByOne
translateAllAtOnce()
    .then(() => console.log("All circles are in the targets."))
    .catch((error) => console.log(error));