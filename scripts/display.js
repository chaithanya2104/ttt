var gameBoard = [0,1,2,3,4,5,6,7,8];
var gameBoardDisplayIDs = ["zero","one","two","three","four","five","six","seven","eight"];


function makePlay(divID, n){
    document.getElementById(divID).style.backgroundImage = "url(./images/X.jpg)" ;
    gameBoard[n]="X";
    cpuPlay();
}

// if(isWinner()){
//     document.getElementById("divDeclareWinner").innerHTML="Player Wins";
// }

// if (isBoardfull()){
//     document.getElementById("divDeclareWinner").innerHTML="Draw Game";
//     return;
// }

// if(isWinner()){
//     document.getElementById("divDeclareWinner").innerHTML="CPU Wins";
// }
// if (isBoardfull()){
//     document.getElementById("divDeclareWinner").innerHTML="Draw Game";
//     return;
// }


function cpuPlay(){
    
    do{
        var randNum=Math.round(Math.random()*7+1,0);   
        console.log("random num is: "+ randNum);
    }while (isNaN(gameBoard[randNum]));
    gameBoard[randNum]="O";

    // document.getElementById(gameBoardDisplayIDs[randNum]).style.backgroundImage = "url(./images/O.jpg)";

    let cpuSelectedSquare = document.getElementById(gameBoardDisplayIDs[randNum]);
    cpuSelectedSquare.style.backgroundImage = "url(./images/O.jpg)";

}

// function isWinner(){
//     // rowWise
//     if((gameBoard[0]==gameBoard[1]&& gameBoard[0]==gameBoard[2])||(gameBoard[3]==gameBoard[4]&& gameBoard[3]==gameBoard[5])|| (gameBoard[6]==gameBoard[7]&& gameBoard[6]==gameBoard[8]))
//     return true;
//     //columnwise
//     else if((gameBoard[0]==gameBoard[3]&& gameBoard[0]==gameBoard[6])||(gameBoard[1]==gameBoard[4]&& gameBoard[1]==gameBoard[7])|| (gameBoard[2]==gameBoard[5]&& gameBoard[2]==gameBoard[8]))
//     return true;
//     //diagonally
//     else if (gameBoard[0]==gameBoard[4]&& gameBoard[0]==gameBoard[8]||(gameBoard[2]==gameBoard[4]&& gameBoard[2]==gameBoard[6]))
//     return true;
//     else
//     return false;
// }

// function isBoardfull(){
//     for (var i=0;i<=gameBoard.length;i++){
//         if (gameBoard[i]=="X" ||gameBoard[i]=="O") return false;
//         return true;
//     }
// }


function newGame(){

}
