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
function generatePassword() {
  // TODO: "Prompt" for length

  // TODO: "Prompt" for character types to include at least one of the following: [lowercase, uppercase, numeric, and/or special characters]

  // TODO: "Return" the "string" for new password


}

/*
WHEN all prompts are answered
 - THEN a password is generated that matches the selected criteria

WHEN the password is generated
 - THEN the password is either displayed in an alert or written to the page

*/
