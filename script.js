// Assignment Code
var generateBtn = document.querySelector("#generate");  // What does the document object do? // ! Window is the 'this' and document is a property of that. query selector is a function of document. it gets the first instance of the (parameter passed) from the CSS

// Write password to the #password input
function writePassword() {
  var password = generatePassword();                      // What does function generatePassword() do?  // ! The variable points to our function that will ultimately take input and output string password
  var passwordText = document.querySelector("#password"); // What does #password refer to?              // ! The variable points to the text we will return the end user

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //  What does this mean?  // ! The button (with identity "generate") is now attached with a listener for an occurence "click" and then execute writePassword


//Start of my code
const askPasswordLength ="Please enter the length of your new password. \n The length must be between 8 and 128 characters long.";
const askInclusion= "Would you like to include:\n";
let alertMsg=[];
alertMsg[0]="Please click Generate Password to try again.";
alertMsg[1]="Missing at least ONE type of characters."
alertMsg[2]="Length is out of bounds. You have entered a length of";

const minCharLen = 8;
const maxCharLen = 128;
let charTypes=["Lower Case", "Upper Case", "Numbers", "Special Characters"];
let responseCharTypes=[]; //stores user input for including character type

//let lowercase, uppercase, numbers, specials;

function generatePassword() {
  let length = getPasswordLength(); //console.log(length); // ! debug: omit on live  
  if(!length){return;}
  setPasswordCriteria();
  return getRandomPassword(length); 
}

function getPasswordLength(){ 
  let length = prompt(askPasswordLength, minCharLen);
  if (length < minCharLen || length > maxCharLen){    // TODO: handle case with non-numeric input
    alert(`${alertMsg[2]} ${length}.\n${alertMsg[0]}`);
    return;
  };
  return length;
}

function setPasswordCriteria(){
  //TODO: prompt user for the following - must have one:
  for (let i = 0; i < charTypes.length ;i++){
    responseCharTypes[i]= confirm(`${askInclusion} ${charTypes[i]}`)
    //console.log(charTypes[i]);console.log(responseCharTypes[i]); // ! debug: omit on live
  }; 
  //console.log(responseCharTypes); // ! debug: omit on live  
  if (!wasTypeChosen()){ 
    alert(`${alertMsg[1]}\n${alertMsg[0]}`);
  }
}

function wasTypeChosen(){
  let chosenOne;
  for (let i = 0; i < responseCharTypes.length ; i++){
    chosenOne = chosenOne || responseCharTypes[i];  
    //console.log(chosenOne); // ! debug: omit on live
  }
  return chosenOne;
}// returns false if all options skipped;

/* Wrapped functions for easier read */
function getRandomNum(min,maxExcluded){
  return Math.floor(Math.random()*(maxExcluded-min) + min); // !Reminder: Random()=> [0,1); in other words 1 is excluded
}
function getASCII(number){
  return String.fromCharCode(number); // .charCodeAt is the inverse
}

function getRandomPassword(length){ // TODO: randomize string based on length and criteria
  let randomizedString;
  for (let i=0;i<length;i++){
    let rChar = getRandomNum();
    console.log(rChar);
    randomizedString += getASCII(rChar); 
    console.log(randomizedString);
  }
  return randomizedString;
}

function chooseType(){
}
function chooseChar(){}

/* Backlog of Acceptance Criteria
* WHEN all prompts are answered
* - THEN a password is generated that matches the selected criteria
*
* WHEN the password is generated
* - THEN the password is either displayed in an //! alert or written to the page
*/

/* References so far...
* Newline Char <https://www.baeldung.com/java-string-newline> worked in js as well
* prompts <https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt>
* interval notation <https://www.math.utah.edu/online/1010/intervals/#:~:text=The%20notation%20may%20be%20a,round%20parentheses%20mean%20it's%20excluded.>
* random <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random>
* 
*/

/* Ascii
*
*
*/