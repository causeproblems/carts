let userScore = 0;
let computerScore = 0;
const winningScore = 3;
let images =[
{src: '10t.jpg', value: 10},
{src: '7h.jpg', value: 7},
{src: '8h.jpg', value: 8},
{src: 'ad.jpg', value: 11},
{src: '7t.jpg', value: 7},
{src: 'qt.jpg', value: 3},
{src: '8t.jpg', value: 8},
{src: '6h.jpg', value: 6},
{src: 'js.jpg', value: 2},
{src: 'kt.jpg', value: 4},
{src: '9t.jpg', value: 9},
{src: '6t.jpg', value: 6}];

function startGame() {
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Будь ласка, введіть ваше ім'я.");
        return;
    }

    document.getElementById("usernameDisplay").innerText = username;
    document.getElementById("gameArea").style.display = "block";
    document.querySelector(".input-container").style.display = "none";
}

function playRound() {
    const userIndex = Math.floor(Math.random() * images.length); 
	const userImage = images[userIndex];
	const computerIndex = Math.floor(Math.random() * images.length); 
	const computerImage = images[computerIndex];
	
	let containerUser = document.getElementById('image-containerUser'); 
	containerUser.innerHTML = '';
	let imgUser = document.createElement('img'); 
	imgUser.src = userImage.src; 
	imgUser.alt = 'Карта'; 
	imgUser.width = 200; 
	imgUser.height = 300;
	containerUser.appendChild(imgUser);
	
	let containerComputer = document.getElementById('image-containerComputer'); 
	containerComputer.innerHTML = '';
	let imgComputer = document.createElement('img'); 
	imgComputer.src = computerImage.src; 
	imgComputer.alt = 'Карта'; 
	imgComputer.width = 200; 
	imgComputer.height = 300;
	containerComputer.appendChild(imgComputer);
	

    let resultMessage;

    if (userImage.value > computerImage.value) {
        userScore++;
        resultMessage = "Ви виграли цей раунд!";
    } else if (userImage.value < computerImage.value) {
        computerScore++;
        resultMessage = "Комп'ютер виграв цей раунд.";
    } else {
        resultMessage = "Цей раунд закінчився внічию.";
    }

    updateScoreBoard();
    document.getElementById("result").innerText = resultMessage;

    if (userScore === winningScore || computerScore === winningScore) {
        declareWinner();
    }
}

function updateScoreBoard() {
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
}

function declareWinner() {
    const resultDiv = document.getElementById("result");
    if (userScore === winningScore) {
        resultDiv.innerText = "Ви виграли гру!";
    } else {
        resultDiv.innerText = "Комп'ютер виграв гру.";
    }

    document.querySelector("button[onclick='playRound()']").disabled = true;
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Грати знову";
    playAgainButton.onclick = () => location.reload();
    document.querySelector(".container").appendChild(playAgainButton);
}
