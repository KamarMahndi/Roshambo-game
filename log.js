let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userpara = document.querySelector("#user-score");
const compara = document.querySelector("#com-score");

const gencomchoice = () => {
	const options = ["rock","paper","scissors"];
	 const randIdx = Math.floor(Math.random() * 3);
	 return options[randIdx];
};
const drawgame = () => {
	console.log("game draw");
	msg.innerText = "Game Draw";
	msg.style.backgroundColor = "purple";
};
const showwiner = (userwin,userchoice,compchoice) =>{
	if (userwin) {
		userscore++;
		userpara.innerText = userscore;
		console.log("you Win!");
		msg.innerText = `You Win! your ${userchoice} beats ${compchoice}`;
		msg.style.backgroundColor = "green";
	}else{
		comscore ++;
		compara.innerText = comscore;

		console.log("you lose!");
		msg.innerText =`You lose! ${compchoice} beats your ${userchoice}`;
		msg.style.backgroundColor = "red";
	}
}


const playgame = (userchoice) =>{
	console.log(" user choice = ",userchoice);
	const compchoice = gencomchoice();
	console.log("comp choice =",compchoice);
	if (userchoice===compchoice) {
		drawgame();

	}else{
		let userwin = true;
		if (userchoice==="rock") {
			userwin = compchoice ==="paper"?false:true;
		}else if (userchoice==="paper") {
			userwin = compchoice==="scissors"?false:true;
		}else{
			userwin = compchoice==="rock"?false:true;
		}
		showwiner(userwin,userchoice,compchoice);
	}
};
choices.forEach((choice) =>{
	choice.addEventListener("click",() =>{
		const userchoice = choice.getAttribute("id");
		playgame(userchoice);
	});
});