var pOneWins = 0;
var pTwoWins = 0;

function initialScreen() {
    $(".name").html("<form id='name-form'><input type='text' id='name-input' placeholder='Name'><input id='add-name' type='submit' value='Submit'></form>");
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