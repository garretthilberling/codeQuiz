# codeQuiz

## Description
codeQuiz is an application where users engage in a timed quiz in which wrong answers deduct points from the timer and at the end you can store your name and score- the score being the remaining time left. The languages used to build this application are HTML, CSS, and most importantly, JavaScript.

<img src="./assets/images/application-screenshot.PNG?raw=true" width="1000">
The highscores screen completely changes visually to a retro video game inspired scoreboard (with an 8bit outerspace background) that displays usernames and scores ranked by highest score.

## Installation
No installation required, access the application at the live URL via this link: https://garretthilberling.github.io/codeQuiz/

## Usage
In the mock-up for this application it had an input field for the user to store their initials at the end of the quiz. I did things a little differently: I included the username (rather than initials) input field at the starter page instead. I also included a 'generate' button that creates a random username that combines a color, word, and number to create a unique username. If the user selects the 'Start Quiz' button and they have not generated or created a username, an alert will occur and they will not be able to progress until doing so. When the quiz begins users are presented with presented with a question and four answers. If they select an incorrect answer 'incorrect' will display in red text and 10 points will be subtracted from the timer. 'Correct' will display and both incorrect and correct results progress to the next page. Whatever number the timer is at when the final question is answered is what the player's score will be stored as. If the timer reaches 0 or all the questions are answered, the quiz will end and users will be taken to the scoreboard. Scores are stored in local storage and are ranked in order. On this page the user can either select the 'Try Again' button to take user back to the starter page, or the 'Clear Scoreboard' button to remove scores from the local storage and the page. The highscore page can also be accessed from the starter page and even during the quiz. When selected during the quiz I used if/else logic in the endQuiz function to prevent the user's score from being stored for obvious reasons.

## Credits
This project was created solely by Garrett Hilberling: https://github.com/garretthilberling
