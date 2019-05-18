// * The player will be shown a random number at the start of the game.

//Generate a random number and store in a variable 
//
var randomNumber = Math.floor((Math.random()*71) +30);
console.log(randomNumber);

// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

var wins = 0;
var losses = 0;
var userScore = 0;
var crystalFirst = null;
var crystalSecond = null;
var crystalThird = null;
var crystalFourth = null;

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.



//global variables here 
//crystals, wins loses, random number 



$(document).ready(function(){

    $("#randomNumberDisplay").text(randomNumber);

    console.log("Testing 123");

    $("#crystal_1").click(function(){
        console.log("1Clicked");
        if(crystalFirst==null){
            crystalFirst = Math.floor(Math.random()*20 +1);
            userScore = userScore + crystalFirst;
            $("#totalScore").text(crystalFirst);
            // console.log(userScore);
            // console.log(crystalFirst);
        }
        else{
            userScore = userScore + crystalFirst;
            $("#totalScore").text(userScore);
            // console.log(userScore);
            // console.log(crystalFirst);
        };
    });
    $("#crystal_2").click(function(){
        console.log("2Clicked");
        if(crystalSecond==null){
            crystalSecond = Math.floor(Math.random()*20 +1);
            userScore = userScore + crystalSecond;
            $("#totalScore").text(crystalSecond);
            console.log(userScore);
            console.log(crystalSecond);
        }
        else{
            userScore = userScore + crystalSecond;
            $("#totalScore").text(userScore);
            console.log(userScore);
            console.log(crystalSecond);
        };
    });
    $("#crystal_3").click(function(){
        console.log("3Clicked");
        if(crystalThird==null){
            crystalThird = Math.floor(Math.random()*20 +1);
            userScore = userScore + crystalThird;
            $("#totalScore").text(crystalThird);
            console.log(userScore);
            console.log(crystalThird);
        }
        else{
            userScore = userScore + crystalThird;
            $("#totalScore").text(userScore);
            console.log(userScore);
            console.log(crystalThird);
        };
    });
    $("#crystal_4").click(function(){
        console.log("4Clicked");
        if(crystalFourth==null){
            crystalFourth = Math.floor(Math.random()*20 +1);
            userScore = userScore + crystalFourth;
            $("#totalScore").text(crystalFourth);
            console.log(userScore);
            console.log(crystalFourth);
        }
        else{
            userScore = userScore + crystalFourth;
            $("#totalScore").text(userScore);
            console.log(userScore);
            console.log(crystalFourth);
        };
    });
});

