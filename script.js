//prompt user to enter choice of either R, P or S using prompt.
function playerSelection(){

    let inputVal = window.prompt("Please enter Rock, Paper or Scissors: ", "e.g. rock (case insensitive)");
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

function game(){
    let count=0;
    let computerCount=0;
    while(count<5 && computerCount<5){
        let tempStr = playGame(playerSelection(), computerPlay());
        console.log(tempStr);
        let result = tempStr.indexOf("draw");
        if (result==-1){//if not a draw
            result = tempStr.indexOf("win");
            if (result==-1){ //if not a win, increment computer
                computerCount+=1;
            }
            else { //win for you
                count+=1;
            }
        }
        else { //if it is a draw
            continue;
        }
    }
    console.log("Final Score: You: " + count + ", The Computer: " + computerCount + ".");
    if (count===5){
        console.log("You win! Great job.");
        return "You win! Great job.";
    }
    else {
        console.log("You lost. Better try next time.");
        return "You lost. Better try next time.";
    }
}

game();