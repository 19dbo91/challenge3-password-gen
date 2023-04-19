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


//Begin Challenge 3
/* String Declarations */
const askPasswordLength ="Please enter the length of your new password. \n The length MUST be between 8 and 128 characters long.";
const askInclusion= "Please press \"OK\" to include characters that are :\n";
let alertMsg=[];
alertMsg[0]="Please click \"Generate Password\" to try again.";
alertMsg[1]="Missing at least ONE type of characters."
alertMsg[2]="Length is out of bounds. You have entered a length of";

/* Password Length */
const minCharLen = 8;
const maxCharLen = 128;

/* Class: CharacterType */
class CharType {
  constructor(newType, newRange) {
    this.type = newType; // expecting STRING for name of character type
    this.range = newRange; // expecting min and max INTEGERS, or list of ranges for ascii
  }
};
let selectedTypes, charTypes=[];
charTypes[0]= new CharType("Lower Case", [97, 122]);
charTypes[1]= new CharType("Upper Case", [65, 90]);
charTypes[2]= new CharType("Numbers", [48, 57]);
charTypes[3]= new CharType("Special Characters",[[33, 47], [58,64], [91, 96], [123, 126]]); //excluding: 32(space) 127(delete)

/* Base Function */
function generatePassword() {
  let length = getPasswordLength();
  if(!length){return;}
  setPasswordCriteria();
  return getRandomPassword(length); 
}

function getPasswordLength(){ 
  let length = prompt(askPasswordLength, minCharLen);
  if (length < minCharLen || length > maxCharLen){    
    alert(`${alertMsg[2]} ${length}.\n${alertMsg[0]}`);
    return;
  };
  return length;
}// TODO: handle case with non-numeric input
function setPasswordCriteria(){
  selectedTypes=[];
  charTypes.forEach(element => {
    if (confirm(`${askInclusion} ${element.type}`)){
      selectedTypes.push(element);
    }
  });
  if (selectedTypes.length<=0){ 
    alert(`${alertMsg[1]}\n${alertMsg[0]}`);
  }
}

/* Wrapped functions for easier read */
function getRandomNum(min,maxExcluded){
  return Math.floor(Math.random()*(maxExcluded-min) + min);
} //returns NUM, chosen at random between parameter NUM minimum (inclusive) and NUM maximum (exclusive)
function getASCII(number){
  return String.fromCharCode(number); // .charCodeAt is the inverse
} //returns CHAR converted from parameter NUMBER

function chooseType(arrayOfTypes){
  let num = getRandomNum(0,arrayOfTypes.length); // *console.log(`From the set of ${arrayOfTypes[num].type},`);
  return arrayOfTypes[num];
} //returns OBJECT CharType, chosen at random from parameter ARRAY

function chooseChar(chosenType){
  if (chosenType.type!="Special Characters"){
    let min = chosenType.range[0];
    let max = chosenType.range[1];
    return getRandomNum(min,max);
  }else{//Special Characters have a disjointed/noncontiguous set (see above: charTypes[3])
    let specialRange=chosenType.range;
    let subRange = getRandomNum(0, specialRange.length);
    let minSpecial = specialRange[subRange][0];
    let maxSpecial = specialRange[subRange][1]; // *console.log(`looking at subset #${subRange} for ${minSpecial} thru ${maxSpecial}`);
    return getRandomNum(minSpecial, maxSpecial);
  }
} //returns NUM (ASCII code), chosen at random based parameter OBJECT CharType 

function getRandomPassword(length){
  let randomizedPassword="";
  for(let i = 0;i<length;i++){
    let randNumASCII = chooseChar(chooseType(selectedTypes)); // *console.log(`we pulled ascii code ${randNumASCII}`);
    let randCharASCII= getASCII(randNumASCII); // *console.log(`and converted it to "${randCharASCII}" character`);
    randomizedPassword += randCharASCII;
  }
  return randomizedPassword;
}// returns STRING of size parameter NUM length



/* Backlog of Acceptance Criteria
* WHEN the password is generated
* - THEN the password is either displayed in an //! alert or written to the page
*/

/* References:
* Newline Char <https://www.baeldung.com/java-string-newline> worked in js as well
* prompts <https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt>
* interval notation <https://www.math.utah.edu/online/1010/intervals/#:~:text=The%20notation%20may%20be%20a,round%20parentheses%20mean%20it's%20excluded.>
* random <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random>
* ascii <https://www.w3schools.com/charsets/ref_html_ascii.asp>
* class <https://www.w3schools.com/js/js_classes.asp>; VS code quickfixed my code about how function can be overridden, so it auto gen class
* 
*/