# Read Me - MET CS 601 Sheena Shahangian

To run this program, please open "calculator.html" in your browser. Rather than having an alert immediately pop up, I have created a styled landing page that introduces the program and tells the user how it works. There is a button that says "Let's Begin" that you can press to begin the program.

* The css folder contains the stylesheet, by the name of "styles.css".
* The multimedia folder contains a single image, that is my site's logo.
* The js folder contains my JavaScript file, by the name of "addition.js".
* The program can be run by accessing my "calculator.html" file and clicking "Let's Begin".


## GitHub

To view this project on GitHub, please visit this link: https://github.com/SheenaShahangian/CS601_HW3_Shahangian

The repository is public, however should you have any trouble accessing it, please do not hesitate to reach out to me. I can be reached at sheenas@bu.edu.


## Requested Elements

Once you click the "Let's Begin" button on "calculator.html", I have followed the instructions as requested. I do the following:

*  I use an alert to welcome the user. 
* I prompt the user to enter their name.
* I use that entered name to display a **personalized** welcome message on an alert.
* I prompt the user for their first number and validate. The prompt will loop until a valid input is provided.
* I prompt the user for their second number and validate. The prompt will loop until a valid input is provided.
* I call the addNumbers() function, which takes two numbers as arguments, and adds them together. It then alerts the user of the sum of those numbers. From there, I have used conditional logic to determine whether or not the number is a big one. If the number is greater than 10, I alert the user that the number is big. Otherwise, I alert the user that the number is small.
* The prompting of the numbers and calculations performed sit inside a while loop that will continue as long as the user wants to keep adding two numbers. The user can type in the word yes to continue or the word no to not continue. I accept different capitalizations of those words. For anything that is not those words, I assume the user intended to quit, so it has a similar result to typing no.

### Incorporation of Other Additional Elements - How I Went Above and Beyond

I've attempted to add some new features beyond the standard requirements listed in the rubric. These include: 
* Using CSS, I have styled the landing page that the user goes to, so they are welcomed to a pretty page, rather than immediately encountering an alert upon opening the page. Per my research and the professor's comment in class, it looks like alerts cannot be styled. Thus, I have not styled those.
* I have performed validation on the name the user inputs in the prompt, so that it won't accept no input or simple whitespace input (I have trimmed whitespace at the beginning and end of an input using trim()). However, I do want to accept non-letter names, as I see them more as usernames, where numbers are allowed.
* I have performed checks to ensure the input is a valid number. I originally had used the isNaN() method to do this, but per the recommendation in facilitation, I made an attempt at using regular expressions instead. The regular expression I used can be attributed to this source: https://newbedev.com/decimal-or-numeric-values-in-regular-expression-validation and was tested using the resource posted in the resources section in Blackboard.
* I have used the onclick event for the "Let's Begin" button to start the program. This triggers the calculatorRunner() method that contains the main logic of the program.
* I have tested my program in Google Chrome, Firefox, and Safari to ensure it works as expected in multiple browsers.
* Per the professor's recommendation, I have opted to use let rather than var for declaring my variables, as I wanted to experiment with having block level scope, which var does not offer.
* I have thoroughly commented all of my code, to make it easy to understand and come back to in the future.