/* 
This JS file contains the logic for our calculator.
Author: Sheena Shahangian
*/


/*
This function welcomes the user and prompts them for their 
name in order to provide a personalized welcome message.
*/
function welcomeUser() {
    // welcome visitor with an alert
    alert("Welcome to the Simple Calculator by Sheena!");

    // prompt the user for their name and save it
    let usersName = prompt("What is your name?");

    // if the name is not inputted, prompt again
    while (usersName.length < 1) {
        usersName = prompt("You didn't enter a name. What is your name?");
    }

    // welcome the user with their name now
    alert(`Welcome ${usersName}!`);
}


/* 
This function performs the calculation of adding 
the two numbers and then providing an alert with that 
sum value. 
*/
function addNumbers(numberOne, numberTwo) {
    // perform sum calculation and alert the user of the sum
    let sum = numberOne + numberTwo;
    alert(`The sum of your two numbers is: ${sum}`);

    // determine if the number is big or small and alert the 
    // user of that
    if (sum > 10) {
        // alert about it being a big number
        alert("That is a big number.");
    }
    else {
        // alert about it being a small number
        alert("That is a small number.");
    }
}


/*
This function is used to welcome the user, prompt them to 
enter their name and valid numbers, and calls the addNumbers() 
method that does the calculations and alerts about whether or 
not the sum is a big or small number.  This is where the main 
logic of the program exists.
*/
function calculatorRunner() {

    // create boolean to indicate that user wants to do 
    // another round of calculations, and set to true default
    let isCalculateAgain = true;


    // welcome messages, only displayed once per run
    welcomeUser();


    // while isCalculateAgain is true, the user wants to keep getting 
    // prompted to input more numbers and perform more calculations
    while (isCalculateAgain) {

        // ask user for their first number entry and save it to a variable
        let numberOne = parseInt(prompt("Please enter a first number: "));

        // if the number is not a valid numerical entry, prompt again on loop
        while (isNaN(numberOne)) {
            alert("Not a valid numerical entry, please try again: ");
            numberOne = parseInt(prompt("Please enter a first number: "));
        }
        
        // ask user for their second number entry and save it to a variable
        let numberTwo = parseInt(prompt("Please enter a second number: "));

        // if the number is not a valid numerical entry, prompt again on loop
        while (isNaN(numberTwo)) {
            alert("Not a valid numerical entry, please try again: ");
            numberTwo = parseInt(prompt("Please enter a second number: "));
        }

        // call the addNumbers() method to perform our calculations
        addNumbers(numberOne, numberTwo);


        // ask user if they want to add numbers again (play a new round)
        let playAgain = prompt("Do you want to add two numbers again? Type 'y' for yes " + 
        "or anything else for no.");

        // if user wants to play again, continue to next round
        if (playAgain.toLowerCase() === "y") {
            continue;
        }
        else {
            isCalculateAgain = false;
            alert("Thanks for using our program. We see you don't want to play again. Goodbye!");
        }
    }
}
