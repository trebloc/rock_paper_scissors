var testing = 99;

/*document.getElementById('rock').onclick = button;
document.getElementById('paper').onclick = button;
document.getElementById('scissors').onclick = button;

function button() {
	console.log(this.id + " clicked")
}*/

document.getElementById('rock').onclick = throwRock;
document.getElementById('paper').onclick = throwPaper;
document.getElementById('scissors').onclick = throwScissors;

var humanScore = 0;
var computerScore = 0;

function throwRock() {
	console.log(this.id + " clicked");	
	playGame('rock');
}

function throwPaper() {
	console.log(this.id + " clicked");	
	playGame('paper');
}

function throwScissors() {
	console.log(this.id + " clicked");	
	playGame('scissors');
}			

function getRobotsThrow() {
	var botThrowNumber = Math.floor(Math.random() * 3);
	//turn number into rock, paper or scissors string
	if (botThrowNumber == 0) {
		return 'rock';
	} else if (botThrowNumber == 1) {
		return 'paper';
	} else if (botThrowNumber == 2) {
		return 'scissors';
	}
}

function getGameOutCome(playerThrow, botThrow) {
	if (botThrow===playerThrow) {
		return 'tie';
	}

	if (playerThrow === 'rock') { 
		if (botThrow === 'paper') {
			return 'lose'; 
		}
		else if (botThrow === 'scissors') {
			return 'win';
		}
	}

	if (playerThrow === 'paper') {
		if (botThrow === 'scissors') {
			return 'lose'; 
		}
		else if (botThrow === 'rock') {
			return 'win';
		}
	}

	if (playerThrow === 'scissors') {
		if (botThrow === 'rock') {
			return 'lose';
		}
		else if (botThrow === 'paper') {
			return 'win';
		}
	}
}

function updateScore (outcome) {
	if (outcome === 'win') {
		humanScore = humanScore + 1;
	}
	if (outcome === 'lose') {
		computerScore = computerScore +1;
	}
}

function updateScoreboard () {
	document.getElementById('humanScore').innerHTML = humanScore;
	document.getElementById('computerScore').innerHTML = computerScore;
}

function updateTeaser (outcome, playerThrow, botThrow) {
	var statusText = 'You threw ' + playerThrow + '. ';
	statusText += 'Bot threw ' + botThrow + '. ';
	statusText += 'You ' + outcome + '.';

	document.getElementById('status').innerHTML = statusText;
} 


function playGame(playerThrow) {
	var botThrow = getRobotsThrow();
	console.log('the botThrow is ' + botThrow);
	var outcome = getGameOutCome(playerThrow, botThrow);
	console.log('the outcome was ' + outcome);
	updateScore(outcome);
	console.log('humanScore ' + humanScore);
	console.log('computerScore ' + computerScore);
	updateScoreboard();
	updateTeaser(outcome, playerThrow, botThrow);
}



