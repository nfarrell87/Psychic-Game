//computer picks a random letter from alphabet

//global variables
let wins = 0
let loss = 0
let guess = 9
let guesses = []

//create a generated array of the alphabet and chose a random letter
//generates random number between 97-122
let randomLetter = function(){
return Math.floor(Math.random() * 26) + 97  
}
//assigns random number to a letter with ASCII
let compGuess = String.fromCharCode(randomLetter())

//if user pushes a key, it will run the following function:
document.onkeyup = function() {
    //assigns variable userGuess to whichever key the user is pressing and converts it to lowercase
    var userGuess = event.key.toLowerCase();

    //only run this code if userGuess = compGuess
    if (userGuess === compGuess) {
        //add win to current wins
        wins++
        //updates the HTML element with id "win" to reflect how many wins user currently has
        document.getElementById("win").innerHTML = "Wins: " + wins
        //reset guesses left to 9
        guess = 9
        //clear guesses from array
        guesses = []
    }
    // only run this code if userGuess does NOT equal compGuess
    if (userGuess !== compGuess) {
        //subtract 1 from guesses remaining 
        guess--
        //add which key user pressed into guesses array
        guesses.push(userGuess)
        //update HTML element to display keys user pressed back to user
        document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guesses.join(", ")
        //update guesses remaining HTML
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guess
    }
        //if guesses remaining reaches 0 run this code.
     if (guess === 0) {
        //sutract 1 from guesses remaining
        loss++
        //update HTML element to add a loss to users current score
        document.getElementById("loss").innerHTML = "Losses: " + loss
        //clear guesses from array
        guesses = []
        //update HTML element to reflect cleared guesses
        document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guesses
        //reset guesses left
        guess = 9

    }
}
 
