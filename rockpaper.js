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
	console.log(choices[randomNumber]);
	return choices[randomNumber];
}
setTimeout(function() {},3000);
function convertToWord(letter){

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
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserworld}beats ${convertToWord(computerChoice)}${smallcompworld}.You Win!`;
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
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserworld}loses ${convertToWord(computerChoice)}${smallcompworld}.You Lost!`;
	userChoice_div.classList.add('red-glow');
	setTimeout(()=> userChoice_div.classList.remove('red-glow'),500);
}
function draw(userChoice,computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	const smallUserworld = "user".fontsize(3).sub();
	const smallcompworld = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserworld}equals${convertToWord(computerChoice)}${smallcompworld}.Its a draw!`;
	userChoice_div.classList.add('grey-glow');
	setTimeout(()=> userChoice_div.classList.remove('grey-glow'),500);
}

function game(userChoice)
{
	const compterChoice = getComputerChoice();
	switch(userChoice+compterChoice)
	{
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,compterChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,compterChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,compterChoice);
			break;	
}
}

function main(){
	rock_div.addEventListener('click',()=>game("r"));
	paper_div.addEventListener('click',()=>game("p"));
	scissors_div.addEventListener('click',()=>game("s"));
}
 