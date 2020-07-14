/*Crashing the DOM*/
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-border");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();
function getComputerChoice(){
	const choices =['r','p','s'];
	const randomNumber= Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
setTimeout(function() {},3000);
function convertToWord(){	
	if(letter ==="r") return "ROCK";
	if(letter ==="p") return "PAPER";
	return "SCISSORS";
}
function win(userChoice,computerChoice){
	const smallUserworld = "user".fontsize(3).sub();
	const smallcompworld = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWorld}beats ${convertToWord(computerChoice)}${smallCompWorld}.You Win!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'),500);
}
function lose(userChoice,computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	const smallUserworld = "user".fontsize(3).sub();
	const smallcompworld = "comp".fontsize(3).sub();
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWorld}loses ${convertToWord(computerChoice)}${smallCompWorld}.You Lost!`;
	userChoice_div.classList.add('red-glow');
	setTimeout(()=> userChoice_div.classList.remove('green-glow'),500);
}
function draw(userChoice,computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	const smallUserworld = "user".fontsize(3).sub();
	const smallcompworld = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWorld}equals${convertToWord(computerChoice)}${smallCompWorld}.Its a draw!`;
	userChoice_div.classList.add('grey-glow');
	setTimeout(()=> userChoice_div.classList.remove('green-glow'),500);
}

function game(userChoice){
	const compterChoice = getComputerChoice();
	switch(userChoice+compterChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,ComputerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,ComputerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,ComputerChoice);
			break;	
}}

function main(){
	rock_div.addEventListener('Click',()=>game("r"));
	paper_div.addEventListener('Click',()=>game("p"));
	scissors_div.addEventListener('Click',()=>game("s"));
}
 