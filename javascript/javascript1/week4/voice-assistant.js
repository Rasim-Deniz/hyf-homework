let userName = "";
let todoList = [];
let todo = "";
const today = new Date();
const month = today.toLocaleDateString(undefined, { month: 'long' });

// EXTRA FEATURE : VOICE ASSISTANT ANSWERS THESE INPUTS WITH ARRAY MEMBERS OF REPLY, ALTERNATIVE OR ROBOT 
const input = [
    //0 
    ["hi", "hey", "hello"],
    //1
    ["how are you", "how are things"],
    //2
    ["what is going on", "what is up"],
    //3
    ["happy", "good", "well", "fantastic", "cool"],
    //4
    ["bad", "bored", "tired", "sad"],
    //5
    ["tell me story", "tell me joke"],
    //6
    ["thanks", "thank you"],
    //7
    ["bye", "good bye", "goodbye"],
    //8
    ["who are you", "what are you"],
];

const reply = [
    //0 
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    //1
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    //2
    [
        "Nothing much",
        "Exciting things!"
    ],
    //3
    ["Glad to hear it"],
    //4
    ["Why?", "Cheer up buddy"],
    //5
    ["What about?", "Once upon a time..."],
    //6
    ["You're welcome", "No problem"],
    //7
    ["Goodbye", "See you later"],
    //8
    ["I am a voice assistant", "A voice assistant"],
];

const alternative = [
    "Same",
    "Go on...",
    "Try again",
    "I'm listening...",
    "Bro..."
];
const robot = ["How do you do, fellow human", "I am not a bot"];
// EXTRA FEATURE ENDS HERE

function getReply(command) {
    let newCommand = command.toLowerCase();
    let commandArray = newCommand.split(" ");

    if (newCommand.includes("hello my name is ")) {
        if (userName === commandArray[commandArray.length - 1]) {
            return `I know you already ${userName}`
        } else {
            userName = commandArray[commandArray.length - 1];
            return `Nice to meet you ${userName}`;
        }
    }
    else if (newCommand === "what is my name") {
        if (!userName) {
            return `I don't know you.`;
        } else {
            return `Your name is ${userName}`;
        }
    }
    else if (newCommand.startsWith("add") && newCommand.includes("todo")) {
        todo = commandArray.slice(1, commandArray.indexOf("to"));
        todo = todo.join(' ');
        todoList.push(todo);
        return `${todo} added to your todo`;
    }
    else if (newCommand.startsWith("remove") && newCommand.includes("todo")) {
        todo = commandArray.slice(1, commandArray.indexOf("from"));
        todo = todo.join(' ');
        todoList.splice(todoList.indexOf(todo), 1);
        return `removed ${todo} from your todo`;
    }
    else if (newCommand === "what is on my todo?") {
        return `you have ${todoList.length} todos - ${todoList.join(" and ")}`;
    }
    else if (newCommand === "what day is it today?") {
        return `${today.getDate()}. of ${month} ${today.getFullYear()}`;
    }
    else if (newCommand.startsWith("what is") && newCommand.includes("+") || newCommand.includes("-") || newCommand.includes("*") || newCommand.includes("/")) {
        let calcArray = commandArray.slice(commandArray.indexOf("is") + 1);
        const firstNum = parseInt(calcArray[0]);
        const secondNum = parseInt(calcArray[2]);
        const operator = calcArray[1];

        if (operator == '+') {
            return firstNum + secondNum;
        }
        else if (operator == '-') {
            return firstNum - secondNum;
        }
        else if (operator == '*') {
            return firstNum * secondNum;
        }
        else if (operator == '/') {
            return firstNum / secondNum;
        }
    }
    else if (newCommand.includes("set a timer")) {
        let timerArray = commandArray.slice(commandArray.indexOf("for") + 1);
        const minutes = parseInt(timerArray[0]);
        const milliseconds = minutes * 60000;
        setTimeout(setAlert, milliseconds);
        return `Timer set for ${minutes} minutes`;
        function setAlert() {
            console.log("Timer done");
        }
    }
    // EXTRA FEATURE 
    else {
        let cleanText = command.toLowerCase().replace(/[^\w\s\d]/gi, "");
        cleanText = cleanText
            .replace(/ a /g, " ")
            .replace(/i feel /g, "")
            .replace(/your /g, "")
            .replace(/ your /g, "")
            .replace(/i am /g, "")
            .replace(/whats/g, "what is")
            .replace(/please /g, "")
            .replace(/ please/g, "")
            .replace(/really /g, "")
            .replace(/ really/g, "")
            .replace(/so /g, "")
            .replace(/ so/g, "")
            .replace(/much /g, "")
            .replace(/ much/g, "")
            .replace(/ so much/g, "")
            .replace(/ a lot/g, "");

        if (compare(input, reply, cleanText)) {
            product = compare(input, reply, cleanText);
            return product;
        } else if (cleanText.match(/robot/gi)) {
            product = robot[Math.floor(Math.random() * robot.length)];
            return product;
        } else {
            product = alternative[Math.floor(Math.random() * alternative.length)];
            return product;
        }
        function compare(inputArray, replyArray, text) {
            let item;
            for (let x = 0; x < inputArray.length; x++) {
                for (let y = 0; y < replyArray.length; y++) {
                    if (inputArray[x][y] == text) {
                        items = replyArray[x];
                        item = items[Math.floor(Math.random() * items.length)];
                    }
                }
            }
            return item;
        }
    }
    // EXTRA FEATURE ENDS HERE
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Rasim"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add cooking to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 97 * 54"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("How are you?"));
console.log(getReply("I feel tired"));
console.log(getReply("What are you"));
console.log(getReply("Thank you so much"));

