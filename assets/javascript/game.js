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
            crystalSecond = Math.floor(Math.random()*20 +1);
            crystalThird = Math.floor(Math.random()*20 +1);
            crystalFourth = Math.floor(Math.random()*20 +1);
            userScore = userScore + crystalFirst;
            $("#totalScore").text(crystalFirst);
            // console.log(userScore);
            // console.log(crystalFirst);
        }
        else{
            userScore = userScore + crystalFirst;
            console.log(crystalFirst);
            if(userScore<randomNumber){
                $("#totalScore").text(userScore);  
            }
            else if(userScore == randomNumber){
                alert("You Win!");
                randomNumber = Math.floor((Math.random()*71) +30);
                $("#randomNumberDisplay").text(randomNumber);
                wins = wins + 1;
                $("#winsID").text("Wins: " + wins);
                userScore = 0;
                $("#totalScore").text(userScore);
                crystalFirst = Math.floor(Math.random()*20 +1);
                crystalSecond = Math.floor(Math.random()*20 +1);
                crystalThird = Math.floor(Math.random()*20 +1);
                crystalFourth = Math.floor(Math.random()*20 +1);
            }
            else{
                alert("You Lose!");
                randomNumber = Math.floor((Math.random()*71) +30);
                $("#randomNumberDisplay").text(randomNumber);
                losses = losses + 1;
                $("#lossesID").text("Losses: " + losses);
                userScore = 0;
                $("#totalScore").text(userScore);
                crystalFirst = Math.floor(Math.random()*20 +1);
                crystalSecond = Math.floor(Math.random()*20 +1);
                crystalThird = Math.floor(Math.random()*20 +1);
                crystalFourth = Math.floor(Math.random()*20 +1);
            };
            // console.log(userScore);
            // console.log(crystalFirst);
        };
    });
    $("#crystal_2").click(function(){
        console.log("2Clicked");
        if(crystalSecond==null){
            crystalFirst = Math.floor(Math.random()*20 +1);
            crystalSecond = Math.floor(Math.random()*20 +1);
            crystalThird = Math.floor(Math.random()*20 +1);
            crystalFourth = Math.floor(Math.random()*20 +1);
            userScore = userScore + crystalSecond;
            $("#totalScore").text(crystalSecond);
            console.log(userScore);
            console.log(crystalSecond);
        }
        else{
            userScore = userScore + crystalSecond;
            if(userScore<randomNumber){
                $("#totalScore").text(userScore);  
                console.log(crystalSecond);
            }
            else if(userScore == randomNumber){
                alert("You Win!");
                randomNumber = Math.floor((Math.random()*71) +30);
                $("#randomNumberDisplay").text(randomNumber);
                wins = wins + 1;
                $("#winsID").text("Wins: " + wins);
                userScore = 0;
                $("#totalScore").text(userScore);
                crystalFirst = Math.floor(Math.random()*20 +1);
                crystalSecond = Math.floor(Math.random()*20 +1);
                crystalThird = Math.floor(Math.random()*20 +1);
                crystalFourth = Math.floor(Math.random()*20 +1);
            }
            else{
                alert("You Lose!");
                randomNumber = Math.floor((Math.random()*71) +30);
                $("#randomNumberDisplay").text(randomNumber);
                losses = losses + 1;
                $("#lossesID").text("Losses: " + losses);
                userScore = 0;
                $("#totalScore").text(userScore);
                crystalFirst = Math.floor(Math.random()*20 +1);
                crystalSecond = Math.floor(Math.random()*20 +1);
                crystalThird = Math.floor(Math.random()*20 +1);
                crystalFourth = Math.floor(Math.random()*20 +1);
            };
        };
    });
    $("#crystal_3").click(function(){
        console.log("3Clicked");
        if(crystalThird==null){
            crystalFirst = Math.floor(Math.random()*20 +1);
            crystalSecond = Math.floor(Math.random()*20 +1);
            crystalThird = Math.floor(Math.random()*20 +1);
            crystalFourth = Math.floor(Math.random()*20 +1);
            userScore = userScore + crystalThird;
            $("#totalScore").text(crystalThird);
            console.log(userScore);
            console.log(crystalThird);
        }
        else{
            userScore = userScore + crystalThird;
            if(userScore<randomNumber){
                $("#totalScore").text(userScore); 
                console.log(crystalThird); 
            }
            else if(userScore == randomNumber){
                alert("You Win!");
                randomNumber = Math.floor((Math.random()*71) +30);
                $("#randomNumberDisplay").text(randomNumber);
                wins = wins + 1;
                $("#winsID").text("Wins: " + wins);
                userScore = 0;
                $("#totalScore").text(userScore);
                crystalFirst = Math.floor(Math.random()*20 +1);
                crystalSecond = Math.floor(Math.random()*20 +1);
                crystalThird = Math.floor(Math.random()*20 +1);
                crystalFourth = Math.floor(Math.random()*20 +1);
            }
            else{
                alert("You Lose!");
                randomNumber = Math.floor((Math.random()*71) +30);
                $("#randomNumberDisplay").text(randomNumber);
                losses = losses + 1;
                $("#lossesID").text("Losses: " + losses);
                userScore = 0;
                $("#totalScore").text(userScore);
                crystalFirst = Math.floor(Math.random()*20 +1);
                crystalSecond = Math.floor(Math.random()*20 +1);
                crystalThird = Math.floor(Math.random()*20 +1);
                crystalFourth = Math.floor(Math.random()*20 +1);
            };
        };
    });
    $("#crystal_4").click(function(){
        console.log("4Clicked");
        if(crystalFourth==null){
            crystalFirst = Math.floor(Math.random()*20 +1);
            crystalSecond = Math.floor(Math.random()*20 +1);
            crystalThird = Math.floor(Math.random()*20 +1);
            crystalFourth = Math.floor(Math.random()*20 +1);
            userScore = userScore + crystalFourth;
            $("#totalScore").text(crystalFourth);
            console.log(userScore);
            console.log(crystalFourth);
        }
        else{
            userScore = userScore + crystalFourth;
            if(userScore<randomNumber){
                $("#totalScore").text(userScore);  
                console.log(crystalFourth);
            }
            else if(userScore == randomNumber){
                alert("You Win!");
                randomNumber = Math.floor((Math.random()*71) +30);
                $("#randomNumberDisplay").text(randomNumber);
                wins = wins + 1;
                $("#winsID").text("Wins: " + wins);
                userScore = 0;
                $("#totalScore").text(userScore);
                crystalFirst = Math.floor(Math.random()*20 +1);
                crystalSecond = Math.floor(Math.random()*20 +1);
                crystalThird = Math.floor(Math.random()*20 +1);
                crystalFourth = Math.floor(Math.random()*20 +1);
            }
            else{
                alert("You Lose!");
                randomNumber = Math.floor((Math.random()*71) +30);
                $("#randomNumberDisplay").text(randomNumber);
                losses = losses + 1;
                $("#lossesID").text("Losses: " + losses);
                userScore = 0;
                $("#totalScore").text(userScore);
                crystalFirst = Math.floor(Math.random()*20 +1);
                crystalSecond = Math.floor(Math.random()*20 +1);
                crystalThird = Math.floor(Math.random()*20 +1);
                crystalFourth = Math.floor(Math.random()*20 +1);
            };
        };
    });
});

