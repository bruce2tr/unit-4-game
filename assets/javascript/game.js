// * The player will be shown a random number at the start of the game.

//Generate a randome number and store in a variable 
//
var randomNumber = Math.floor((Math.random()*100));
console.log(randomNumber);

// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 



//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.



//global variables here 
//crystals, wins loses, random number 



$(document).ready(function(){


    console.log("Testing 123");

    $("#crystal_1").click(function(){
        console.log("1Clicked")
    });
    $("#crystal_2").click(function(){
        console.log("2Clicked")
    });
    $("#crystal_3").click(function(){
        console.log("3Clicked")
    });
    $("#crystal_4").click(function(){
        console.log("4Clicked")
    });
});

