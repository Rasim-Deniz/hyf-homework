// Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findShortestWord(words) {
  let shortestWord = words[0];
  words.forEach((element) => {
    if (shortestWord.length > element.length) {
      shortestWord = element;
    }
  });
  return shortestWord;
}
console.log(findShortestWord(danishWords));

// Find and count the Danish letters

function findDanishLetter(sentence) {
  let æ = (sentence.match(/æ/gi) || []).length;
  let ø = (sentence.match(/ø/gi) || []).length;
  let å = (sentence.match(/å/gi) || []).length;
  let total = æ + ø + å;
  let object = {
    total,
    æ,
    ø,
    å,
  };
  for (const property in object) {
    if (object[property] === 0) {
      delete object[property];
    }
  }
  console.log(object);
}
const danishString = "Jeg har en blå bil";
findDanishLetter(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
findDanishLetter(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

// Spirit animal name generator

const spiritAnimals = [
  "Adventurous Wolf",
  "Mystical Unicorn",
  "Passionate Leopard",
  "Intuitive Dolphin",
  "Amazing Dove",
  "Victorious Elephant",
  "Magical Butterfly",
  "Wild Panther",
  "Creative Monkey",
  "Speedy Eagle",
];
let input = document.getElementById("user-name");
let button = document.getElementById("submit-button");
let output = document.getElementById("output");
button.addEventListener("click", buttonFunction);

function buttonFunction() {
  if (!input.value) {
    alert("Please write your name");
    return;
  } else {
    let userName = input.value;
    let randomAnimal =
      spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    let fullText = `${userName} - ${randomAnimal}`;
    output.innerHTML = fullText;
  }
}
