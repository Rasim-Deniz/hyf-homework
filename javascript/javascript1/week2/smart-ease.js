// FLIGHT BOOKING FULLNAME FUNCTION

function getFullname(firstname, surname, useFormalName, gender) {
    if (firstname && surname && useFormalName === true && gender) {
        if (gender == "male") {
            return "Lord " + "Mr." + firstname + ' ' + surname;
        }
        else {
            return "Ms." + firstname + ' ' + surname;
        }
    }
    else if (firstname && surname && useFormalName === true) {
        return "Lord " + firstname + ' ' + surname;
    }
    else if (firstname && surname) {
        return firstname + ' ' + surname;
    }
    else if (firstname || surname) {
        return "Enter both names";
    }
    else {
        return "No name given";
    }
}
const fullname1 = getFullname("Benjamin", "Hughes", true);
const fullname2 = getFullname("Rasim", "Deniz");
const fullname3 = getFullname("Daniel");
const fullname4 = getFullname();
const fullname5 = getFullname("Marie", "Hoff", true, "female");
console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);
console.log(fullname5);

// EVENT APPLICATION

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();

function getEventWeekday(eventDay) {
    let i = (today.getDay() + eventDay) % 7;
    return weekDays[i];
}

console.log(getEventWeekday(7));
console.log(getEventWeekday(2));

// WEATHER WEAR

function getClothesForToday(temperature) {
    if (temperature < 0) {
        return "Jacket";
    }
    else if (temperature >= 0 && temperature < 15) {
        return "Sweater";
    }
    else if (temperature >= 15 && temperature < 40) {
        return "T-shirt";
    }
    else {
        return "Naked";
    }
}

const clothesToWear = getClothesForToday(28);
console.log(clothesToWear);

// STUDENT MANAGER

const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length < 6 && studentName !== "Queen" && studentName) {
        class07Students.push(studentName);
        return studentName + " is added to the class 07";
    }
    else if (studentName === "Queen") {
        class07Students.push(studentName);
        return "Queen is added to the class 07";
    }
    else if (checkNames(studentName)) {
        return "Student " + studentName + " is already in the class";
    }
    else if (!studentName) {
        return "Enter a valid name";
    }
    else {
        console.log("Cannot add more students to class 07");
        return false;
    }

}

function checkNames(studentName) {
    for (var j = 0; j < getNumberOfStudents(); j++) {
        if (class07Students[j] === studentName) {
            return true;
        }
    }
    return false;
}

function getNumberOfStudents() {
    return class07Students.length;
}

console.log(addStudentToClass("Islam"));
console.log(addStudentToClass("Gohar"));
console.log(addStudentToClass());
console.log(addStudentToClass(""));
console.log(addStudentToClass("Hanieh"));
console.log(addStudentToClass("Darinka"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Natalia"));
console.log(addStudentToClass("Saide"));
console.log(addStudentToClass("Slavia"));
console.log(addStudentToClass("Jaafar"));
console.log(addStudentToClass("Adnan"));
console.log(addStudentToClass("Shan"));
console.log(addStudentToClass("Bhuvaneshwari"));
console.log(addStudentToClass("Diny"));
console.log(addStudentToClass("Ayaanle"));
console.log(addStudentToClass("Wencho"));
console.log(addStudentToClass("Seena"));
console.log(addStudentToClass("Islam"));
console.log(addStudentToClass("Gohar"));
console.log(addStudentToClass("Queen"));
console.log(getNumberOfStudents());

// CANDY HELPER

const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

const candyTablePrices = [
    {
        candyType: "Sweet",
        pricePerGram: 0.5
    },
    {
        candyType: "Chocolate",
        pricePerGram: 0.7
    },
    {
        candyType: "Toffee",
        pricePerGram: 1.1
    },
    {
        candyType: "Chewing-gum",
        pricePerGram: 0.03
    }
];

function addCandy(candyType, weight) {
    for (var i = 0; i < candyTablePrices.length; i++) {
        if (candyType === candyTablePrices[i].candyType) {
            boughtCandyPrices.push(candyTablePrices[i].pricePerGram * weight);
        }
    }
}

function canBuyMoreCandy() {
    let sum = 0;
    for (var j = 0; j < boughtCandyPrices.length; j++) {
        sum += boughtCandyPrices[j];
    }
    if (amountToSpend > sum) {
        console.log("Owned amount : " + amountToSpend + "\nAmount of payment : " + sum);
        console.log("You can buy more, so please do!");
    }
    else {
        console.log("Owned amount : " + amountToSpend + "\nAmount of payment : " + sum);
        console.log("Enough candy for you!");
    }

}

addCandy("Sweet", 32);
addCandy("Chocolate", 13);
addCandy("Toffee", 27);
addCandy("Chewing-gum", 14);
canBuyMoreCandy();