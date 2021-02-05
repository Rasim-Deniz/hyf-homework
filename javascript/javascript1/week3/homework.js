// Item array removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];

const nameToRemove = "Ahmad";
const index = names.indexOf(nameToRemove);
names.splice(index, 1);
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function calcTime(travelInformation) {

    const time = travelInformation.destinationDistance / travelInformation.speed;
    var decimalTime = parseFloat(time);
    decimalTime = decimalTime * 60 * 60;
    var hours = Math.floor((decimalTime / (60 * 60)));
    decimalTime = decimalTime - (hours * 60 * 60);
    var minutes = Math.floor((decimalTime / 60));
    return hours + " hours and " + minutes + " minutes";

}
const travelTime = calcTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

// Series duration of my life

const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "One Punch Man",
        days: 0,
        hours: 9,
        minutes: 36,
    },
    {
        title: "One Piece",
        days: 16,
        hours: 17,
        minutes: 14,
    },
];

const date1 = new Date(1996, 1, 13);
const date2 = new Date(date1.getFullYear() + 80, 1, 13);
const seconds = Math.floor((date2 - date1) / 1000);
const daytoSeconds = 24 * 60 * 60;
const hourstoSeconds = 60 * 60;
const minutestoSeconds = 60;
function logOutSeriesText(obj) {
    var sum = 0;
    for (let i = 0; i < obj.length; i++) {
        const series = obj[i];
        let secondsPerSeries = (series.days * daytoSeconds) + (series.hours * hourstoSeconds) + (series.minutes * minutestoSeconds);
        let percentage = ((100 * secondsPerSeries) / seconds).toFixed(3);
        console.log(series.title + " took " + percentage + "% of my life");
        sum += secondsPerSeries;
    }
    let sumPercentage = ((100 * sum) / seconds).toFixed(3);
    console.log("\nIn total that is " + sumPercentage + "% of my life");
}
logOutSeriesText(seriesDurations);

// Smart-ease - Back to the basics!
// NOnoN0nOYes (Note taking app)

const notes = [];

// Save a note

function saveNote(content, id) {
    const note = { content, id };
    if (content === "" || typeof id !== "number") {
        console.log("Please enter information as requested");
    }
    else {
        notes.push(note);
    }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (id === notes[i].id) {
            return notes[i];
        }
    }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes

function logOutNotesFormatted() {
    for (let j = 0; j < notes.length; j++) {
        console.log(`The note with id: ${notes[j].id}, has the following note text: ${notes[j].content}`);
    }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry


// CactusIO-interactive (Smart phone usage app)

//Adding an activity

const activities = [];
var today = new Date().toLocaleDateString("en-US");

function addActivity(date, activity, duration) {
    const activityObject = { date, activity, duration };
    activities.push(activityObject);
}

addActivity("23/7-18", "Youtube", 10);
addActivity(today, "Youtube", 30);
addActivity(today, "Facebook", 50);
console.log(activities);

/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/

// Show my status(Usage limit and extra features)

function showStatus(activities) {
    let sum = 0;
    let limit = 100;
    let todaySum = 0;
    let todayActivity = 0;
    for (var i = 0; i < activities.length; i++) {
        sum += activities[i].duration;
        if (activities[i].date === today) {
            todaySum += activities[i].duration;
            todayActivity++;
        }
    }
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
    }
    else if (sum > limit) {
        console.log("You have reached your limit, no more smartphoning for you!");
    }
    else {
        console.log(`You have added ${i} activities. They amount to ${sum} min. of usage`);
        console.log(`You have added ${todayActivity} activities today. They amount to ${todaySum} min. of usage`)
    }
}

showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"

function findMaxDuration(activities) {
    const durationArray = [];
    for (let j = 0; j < activities.length; j++) {
        durationArray.push(activities[j].duration);
    }
    var max = Math.max(...durationArray);
    for (let k = 0; k < activities.length; k++) {
        if (activities[k].duration === max) {
            var mostusedActivity = activities[k].activity;
        }
    }
    console.log(`You have spent the most time on ${mostusedActivity} with ${max} min. of usage`);
}

findMaxDuration(activities);