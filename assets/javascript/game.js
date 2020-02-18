//global variables

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;


//functions
var getRandom = function(min,max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}  
var startGame = function() {
}
targetScore = getRandom (34, 150);
//FInd all img's
$('img').each(function(index, element){
    $(element).attr('data-number', getRandom(1,10));
});

$("#currentScore").html(currentScore);
$("#targetScore").html(targetScore);


$("img").click(function(event) {
    console.log(currentScore)

    currentScore += +$(event.target).attr('data-number');
    console.log(currentScore)

    $("#currentScore").text(currentScore);

if (currentScore === targetScore) {
    alert ("You Win!");
    winCount++;
    $("#winCount").text(winCount);
    currentScore = 0 
    $('img').each(function(index, element){
        $(element).attr('data-number', getRandom(1,10));
    });
    targetScore = getRandom (45, 160);
    $("#currentScore").text(currentScore);
    $("#targetScore").text(targetScore);
    return;
}

if(currentScore > targetScore) {
    alert ("You lose!");
    lossCount++;
    $("#lossCount").text(lossCount);
    currentScore = 0 
    $('img').each(function(index, element){
        $(element).attr('data-number', getRandom(1,10));
    });
    targetScore = getRandom (34, 150);
    $("#currentScore").text(currentScore);
    $("#targetScore").text(targetScore);
}
});

startGame();