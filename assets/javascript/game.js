//Pseudo code list:
//Four crystal images will appear near the bottom of the page.
//Each crystal image will be assigned a random number (between 1 and 12), and the numbers are hidden.
//Another random number (between 19 and 120) will display at the start of the game.
//The player will click on crystal in order to try to match the intial random number shown.
//When a crystal is clicked, that random number will be added to the original random number.
//The player's displayed score will contain the sum all clicks on any crystals.
//To win the game the player's score must exactly match the initial random number.
//If the player's score is greater than the initial random number, the player loses.
//With a win or a loss, the game restarts.
//The restart should generate a new random number, the crystals will have new random values,
//and the player's score will reset to zero.
//The player's wins and losses will remain displayed as games continue, so a refresh should not be used to restart.


//Here multiple variables are initialized.
//var randomNum = 0;      //random number to match
var wins = 0;           //counter for wins
var losses = 0;         //counter for losses
var playersScore = 0;   //the sum of the players "clicks" on crystals
var crystal1_num = 0;   //the random number assigned to crystal 1
var crystal2_num = 0;   //the random number assigned to crystal 2
var crystal3_num = 0;   //the random number assigned to crystal 3
var crystal4_num = 0;   //the random number assigned to crystal 4


$(document).ready(function () {

    //This calls the function that will begin the game.
    beginGame();

    //This function gets inclusive random numbers, within the specified ranges, for the number the player is to match and for the crystals.
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    //This function is called when the game is to begin.
    //It sets the player's score to zero and sets all of the random numbers that will be assigned.
    function beginGame() {
        playersScore = 0;
        $("#playersScore").text(playersScore);

        randomNum = getRandomIntInclusive(9, 120);
        $("#random_num").text(randomNum);

        crystal1_num = getRandomIntInclusive(1, 12);
        $("#crystal1").text(crystal1_num);

        crystal2_num = getRandomIntInclusive(1, 12);
        $("#crystal2").text(crystal2_num);

        crystal3_num = getRandomIntInclusive(1, 12);
        $("#crystal3").text(crystal3_num);

        crystal4_num = getRandomIntInclusive(1, 12);
        $("#crystal4").text(crystal4_num);
    }

    //function to calculate wins and losses
    function results() {

        //if win
        if (randomNum === playersScore) {
            wins++;
            $("#wins").text(wins);
            alert("You won! Play again");
            beginGame();
        }

        //if loss
        else if (playersScore > randomNum) {
            losses++;
            $("#losses").text(losses);
            alert("You lost. Play again");
            beginGame();
        }
    }

    //This section takes the number from each crystal clicked on and adds that number to the player's score.
    //The results() function is called in this coding so that the wins and losses will be updated.
    $("#crystal1").on("click", function () {
        playersScore = ((playersScore) + (crystal1_num))
        $("#playersScore").text(playersScore);
        results();
    });

    $("#crystal2").on("click", function () {
        playersScore = ((playersScore) + (crystal2_num))
        $("#playersScore").text(playersScore);
        results();
    });

    $("#crystal3").on("click", function () {
        playersScore = ((playersScore) + (crystal3_num))
        $("#playersScore").text(playersScore);
        results();
    });

    $("#crystal4").on("click", function () {
        playersScore = ((playersScore) + (crystal4_num))
        $("#playersScore").text(playersScore);
        results();
    });
});