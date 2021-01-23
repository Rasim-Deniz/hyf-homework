// Goodboy-Oldboy (A dog age calculator)

/* The same friend (who by the way loves dogs) asks how old his dog will be in 2045. 
Hmm you think, lets make this into a product as well! 
Dogs age can either be measured in dog years or in human years, this we want to take into consideration! */

const dogYearOfBirth = 2021;
const dogYearFuture = 2042;
const dogYear = 7 * (dogYearFuture - dogYearOfBirth);
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);
}
else {
    console.log("Your dog will be " + (dogYearFuture - dogYearOfBirth) + " human years old in " + dogYearFuture);
}