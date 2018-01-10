var pOneSelection;
var pTwoSelection;
var pOneWins = 0;
var pOneTies = 0;
var pOneLosses = 0;
var pTwoWins = 0;
var pTwoTies = 0;
var pTwoLosses = 0;
var database = firebase.database();

function nameForm() {
    $(".name").html("<form id='name-form'><input type='text' id='name-input' placeholder='Name'><input id='add-name' type='submit' value='Submit'></form>");
};

function initialScreen() {
    nameForm();
    $("#player-one").html("<h4>Player 1</h4>");
    $("#player-two").html("<h4>Player 2</h4>");
};

function rpsOptions() {
    $(".rps").html("<div><h6>rock</h6></div><div><h6>paper</h6></div><div><h6>scissors</h6></div>")
}

function rpsRecord() {
    $(".results-one").html(`<h6>wins: ${pOneWins}  losses: ${pTwoWins}`);
    $(".results-two").html(`<h6>wins: ${pTwoWins}  losses: ${pOneWins}`);

}

initialScreen();
rpsOptions();
rpsRecord();

database.ref().on("value", function (snapshot) {

});

//TAKE PLAYER NAME INPUT
//store name entry as player one in firebase
//on form submit:
//if (no names in database) {store name as player one}
//database.ref().set()
//display form to allow second name
//nameForm();
//if (one name in database) {store name as player two}
//remove form 
//trigger game

//GAME
//run rpsOptions() for player one
//run "other player is picking function" for player two
//on click event, save player one choice to firebase
//run "other player is picking function" for player one
//display player one selection (image) to player one only
//run rpsOptions() for player two
//on click event, save player two choice to firebase
//display player two selection (image) for player two


if ((pOneSelection === "r") && (pTwoSelection === "s")) {
    pOneWins++;
    pTwoLosses++;
} else if ((pOneSelection === "r") && (pTwoSelection === "p")) {
    pOneLosses++;
    pTwoWins++;
} else if ((pOneSelection === "s") && (pTwoSelection === "r")) {
    pOneLosses++;
    pTwoWins++;
} else if ((pOneSelection === "s") && (pTwoSelection === "p")) {
    pOneWins++;
    pTwoLosses++;
} else if ((pOneSelection === "p") && (pTwoSelection === "r")) {
    pOneWins++;
    pTwoLosses++;
} else if ((pOneSelection === "p") && (pTwoSelection === "s")) {
    pOneWins++;
    pTwoLosses++;
} else if (pOneSelection === pTwoSelection) {
    pOneTies++;
    pTwoTies++;
};
//print wins, losses and ties to the screen
//pause on result screen
//
//reset game

//Player exit
//on page exit, remove player from gameplay slot
//run nameForm() to allow a new player to join.