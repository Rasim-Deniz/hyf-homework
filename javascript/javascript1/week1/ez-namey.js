// Ez Namey (Startup name generator) Optional
/* At a meetup you overhear a conversation between two developers.
 It went something like this:
  "Man i wish picking a startup name was easier!
   You need to be creative, funny and interesting, its nearly impossible!" Another problem to solve, awesome! */

const firstWords = ["Center", "Creative", "Data", 'Founder', "Alpha", "Infinite", "Geo", "Inside", "Simple", "Sphere"];
const secondWords = ["Webnet", "Weborate", "Webaboon", "Websiter", "Webfore", "Weberq", "Webitio", "Webarnup", "Weblogy", "Weboratory"];
const randomNumber = Math.floor(Math.random() * firstWords.length);
let startupName = firstWords[randomNumber] + secondWords[randomNumber];
console.log("The startup: " + startupName + " contains " + startupName.length + " characters");   