// Age-ify (A future age calculator) 

/* You are talking to a friend who suddently looks at you and asks: 
"How old will you be in 2045?" 
Hmm you remember the year you were born and try to do some calculation: 
Born in 1987 + 3 that's 1990. 90 - 40 is 50 + 5 thats 58. I will be 58! 
Wow that was painful! Let's fix that by making some code that automatically does this! 

Step2 freecodecamp username: https://www.freecodecamp.org/rasimdeniz */

const yearOfBirth = 1996;
const yearFuture = 2100;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + "years old in " + yearFuture);