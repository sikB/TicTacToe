var winners = [
['a1' ,'a2', 'a3'],
['b1' ,'b2', 'b3'],
['c1' ,'c2', 'c3'],
['a1' ,'b1', 'c1'],
['a2' ,'b2', 'c2'],
['a3' ,'b3', 'c3'],
['a1' ,'b2', 'c3'],
['a3' ,'b2', 'c1'],
];

var options = 
['a1','a2','a3',
'b1','b2','b3',
'c1','c2','c3'];

var playerOneMarkings = [];
var playerTwoMarkings = [];
var whosTurn = 1;

function computerChoice(){
	var computerHasntMoved = 1;
	while(computerHasntMoved){	
		var emptySquares = Math.floor(Math.random()*8) + 1;
		var cpuRand = options[emptySquares];
		if(whosTurn == 2){
			var cpuSquare = document.getElementById(cpuRand);
			if(cpuSquare.innerHTML == ""){
	 			cpuSquare.innerHTML = 'O';
	 			whosTurn = 1;
	 			computerHasntMoved = 0;
	 			playerTwoMarkings.push(cpuSquare.id);
			}
		}
	}

	checkWin();
 }



function addSymbol(element){
	var gameHeader = document.getElementById('game-header')
	if (element.innerHTML == '') {
		if(whosTurn == 1){
			element.innerHTML = 'X';
			whosTurn = 2;
			element.classList.remove('empty');
			element.classList.add('p1');
			playerOneMarkings.push(element.id);
			computerChoice();
			checkWin();
			}
		}
	else{
		gameHeader.innerHTML = "This box is taken";
		gameHeader.className = "red";
	}
	
}

function checkWin(){
	var rowCount = 0;
	var thisWinCombination;
	for(i=0; i < winners.length; i++){
		rowCount = 0;
		thisWinCombination = winners[i];
		for(j=0; j<thisWinCombination.length; j++){
			if(playerOneMarkings.indexOf(thisWinCombination[j]) > -1){
				rowCount++;}
		}

		if(rowCount === 3){
			gameOver(thisWinCombination);
			break;
		}
	}
	for(i=0; i < winners.length; i++){
	rowCount1 = 0;
	thisWinCombination = winners[i];
	for(j=0; j<thisWinCombination.length; j++){
		if(playerTwoMarkings.indexOf(thisWinCombination[j]) > -1){
			rowCount1++;}
			if(rowCount1 === 3){
				gameOver2(thisWinCombination);
				
			}
		}break;	
	}

}

function gameOver(combo){
	var gameHeader = document.getElementById('game-header');
	for(i=0; i<combo.length; i++){
		document.getElementById(combo[i]).classList.add('winner');
	}
	gameHeader.innerHTML = 'Player One, won the game!';
	
}

function gameOver2(combo){
	var gameHeader = document.getElementById('game-header');
	for(i=0; i<combo.length; i++){
		document.getElementById(combo[i]).classList.add('winner');
	}
	gameHeader.innerHTML = 'Player Two, won the game!';
	
}


var squareWidth = document.getElementById('a1').clientWidth;
var squares = document.getElementsByClassName('squares');
for(i=0; i < a1.length; i++){
	squares[i].style.height = squareWidth + 'px';
}
