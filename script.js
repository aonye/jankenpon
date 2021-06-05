//prompt user to enter choice of either R, P or S using prompt.
function playerSelection(selection){

    let inputVal = selection;
    let originalVal = inputVal;

    inputVal = inputVal.toLowerCase();
    inputVal = inputVal.split('');
    inputVal[0] = inputVal[0].toUpperCase();
    inputVal = inputVal.join('');

    //console.log(inputVal, originalVal);

    //error checking with recursion
    if (!(inputVal=='Rock' || inputVal=='Paper' || inputVal=='Scissors')){
            alert("Error, you have entered: \"" + originalVal + "\", an incorrect option. Please try again");
            return playerSelection();
    }
    else {
      return inputVal;
    }
}
//make a function for the computer AI. It generates either RPS randomly.
function computerPlay() {
    let numberVal = Math.floor(Math.random() * 3); //working as intended
    if (numberVal===0){ //0 will be Rock
        return "Rock";
    }
    else if (numberVal===1){
        return "Paper";
    }
    else if (numberVal===2){
        return "Scissors";
    }
    else {
        console.log("Never print this");
    }
}

//play one round and return winner as a string
function playGame(playerSelection, computerPlay){

    //console.log(playerSelection, computerPlay);
    //alert("Computer has selected: " + computerPlay + ".");

    if (playerSelection===computerPlay){ //check for draw 
        return "Computer has also selected " + playerSelection + ". This round is a draw.";
    }
    else if (playerSelection==="Rock"&&computerPlay==="Scissors") {
        return "You win this round. Rock beats Scissors.";
    }
    else if (playerSelection==="Rock" && computerPlay==="Paper"){
        return "You lose this round. Paper beats Rock.";
    }
    else if (playerSelection==="Paper" && computerPlay==="Rock"){
        return "You win this round. Paper beats Rock.";
    }
    else if (playerSelection==="Paper" && computerPlay==="Scissors"){
        return "You lose this round. Scissors beats Paper.";
    }
    else if (playerSelection==="Scissors" && computerPlay==="Paper"){
        return "You win this round. Scissors beats Paper.";
    }
    else if (playerSelection==="Scissors" && computerPlay==="Rock"){
        return "You lose this round. Rock beats Scissors.";
    }
    else {
        return "Never print this message";
    }
}

function game(result){
    let tempStr = result;
    let match = tempStr.indexOf("draw");
    if (match==-1){//if not a draw
        match = tempStr.indexOf("win");
        if (match==-1){ //if not a win, increment computer
            computerCount+=1;
        }
        else { //win for you
            count+=1;
        }
    }
    console.log(count, computerCount);
    if (firstRound) {
        //check for first round
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        div.classList.add('resultdiv');
        div.setAttribute('style', 'white-space: pre-line;');
        div.textContent = result + '\n\n' + "Your score: " + count + ". " + 
        "Computer score: " + computerCount + ".";
        container.append(div);
        firstRound = false;
    }
    if (count===5) {
        result = "You win!"
        displayResults(result);
        makePlayAgainButton();
    }
    else if (computerCount===5){
        result = "You lose. Better luck next time."
        displayResults(result);
        makePlayAgainButton();
    }
    else {
        displayResults(result);
    }
}

const buttons = document.querySelectorAll('button');
let count = 0;
let computerCount = 0;
let firstRound = true;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (count===5 || computerCount ===5 ) {
            alert("ERROR, game is over. Please refresh page or click play again");
        }
        else {
            result = playGame(playerSelection(button.id), computerPlay());
            game(result);
        }
    });
});

function makePlayAgainButton(){
    const container = document.querySelector('.container');
    const button = document.createElement('button');
    button.textContent = "Play again";
    button.addEventListener('click', () => { refreshPage() });

    const div = document.createElement('div');
    const lineBreak = document.createElement('br');
    div.appendChild(lineBreak);
    
    container.append(div);
    container.append(button);
}

function displayResults(result){
    const resultDiv = document.querySelector('.resultdiv');
    resultDiv.textContent = result + '\n\n' + "Your score: " + count + ". " + 
    "Computer score: " + computerCount + ".";
}

function refreshPage(){
    window.location.reload();
} 