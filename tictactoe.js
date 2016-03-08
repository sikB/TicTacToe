// function aOne(){
// 	document.getElementById('xa1').style.visibility = "visible";
// }
// function aTwo(){
// 	document.getElementById('xa2').style.visibility = "visible";
// }
// function aThree(){
// 	document.getElementById('xa3').style.visibility = "visible";
// }
// function bOne(){
// 	document.getElementById('xb1.empty').style.visibility = "visible";
// }
// function bTwo(){
// 	document.getElementById('xb2.empty').style.visibility = "visible";
// }
// function bThree(){
// 	document.getElementById('xb3.empty').style.visibility = "visible";
// }
// function cOne(){
// 	document.getElementById('xc1.empty').style.visibility = "visible";
// }
// function cTwo(){
// 	document.getElementById('xc2.empty').style.visibility = "visible";
// }
// function cThree(){
// 	document.getElementById('xc3.empty').style.visibility = "visible";
// }

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

var whosTurn = 1;

function addSymbol(element){
	var gameHeader = document.getElementById('game-header')
	if (element.innerHTML == '') {
		gameHeader.className = '';
		if(whosTurn == 1){
			element.innerHTML = 'X';
			whosTurn = 2;
			gameHeader.innerHTML = "Its Player 2's turn";
			gameHeader.className = 'player2';}
			else{
				element.innerHTML = 'O';
				whosTurn = 1;
				gameHeader.innerHTML = "Its Player 1's turn";
			}
		}
	else{
		var gameHeader = document.getElementById('game-header')
		gameHeader.innerHTML = "This box is taken";
		gameHeader.className = "red";
	}
}



var squareWidth = document.getElementById('a1').clientWidth;
var squares = document.getElementsByClassName('squares');
for(i=0; i < a1.length; i++){
	squares[i].style.height = squareWidth + 'px';
}




	
	
	
	
	
	
	